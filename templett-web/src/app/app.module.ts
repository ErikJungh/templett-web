import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { ScrollHeroAnimationDirective } from './directives/hero-scroll-animation.directive';
import { HeaderComponent } from './components/header/header.component';
import { PhoneAnimationComponent } from './components/phone-animation/phone-animation.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { AnimateDivDirective } from './directives/animate-div.directive';
import { OffersSectionComponent } from './components/offers-section/offers-section.component';
import { StatsSectionComponent } from './components/stats-section/stats-section.component';
import { BenefitsSectionComponent } from './components/benefits-section/benefits-section.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimateIncrementDirective } from './directives/animated-increment.directive';
import { StickerComponent } from './components/sticker/sticker.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ScrollHeroAnimationDirective,
    AnimateIncrementDirective,
    AnimateDivDirective,
    HeaderComponent,
    PhoneAnimationComponent,
    AboutSectionComponent,
    OffersSectionComponent,
    StatsSectionComponent,
    BenefitsSectionComponent,
    FaqSectionComponent,
    StickerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
