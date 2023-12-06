import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component, ElementRef, Renderer2 } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
  animations: [
    trigger("fadeInOut", [
      state(
        "void",
        style({
          opacity: 0,
          transform: "scale(0.8)", // Initial scale
        })
      ),
      state(
        "*",
        style({
          opacity: 1,
          transform: "scale(1)", // Full scale
        })
      ),
      transition("void => *", animate("300ms ease-in")), // Animation timing
    ]),
  ],
})
export class FooterComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  contactEmail: string = "kontakt@templett.se";

  showPhoneInfo: boolean = false;
  showEmailInfo: boolean = false;

  ngOnInit() {
    const screenHeight = window.innerHeight;

    let element = document.getElementById("footerSection");
    if (element) {
      this.renderer.setStyle(element, "height", `${screenHeight * 0.4}px`);
    }
  }

  togglePhoneInfo() {
    this.showPhoneInfo = !this.showPhoneInfo;
    // Hide email info when showing phone info
    this.showEmailInfo = false;
  }

  toggleEmailInfo() {
    this.showEmailInfo = !this.showEmailInfo;
    // Hide phone info when showing email info
    this.showPhoneInfo = false;
  }
  scrollToSection(targetSectionId: string) {
    const targetEl =
      this.el.nativeElement.ownerDocument.getElementById(targetSectionId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  }
}
