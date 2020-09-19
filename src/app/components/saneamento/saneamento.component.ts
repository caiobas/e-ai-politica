import { Component, OnInit } from '@angular/core';
import { PoliticaModel } from 'src/app/politica-model';
import { PoliticaApiService } from 'src/app/services/politica-api.service';

@Component({
  selector: 'app-saneamento',
  templateUrl: './saneamento.component.html',
  styleUrls: ['./saneamento.component.css']
})
export class SaneamentoComponent implements OnInit {

  politicaLista: PoliticaModel[];
  constructor(private politicaApi: PoliticaApiService) { }

  ngOnInit(): void {
    this.politicaApi.List().subscribe(lista => {
      this.politicaLista = lista;
      this.politicaLista = lista.filter(function(itemLista){
        console.log(itemLista.tags);
        return itemLista.tags.includes('Saneamento Básico');
      });
    })
  }
}
