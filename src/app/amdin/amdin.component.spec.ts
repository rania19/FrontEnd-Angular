import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmdinComponent } from './amdin.component';

describe('AmdinComponent', () => {
  let component: AmdinComponent;
  let fixture: ComponentFixture<AmdinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmdinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmdinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
