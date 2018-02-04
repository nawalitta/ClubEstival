import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHebergementsComponent } from './new-hebergements.component';

describe('NewHebergementsComponent', () => {
  let component: NewHebergementsComponent;
  let fixture: ComponentFixture<NewHebergementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewHebergementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHebergementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
