import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRecDialogComponent } from './delete-rec-dialog.component';

describe('DeleteRecDialogComponent', () => {
  let component: DeleteRecDialogComponent;
  let fixture: ComponentFixture<DeleteRecDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteRecDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRecDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
