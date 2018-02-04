import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRestaurationsComponent } from './new-restaurations.component';

describe('NewRestaurationsComponent', () => {
  let component: NewRestaurationsComponent;
  let fixture: ComponentFixture<NewRestaurationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRestaurationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRestaurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
