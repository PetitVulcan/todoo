import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-todoo-list',
  templateUrl: './todoo-list.component.html',
  styleUrls: ['./todoo-list.component.css']
})
export class TodooListComponent implements OnInit {
  todoos
  constructor(private data:DataService) { }

  ngOnInit() {
    // this.todoos = this.data.getTodoos;
  }
}
