import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  
  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams () {
    return new HttpParams()
    .set('fields', 'name,capital,area,cioc,flags');
  }

  constructor(private http: HttpClient) { }
  
  buscarPais ( terminoBusqueda: string ): Observable<Pais[]> {
    const url = `${this.apiUrl}/name/${terminoBusqueda}`;
    return this.http.get<Pais[]>(url, {params: this.httpParams});
  }

  buscarCapital ( terminoBusqueda: string ): Observable<Pais[]> {
    const url = `${this.apiUrl}/capital/${terminoBusqueda}`;
    return this.http.get<Pais[]>(url, {params: this.httpParams});
  }

  getPaisPorId ( id: string ): Observable<Pais[]> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Pais[]>(url);
  }

  buscarPaisPorRegion ( region: string ): Observable<Pais[]>{
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Pais[]>(url, {params: this.httpParams});
  }
}
