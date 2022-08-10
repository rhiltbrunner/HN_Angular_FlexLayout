import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyrightComponent } from './bodyright.component';

describe('BodyrightComponent', () => {
  let component: BodyrightComponent;
  let fixture: ComponentFixture<BodyrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyrightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
