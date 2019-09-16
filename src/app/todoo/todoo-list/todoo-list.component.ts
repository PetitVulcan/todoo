import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { TodooModel } from 'src/app/models/todoo.model';

@Component({
  selector: 'app-todoo-list',
  templateUrl: './todoo-list.component.html',
  styleUrls: ['./todoo-list.component.css']
})
export class TodooListComponent implements OnInit {
  todoo:TodooModel = {
    id : 0,
    Titre:"",
    Description : '',
    Details : "",
    Urgent : false
  };
  todoos;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getApi('getTodoos').subscribe((res:any)=> {
      if(res.error){
        alert('Aucune todoo');
      }
      else {
        this.todoos = res.todoos;
        console.dir(this.todoos);
      }
    });
  }
  // getTodoos = () => {this.data.getApi('getTodoos').subscribe((res:any)=> {
  //   if(res.error){
  //     alert('Aucune todoo');
  //   }
  //   else {
  //     this.todoos = res.todoos;
  //     console.log("todoo chargées");
  //   }
  // });
  // }
}
