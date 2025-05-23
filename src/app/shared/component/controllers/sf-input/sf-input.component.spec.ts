import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfInputComponent } from './sf-input.component';

describe('SfInputComponent', () => {
  let component: SfInputComponent;
  let fixture: ComponentFixture<SfInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SfInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SfInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
