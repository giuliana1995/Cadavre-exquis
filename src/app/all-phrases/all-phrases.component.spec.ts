import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPhrasesComponent } from './all-phrases.component';

describe('AllPhrasesComponent', () => {
  let component: AllPhrasesComponent;
  let fixture: ComponentFixture<AllPhrasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPhrasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPhrasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
