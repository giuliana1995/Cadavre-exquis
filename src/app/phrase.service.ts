import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhraseService {

  phraseSubject = new BehaviorSubject<string[]>([]);
  phrases$ = this.phraseSubject.asObservable();

  constructor() { 
    this.loadStoredPhrases()
  }

  addPhrase(phrase: string) {
    const currentPhrase = this.phraseSubject.value;
    const updatePhrase = [...currentPhrase, phrase];
    this.phraseSubject.next(updatePhrase);
    localStorage.setItem('phrases', JSON.stringify(updatePhrase));

  }

  private loadStoredPhrases() {
    const storedPhrases = localStorage.getItem('phrases');
    if (storedPhrases) {
      const pardesPhrases = JSON.parse(storedPhrases);
      this.phraseSubject.next(pardesPhrases);
    }
  }
}
