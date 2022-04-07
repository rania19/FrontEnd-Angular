import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositionsListComponent } from './propositions-list.component';

describe('PropositionsListComponent', () => {
  let component: PropositionsListComponent;
  let fixture: ComponentFixture<PropositionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropositionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropositionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
