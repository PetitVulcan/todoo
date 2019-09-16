import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DataService } from '../../data.service';
import { TodooModel } from '../../models/todoo.model';
import { FormBuilder, FormGroup, Validators, RequiredValidator } from "@angular/forms";

@Component({
  selector: 'app-todoo-quotidien',
  templateUrl: './todoo-quotidien.component.html',
  styleUrls: ['./todoo-quotidien.component.css']
})
export class TodooQuotidienComponent implements OnInit {
  id;
  todoo:TodooModel = {
    id : 0,
    Titre:"",
    Description : "",
    Details : "",
    Urgent : ""
  };
  todoos: Array<any>;
  formAddTodooDaily : FormGroup = this.fb.group({
    'Titre' : [''],
    'Description' : [''],
    'Details' : [''],
    'Urgent' : []
  })
  constructor(private http: HttpClient, private data: DataService, private fb : FormBuilder) {

  }
  ngOnInit() {
  }
  findTodoo = () => {
    this.data.getApi('getTodoo/'+this.id).subscribe((res:any)=> {
      if(res.error){
        alert('Aucune todoo avec cet id');
      }
      else {
        this.todoo = res.todoo;
      }
    })
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