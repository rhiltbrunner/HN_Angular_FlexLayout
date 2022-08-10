import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadercenterComponent } from './headercenter.component';

const routes: Routes = [{ path: '', component: HeadercenterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeadercenterRoutingModule { }
