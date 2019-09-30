import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DataService } from '../../data.service';
import { TodooModel } from 'src/app/models/todoo.model';

@Component({
  selector: 'app-todoo-quotidien',
  templateUrl: './todoo-quotidien.component.html',
  styleUrls: ['./todoo-quotidien.component.css']
})
export class TodooQuotidienComponent implements OnInit {
 
  constructor(private http: HttpClient, private data: DataService) {

  }
  ngOnInit() {
  }
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
  
}