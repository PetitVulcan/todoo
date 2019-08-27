import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodooMenuComponent } from './todoo-menu.component';

describe('TodooMenuComponent', () => {
  let component: TodooMenuComponent;
  let fixture: ComponentFixture<TodooMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodooMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodooMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
