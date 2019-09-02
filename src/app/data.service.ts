import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable()
export class DataService {

  baseUrl = "http://localhost:8083/";
  constructor(private http: HttpClient) {

  }

  //Premiere methode
  getMessageAccueil = () => {
    return this.http.get(this.baseUrl + 'accueil');
  }

  //Deuxieme methode

  getApi = (lien) => {
    return this.http.get(this.baseUrl + lien);
  }

  postApi = (lien, data) => {
    return this.http.post(this.baseUrl + lien, data);
  }
  // todoos = Array<any>;
  // getTodoos = () => {
  //   return this.http.post(this.baseUrl +"public/todoos.json")
  // }
}
