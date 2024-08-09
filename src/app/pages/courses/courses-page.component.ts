import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { RouterLink, RouterModule } from '@angular/router';

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
    RouterModule,
    RouterLink,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesPageComponent implements OnInit {
  private courses$!: Observable<Course[]>;

  protected error$ = new BehaviorSubject<string | null>(null);

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
    this.coursesService
      .deleteCourse(course.id)
      .pipe(
        catchError((error) => {
          this.error$.next(error);
          return throwError(() => error);
        })
      )
      .subscribe({
        next: () => {
          this.searchCourses();
        },
        error: (error) => {
          console.log('delete error: ' + error);
        },
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
