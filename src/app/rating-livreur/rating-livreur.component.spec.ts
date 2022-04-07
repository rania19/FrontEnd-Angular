import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingLivreurComponent } from './rating-livreur.component';

describe('RatingLivreurComponent', () => {
  let component: RatingLivreurComponent;
  let fixture: ComponentFixture<RatingLivreurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingLivreurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingLivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
