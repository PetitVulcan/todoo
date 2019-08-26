import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodooQuotidienComponent } from './todoo-quotidien.component';

describe('TodooQuotidienComponent', () => {
  let component: TodooQuotidienComponent;
  let fixture: ComponentFixture<TodooQuotidienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodooQuotidienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodooQuotidienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
