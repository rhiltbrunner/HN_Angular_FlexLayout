import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootercenterComponent } from './footercenter.component';

describe('FootercenterComponent', () => {
  let component: FootercenterComponent;
  let fixture: ComponentFixture<FootercenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootercenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootercenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
