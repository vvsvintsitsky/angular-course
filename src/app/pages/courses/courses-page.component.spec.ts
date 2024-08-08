import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPageComponent } from './courses-page.component';

describe('CoursesComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should perform search', async () => {
    fixture.detectChanges();

    const spyFunc = spyOn(component, 'searchCourses');

    const inputElement = fixture.nativeElement.querySelector('input');
    const testValue = 'sometestvalue';
    inputElement.value = testValue;
    inputElement.dispatchEvent(new Event('input'));

    const formElement = fixture.nativeElement.querySelector('form');
    formElement.dispatchEvent(new Event('submit'));

    await fixture.whenStable();

    expect(spyFunc).toHaveBeenCalled();
  });
});
