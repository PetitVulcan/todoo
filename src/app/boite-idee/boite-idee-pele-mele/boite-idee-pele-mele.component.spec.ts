import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoiteIdeePeleMeleComponent } from './boite-idee-pele-mele.component';

describe('BoiteIdeePeleMeleComponent', () => {
  let component: BoiteIdeePeleMeleComponent;
  let fixture: ComponentFixture<BoiteIdeePeleMeleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoiteIdeePeleMeleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoiteIdeePeleMeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
