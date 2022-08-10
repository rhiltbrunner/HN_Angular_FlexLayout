import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterrightComponent } from './footerright.component';

describe('FooterrightComponent', () => {
  let component: FooterrightComponent;
  let fixture: ComponentFixture<FooterrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterrightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
