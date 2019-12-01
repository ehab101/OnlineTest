import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftskillsPage } from './softskills.page';

describe('SoftskillsPage', () => {
  let component: SoftskillsPage;
  let fixture: ComponentFixture<SoftskillsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftskillsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftskillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
