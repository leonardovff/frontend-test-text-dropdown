import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { CustomMaterialModule } from './modules/custom-material.module';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { DropDownListComponent } from './components/drop-down/drop-down-list/drop-down-list.component';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DropDownComponent,
    DropDownListComponent,
    OnlyNumbersDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CustomMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
