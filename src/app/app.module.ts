import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { FooterleftComponent } from './footer/footerleft/footerleft.component';
import { FootercenterComponent } from './footer/footercenter/footercenter.component';
import { FooterrightComponent } from './footer/footerright/footerright.component';
import { HeaderComponent } from './header/header.component';
import { HeaderleftComponent } from './header/headerleft/headerleft.component';
import { HeadercenterComponent } from './header/headercenter/headercenter.component';
import { HeaderrightComponent } from './header/headerright/headerright.component';
import { BodyComponent } from './body/body.component';
import { BodyleftComponent } from './body/bodyleft/bodyleft.component';
import { BodycenterComponent } from './body/bodycenter/bodycenter.component';
import { BodyrightComponent } from './body/bodyright/bodyright.component';

@NgModule({
  declarations: [
    AppComponent,

    FooterComponent,
    FooterleftComponent,
    FootercenterComponent,
    FooterrightComponent,
    HeaderComponent,
    HeaderleftComponent,
    HeadercenterComponent,
    HeaderrightComponent,
    BodyComponent,
    BodyleftComponent,
    BodycenterComponent,
    BodyrightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


