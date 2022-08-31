import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  public terminoBuscado: string = '';
  public hayError: boolean      = false;
  public paises: Pais[]         = [];

  constructor(private paisService: PaisService) { }
  
  public buscar( terminoBuscado: string ):void {
    this.hayError = false;
    this.terminoBuscado = terminoBuscado;//Recibo el termino que viene como argumento
    this.paisService.buscarCapital( terminoBuscado ).subscribe({
      next: paises => {
        this.paises = paises;
         
      }, error: (error) => {
        this.hayError = true;
        this.paises = [];
      }      
    });
  }

}
