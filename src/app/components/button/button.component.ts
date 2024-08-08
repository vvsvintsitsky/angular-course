import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { ButtonType } from './types';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Output() clickEvent = new EventEmitter<Event>();

  @Input() styleType?: ButtonType;

  @HostListener('click', ['$event'])
  handleClick(event: Event) {
    this.clickEvent.emit(event);
  }
}
