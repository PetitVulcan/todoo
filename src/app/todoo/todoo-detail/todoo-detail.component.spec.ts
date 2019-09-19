import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodooDetailComponent } from './todoo-detail.component';

describe('TodooDetailComponent', () => {
  let component: TodooDetailComponent;
  let fixture: ComponentFixture<TodooDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodooDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodooDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
