import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";

@Component({
  selector: "app-faq-section",
  templateUrl: "./faq-section.component.html",
  styleUrls: ["./faq-section.component.scss"],
  animations: [
    trigger("expandCollapse", [
      state(
        "collapsed",
        style({
          height: "0",
          opacity: "0",
          overflow: "hidden",
        })
      ),
      state(
        "expanded",
        style({
          height: "*",
          opacity: "1",
          overflow: "visible",
        })
      ),
      transition("collapsed <=> expanded", [animate("300ms ease-in-out")]),
    ]),
    trigger("rotateAnimation", [
      state(
        "rotated",
        style({
          transform: "rotate(45deg)",
        })
      ),
      state(
        "notRotated",
        style({
          transform: "rotate(0deg)",
        })
      ),
      transition("notRotated <=> rotated", [animate("0.3s ease-in-out")]),
    ]),
  ],
})
export class FaqSectionComponent implements OnInit {
  isExpanded = -1;
  public questions: { title: String; body: String }[] = [
    {
      title: "Hur används Templett-Stickers?",
      body: "Templett-Stickers används genom att butiksägare köper stickers med insatta NFC-chip från Templett. Dessa stickers placeras sedan i butiken och kopplas till en specifik webbadress eller hemsida. När kunderna passerar med en smartphone, kan de enkelt 'blippa' sin telefon mot dessa stickers för att nå information eller länkar till olika onlineplatser eller tjänster.",
    },
    {
      title: "Kan min verksamhet dra nytta av Templett Stickers?",
      body: "Absolut! Templett stickers går att använda för alla verksamheter som har tillgång till en hemsida med information som de enklare vill förmedla till kunderna. Ju mer information som finns på hemsidan desto fler möjligheter finns det att öka kundengagemang eller försäljning med hjälp av Templett-stickers.",
    },
    {
      title: "Vilka stickers behöver jag?",
      body: "För att använda Templett-Stickers behöver du stickers som är utrustade med de programmerade chip som Templett tillhandahåller. Dessa chippade stickers kan sedan ändras för att leda till önskade webbadresser eller hemsidor när de blippas med via smarta mobila enheter. Utöver dessa chippade stickers krävs även Templett's modul-stickers som informerar kunden om vart de hamnar då de blippar en sticker.",
    },
    {
      title: "Vart sätter jag chippen?",
      body: "Chippen kan placeras på olika platser inom din butik, exempelvis på insidan av kundkorgar, handtaget på kundvagnar eller andra ytor som är tillgängliga för kunder. Det är viktigt att placera dem på platser där kunder lätt kan interagera med dem med sina mobila enheter för att få åtkomst till den önskade informationen eller webbplatsen.",
    },
    {
      title: "Vad kan chippen göra?",
      body: "Templett-chippen gör det möjligt för dina kunder att blippa sina smartphones mot dina Templett-Stickers. Genom att interagera med chippen i Templett-stickers kan kunderna få tillgång till webbadresser, hemsidor eller annan information som är programmerad till chippen. Det kan vara produktinformation, kampanjer, webbplatser eller annat innehåll relaterat till din butik eller dina tjänster.",
    },
    {
      title: "Kan jag ändra vad chippen leder till?",
      body: "Ja, du kan enkelt ändra vilken webbadress eller hemsida Templett-chippen leder till. Kontakta Templett via kontakt@templett.se för att uppdatera destinationswebbadressen som är kopplad till chippen i dina Templett-stickers. Detta gör det möjligt att anpassa och uppdatera informationen som kunderna når när de interagerar med dina Templett-stickers.",
    },
  ];

  toggleExpand(index: number) {
    this.isExpanded = index;
  }

  ngOnInit() {}
}
