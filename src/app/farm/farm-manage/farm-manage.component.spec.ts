import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmManageComponent } from './farm-manage.component';

describe('FarmManageComponent', () => {
  let component: FarmManageComponent;
  let fixture: ComponentFixture<FarmManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
