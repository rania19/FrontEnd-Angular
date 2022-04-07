import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegtProductItemComponent } from './vegt-product-item.component';

describe('VegtProductItemComponent', () => {
  let component: VegtProductItemComponent;
  let fixture: ComponentFixture<VegtProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegtProductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegtProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
