import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { TodooModel } from 'src/app/models/todoo.model';

@Component({
  selector: 'app-todoo-mensuel',
  templateUrl: './todoo-mensuel.component.html',
  styleUrls: ['./todoo-mensuel.component.css']
})
export class TodooMensuelComponent implements OnInit {
  todoo:TodooModel = {
    id : 0,
    Echeance:"",
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
}

