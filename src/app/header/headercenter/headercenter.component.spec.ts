import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadercenterComponent } from './headercenter.component';

describe('HeadercenterComponent', () => {
  let component: HeadercenterComponent;
  let fixture: ComponentFixture<HeadercenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadercenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadercenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
