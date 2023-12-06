import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
  animations: [
    trigger("sidenavAnimation", [
      state(
        "collapsed",
        style({
          transform: "translateX(-100%)",
          opacity: 0,
        })
      ),
      state(
        "expanded",
        style({
          transform: "translateX(0)",
          opacity: 0.98,
        })
      ),
      transition("collapsed => expanded", animate("300ms ease-in")),
      transition("expanded => collapsed", animate("300ms ease-out")),
    ]),
  ],
})
export class SidenavComponent {
  @Input() isExpanded = false;
  @Output() isExpandedChange = new EventEmitter<boolean>();
  constructor(private el: ElementRef) {}

  scrollToSection(targetSectionId: string) {
    this.isExpanded = !this.isExpanded;
    this.isExpandedChange.emit(this.isExpanded);
    document.body.classList.remove("no-scroll");

    const checkboxEl = this.el.nativeElement.ownerDocument.getElementById(
      "animatedCheck"
    ) as HTMLInputElement;
    if (checkboxEl) {
      checkboxEl.checked = !checkboxEl.checked;
    }

    const targetEl =
      this.el.nativeElement.ownerDocument.getElementById(targetSectionId);
    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: "smooth",
        block: "start", // Align to the start of the element
        inline: "start", // Align to the start of the element
        // Adding an offset to the scroll position
        // Note: scrollIntoViewOptions might not be supported in all browsers
        scrollIntoViewOptions: {
          block: "start",
          inline: "start",
          behavior: "smooth",
          offsetTop: 100, // Adjust this to set the offset from the top
        },
      });
    }
  }
}
