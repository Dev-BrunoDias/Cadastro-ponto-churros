import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { cidade } from 'src/app/interface/cidade';
import { estado } from 'src/app/interface/estado';
import { PontoVenda } from 'src/app/interface/pontoDeVenda';
import { IbgeApiService } from 'src/app/services/ibge-api.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private ibgeService: IbgeApiService,
  ) { }

  form: FormGroup = new FormGroup({
    nome: new FormControl('', [ Validators.required ]),
    estado: new FormControl(''),
    cidade: new FormControl('', [ Validators.required ]),
    pontoDeVenda: new FormControl('', [ Validators.required ]),
    horarioInicio: new FormControl('', [ Validators.required ]),
    horarioFinal: new FormControl('', [ Validators.required ])
  })

  listaEstados!: estado[]
  listaMunicipios!: cidade[]
  pontosDeVenda: PontoVenda[] = []

  salvar(){
    const ponto: PontoVenda = this.form.value
    this.pontosDeVenda.push(ponto)
  }

  listarCidades(sigla: string){
    this.ibgeService.listarMunicipios(sigla).subscribe(
      (cidades) => {
        this.listaMunicipios = cidades
      }
    ) 
  }

  ngOnInit(): void {
    this.ibgeService.listaEstados().subscribe(
      (estados) => {
        this.listaEstados = estados
      }
    ) 
  }

}
