import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {
  
  public paises: Pais[] = [];
  public regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  public regionActiva: string = '';

  constructor(private paisService: PaisService) { }

  public getClasesCSS( region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary me-1' : 'btn btn-outline-primary me-1';
  }

  public activarRegion( region: string ):void {
    if( region === this.regionActiva ) { return; }
    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarPaisPorRegion( region ).subscribe({
      next: paises => {
        this.paises = paises;
         
      }, error: (error) => {
        this.paises = [];//Opcional, podría personalizar el error...
      }      
    });
  }

  //TO DO: hacer el llamado al servicio


}
