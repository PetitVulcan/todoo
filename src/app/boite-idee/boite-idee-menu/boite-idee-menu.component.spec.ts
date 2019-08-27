import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoiteIdeeMenuComponent } from './boite-idee-menu.component';

describe('BoiteIdeeMenuComponent', () => {
  let component: BoiteIdeeMenuComponent;
  let fixture: ComponentFixture<BoiteIdeeMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoiteIdeeMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoiteIdeeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
