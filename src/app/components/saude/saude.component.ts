import { Component, OnInit } from '@angular/core';
import { PoliticaModel } from 'src/app/politica-model';
import { PoliticaApiService } from 'src/app/services/politica-api.service';

@Component({
  selector: 'app-saude',
  templateUrl: './saude.component.html',
  styleUrls: ['./saude.component.css']
})
export class SaudeComponent implements OnInit {

  politicaLista: PoliticaModel[];

  constructor(private politicaApi: PoliticaApiService) {

   }

  ngOnInit(): void {
    this.politicaApi.List().subscribe(lista => {
      this.politicaLista = lista;
      this.politicaLista = lista.filter(function(itemLista){
        return itemLista.tags.includes('Saúde');
      });
    })
  }

}
