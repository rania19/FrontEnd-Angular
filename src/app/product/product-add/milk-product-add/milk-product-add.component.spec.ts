import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkProductAddComponent } from './milk-product-add.component';

describe('MilkProductAddComponent', () => {
  let component: MilkProductAddComponent;
  let fixture: ComponentFixture<MilkProductAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilkProductAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
