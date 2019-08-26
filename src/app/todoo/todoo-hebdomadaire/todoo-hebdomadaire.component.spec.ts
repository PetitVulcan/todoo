import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodooHebdomadaireComponent } from './todoo-hebdomadaire.component';

describe('TodooHebdomadaireComponent', () => {
  let component: TodooHebdomadaireComponent;
  let fixture: ComponentFixture<TodooHebdomadaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodooHebdomadaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodooHebdomadaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
