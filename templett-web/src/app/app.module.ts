import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { ScrollHeroAnimationDirective } from './directives/hero-scroll-animation.directive';
import { HeaderComponent } from './components/header/header.component';
import { PhoneAnimationComponent } from './components/phone-animation/phone-animation.component';
import { OpenPhoneAnimationDirective } from './directives/open-phone-animation.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ScrollHeroAnimationDirective,
    OpenPhoneAnimationDirective,
    HeaderComponent,
    PhoneAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
