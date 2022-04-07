import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitonComponent } from './definiton.component';

describe('DefinitonComponent', () => {
  let component: DefinitonComponent;
  let fixture: ComponentFixture<DefinitonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinitonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
