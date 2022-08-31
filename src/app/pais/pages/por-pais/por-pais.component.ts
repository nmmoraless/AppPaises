import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {
  
  public terminoBuscado: string = '';
  public hayError: boolean      = false;
  public paises: Pais[]         = [];

  constructor(private paisService: PaisService) { }
  
  public buscar( terminoBuscado: string ):void {
    this.hayError = false;
    this.terminoBuscado = terminoBuscado;//Recibo el termino que viene como argumento
    this.paisService.buscarPais( terminoBuscado ).subscribe({
      next: paises => {
        this.paises = paises;
         
      }, error: (error) => {
        console.info(error);//Para ver el tipo de error
        this.hayError = true;
        this.paises = [];
      }      
    });
  }

  public sugerencias( terminoBuscado: string){
    this.hayError = false;
    //To DO crear sugerencias
  }

}
