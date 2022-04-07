import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceLivreurComponent } from './espace-livreur.component';

describe('EspaceLivreurComponent', () => {
  let component: EspaceLivreurComponent;
  let fixture: ComponentFixture<EspaceLivreurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceLivreurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceLivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
