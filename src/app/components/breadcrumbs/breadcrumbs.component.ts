import { Component, Input } from '@angular/core';
import { Breadcrumb } from './types';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [NgFor],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.css'
})
export class BreadcrumbsComponent {
  @Input({ required: true }) breadcrumbs!: Breadcrumb[]
}
