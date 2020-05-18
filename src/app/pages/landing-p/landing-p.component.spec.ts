import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPComponent } from './landing-p.component';

describe('LandingPComponent', () => {
  let component: LandingPComponent;
  let fixture: ComponentFixture<LandingPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
