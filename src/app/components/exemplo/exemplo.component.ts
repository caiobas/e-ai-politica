import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-exemplo',
  templateUrl: './exemplo.component.html',
  styleUrls: ['./exemplo.component.css']
})
export class ExemploComponent implements OnInit {

 imgUrl: String = '/assets/obra.PNG';
 sobreNos = 'Somos uma aplicação para auxiliar a comunidade na fiscalização  de problemas sociais: saúde, saneamento, mobilidade, lazer e educação. O poder público sabendo dos problemas pode criar políticas públicas direcionadas. Informar a população é torná-la crítica e esta aplicação tambêm ajuda o governo na identificação de problemas.';
 titulo0 ='Projeto do Hackthon Decola 2020';
 titulo = 'Fiscalização compartilhada';
 titulo1 ='Informando problemas, cobrando soluções.';
 participe ='E ai.. Bora fiscalizar!';
 final1 = 'Projeto de exemplo fornecido para estudo';
 Final2 = 'Copyright 2020 Iteris Consultoria e Software LTDA';


  constructor() { }

  ngOnInit(): void {
  }

}
