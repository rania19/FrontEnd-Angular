import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationItemComponent } from './reclamation-item.component';

describe('ReclamationItemComponent', () => {
  let component: ReclamationItemComponent;
  let fixture: ComponentFixture<ReclamationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
