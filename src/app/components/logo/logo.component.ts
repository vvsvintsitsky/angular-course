import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {}
