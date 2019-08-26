import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetLongComponent } from './projet-long.component';

describe('ProjetLongComponent', () => {
  let component: ProjetLongComponent;
  let fixture: ComponentFixture<ProjetLongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetLongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
