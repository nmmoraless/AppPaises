import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Pais } from '../../interfaces/pais';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  public pais!: Pais;// El operador '!' indica a TypeScrip que estamos seguros de que la variable pueda ser null

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {

    //Forma corta para ver información de país 
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.paisService.getPaisPorId(id)),
        tap(console.log)
      )
      .subscribe( pais => {
        this.pais = pais[0];     
      });

    // *****FORMA POSIBLE 1
    // this.activatedRoute.params
    // .subscribe( params => {
    //   console.log(params['id']);
    //   this.paisService.getPaisPorId( params['id'] )
    //   .subscribe( pais => {
    //     console.log(pais);
    //   });
    // });
  }

}
