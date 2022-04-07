import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendReclamationComponent } from './send-reclamation.component';

describe('SendReclamationComponent', () => {
  let component: SendReclamationComponent;
  let fixture: ComponentFixture<SendReclamationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendReclamationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
