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
      body: "Templett-Stickers används genom att butiksägare köper stickers med insatta NFC-chip från Templett. Dessa stickers placeras sedan i butiken och kopplas till en specifik webbadress eller hemsida via NFC. När kunderna passerar med NFC-aktiverade enheter, kan de interagera med dessa stickers för att nå information eller länkar till olika onlineplatser eller tjänster.",
    },
    {
      title: "Vilka stickers behöver jag?",
      body: "För att använda Templett-Stickers behöver du NFC-kompatibla stickers som är kompatibla med de NFC-chip som Templett tillhandahåller. Dessa stickers kan sedan programmeras för att leda till önskade webbadresser eller hemsidor när de interageras med via NFC-aktiverade enheter.",
    },
    {
      title: "Vart sätter jag chippen?",
      body: "NFC-chippen kan placeras på olika platser inom din butik, exempelvis på produkter, skyltar eller andra ytor som är tillgängliga för kunder. Det är viktigt att placera dem på platser där kunder lätt kan interagera med dem med sina NFC-aktiverade enheter för att få åtkomst till den önskade informationen eller webbplatsen.",
    },
    {
      title: "Kan jag ändra vad chippen leder till?",
      body: "Ja, du kan enkelt ändra vilken webbadress eller hemsida NFC-chippen leder till. Kontakta Templett för att uppdatera destinationswebbadressen eller annan information som är kopplad till NFC-chippen i dina stickers. Detta gör det möjligt att anpassa och uppdatera informationen som kunderna når när de interagerar med dina NFC-stickers.",
    },
    {
      title: "Vad kan chippen göra?",
      body: "NFC-chippen möjliggör interaktion mellan kundernas NFC-aktiverade enheter och dina Templett-Stickers. Genom att interagera med dessa chip kan kunderna få tillgång till webbadresser, hemsidor eller annan information som är programmerad till chippen. Det kan vara produktinformation, kampanjer, webbplatser eller annat innehåll relaterat till din butik eller dina tjänster.",
    },
  ];

  toggleExpand(index: number) {
    this.isExpanded = index;
  }

  ngOnInit() {}
}
