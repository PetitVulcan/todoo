import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodooListComponent } from './todoo-list.component';

describe('TodooListComponent', () => {
  let component: TodooListComponent;
  let fixture: ComponentFixture<TodooListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodooListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodooListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
