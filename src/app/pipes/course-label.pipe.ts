import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../schema';

@Pipe({
  name: 'courseLabel',
  standalone: true,
})
export class CourceLabelPipe implements PipeTransform {
  transform(value: Course, decoration = ''): string {
    return `${decoration}${value.title} (${value.id})${decoration}`;
  }
}
