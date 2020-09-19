import { Component, OnInit } from '@angular/core';
import { PoliticaModel } from 'src/app/politica-model';
import { PoliticaApiService } from 'src/app/services/politica-api.service';

@Component({
  selector: 'app-mobilidade',
  templateUrl: './mobilidade.component.html',
  styleUrls: ['./mobilidade.component.css']
})
export class MobilidadeComponent implements OnInit {

  politicaLista: PoliticaModel[];

  constructor(private politicaApi:PoliticaApiService) { }

  ngOnInit(): void {
    this.politicaApi.List().subscribe((lista) => {
      this.politicaLista = lista.filter(function(itemLista){
        return itemLista.tags.includes('Mobilidade Urbana');
      });
    })
  }

}
