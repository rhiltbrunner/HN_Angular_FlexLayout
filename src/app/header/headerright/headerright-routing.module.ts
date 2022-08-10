import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderrightComponent } from './headerright.component';

const routes: Routes = [{ path: '', component: HeaderrightComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderrightRoutingModule { }
