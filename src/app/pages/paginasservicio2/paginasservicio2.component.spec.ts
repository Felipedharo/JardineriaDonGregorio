import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Paginasservicio2Component } from './paginasservicio2.component';

describe('Paginasservicio2Component', () => {
  let component: Paginasservicio2Component;
  let fixture: ComponentFixture<Paginasservicio2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Paginasservicio2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Paginasservicio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
