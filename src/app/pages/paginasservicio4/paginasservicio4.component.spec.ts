import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Paginasservicio4Component } from './paginasservicio4.component';

describe('Paginasservicio4Component', () => {
  let component: Paginasservicio4Component;
  let fixture: ComponentFixture<Paginasservicio4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Paginasservicio4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Paginasservicio4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
