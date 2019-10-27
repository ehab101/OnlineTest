import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcurrPage } from './excurr.page';

describe('ExcurrPage', () => {
  let component: ExcurrPage;
  let fixture: ComponentFixture<ExcurrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcurrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcurrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
