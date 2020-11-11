/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BpAssetsListComponent } from './bp-assets-list.component';

describe('BpAssetsListComponent', () => {
  let component: BpAssetsListComponent;
  let fixture: ComponentFixture<BpAssetsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpAssetsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpAssetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
