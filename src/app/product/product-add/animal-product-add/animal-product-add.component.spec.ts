import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalProductAddComponent } from './animal-product-add.component';

describe('AnimalProductAddComponent', () => {
  let component: AnimalProductAddComponent;
  let fixture: ComponentFixture<AnimalProductAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalProductAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
