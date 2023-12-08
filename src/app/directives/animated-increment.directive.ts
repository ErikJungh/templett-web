import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[animateIncrement]",
})
export class AnimateIncrementDirective implements OnInit, OnDestroy {
  @Input("animateIncrement") finalValue: number = 0;
  private observer: IntersectionObserver | undefined;
  private animated: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.animated) {
          this.animateValue(0, this.finalValue);
          this.animated = true;
          this.observer?.unobserve(this.elementRef.nativeElement);
        }
      });
    });

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private animateValue(start: number, end: number) {
    let current = start;
    const increment = Math.ceil(end / 100);

    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(interval);
      }
      this.elementRef.nativeElement.textContent = current.toString();
      if (current == end) {
        const element = this.elementRef.nativeElement;

        element.textContent = "Kommer snart";

        this.renderer.addClass(element, "pulsate-once");

        setTimeout(() => {
          this.renderer.removeClass(element, "pulsate-once");
        }, 1000);
      }
    }, 10);
  }
}
