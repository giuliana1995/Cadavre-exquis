import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { PhraseService } from '../phrase.service';

@Component({
  selector: 'app-phrase-entry',
  templateUrl: './phrase-entry.component.html',
  styleUrls: ['./phrase-entry.component.css']
})
export class PhraseEntryComponent implements OnInit, AfterViewInit{

  currentPhrase = '';

  constructor(private phraseService: PhraseService, private el: ElementRef) { }

  ngOnInit(): void {
    this.addPhrase();    
  }

  ngAfterViewInit() {
    this.focusInput();
  }

  addPhrase() {
    this.phraseService.addPhrase(this.currentPhrase);
    this.currentPhrase = '';
    console.log(this.currentPhrase);
    this.focusInput();

  }

  focusInput() {
    const inputField = document.getElementById('phraseInput') as HTMLInputElement;
    inputField.focus();
  }


}
