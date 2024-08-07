import { Component } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.scss'
})
export class CarrouselComponent {

  private scrollers!: NodeListOf<Element>;

  constructor(){}

  ngAfterViewInit(): void {
    this.scrollers = document.querySelectorAll(".scroller");
    this.addAnimation();
  }


  addAnimation(): void {
    this.scrollers.forEach((scroller) => {
  
      scroller.setAttribute("data-animated", "true");
      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller__inner") as HTMLElement | null;
      if (scrollerInner) {
        const scrollerContent = Array.from(scrollerInner.children) as HTMLElement[];
        
        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
          console.log(scrollerInner)
        });
      }
    });
  }

}
