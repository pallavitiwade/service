import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassangerCardComponent } from './passanger-card.component';

describe('PassangerCardComponent', () => {
  let component: PassangerCardComponent;
  let fixture: ComponentFixture<PassangerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassangerCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassangerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
