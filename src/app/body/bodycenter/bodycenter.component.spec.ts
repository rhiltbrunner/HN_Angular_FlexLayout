import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodycenterComponent } from './bodycenter.component';

describe('BodycenterComponent', () => {
  let component: BodycenterComponent;
  let fixture: ComponentFixture<BodycenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodycenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodycenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
