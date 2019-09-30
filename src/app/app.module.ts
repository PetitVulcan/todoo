import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DataService } from './data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';


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
    AccueilComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmationPopoverModule.forRoot({confirmButtonType:'danger'}),
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }