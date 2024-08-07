import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrl: './clima.component.scss'
})
export class ClimaComponent implements OnInit {

  @Input() detalles: any

  constructor() { }

  resolverImagen() {
    return `assets/${this.detalles[0].weather}.png`;
  }

  ngOnInit(): void {
  }

}
