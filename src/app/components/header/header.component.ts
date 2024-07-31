import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../schema';
import { NgClass, NgIf } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { UserChipComponent } from '../user-chip/user-chip.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,
  imports: [NgClass, ButtonComponent, UserChipComponent, NgIf]
})
export class HeaderComponent {
  @Input() user?: User

  @Output() logoutEvent = new EventEmitter()

  handleLogout() {
    this.logoutEvent.emit()
  }
}
