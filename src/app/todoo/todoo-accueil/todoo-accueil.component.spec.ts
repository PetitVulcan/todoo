import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodooAccueilComponent } from './todoo-accueil.component';

describe('TodooAccueilComponent', () => {
  let component: TodooAccueilComponent;
  let fixture: ComponentFixture<TodooAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodooAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodooAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
