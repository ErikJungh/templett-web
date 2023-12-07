import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";

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
  @ViewChild("phoneInfo", { static: false }) phoneInfo!: ElementRef;
  @ViewChild("mailInfo", { static: false }) mailInfo!: ElementRef;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  contactEmail: string = "kontakt@templett.se";

  showPhoneInfo: boolean = false;
  showEmailInfo: boolean = false;

  emailInfoCopied: boolean = false;
  phoneInfoCopied: boolean = false;

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

  copyToClipboard(text: string) {
    const tempTextArea = this.renderer.createElement("textarea");
    tempTextArea.value = text;
    this.renderer.appendChild(document.body, tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    this.renderer.removeChild(document.body, tempTextArea);

    console.log("Content copied to clipboard: " + text);
  }

  onPhoneInfoClick() {
    this.phoneInfoCopied = true;
    const phoneInfoText = this.phoneInfo.nativeElement.textContent.trim();
    const splitText = phoneInfoText.split(" ");
    splitText.pop();
    const phoneNumber = splitText.join(" ");
    this.copyToClipboard(phoneNumber);
  }

  onMailInfoClick() {
    this.emailInfoCopied = true;
    const emailInfoText = this.mailInfo.nativeElement.textContent.trim();
    const splitText = emailInfoText.split(" ");
    splitText.pop();
    const email = splitText.join(" ");
    this.copyToClipboard(email);
  }
  onMouseLeave() {
    this.emailInfoCopied = false;
    this.phoneInfoCopied = false;
  }
}
