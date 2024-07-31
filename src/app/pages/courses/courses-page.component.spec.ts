import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPageComponent } from './courses-page.component';

describe('CoursesComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have configured title', () => {
    const testTitle = 'testTitle'
    component.title = testTitle

    fixture.detectChanges()

    expect(fixture.nativeElement.querySelector('span').innerText).toEqual(testTitle);
  });
});
