/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IndexesCardComponent } from './indexes-card.component';

describe('IndexesCardComponent', () => {
  let component: IndexesCardComponent;
  let fixture: ComponentFixture<IndexesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
