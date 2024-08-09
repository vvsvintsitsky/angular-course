import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Course } from '../../schema';
import { MOCK_COURSES } from '../../mocks/courses';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  private courses = MOCK_COURSES;

  public getAll({ title = '' }: Partial<{ title: string }> = {}): Observable<
    Course[]
  > {
    const titleLowercase = title.toLocaleLowerCase();

    const filteredCourses = this.courses.filter((course) => {
      if (title) {
        return course.title.toLocaleLowerCase().includes(titleLowercase);
      }

      return true;
    });

    return of(filteredCourses);
  }

  public add(
    coursePart: Omit<Course, 'id' | 'creationDate'>
  ): Observable<Course> {
    const now = new Date();
    const id = now.getTime();

    const mockCourse: Course = {
      id,
      creationDate: now.toISOString(),
      ...coursePart,
    };

    this.courses = this.courses.slice().concat(mockCourse);

    return of(mockCourse);
  }

  public get(id: Course['id']): Observable<Course | null> {
    return of(this.courses.find((course) => course.id === id) ?? null);
  }

  public deleteCourse(id: Course['id']) {
    if (Date.now() % 2) {
      this.courses = this.courses.filter((course) => course.id !== id);
      return of('OK');
    }

    return this.httpClient
      .delete<string>('/api/courses', {
        body: { id },
        headers: new HttpHeaders({ 'Custom-Header-Xxx': 'Zzz' }),
        params: new HttpParams().append('param1', 'value'),
      })
      .pipe(
        catchError((error) => {
          if (error instanceof HttpErrorResponse) {
            return throwError(
              () => `status: ${error.status}; message: ${error.message}`
            );
          }

          if (typeof error === 'string') {
            throwError(() => error);
          }

          return throwError(() => 'Unknown error');
        })
      );
  }
}
