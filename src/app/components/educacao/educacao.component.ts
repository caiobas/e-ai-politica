import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PoliticaModel } from 'src/app/politica-model';
import { PoliticaApiService } from 'src/app/services/politica-api.service';

@Component({
  selector: 'app-educacao',
  templateUrl: './educacao.component.html',
  styleUrls: ['./educacao.component.css']
})
export class EducacaoComponent implements OnInit {

  politicaLista: PoliticaModel[];

  constructor(private politicaApi: PoliticaApiService) { }

  ngOnInit(): void {
    this.politicaApi.List().subscribe(lista => {
      this.politicaLista = lista;
      this.politicaLista = lista.filter(function(itemLista){
        console.log(itemLista.tags);
        return itemLista.tags.includes('Educação');
      });
    })
  }
}
