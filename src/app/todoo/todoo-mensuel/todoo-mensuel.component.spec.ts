import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodooMensuelComponent } from './todoo-mensuel.component';

describe('TodooMensuelComponent', () => {
  let component: TodooMensuelComponent;
  let fixture: ComponentFixture<TodooMensuelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodooMensuelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodooMensuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
