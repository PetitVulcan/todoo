import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DataService } from '../../data.service';
import { TodooModel } from '../../models/todoo.model';
import { FormBuilder, FormGroup, Validators, RequiredValidator } from "@angular/forms";

@Component({
  selector: 'app-todoo-add',
  templateUrl: './todoo-add.component.html',
  styleUrls: ['./todoo-add.component.css']
})
export class TodooAddComponent implements OnInit {
  id;
  todoo:TodooModel = {
    id : 0,
    Echeance:"",
    Titre:"",
    Description : "",
    Details : "",
    Urgent : ""
  };
  todoos: Array<any>;
  formAddTodooDaily : FormGroup = this.fb.group({
    'Echeance':[''],
    'Titre' : [''],
    'Description' : [''],
    'Details' : [''],
    'Urgent' : []
  })
  constructor(private http: HttpClient, private data: DataService, private fb : FormBuilder) {

  }
  ngOnInit() {
  }
  valider = () => {
    this.data.postApi('addTodoo',this.formAddTodooDaily.value).subscribe((res:any)=> {
      if(res.error){
        alert("Error insertion");
      }
      else {
        alert("Todoo ajoutée");
      }
    })
  }
}
