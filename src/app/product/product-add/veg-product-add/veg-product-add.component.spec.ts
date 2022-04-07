import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegProductAddComponent } from './veg-product-add.component';

describe('VegProductAddComponent', () => {
  let component: VegProductAddComponent;
  let fixture: ComponentFixture<VegProductAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegProductAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
