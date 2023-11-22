import { Component } from '@angular/core';

@Component({
  selector: 'app-offers-section',
  templateUrl: './offers-section.component.html',
  styleUrls: ['./offers-section.component.scss']
})
export class OffersSectionComponent {
  public bulletPoints: {icon: String, text: String}[] = [{
    icon:"checkmark.svg", text:"Point1"
  },
  {
    icon:"checkmark.svg", text:"Point1"
  },
  {
    icon:"checkmark.svg", text:"Point2"
  },
  {
    icon:"checkmark.svg", text:"Point3"
  },
  {
    icon:"cross.svg", text:"Point4"
  },

];
constructor(){

}

 
}
