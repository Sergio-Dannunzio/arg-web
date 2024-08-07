import { Component } from '@angular/core';
import { ClimaService } from './clima.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'arg-web';
  detallesHoy = [{}];
  constructor(private clima:ClimaService){
  }
    async ngOnInit() {
        // Hacer que se muestre el indicador de carga
        //this.cargando = true;
        // Obtener los datos de ubicación
        //const datosDeUbicacion = await this.weatherService.obtenerDatosUbicacion();
        //this.city = datosDeUbicacion.city;
        //this.region_name = datosDeUbicacion.region_name;
        //this.country_name = datosDeUbicacion.country_name;
        //const { latitude, longitude } = datosDeUbicacion;
        // Obtener, ahora, los datos del clima
        const BsAs = await this.clima.obtenerDatosDeClima("-58.3817", "-34.6033");
        const Cordoba = await this.clima.obtenerDatosDeClima("-64.1833", "-31.4167");
        const Salta = await this.clima.obtenerDatosDeClima("-65.4167", "-24.7833");
        const Neuquen = await this.clima.obtenerDatosDeClima("-68.0642", "-38.9525");
        const Rosario = await this.clima.obtenerDatosDeClima("-60.6394", "-32.9575");
        const Corrientes = await this.clima.obtenerDatosDeClima("-58.8167", "-27.4833");
        // Cortamos el arreglo para mostrar la de hoy, y también las siguientes
        this.detallesHoy[0] = BsAs.dataseries.slice(0, 1)[0];
        this.detallesHoy[1] = Cordoba.dataseries.slice(0, 1)[0];
        this.detallesHoy[2] = Salta.dataseries.slice(0, 1)[0];
        this.detallesHoy[3] = Neuquen.dataseries.slice(0, 1)[0];
        this.detallesHoy[4] = Rosario.dataseries.slice(0, 1)[0];
        this.detallesHoy[5] = Corrientes.dataseries.slice(0, 1)[0];
        console.log(this.detallesHoy);
        // Ocultamos el indicador de carga y comenzamos el reloj
        //this.cargando = false;
        //this.comenzarReloj();
      }
}
