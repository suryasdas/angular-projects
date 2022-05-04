import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiControlsComponent } from 'ui-controls';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,UiControlsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
