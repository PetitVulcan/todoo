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

  constructor(private data: DataService) { }

  ngOnInit() {
    console.log(this.todoo)
  }
  delete = () => {
    this.data.postApi('delTodoo',this.todoo).subscribe((res:any)=> {
      if(res.error){
        alert("Error suppression");
      }
      else {
        alert("Todoo supprimée");
      }
    })
  }

}
