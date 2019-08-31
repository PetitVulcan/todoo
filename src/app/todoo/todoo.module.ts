import { NgModule } from '@angular/core';
import { TodooHebdomadaireComponent } from './todoo-hebdomadaire/todoo-hebdomadaire.component';
import { TodooQuotidienComponent } from './todoo-quotidien/todoo-quotidien.component';
import { TodooMensuelComponent } from './todoo-mensuel/todoo-mensuel.component';
import { Routes, RouterModule } from '@angular/router';
import { TodooMenuComponent } from './todoo-menu/todoo-menu.component';
import { TodooAccueilComponent } from './todoo-accueil/todoo-accueil.component';
import { DataService } from '../data.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: TodooMenuComponent, children: [
      { path: 'accueil', component: TodooAccueilComponent },
      { path: 'quotidien', component: TodooQuotidienComponent },
      { path: 'hebdomadaire', component: TodooHebdomadaireComponent },
      { path: 'mensuel', component: TodooMensuelComponent },
    ]
  }
]

@NgModule({
  declarations: [    
    TodooHebdomadaireComponent,
    TodooQuotidienComponent,
    TodooMensuelComponent,
    TodooMenuComponent,
    TodooAccueilComponent],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [DataService],
  bootstrap: [TodooAccueilComponent]
})
export class TodooModule { }
