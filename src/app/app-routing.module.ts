import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesPageComponent } from './pages/courses/courses-page.component';
import { SecondaryPageComponent } from './pages/secondary-page/secondary-page.component';
import { Route } from './route';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CoursesInnerComponent } from './pages/courses-inner/courses-inner.component';

const routes: Routes = [
  {
    path: Route.Home.path,
    component: CoursesPageComponent,
    title: 'Home',
    children: [
      {
        path: 'inner',
        component: CoursesInnerComponent,
      },
    ],
  },
  {
    path: Route.Secondary.path,
    component: SecondaryPageComponent,
    title: 'Secondary',
    canActivate: [SecondaryPageComponent.canActivate],
    canDeactivate: [SecondaryPageComponent.canDeactivate],
  },
  {
    path: Route.NotFound.path,
    component: NotFoundComponent,
    title: '404',
  },
  {
    path: 'heavy-weight',
    loadChildren: () =>
      import('./heavyweight/heavyweight.module').then(
        (m) => m.HeavyweightModule
      ),
  },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
