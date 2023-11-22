import { Component } from "@angular/core";

@Component({
  selector: "app-mobile-benefits-section",
  templateUrl: "./mobile-benefits-section.component.html",
  styleUrls: ["./mobile-benefits-section.component.scss"],
})
export class MobileBenefitsSectionComponent {
  public benefits: { title: String; substring: String; icon: string }[] = [
    {
      title: "Digitala annonsblad",
      substring:
        "Templett-Stickers möjliggör skapandet av digitala annonsblad där butiksägare kan länka till kampanjer, produktinformation eller annat relevant innehåll på nätet.",
      icon: "newsletter-new.svg",
    },
    {
      title: "Rekommendera recept",
      substring:
        "Med Templett-Stickers kan butiksägare enkelt dela recept eller matrelaterade tips till sina kunder. Genom att länka NFC-chippen till receptsidor eller matbloggar kan butiken erbjuda värdefulla råd eller inspirera kunderna till nya matupplevelser.",
      icon: "recipe.svg",
    },
    {
      title: "Öka försäljning",
      substring:
        "Genom att använda Templett-Stickers kan butiksägare locka fler kunder och öka försäljningen. De kan marknadsföra produkter, kampanjer eller erbjudanden direkt till kundernas smartphones när de interagerar med NFC-stickers i butiken.",
      icon: "chart.svg",
    },
    {
      title: "Uppmärksamma rabatter",
      substring:
        "Templett-Stickers möjliggör en effektiv marknadsföring av rabatter eller specialerbjudanden. Butiksägare kan skapa NFC-länkar till sidor med kampanjkoder eller kuponger för att locka kunder till att göra inköp i butiken.",
      icon: "pricetag.svg",
    },
    {
      title: "Modernisera butiken",
      substring:
        "Genom att införa NFC-teknologi med Templett-Stickers kan butiker skapa en modern och interaktiv shoppingupplevelse för sina kunder. Detta visar engagemang för att utveckla och hålla butiken uppdaterad med den senaste tekniken.",
      icon: "database.svg",
    },
    {
      title: "Skapa trender",
      substring:
        "Med Templett-Stickers har butiksägare möjlighet att vara innovativa och skapa trender inom sin bransch. Genom att erbjuda unika och intressanta digitala upplevelser för kunder kan butiker positionera sig som ledande inom sin marknad.",
      icon: "trends.svg",
    },
  ];
}
