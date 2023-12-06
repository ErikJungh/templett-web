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
      text: "Träningsprogram och övningar",
    },
    {
      icon: "checkmark.svg",
      text: "Nyheter och info",
    },
    {
      icon: "checkmark.svg",
      text: "Kost och näringsråd",
    },
    {
      icon: "checkmark.svg",
      text: "Erbjudanden",
    },
    {
      icon: "checkmark.svg",
      text: "Evenemang och pass",
    },
  ];
  public bulletPoints2: { icon: String; text: String }[] = [
    {
      icon: "checkmark.svg",
      text: "Veckans annonsblad",
    },
    {
      icon: "checkmark.svg",
      text: "Frukost, lunch och middags-tips",
    },
    {
      icon: "checkmark.svg",
      text: "Säsongsvaror",
    },
    {
      icon: "checkmark.svg",
      text: "Butiksinformation och nyheter",
    },
    {
      icon: "checkmark.svg",
      text: "Jobbannonser",
    },
  ];
  public bulletPoints3: { icon: String; text: String }[] = [
    {
      icon: "checkmark.svg",
      text: "Webbshop",
    },
    {
      icon: "checkmark.svg",
      text: "Nyhetsbrev och information",
    },
    {
      icon: "checkmark.svg",
      text: "Event och workshops",
    },
    {
      icon: "checkmark.svg",
      text: "Öppettider",
    },
    {
      icon: "checkmark.svg",
      text: "Din egna idé",
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
