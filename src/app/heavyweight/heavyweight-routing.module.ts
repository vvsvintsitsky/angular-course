import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeavyweightComponent } from './heavyweight.component';

const routes: Routes = [{ path: '', component: HeavyweightComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeavyweightRoutingModule { }
