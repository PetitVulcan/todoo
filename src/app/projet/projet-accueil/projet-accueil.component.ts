import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projet-accueil',
  templateUrl: './projet-accueil.component.html',
  styleUrls: ['./projet-accueil.component.css']
})
export class ProjetAccueilComponent implements OnInit {
  menu =  {
    court : false,
    moyen : false,
    long : false
  }
  constructor(private router : Router) { }

  ngOnInit() {
  }
  linkMenu = (url) => {
    this.menu = {
      court : false,
      moyen : false,
      long : false
    }
    this.menu[url] = true;
    this.router.navigate([url])
  }
}
