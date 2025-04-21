import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ControllersModule } from './shared/component/controllers/controllers.module';
import { SharedComponentsModule } from './shared/shared-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServerPaginationComponent } from "./shared/component/server-pagination.component/server-pagination.component";
import { DataTableComponent } from './shared/component/data-table/data-table.component';
import { SelectBoxComponent } from "./shared/component/select-box/select-box.component";
import { SmartPromptAssistantComponent } from './smart-prompt-assistant/smart-prompt-assistant.component';
import { HttpClientModule } from '@angular/common/http';
import { IconField, IconFieldModule } from 'primeng/iconfield';
import { MatIconButton } from '@angular/material/button';
import { CardModule } from 'primeng/card';
import { TextareaModule } from 'primeng/textarea';
import { UserListComponent } from "./pages/user-management/pages/user-list/user-list.component";
@NgModule({
  declarations: [
    AppComponent,
    SmartPromptAssistantComponent,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ControllersModule,
    SharedComponentsModule,
    FormsModule,
    HttpClientModule,
    ServerPaginationComponent, DataTableComponent,
    SelectBoxComponent,
    ReactiveFormsModule,
    IconFieldModule,
    MatIconButton,
    CardModule,
    TextareaModule,
    UserListComponent
],
  providers: [
    provideClientHydration() // Removed withEventReplay()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
