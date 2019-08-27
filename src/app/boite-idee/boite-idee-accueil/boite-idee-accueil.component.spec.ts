import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoiteIdeeAccueilComponent } from './boite-idee-accueil.component';

describe('BoiteIdeeAccueilComponent', () => {
  let component: BoiteIdeeAccueilComponent;
  let fixture: ComponentFixture<BoiteIdeeAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoiteIdeeAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoiteIdeeAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
