import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomMaterialModule } from './modules/custom-material.module';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { DropDownInputComponent } from './components/drop-down/drop-down-input/drop-down-input.component';
import { DropDownListComponent } from './components/drop-down/drop-down-list/drop-down-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DropDownComponent,
    DropDownInputComponent,
    DropDownListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
