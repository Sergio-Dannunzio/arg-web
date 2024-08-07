import { Component } from '@angular/core';
//import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-card-visit',
  templateUrl: './card-visit.component.html',
  styleUrl: './card-visit.component.scss'
  /*animations: [
    trigger('myAnimation', [
      state('start', style({
        opacity: 1,
      })),
      state('end', style({
        opacity: 0.5,
      })),
      transition('start => end', [
        animate('0.5s')
      ]),
      transition('end => start', [
        animate('0.5s')
      ])
    ])
  ]*/
})
export class CardVisitComponent {

  
  //animationState: string = 'start';
  urlArray: string[];
  descArray: string[];
  ubArray: string[];
  first: number;
  second: number;
  third: number;

  constructor() {
    this.first = 0;
    this.second = 1;
    this.third = 2;
    this.urlArray = ['https://api-inprotur-hom.turismo.gob.ar/files/uploads/1623698383105-p1130251.jpg', 'https://api-inprotur-hom.turismo.gob.ar/files/uploads/1624379756024-cordoba_capital_horizontales__1_.jpg', 'https://api-inprotur-hom.turismo.gob.ar/files/uploads/1624894650757-25_natura_945.jpg', 'https://api-inprotur-hom.turismo.gob.ar/files/uploads/1621357111682-tango_dsc_8183_2.jpg', "https://api-inprotur-hom.turismo.gob.ar/files/uploads/1621513497164-_dsc8754_caj_ngrande.jpg", "https://api-inprotur-hom.turismo.gob.ar/files/uploads/1623528879742-lago_rivadavia__pnla__3_.jpg"];
    this.descArray = ['Qhapaq Ñan: El Shincal', 'Legado jesuita en Córdoba','Reserva Natural Iberá','Tango en Buenos Aires','Mendoza, al pie de la Cordillera de los Andes','Parque Nacional Los Alerces'];
    this.ubArray = ['Belen, Catamarca, Catamarca, Argentina', 'Córdoba capital, Córdoba, Argentina','Iberá, Corrientes, Argentina','Buenos Aires, Ciudad autónoma de Buenos Aires, Argentina','Mendoza, Mendoza, Argentina','Esquel, Chubut, Argentina'];
  }

  changePage() {
    console.log(this.first);
    if (this.first<3) {
      this.first++;
      this.second++;
      this.third++;
    }else if(this.first===3){
      this.first++;
      this.second++;
      this.third=0;
    }else if(this.first===4){
      this.first++;
      this.second=0;
      this.third++;
    }else{
      this.first=0;
      this.second++;
      this.third++;
    }
  }

  changePageBack() {
    if (this.first===0) {
      this.first=5;
      this.second=0;
      this.third=1;
    }else if(this.first===1){
      this.first=0;
      this.second=1;
      this.third=2;
    }else if(this.first===2){
      this.first=1;
      this.second=2;
      this.third=3;
    }else if(this.first===3){
      this.first=2;
      this.second=3;
      this.third=4;
    }else if(this.first===4){
      this.first=3;
      this.second=4;
      this.third=5;
    }else{
      this.first=4;
      this.second=5;
      this.third=0;
    }
    }

}
