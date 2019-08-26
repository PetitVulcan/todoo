import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetCourtComponent } from './projet-court.component';

describe('ProjetCourtComponent', () => {
  let component: ProjetCourtComponent;
  let fixture: ComponentFixture<ProjetCourtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetCourtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetCourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
