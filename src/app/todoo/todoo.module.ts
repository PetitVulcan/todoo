import { NgModule } from '@angular/core';
import { TodooHebdomadaireComponent } from './todoo-hebdomadaire/todoo-hebdomadaire.component';
import { TodooQuotidienComponent } from './todoo-quotidien/todoo-quotidien.component';
import { TodooMensuelComponent } from './todoo-mensuel/todoo-mensuel.component';
import { Routes, RouterModule } from '@angular/router';
import { TodooMenuComponent } from './todoo-menu/todoo-menu.component';
import { TodooAccueilComponent } from './todoo-accueil/todoo-accueil.component';

const routes: Routes = [
  {
    path: '', component: TodooQuotidienComponent, children: [
      { path: 'accueil', component: TodooAccueilComponent },
      { path: 'quotidien', component: TodooQuotidienComponent },
      { path: 'hebdomadaire', component: TodooHebdomadaireComponent },
      { path: 'mensuel', component: TodooMensuelComponent },
    ]
  }
]

@NgModule({
  declarations: [
    TodooModule,
    TodooHebdomadaireComponent,
    TodooQuotidienComponent,
    TodooMensuelComponent,
    TodooMenuComponent,
    TodooAccueilComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class TodooModule { }
