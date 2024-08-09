import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesInnerComponent } from './courses-inner.component';

describe('CoursesInnerComponent', () => {
  let component: CoursesInnerComponent;
  let fixture: ComponentFixture<CoursesInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesInnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
