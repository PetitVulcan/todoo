import { Component, OnInit } from '@angular/core';
import { TodooModel } from 'src/app/models/todoo.model';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-todoo-detail',
  templateUrl: './todoo-detail.component.html',
  styleUrls: ['./todoo-detail.component.css']
})
export class TodooDetailComponent implements OnInit {

  constructor(private http: HttpClient, private data: DataService) { }

  ngOnInit() {
  }
  id;
  todoo:TodooModel = {
    id : 0,
    Titre:"",
    Description : "",
    Details : "",
    Urgent :""
  };
  todoos: Array<any>;
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
}
