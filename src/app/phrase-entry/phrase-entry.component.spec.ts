import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseEntryComponent } from './phrase-entry.component';

describe('PhraseEntryComponent', () => {
  let component: PhraseEntryComponent;
  let fixture: ComponentFixture<PhraseEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhraseEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhraseEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
