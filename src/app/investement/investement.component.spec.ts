import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestementComponent } from './investement.component';

describe('InvestementComponent', () => {
  let component: InvestementComponent;
  let fixture: ComponentFixture<InvestementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
