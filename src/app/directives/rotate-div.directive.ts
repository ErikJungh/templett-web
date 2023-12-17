import { Directive, ElementRef, Renderer2, OnInit, Input } from "@angular/core";

@Directive({
  selector: "[rotateOnScroll]",
})
export class RotateOnScrollDirective implements OnInit {
  @Input() rotationIncrement: number = 30;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentRotation = this.getCurrentRotation(entry.target);
          const newRotation = currentRotation + this.rotationIncrement; // Use rotation increment from Input
          console.log("rotate");
          this.renderer.setStyle(
            entry.target,
            "transition",
            "transform 1s , opacity 1s"
          );
          this.renderer.setStyle(entry.target, "opacity", "1");
          this.renderer.setStyle(
            entry.target,
            "transform",
            `rotate(${newRotation}deg)`
          );

          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(this.elRef.nativeElement);
  }

  getCurrentRotation(element: any): number {
    const transformString = window
      .getComputedStyle(element)
      .getPropertyValue("transform");
    if (transformString && transformString !== "none") {
      // Extract the current rotation from the transform matrix
      const values = transformString.split("(")[1].split(")")[0].split(",");
      const a = parseFloat(values[0]);
      const b = parseFloat(values[1]);
      const rotation = Math.round(Math.atan2(b, a) * (180 / Math.PI));
      return rotation >= 0 ? rotation : rotation + 360; // Ensure positive rotation value
    }
    return 0;
  }
}
