import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterleftComponent } from './footerleft.component';

describe('FooterleftComponent', () => {
  let component: FooterleftComponent;
  let fixture: ComponentFixture<FooterleftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterleftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
