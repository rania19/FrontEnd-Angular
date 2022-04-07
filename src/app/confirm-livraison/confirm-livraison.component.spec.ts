import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmLivraisonComponent } from './confirm-livraison.component';

describe('ConfirmLivraisonComponent', () => {
  let component: ConfirmLivraisonComponent;
  let fixture: ComponentFixture<ConfirmLivraisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmLivraisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
