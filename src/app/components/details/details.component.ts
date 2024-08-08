import { NgIf, NgTemplateOutlet } from '@angular/common';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  HostListener,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NgIf, NgTemplateOutlet],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent {
  @Input({ transform: booleanAttribute }) isExpanded = false;

  @Input() title = 'asd';

  @Output() expandedChangeEvent = new EventEmitter<boolean>();

  @ContentChild(TemplateRef) content!: TemplateRef<unknown>;

  toggle() {
    this.isExpanded = !this.isExpanded;
    this.expandedChangeEvent.emit(this.isExpanded);
  }

  @HostListener('click', ['[$event]'])
  clickListener(event: Event) {
    console.log(event);
  }
}
