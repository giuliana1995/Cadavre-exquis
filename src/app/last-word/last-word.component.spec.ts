import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastWordComponent } from './last-word.component';

describe('LastWordComponent', () => {
  let component: LastWordComponent;
  let fixture: ComponentFixture<LastWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastWordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
