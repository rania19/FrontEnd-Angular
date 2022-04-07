import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPaymentDataComponent } from './modify-payment-data.component';

describe('ModifyPaymentDataComponent', () => {
  let component: ModifyPaymentDataComponent;
  let fixture: ComponentFixture<ModifyPaymentDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyPaymentDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyPaymentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
