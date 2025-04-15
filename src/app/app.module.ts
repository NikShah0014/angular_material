import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ControllersModule } from './shared/component/controllers/controllers.module';
import { SharedComponentsModule } from './shared/shared-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServerPaginationComponent } from "./shared/component/server-pagination.component/server-pagination.component";
import { DataTableComponent } from './shared/component/data-table/data-table.component';
import { SelectBoxComponent } from "./shared/component/select-box/select-box.component";

@NgModule({
  declarations: [
    AppComponent,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ControllersModule,
    SharedComponentsModule,
    FormsModule,
    ServerPaginationComponent, DataTableComponent,
    SelectBoxComponent,
    ReactiveFormsModule
],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
