import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetMoyenComponent } from './projet-moyen.component';

describe('ProjetMoyenComponent', () => {
  let component: ProjetMoyenComponent;
  let fixture: ComponentFixture<ProjetMoyenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetMoyenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetMoyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
