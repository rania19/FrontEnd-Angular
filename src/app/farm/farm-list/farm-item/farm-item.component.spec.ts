import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmItemComponent } from './farm-item.component';

describe('FarmItemComponent', () => {
  let component: FarmItemComponent;
  let fixture: ComponentFixture<FarmItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
