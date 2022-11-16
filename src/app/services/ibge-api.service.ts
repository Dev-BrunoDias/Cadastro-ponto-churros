import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cidade } from '../interface/cidade';
import { estado } from '../interface/estado';

@Injectable({
  providedIn: 'root'
})
export class IbgeApiService {

  constructor(
    private http: HttpClient
  ) { }

  private readonly estadoURL: string = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    private readonly cidadeURL: string = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"

    listaEstados(){
      return this.http.get<estado[]>(this.estadoURL)
    }

    listarMunicipios(estado: string){
      return this.http.get<cidade[]>(this.cidadeURL + estado + "/municipios")
    }
}
