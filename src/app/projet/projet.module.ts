import { NgModule } from '@angular/core';
import { ProjetCourtComponent } from './projet-court/projet-court.component';
import { ProjetMoyenComponent } from './projet-moyen/projet-moyen.component';
import { ProjetLongComponent } from './projet-long/projet-long.component';
import { Routes, RouterModule } from '@angular/router';
import { ProjetMenuComponent } from './projet-menu/projet-menu.component';
import { ProjetAccueilComponent } from './projet-accueil/projet-accueil.component';
import { TodooService } from '../todoo.service';

const routes: Routes = [
  {
    path: '', component: ProjetMenuComponent, children: [
      { path: 'accueil', component: ProjetAccueilComponent},
      { path: 'court', component: ProjetCourtComponent},
      { path: 'moyen', component: ProjetMoyenComponent },
      { path: 'long', component: ProjetLongComponent },
    ]
  }
];  
@NgModule({
  declarations: [
    ProjetModule,
    ProjetCourtComponent,
    ProjetMoyenComponent,
    ProjetLongComponent,
    ProjetMenuComponent,
    ProjetAccueilComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [TodooService],
  bootstrap: [ProjetAccueilComponent]
})
export class ProjetModule { }
