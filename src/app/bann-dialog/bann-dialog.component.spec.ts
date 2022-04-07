import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannDialogComponent } from './bann-dialog.component';

describe('BannDialogComponent', () => {
  let component: BannDialogComponent;
  let fixture: ComponentFixture<BannDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
