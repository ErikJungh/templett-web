import { Component } from '@angular/core';

@Component({
  selector: 'app-benefits-section',
  templateUrl: './benefits-section.component.html',
  styleUrls: ['./benefits-section.component.scss']
})
export class BenefitsSectionComponent {
  public benefits: {title:String, substring:String, icon:string }[] = [{title: "Header", substring: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.", icon: "newsletter.svg"},
  {title: "Header", substring: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.", icon: "newsletter.svg"},
  {title: "Header", substring: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.", icon: "newsletter.svg"},
  {title: "Header", substring: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.", icon: "newsletter.svg"},
  {title: "Header", substring: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.", icon: "newsletter.svg"},
  {title: "Header", substring: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.", icon: "newsletter.svg"},]
}
