import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReservationClientComponent } from './list-reservation-client.component';

describe('ListReservationClientComponent', () => {
  let component: ListReservationClientComponent;
  let fixture: ComponentFixture<ListReservationClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReservationClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReservationClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
