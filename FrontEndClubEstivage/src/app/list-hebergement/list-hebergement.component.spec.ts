import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHebergementComponent } from './list-hebergement.component';

describe('ListHebergementComponent', () => {
  let component: ListHebergementComponent;
  let fixture: ComponentFixture<ListHebergementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHebergementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHebergementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
