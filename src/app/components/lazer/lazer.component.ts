import { Component, OnInit } from '@angular/core';
import { PoliticaModel } from 'src/app/politica-model';
import { PoliticaApiService } from 'src/app/services/politica-api.service';

@Component({
  selector: 'app-lazer',
  templateUrl: './lazer.component.html',
  styleUrls: ['./lazer.component.css']
})
export class LazerComponent implements OnInit {

  politicaLista: PoliticaModel[];

  constructor(private politicaApi: PoliticaApiService) { }

  ngOnInit(): void {
    this.politicaApi.List().subscribe((lista) => {
      this.politicaLista = lista.filter(function(itemLista){
        return itemLista.tags.includes('Lazer');
      });
    })
  }

}
