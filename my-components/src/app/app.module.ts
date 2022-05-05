import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UiControlsModule } from 'ui-controls';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,UiControlsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
