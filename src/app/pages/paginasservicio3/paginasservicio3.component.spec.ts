import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Paginasservicio3Component } from './paginasservicio3.component';

describe('Paginasservicio3Component', () => {
  let component: Paginasservicio3Component;
  let fixture: ComponentFixture<Paginasservicio3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Paginasservicio3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Paginasservicio3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
