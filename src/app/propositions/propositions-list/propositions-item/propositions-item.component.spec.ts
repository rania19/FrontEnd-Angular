import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositionsItemComponent } from './propositions-item.component';

describe('PropositionsItemComponent', () => {
  let component: PropositionsItemComponent;
  let fixture: ComponentFixture<PropositionsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropositionsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropositionsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
