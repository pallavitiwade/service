import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdConfirmComponent } from './std-confirm.component';

describe('StdConfirmComponent', () => {
  let component: StdConfirmComponent;
  let fixture: ComponentFixture<StdConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
