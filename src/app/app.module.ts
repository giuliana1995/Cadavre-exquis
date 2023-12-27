import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhraseEntryComponent } from './phrase-entry/phrase-entry.component';
import { LastWordComponent } from './last-word/last-word.component';
import { AllPhrasesComponent } from './all-phrases/all-phrases.component';

@NgModule({
  declarations: [
    AppComponent,
    PhraseEntryComponent,
    LastWordComponent,
    AllPhrasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
