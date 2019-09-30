import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  title="Nicolas";
  todoosDaily;
  urgentDaily=0;
  todoosSwing;
  urgentSwing=0;
  todoosLong;
  urgentLong=0;
  
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getApi('getTodoos/Daily').subscribe((res:any)=> {
      let urgent=0;
      if(res.error){
        alert('Aucune todooDaily');
      }
      else {        
        for(let t of res.todoos)
        {
          if(t.Urgent)
          {
            this.urgentDaily+=1;
          }
        }
        this.todoosDaily = res.todoos.length;
      }
    });
    this.data.getApi('getTodoos/Swing').subscribe((res:any)=> {
      if(res.error){
        alert('Aucune todooSwing');
      }
      else {
        for(let t of res.todoos)
        {
          if(t.Urgent)
          {
            this.urgentSwing+=1;
          }
        }
        this.todoosSwing = res.todoos.length;
      }
    });
    this.data.getApi('getTodoos/Long').subscribe((res:any)=> {
      if(res.error){
        alert('Aucune todooLong');
      }
      else {
        for(let t of res.todoos)
        {
          if(t.Urgent)
          {
            this.urgentLong+=1;
          }
        }
        this.todoosLong = res.todoos.length;
      }
    });
   
  }

}
