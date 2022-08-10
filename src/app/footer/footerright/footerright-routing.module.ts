import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterrightComponent } from './footerright.component';

const routes: Routes = [{ path: '', component: FooterrightComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterrightRoutingModule { }
