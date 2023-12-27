import { Component, HostListener, OnInit } from '@angular/core';
import { PhraseService } from '../phrase.service';

@Component({
  selector: 'app-all-phrases',
  templateUrl: './all-phrases.component.html',
  styleUrls: ['./all-phrases.component.css']
})
export class AllPhrasesComponent implements OnInit {

  allPhrases: string[] = [];
  showPhrases = false;

  constructor(private phraseService: PhraseService) {
    this.phraseService.phrases$.subscribe(phrases => {
      this.allPhrases = phrases;
      console.log(phrases)
    });
   }

  ngOnInit(): void {
  }

  @HostListener('document:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.ctrlKey && event.key === 'a') {
      this.showAllPhrases();
    }
    if (event.ctrlKey && event.key === 'd') { 
      this.clearLocalStorage();
    }
  }
    
  showAllPhrases() {
    this.showPhrases = !this.showPhrases; // Inverti il valore di showPhrases
    if (!this.showPhrases) {
      // Se showPhrases è falso, reimposta la lista e il Local Storage
      localStorage.setItem('phrases', JSON.stringify(this.allPhrases));
      this.phraseService.phraseSubject.next([...this.allPhrases]);
    }
  }

  clearLocalStorage() {
    localStorage.removeItem('phrases');
    this.phraseService.phraseSubject.next([]);
    this.allPhrases = [];
    this.showPhrases = false;
  }

}
