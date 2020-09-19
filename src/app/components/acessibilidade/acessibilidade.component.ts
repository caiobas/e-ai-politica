import { Component, OnInit } from '@angular/core';
import { PoliticaModel } from 'src/app/politica-model';
import { PoliticaApiService } from 'src/app/services/politica-api.service';

@Component({
  selector: 'app-acessibilidade',
  templateUrl: './acessibilidade.component.html',
  styleUrls: ['./acessibilidade.component.css']
})
export class AcessibilidadeComponent implements OnInit {

  listaProblemas: PoliticaModel[];
  constructor(private politicaApi: PoliticaApiService) { }

  ngOnInit(): void {
    this.politicaApi.List().subscribe((lista)=>{
      this.listaProblemas = lista
  })
}
}
