import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() placeholder = '';

  @Input() defaultValue = '';

  @Input() required = false;

  @Output() changeEvent = new EventEmitter<Event>();

  handleChange(event: Event) {
    this.changeEvent.emit(event);
  }
}
