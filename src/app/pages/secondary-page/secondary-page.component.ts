import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  CanActivateFn,
  CanDeactivateFn,
  Router,
  RouterLink,
} from '@angular/router';
import { SecondaryPagePermissionsService } from '../../services/secondary-page-permissions.service';
import { Route } from '../../route';

@Component({
  selector: 'app-secondary-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './secondary-page.component.html',
  styleUrl: './secondary-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondaryPageComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  protected id!: number;

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 5000);

    this.route.params.subscribe((params) => {
      this.id = Number(params['id']);
      this.changeDetectorRef.detectChanges();
    });
  }

  protected isDirty() {
    return this.id < 10;
  }

  static canDeactivate: CanDeactivateFn<SecondaryPageComponent> = (
    component,
    activatedSnapshot,
    currentSnapshot,
    nextSnapshot
  ) => {
    if (component.isDirty() && nextSnapshot.url === '/') {
      return confirm('Component id dirty');
    }

    return true;
  };

  static canActivate: CanActivateFn = (route) => {
    const secondaryPagePermissionsService = inject(
      SecondaryPagePermissionsService
    );

    if (
      secondaryPagePermissionsService.canActivate(Number(route.params['id']))
    ) {
      return true;
    }

    const router = inject(Router);
    return router.parseUrl(Route.NotFound.path);
  };
}
