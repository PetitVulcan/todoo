import { NgModule } from '@angular/core';
import { ProjetCourtComponent } from './projet-court/projet-court.component';
import { ProjetMoyenComponent } from './projet-moyen/projet-moyen.component';
import { ProjetLongComponent } from './projet-long/projet-long.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: ProjetCourtComponent, children: [
      { path: 'court', component: ProjetCourtComponent},
      { path: 'moyen', component: ProjetMoyenComponent },
      { path: 'long', component: ProjetLongComponent },
    ]
  }
]
@NgModule({
  declarations: [
    ProjetCourtComponent,
    ProjetMoyenComponent,
    ProjetLongComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ProjetModule { }
