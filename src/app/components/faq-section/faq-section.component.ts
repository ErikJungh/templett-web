import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.scss'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: '0',
        opacity: '0',
        overflow: 'hidden'
      })),
      state('expanded', style({
        height: '*',
        opacity: '1',
        overflow: 'visible'
      })),
      transition('collapsed <=> expanded', [
        animate('300ms ease-in-out')
      ])
    ]),
    trigger('rotateAnimation', [
      state('rotated', style({
        transform: 'rotate(45deg)'
      })),
      state('notRotated', style({
        transform: 'rotate(0deg)'
      })),
      transition('notRotated <=> rotated', [
        animate('0.3s ease-in-out')
      ])
    ])
  ]
})
export class FaqSectionComponent implements OnInit {
  isExpanded = -1;
  public questions: {title: String, body: String}[] = [
    {title: "Question lorem ipsum", body: "Body Lorem Ipsum"},
    {title: "Question lorem ipsum", body: "Body Lorem Ipsum"},
    {title: "Question lorem ipsum", body: "Body Lorem Ipsum"},
    {title: "Question lorem ipsum", body: "Body Lorem Ipsum"},
    {title: "Question lorem ipsum", body: "Body Lorem Ipsum"},
  ]

  toggleExpand(index: number) {
    this.isExpanded = index;
  }

  ngOnInit() {
  }
}
