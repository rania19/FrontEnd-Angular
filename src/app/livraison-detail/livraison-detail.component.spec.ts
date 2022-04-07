import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivraisonDetailComponent } from './livraison-detail.component';

describe('LivraisonDetailComponent', () => {
  let component: LivraisonDetailComponent;
  let fixture: ComponentFixture<LivraisonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivraisonDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivraisonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
