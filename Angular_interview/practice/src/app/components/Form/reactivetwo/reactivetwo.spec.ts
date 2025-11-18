import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactivetwo } from './reactivetwo';

describe('Reactivetwo', () => {
  let component: Reactivetwo;
  let fixture: ComponentFixture<Reactivetwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reactivetwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reactivetwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
