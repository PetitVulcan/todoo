import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { TodooModel } from 'src/app/models/todoo.model';

@Component({
  selector: 'app-todoo',
  templateUrl: './todoo.component.html',
  styleUrls: ['./todoo.component.css']
})
export class TodooComponent implements OnInit {
  @Input() todoo:TodooModel;
  id;

  constructor(private data: DataService) { }

  ngOnInit() {
    console.log(this.todoo)
  }
  delete = (id) => {
    this.data.getApi('delTodoo/'+id).subscribe((res:any)=> {
      if(res.error){
        alert("Error suppression");
      }
      else {
        window.location.reload();
        alert("Todoo supprimée");        
      }
    })
  }
  findTodoo = (id) => {
    this.data.getApi('getTodoo/'+id).subscribe((res:any)=> {

      if(res.error){
        alert('Aucune todoo avec cet id');
      }
      else {
        this.todoo = res.todoo;
      }
    })
  }

}
