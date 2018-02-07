import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRestaurationComponent } from './list-restauration.component';

describe('ListRestaurationComponent', () => {
  let component: ListRestaurationComponent;
  let fixture: ComponentFixture<ListRestaurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRestaurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRestaurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
