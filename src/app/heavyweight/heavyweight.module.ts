import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeavyweightRoutingModule } from './heavyweight-routing.module';
import { HeavyweightComponent } from './heavyweight.component';


@NgModule({
  declarations: [
    HeavyweightComponent
  ],
  imports: [
    CommonModule,
    HeavyweightRoutingModule
  ]
})
export class HeavyweightModule { }
