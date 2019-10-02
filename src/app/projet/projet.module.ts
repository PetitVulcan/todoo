import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjetCourtComponent } from './projet-court/projet-court.component';
import { ProjetMoyenComponent } from './projet-moyen/projet-moyen.component';
import { ProjetLongComponent } from './projet-long/projet-long.component';
import { ProjetMenuComponent } from './projet-menu/projet-menu.component';
import { ProjetAccueilComponent } from './projet-accueil/projet-accueil.component';
import { DataService } from '../data.service';
import { ProjetAddComponent } from './projet-add/projet-add.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProjetDetailComponent } from './projet-detail/projet-detail.component';

const routes: Routes = [
  {
    path: '', component: ProjetAccueilComponent, children: [
      { path: 'court', component: ProjetCourtComponent},
      { path: 'moyen', component: ProjetMoyenComponent },
      { path: 'long', component: ProjetLongComponent },
    ]
  }
];  
@NgModule({
  declarations: [    
    ProjetCourtComponent,
    ProjetMoyenComponent,
    ProjetLongComponent,
    ProjetMenuComponent,
    ProjetAccueilComponent,
    ProjetAddComponent,
    ProjetDetailComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [DataService],
  bootstrap: [ProjetAccueilComponent]
})
export class ProjetModule { }
