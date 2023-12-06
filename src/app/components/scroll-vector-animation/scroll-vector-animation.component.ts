import { Component } from "@angular/core";

@Component({
  selector: "app-scroll-vector-animation",
  templateUrl: "./scroll-vector-animation.component.html",
  styleUrls: ["./scroll-vector-animation.component.scss"],
})
export class ScrollVectorAnimationComponent {
  path: SVGPathElement | null = null;
  pathLength: number | null = null;

  constructor() {
    document.addEventListener("DOMContentLoaded", () => {
      this.path = document.querySelector("#star-path");
      this.pathLength = this.path ? this.path.getTotalLength() : null;

      // Check if path and pathLength are available after DOMContentLoaded
      console.log(this.path);
      console.log(this.pathLength);
      if (this.path && this.pathLength) {
        this.path.style.strokeDasharray =
          this.pathLength + " " + this.pathLength;

        this.path.style.strokeDashoffset = this.pathLength.toString();
        this.path.getBoundingClientRect();

        const bodyElement = document.getElementById("body");
        const starSvgElement = document.getElementById("star-svg");

        if (bodyElement && starSvgElement) {
          const bodyHeight = window.getComputedStyle(bodyElement).height;
          starSvgElement.style.height = bodyHeight;
        }
      }

      window.addEventListener("scroll", (e) => {
        if (this.path && this.pathLength) {
          const scrollPercentage =
            (document.documentElement.scrollTop + document.body.scrollTop) /
            (document.documentElement.scrollHeight -
              document.documentElement.clientHeight);
          const drawLength = this.pathLength * scrollPercentage;

          this.path.style.strokeDashoffset = (
            this.pathLength -
            drawLength +
            2000
          ).toString();

          if (scrollPercentage >= 0.99) {
            this.path.style.strokeDasharray = "none";
          } else {
            this.path.style.strokeDasharray =
              this.pathLength + " " + this.pathLength;
          }
        }
      });
    });
  }
}
