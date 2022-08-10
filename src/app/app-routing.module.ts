import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'body', loadChildren: () => import('./body/body.module').then(m => m.BodyModule) }, { path: 'body/bodyleft', loadChildren: () => import('./body/bodyleft/bodyleft.module').then(m => m.BodyleftModule) }, { path: 'body/bodycenter', loadChildren: () => import('./body/bodycenter/bodycenter.module').then(m => m.BodycenterModule) }, { path: 'body/bodyright', loadChildren: () => import('./body/bodyright/bodyright.module').then(m => m.BodyrightModule) }, { path: 'header', loadChildren: () => import('./header/header.module').then(m => m.HeaderModule) }, { path: 'header/headerleft', loadChildren: () => import('./header/headerleft/headerleft.module').then(m => m.HeaderleftModule) }, { path: 'header/headercenter', loadChildren: () => import('./header/headercenter/headercenter.module').then(m => m.HeadercenterModule) }, { path: 'header/headerright', loadChildren: () => import('./header/headerright/headerright.module').then(m => m.HeaderrightModule) }, { path: 'footer', loadChildren: () => import('./footer/footer.module').then(m => m.FooterModule) }, { path: 'footer/footerleft', loadChildren: () => import('./footer/footerleft/footerleft.module').then(m => m.FooterleftModule) }, { path: 'footer/footercenter', loadChildren: () => import('./footer/footercenter/footercenter.module').then(m => m.FootercenterModule) }, { path: 'footer/footerright', loadChildren: () => import('./footer/footerright/footerright.module').then(m => m.FooterrightModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
