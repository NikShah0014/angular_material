import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, debounceTime, distinctUntilChanged, finalize, from, of, switchMap, tap, throwError } from 'rxjs';
import Tesseract from 'tesseract.js';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: 'AIzaSyBF7ZiNHVC2RFBQg9LvR-PLZnjR7uOjvLQ' });

@Component({
  selector: 'app-smart-prompt-assistant',
  standalone: false,
  templateUrl: './smart-prompt-assistant.component.html',
  styleUrl: './smart-prompt-assistant.component.scss'
})
export class SmartPromptAssistantComponent implements OnInit {
  promptControl = new FormControl('');
  suggestions: string[] = [];
  loading = false;
  error: string | null = null;
  imageUrl: string | ArrayBuffer | null = null;
  ocrText: string | null = null;
  isListening = false;
  recognition: any;
  isSpeaking = false;
  constructor() {}

  ngOnInit() {
      this.initializeSpeechRecognition();
    this.promptControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => {
        this.suggestions = [];
        this.error = null;
        this.loading = true;
      }),
      switchMap(query => {
        if (!query || query.length < 3) {
          this.loading = false;
          return of([]);
        }

        const cached = this.getFromCache(query);
        if (cached) {
          this.loading = false;
          return of(cached);
        }

        // Detect if the input has a #keyword
        const keywordMatch = query.match(/#\w+/);
        if (keywordMatch) {
          const keyword = keywordMatch[0].substring(1); // Remove the # symbol
          return from(this.fetchKeywordSuggestions(keyword)).pipe(
            tap((suggestions:any) => this.saveToCache(query, suggestions)),
            catchError(err => {
              this.error = 'Failed to fetch keyword suggestions. Please try again.';
              console.error('Keyword AI Error:', err);
              return of([]);
            }),
            finalize(() => (this.loading = false))
          );
        } else {
          return from(this.fetchSuggestions(query)).pipe(
            tap((suggestions:any) => this.saveToCache(query, suggestions)),
            catchError(err => {
              this.error = 'Failed to fetch suggestions. Please try again.';
              console.error('AI Error:', err);
              return of([]);
            }),
            finalize(() => (this.loading = false))
          );
        }
      })
    ).subscribe(suggestions => {
      this.suggestions = suggestions;
    });
    
  }


  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageUrl = null; // Clear previous preview
      this.ocrText = null; // Clear previous OCR text
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrl = e.target?.result as string;
        this.performOCR(file); // Call OCR function after image is loaded
      };
      reader.readAsDataURL(file);
    }
  }
  async performOCR(file: File) {
    this.loading = true;
    try {
      // **You'll need to integrate an OCR library here.**
      // Popular options include:
      // - Tesseract.js (client-side, requires loading language data)
      // - Cloud Vision API (more accurate, server-side API call)

      // **Example using a placeholder - REPLACE WITH ACTUAL OCR LOGIC**
      console.log('Performing OCR on:', file);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate OCR delay
      const extractedText = "This is some text extracted from the image.";
      this.ocrText = extractedText;

      // **If using Tesseract.js:**
      // const worker = await createWorker('eng');
      // const ret = await worker.recognize(file);
      // this.ocrText = ret.data.text;
      // await worker.terminate();

      // **If using a server-side API:**
      // const formData = new FormData();
      // formData.append('image', file);
      // const response = await fetch('/api/ocr', { method: 'POST', body: formData });
      // const data = await response.json();
      // this.ocrText = data.text;

    } catch (error) {
      console.error('OCR Error:', error);
      this.error = 'Failed to extract text from the image.';
    } finally {
      this.loading = false;
    }
  }

  clearImage() {
    this.imageUrl = null;
    this.ocrText = null;
    // Optionally clear the file input programmatically if needed
    // if (this.fileInputRef) {
    //   this.fileInputRef.nativeElement.value = '';
    // }
  }

  useOcrTextAsPrompt() {
    if (this.ocrText) {
      this.promptControl.setValue(this.ocrText);
      this.suggestions = []; // Clear previous text-based suggestions
      this.fetchSuggestions(this.ocrText);
      this.ocrText = null; // Optionally clear OCR text after using
      this.imageUrl = null; // Optionally clear image after using OCR
    }
  }

  
  private async fetchSuggestions(query: string) {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: query,
      });

      if (!response.text) {
        throw new Error('Response text is undefined');
      }
      return (response.text ?? '')
        .split('\n')
        .filter(line => line.trim().length > 0);
    } catch (error) {
      throw new Error('Failed to fetch suggestions from Google GenAI');
    }
  }
  private handleSpokenText(spokenText: string) {
    this.promptControl.setValue(spokenText); // Set the spoken text in the input field
    this.fetchSuggestions(spokenText).then((suggestions) => {
      this.suggestions = suggestions;
    });
  }
  private async fetchKeywordSuggestions(keyword: string) {
    // Example logic for handling keyword-specific suggestions
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: `Provide suggestions related to ${keyword}`,
    });

    return (response.text ?? '')
      .split('\n')
      .filter(line => line.trim().length > 0);
  }

  private saveToCache(query: string, data: string[]) {
    const cache = JSON.parse(localStorage.getItem('promptCache') || '{}');
    cache[query] = data;
    localStorage.setItem('promptCache', JSON.stringify(cache));
  }

  private getFromCache(query: string): string[] | null {
    const cache = JSON.parse(localStorage.getItem('promptCache') || '{}');
    return cache[query] || null;
  }
  private initializeSpeechRecognition() {
    const SpeechRecognition =
      (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;

    this.recognition = new SpeechRecognition();
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = false;

    // Event when speech is recognized
    this.recognition.onresult = (event: any) => {
      const spokenText = event.results[0][0].transcript;
      this.promptControl.setValue(spokenText);
       this.handleSpokenText(spokenText);
      this.isListening = false;
    };

    // Event when recognition ends
    this.recognition.onend = () => {
      this.isListening = false;
    };

    // Event when an error occurs
    this.recognition.onerror = (error: any) => {
      console.error('Speech Recognition Error:', error);
      this.isListening = false;
    };
  }
  startListening() {
    this.isListening = true;
    this.recognition.start();
  }

  speakText(text: string) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
  }
    // Confirm Speaking: Fetch Suggestions
    confirmSpeaking() {
      const query = this.promptControl.value;
      if (query && query.length > 2) {
        this.fetchSuggestions(query);
      }
      this.stopListening();
    }
  
    // Cancel Speaking: Clear Input and Suggestions
    cancelSpeaking() {
      this.stopListening();
      this.promptControl.setValue('');
      this.suggestions = [];
    }
  
    // Stop Listening
    private stopListening() {
      if (this.recognition) {
        this.recognition.stop();
      }
      this.isSpeaking = false;
    }
  
  // Handle selection of a suggestion
  selectSuggestion(suggestion: string) {
    this.promptControl.setValue(suggestion); // Set the selected suggestion to the input field
  
  }

}