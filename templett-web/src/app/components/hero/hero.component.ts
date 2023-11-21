import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {

  @ViewChild('section') sectionRef!: ElementRef<HTMLDivElement>;
  section!: HTMLDivElement;

  constructor() { }

  ngAfterViewInit(): void {
    // Accessing the native element after the view has been initialized
    this.section = this.sectionRef.nativeElement;

    let isScrolling: any;

    this.section.addEventListener('scroll', () => {
      clearTimeout(isScrolling);

      isScrolling = setTimeout(() => {
        this.section.scrollTo({
          top: this.section.scrollTop + 10, // Adjust the value to change the gliding distance
          behavior: 'smooth',
        });
      }, 50); // Adjust the delay value as needed
    });
  }
}
