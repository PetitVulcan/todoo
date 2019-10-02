import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DataService } from '../../data.service';
import { ProjetModel } from '../../models/projet.model';
import { FormBuilder, FormGroup, Validators, RequiredValidator } from "@angular/forms";

@Component({
  selector: 'app-projet-detail',
  templateUrl: './projet-detail.component.html',
  styleUrls: ['./projet-detail.component.css']
})
export class ProjetDetailComponent implements OnInit {

  constructor(private http: HttpClient, private data: DataService, private fb: FormBuilder) { }

  ngOnInit() {
  }
  id;
  projet:ProjetModel = {
    Id: 0,
    Nom: "",
    DateCreation: "",
    Duree:"",
    DateEcheance: "",
    Contributeurs: "",
    Description: "",
    Notes: "",
    Archive: false
  };
  projets: Array<any>;
  findProjet = () => {
    this.data.getApi('getProjet/'+this.id).subscribe((res:any)=> {
      if(res.error){
        alert('Aucun projet avec cet id');
      }
      else {
        this.projet = res.projet;
      }
    })
  }
}
