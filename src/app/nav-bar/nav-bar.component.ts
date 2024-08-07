import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  openMenu() {
    let menu = document.getElementById("mobile-menu");
    if(menu?.className=="noShow"){
      menu.classList.remove("noShow");
    }else{
      menu?.classList.add("noShow");
    }
  }

}
