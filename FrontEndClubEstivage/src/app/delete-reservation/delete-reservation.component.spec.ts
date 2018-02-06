import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteReservationComponent } from './delete-reservation.component';

describe('DeleteReservationComponent', () => {
  let component: DeleteReservationComponent;
  let fixture: ComponentFixture<DeleteReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
