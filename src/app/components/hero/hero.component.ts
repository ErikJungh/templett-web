import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  OnInit,
  Renderer2,
} from "@angular/core";
import { AstMemoryEfficientTransformer } from "@angular/compiler";
import * as $ from "jquery";
import "jquery"; // Import jQuery globally

import { TweenMax, Power3 } from "gsap";

declare function Di(): any;
@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"],
})
export class HeroComponent {
  constructor(private el: ElementRef) {}
  scrollToSection(targetSectionId: string) {
    const targetEl =
      this.el.nativeElement.ownerDocument.getElementById(targetSectionId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  }
}
