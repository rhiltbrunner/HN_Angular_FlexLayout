import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyrightComponent } from './bodyright.component';

const routes: Routes = [{ path: '', component: BodyrightComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyrightRoutingModule { }
