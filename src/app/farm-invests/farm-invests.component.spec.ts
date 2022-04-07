import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmInvestsComponent } from './farm-invests.component';

describe('FarmInvestsComponent', () => {
  let component: FarmInvestsComponent;
  let fixture: ComponentFixture<FarmInvestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmInvestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmInvestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
