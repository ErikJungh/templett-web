import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";
@Component({
  selector: "app-manual-downloads",
  templateUrl: "./manual-downloads.component.html",
  styleUrls: ["./manual-downloads.component.scss"],
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
export class ManualDownloadsComponent {
  isExpanded = -1;
  public questions: { title: String; body: String; href?: String }[] = [
    {
      title: "Templett Modulära NFC-Stickers - Matbutiker",
      body: "Templett_NFC_Stickers_Användarmanual_svenska.pdf ",
      href: "https://mag.wcoomd.org/uploads/2018/05/blank.pdf",
    },
    {
      title: "Templett Modulära NFC-Stickers - Gym",
      body: "Kommer snart.",
    },
    {
      title: "Templett Modulära NFC-Stickers - Resturanger",
      body: "Kommer snart.",
    },
  ];

  toggleExpand(index: number) {
    this.isExpanded = index;
  }
}
