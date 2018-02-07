import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHebergementComponent } from './edit-hebergement.component';

describe('EditHebergementComponent', () => {
  let component: EditHebergementComponent;
  let fixture: ComponentFixture<EditHebergementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHebergementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHebergementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
