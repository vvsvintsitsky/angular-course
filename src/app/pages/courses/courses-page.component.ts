import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { LogoComponent } from '../../components/logo/logo.component';
import { DetailsComponent } from '../../components/details/details.component';
import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { MOCK_USER } from '../../../mocks/user';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { Breadcrumb } from '../../components/breadcrumbs/types';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { Course } from '../../../schema';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IfUsefulDirective } from '../../directives/if-useful.directive';
import { WithShadowDirective } from '../../directives/with-shadow.directive';
import { CourceLabelPipe } from '../../pipes/course-label.pipe';
import { CoursesService } from '../../services/courses.service';
import { Observable } from 'rxjs';

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
    WithShadowDirective,
    CourceLabelPipe,
    NgIf,
    AsyncPipe,
  ],
  standalone: true,
})
export class CoursesPageComponent implements OnInit {
  private courses$!: Observable<Course[]>;

  get courses() {
    return this.courses$;
  }

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.searchCourses();
  }

  user = MOCK_USER;

  breadcrumbs: Breadcrumb[] = [{ label: 'Courses' }];

  searchForm = new FormGroup({
    predicate: new FormControl(''),
  });

  editCourse(course: Course) {
    console.log(`edit ${course.id}`);
  }

  deleteCourse(course: Course) {
    this.coursesService.deleteCourse(course.id).subscribe(() => {
      this.searchCourses();
    });
  }

  searchCourses() {
    const predicate = this.searchForm.value.predicate || '';

    this.courses$ = this.coursesService.getAll({ title: predicate });
  }

  addCourse() {
    console.log('add course');
  }

  trackByCourse(_: number, item: Course) {
    return item.id;
  }
}
