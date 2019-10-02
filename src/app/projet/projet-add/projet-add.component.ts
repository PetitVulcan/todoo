import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DataService } from '../../data.service';
import { ProjetModel } from '../../models/projet.model';
import { FormBuilder, FormGroup, Validators, RequiredValidator } from "@angular/forms";

@Component({
  selector: 'app-projet-add',
  templateUrl: './projet-add.component.html',
  styleUrls: ['./projet-add.component.css']
})
export class ProjetAddComponent implements OnInit {
  id;
  projet: ProjetModel = {
    Id: 0,
    Nom: "",
    DateCreation: Date,
    Duree:"",
    DateEcheance: Date,
    Contributeurs: "",
    Description: "",
    Notes: "",
    Archive: false
  };
  projets: Array<any>;
  formAddProjet: FormGroup = this.fb.group({
    'Nom': [''],
    'DateCreation': [Date],
    'Duree':[''],
    'DateEcheance': [Date],
    'Contributeurs': [''],
    'Description': [''],
    'Notes': [''],
    'Archive': [false]
  })
  constructor(private http: HttpClient, private data: DataService, private fb: FormBuilder) { }

  ngOnInit() {
  }
  valider = () => {
    this.data.postApi('addProjet', this.formAddProjet.value).subscribe((res: any) => {
      if (res.error) {
        alert("Error insertion du projet.");
      }
      else {
        window.location.reload();
        alert("Projet ajouté avec succès.");
      }
    })
  }
}
