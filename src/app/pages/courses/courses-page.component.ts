import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { LogoComponent } from '../../components/logo/logo.component';
import { DetailsComponent } from '../../components/details/details.component';
import { NgClass, NgFor } from '@angular/common';
import { MOCK_USER } from '../../../mocks/user';
import { MOCK_COURSES } from '../../../mocks/courses';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { Breadcrumb } from '../../components/breadcrumbs/types';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { Course } from '../../../schema';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IfUsefulDirective } from '../../directives/if-useful.directive';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrl: './courses-page.component.css',
  imports: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    DetailsComponent,
    NgClass,
    BreadcrumbsComponent,
    CourseCardComponent,
    NgFor,
    InputComponent,
    ButtonComponent,
    ReactiveFormsModule,
    IfUsefulDirective,
  ],
  standalone: true,
})
export class CoursesPageComponent {
  user = MOCK_USER;
  @Input() courses = MOCK_COURSES;

  breadcrumbs: Breadcrumb[] = [{ label: 'Courses' }];

  searchForm = new FormGroup({
    predicate: new FormControl(''),
  });

  editCourse(course: Course) {
    console.log(`edit ${course.id}`);
  }

  deleteCourse(course: Course) {
    console.log(`delete ${course.id}`);
  }

  searchCourses() {
    const predicate = this.searchForm.value.predicate || '';

    this.courses = MOCK_COURSES.filter(({ title }) =>
      title.includes(predicate)
    );
  }

  addCourse() {
    console.log('add course');
  }

  trackByCourse(_: number, item: Course) {
    return item.id;
  }
}
