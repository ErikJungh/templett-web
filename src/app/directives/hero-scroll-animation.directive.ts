import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appScrollAnimation]",
})
export class ScrollHeroAnimationDirective {
  private primaryDelay!: string;
  private secondaryDelay!: string;
  private thirdDelay!: string;
  private fourthDelay!: string;

  @HostListener("window:scroll", [])
  scroll(): void {
    const primaryElement = this.el.nativeElement.querySelector(".animate");
    const secondaryElement =
      this.el.nativeElement.querySelector(".animate-secondary");
    const thirdElement = this.el.nativeElement.querySelector(".animate-third");
    const fourthElement = this.el.nativeElement.querySelector(".tunnel");

    const rect = this.el.nativeElement.getBoundingClientRect();

    let primaryScroll = this.mapRange(
      0,
      window.innerHeight,
      0,
      1,
      rect.top + rect.height / 2
    );
    let secondaryScroll = primaryScroll;
    let thirdScroll = primaryScroll;
    let fourthScroll = primaryScroll;

    primaryScroll = primaryScroll + 1.4;
    secondaryScroll = secondaryScroll + 0.6;
    thirdScroll = thirdScroll + 0.3;
    fourthScroll = fourthScroll + 2.0;

    primaryScroll =
      primaryScroll < 0 ? 0 : primaryScroll > 1 ? 1 : primaryScroll;

    secondaryScroll =
      secondaryScroll < 0 ? 0 : secondaryScroll > 1 ? 1 : secondaryScroll;

    thirdScroll = thirdScroll < 0 ? 0 : thirdScroll > 1 ? 1 : thirdScroll;
    fourthScroll = fourthScroll < 0 ? 0 : fourthScroll > 1 ? 1 : fourthScroll;

    this.primaryDelay = `-${primaryScroll.toFixed(2)}s`;
    this.secondaryDelay = `-${secondaryScroll.toFixed(2)}s`;
    this.thirdDelay = `-${thirdScroll.toFixed(2)}s`;
    this.fourthDelay = `-${fourthScroll.toFixed(2)}s`;

    this.renderer.setStyle(
      primaryElement,
      "animation-delay",
      this.primaryDelay
    );

    this.renderer.setStyle(
      secondaryElement,
      "animation-delay",
      this.secondaryDelay
    );

    this.renderer.setStyle(thirdElement, "animation-delay", this.thirdDelay);

    this.renderer.setStyle(fourthElement, "animation-delay", this.fourthDelay);
  }

  private mapRange(
    a1: number,
    a2: number,
    b1: number,
    b2: number,
    value: number
  ): number {
    return (b1 + ((value - a1) * (b2 - b1)) / (a2 - a1)) * -1;
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
