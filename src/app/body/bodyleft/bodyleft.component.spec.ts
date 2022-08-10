import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyleftComponent } from './bodyleft.component';

describe('BodyleftComponent', () => {
  let component: BodyleftComponent;
  let fixture: ComponentFixture<BodyleftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyleftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
