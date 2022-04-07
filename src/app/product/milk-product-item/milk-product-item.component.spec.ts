import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkProductItemComponent } from './milk-product-item.component';

describe('MilkProductItemComponent', () => {
  let component: MilkProductItemComponent;
  let fixture: ComponentFixture<MilkProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilkProductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
