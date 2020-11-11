/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MetalsCardComponent } from './metals-card.component';

describe('MetalsCardComponent', () => {
  let component: MetalsCardComponent;
  let fixture: ComponentFixture<MetalsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetalsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
