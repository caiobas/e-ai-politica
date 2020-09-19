import { Component, Input, OnInit } from '@angular/core';
import { PoliticaModel } from 'src/app/politica-model';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {

  @Input() politica: PoliticaModel;

  address: string;
  description: string;
  name: string;
  photo: string;
  tag: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(this.politica != null){
      this.address = this.politica.address;
      this.description = this.politica.description;
      this.name = this.politica.name;
      this.photo = this.politica.photo;
      this.tag = this.politica.tag;
    }
  }

}