import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu =  {
    accueil : false,
    todoo : false,
    projet : false,
    idee : false,
    about : false,
  }
  constructor(private router : Router) { }

  ngOnInit() {
  }

  linkMenu = (url) => {
    this.menu = {
      accueil : false,
    todoo : false,
    projet : false,
    idee : false,
    about : false,
    }

    this.menu[url] = true;
    this.router.navigate([url])
  }
}
