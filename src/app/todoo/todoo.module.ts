import { NgModule } from '@angular/core';
import { TodooHebdomadaireComponent } from './todoo-hebdomadaire/todoo-hebdomadaire.component';
import { TodooQuotidienComponent } from './todoo-quotidien/todoo-quotidien.component';
import { TodooMensuelComponent } from './todoo-mensuel/todoo-mensuel.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: TodooQuotidienComponent, children: [
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
    TodooMensuelComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class TodooModule { }
