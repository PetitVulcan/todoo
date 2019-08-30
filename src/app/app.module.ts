import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TodooService } from './todoo.service';


const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'todoo', loadChildren: () => import('./todoo/todoo.module').then(mod => mod.TodooModule) },
  { path: 'projet', loadChildren: () => import('./projet/projet.module').then(mod => mod.ProjetModule) },
  { path: 'boiteidee', loadChildren: () => import('./boite-idee/boite-idee.module').then(mod => mod.BoiteIdeeModule) }
];
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TodooService],
  bootstrap: [AppComponent]
})
export class AppModule { }