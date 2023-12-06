import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeroComponent } from "./components/hero/hero.component";
import { ScrollHeroAnimationDirective } from "./directives/hero-scroll-animation.directive";
import { RotateOnScrollDirective } from "./directives/rotate-div.directive";
import { HeaderComponent } from "./components/header/header.component";
import { PhoneAnimationComponent } from "./components/phone-animation/phone-animation.component";
import { AboutSectionComponent } from "./components/about-section/about-section.component";
import { AnimateDivDirective } from "./directives/animate-div.directive";
import { OffersSectionComponent } from "./components/offers-section/offers-section.component";
import { StatsSectionComponent } from "./components/stats-section/stats-section.component";
import { BenefitsSectionComponent } from "./components/benefits-section/benefits-section.component";
import { FaqSectionComponent } from "./components/faq-section/faq-section.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AnimateIncrementDirective } from "./directives/animated-increment.directive";
import { StickerComponent } from "./components/sticker/sticker.component";
import { MobileBenefitsSectionComponent } from "./components/mobile-benefits-section/mobile-benefits-section.component";
import { MobileHeaderComponent } from "./components/mobile-header/mobile-header.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { FooterComponent } from "./components/footer/footer.component";
import { VerticalRotatingCarouselComponent } from "./components/vertical-rotating-carousel/vertical-rotating-carousel.component";
import { ProductVideoComponent } from "./components/product-video/product-video.component";
import { ManualDownloadsComponent } from "./components/manual-downloads/manual-downloads.component";
import { BasicStickersInfoComponent } from "./components/basic-stickers-info/basic-stickers-info.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ScrollHeroAnimationDirective,
    AnimateIncrementDirective,
    AnimateDivDirective,
    RotateOnScrollDirective,
    HeaderComponent,
    PhoneAnimationComponent,
    AboutSectionComponent,
    OffersSectionComponent,
    StatsSectionComponent,
    BenefitsSectionComponent,
    FaqSectionComponent,
    StickerComponent,
    MobileBenefitsSectionComponent,
    MobileHeaderComponent,
    SidenavComponent,
    FooterComponent,
    VerticalRotatingCarouselComponent,
    ProductVideoComponent,
    ManualDownloadsComponent,
    BasicStickersInfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
