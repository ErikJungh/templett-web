import { Component, ElementRef } from "@angular/core";

@Component({
  selector: "app-offers-section",
  templateUrl: "./offers-section.component.html",
  styleUrls: ["./offers-section.component.scss"],
})
export class OffersSectionComponent {
  public bulletPoints: { icon: String; text: String }[] = [
    {
      icon: "checkmark.svg",
      text: "50 Chippade stickers",
    },
    {
      icon: "checkmark.svg",
      text: "50x3 Modulstickers",
    },
    {
      icon: "checkmark.svg",
      text: "Instruktion på plats",
    },
    {
      icon: "checkmark.svg",
      text: "Kl 8-18 Kundservice",
    },
    {
      icon: "cross.svg",
      text: "Designa egna modulstickers",
    },
  ];
  public bulletPoints2: { icon: String; text: String }[] = [
    {
      icon: "checkmark.svg",
      text: "200 Chippade stickers",
    },
    {
      icon: "checkmark.svg",
      text: "200x4 modulstickers",
    },
    {
      icon: "checkmark.svg",
      text: "Instruktion på plats",
    },
    {
      icon: "checkmark.svg",
      text: "Kl 6-23 Kundservice",
    },
    {
      icon: "cross.svg",
      text: "Designa egna modulstickers",
    },
  ];
  public bulletPoints3: { icon: String; text: String }[] = [
    {
      icon: "checkmark.svg",
      text: "200 Chippade stickers",
    },
    {
      icon: "checkmark.svg",
      text: "200x4 modulstickers",
    },
    {
      icon: "checkmark.svg",
      text: "Instruktion på plats",
    },
    {
      icon: "checkmark.svg",
      text: "Kl 6-23 Kundservice",
    },
    {
      icon: "checkmark.svg",
      text: "Designa egna modulstickers",
    },
  ];
  constructor(private el: ElementRef) {}

  scrollToSection(targetSectionId: string) {
    const targetEl =
      this.el.nativeElement.ownerDocument.getElementById(targetSectionId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  }
}
