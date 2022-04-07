import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelInvestDialogComponent } from './cancel-invest-dialog.component';

describe('CancelInvestDialogComponent', () => {
  let component: CancelInvestDialogComponent;
  let fixture: ComponentFixture<CancelInvestDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelInvestDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelInvestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
