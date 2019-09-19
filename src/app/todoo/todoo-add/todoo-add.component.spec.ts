import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodooAddComponent } from './todoo-add.component';

describe('TodooAddComponent', () => {
  let component: TodooAddComponent;
  let fixture: ComponentFixture<TodooAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodooAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodooAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
