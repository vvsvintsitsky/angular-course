import { Component, Input } from '@angular/core';
import { User } from '../../../schema';

@Component({
  selector: 'app-user-chip',
  standalone: true,
  imports: [],
  templateUrl: './user-chip.component.html',
  styleUrl: './user-chip.component.css'
})
export class UserChipComponent {
  @Input({ required: true }) user!: User
}
