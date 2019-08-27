import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoiteIdeePeleMeleComponent } from './boite-idee-pele-mele/boite-idee-pele-mele.component';
import { BoiteIdeeMenuComponent } from './boite-idee-menu/boite-idee-menu.component';
import { BoiteIdeeAccueilComponent } from './boite-idee-accueil/boite-idee-accueil.component';

const routes: Routes = [
  { path: '', component: BoiteIdeePeleMeleComponent, children : [
    { path: 'accueil', component: BoiteIdeeAccueilComponent},
    { path: 'pelemele', component: BoiteIdeePeleMeleComponent},
  ]}
];

@NgModule({
  declarations: [
    BoiteIdeeModule,
    BoiteIdeePeleMeleComponent,
    BoiteIdeeMenuComponent,
    BoiteIdeeAccueilComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class BoiteIdeeModule { }
