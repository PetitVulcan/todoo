import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjetCourtComponent } from './projet/projet-court/projet-court.component';
import { ProjetMoyenComponent } from './projet/projet-moyen/projet-moyen.component';
import { ProjetLongComponent } from './projet/projet-long/projet-long.component';
import { ProjetAccueilComponent } from './projet/projet-accueil/projet-accueil.component';
import { ProjetMenuComponent } from './projet/projet-menu/projet-menu.component';
import { TodooHebdomadaireComponent } from './todoo/todoo-hebdomadaire/todoo-hebdomadaire.component';
import { TodooMensuelComponent } from './todoo/todoo-mensuel/todoo-mensuel.component';
import { TodooQuotidienComponent } from './todoo/todoo-quotidien/todoo-quotidien.component';
import { TodooAccueilComponent } from './todoo/todoo-accueil/todoo-accueil.component';
import { TodooMenuComponent } from './todoo/todoo-menu/todoo-menu.component';
import { BoiteIdeePeleMeleComponent } from './boite-idee/boite-idee-pele-mele/boite-idee-pele-mele.component';
import { BoiteIdeeAccueilComponent } from './boite-idee/boite-idee-accueil/boite-idee-accueil.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';




const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'boiteidee/pelemele', component: BoiteIdeePeleMeleComponent },
  { path: 'boiteidee/accueil', component: BoiteIdeeAccueilComponent },
  { path: 'projet/court', component: ProjetCourtComponent },
  { path: 'projet/moyen', component: ProjetMoyenComponent },
  { path: 'projet/long', component: ProjetLongComponent },
  { path: 'projet/accueil', component: ProjetAccueilComponent },
  { path: 'projet/menu', component: ProjetMenuComponent },
  { path: 'todoo/quotidien', component: TodooQuotidienComponent },
  { path: 'todoo/hebdomadaire', component: TodooHebdomadaireComponent },
  { path: 'todoo/mensuel', component: TodooMensuelComponent },
  { path: 'todoo/accueil', component: TodooAccueilComponent },
  { path: 'todoo/menu', component: TodooMenuComponent },
  { path: 'todoo', loadChildren: () => import('./todoo/todoo.module').then((mod) => mod.TodooModule) },
  { path: 'projet', loadChildren: () => import('./projet/projet.module').then((mod) => mod.ProjetModule) },
  { path: 'boiteidee', loadChildren: () => import('./boite-idee/boite-idee.module').then((mod) => mod.BoiteIdeeModule) },

];
@NgModule({
  declarations: [
    AppComponent,
    ProjetCourtComponent,
    ProjetMoyenComponent,
    ProjetLongComponent,
    ProjetAccueilComponent,
    ProjetMenuComponent,
    TodooQuotidienComponent,
    TodooHebdomadaireComponent,
    TodooMensuelComponent,
    TodooAccueilComponent,
    TodooMenuComponent,
    BoiteIdeePeleMeleComponent,
    BoiteIdeeAccueilComponent,
    MenuComponent,
    AccueilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
