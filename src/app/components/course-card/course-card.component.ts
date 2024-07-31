import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Course } from '../../../schema';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  @Input({ required: true }) course!: Course;

  @Output() editEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();

  handleEdit() {
    this.editEvent.emit()
  }

  handleDelete() {
    this.deleteEvent.emit()
  }

  formattedDuration() {
    return `${this.course.durationMintues} minutes`;
  }

  formattedDate() {
    return new Date(this.course.creationDate).toLocaleDateString();
  }
}
