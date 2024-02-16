import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveImageComponent } from './responsive-image.component';

describe('ResponsiveImageComponent', () => {
  let component: ResponsiveImageComponent;
  let fixture: ComponentFixture<ResponsiveImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsiveImageComponent]
    });
    fixture = TestBed.createComponent(ResponsiveImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
