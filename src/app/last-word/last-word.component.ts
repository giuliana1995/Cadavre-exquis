import { Component, OnInit } from '@angular/core';
import { PhraseService } from '../phrase.service';

@Component({
  selector: 'app-last-word',
  templateUrl: './last-word.component.html',
  styleUrls: ['./last-word.component.css']
})
export class LastWordComponent implements OnInit {

  lastPhrase = '';

  constructor(private phraseService: PhraseService) { 
    this.phraseService.phrases$.subscribe(phrases => {
      this.lastPhrase = phrases[phrases.length - 1];
    })
  }

  ngOnInit(): void {
  }


  getLastWord(phrase: string): string {
    const words = phrase.split(' ');
    return words.length > 0 ? words[words.length - 1] : '';
  }

}
