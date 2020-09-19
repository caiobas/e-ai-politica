import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PoliticaModel } from '../politica-model';

@Injectable({
  providedIn: 'root'
})
export class PoliticaApiService {

  constructor(private httpClient: HttpClient) {

  }

  public List():Observable<PoliticaModel> {
    return this.httpClient.get<PoliticaModel>('https://it3yui.firebaseio.com/problemas.json');
  }
}
