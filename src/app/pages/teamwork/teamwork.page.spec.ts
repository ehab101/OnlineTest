import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamworkPage } from './teamwork.page';

describe('TeamworkPage', () => {
  let component: TeamworkPage;
  let fixture: ComponentFixture<TeamworkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamworkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
