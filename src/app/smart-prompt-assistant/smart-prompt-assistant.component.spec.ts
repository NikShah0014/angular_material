import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartPromptAssistantComponent } from './smart-prompt-assistant.component';

describe('SmartPromptAssistantComponent', () => {
  let component: SmartPromptAssistantComponent;
  let fixture: ComponentFixture<SmartPromptAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmartPromptAssistantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartPromptAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
