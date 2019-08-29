import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoiteIdeePeleMeleComponent } from './boite-idee-pele-mele/boite-idee-pele-mele.component';
import { BoiteIdeeMenuComponent } from './boite-idee-menu/boite-idee-menu.component';
import { BoiteIdeeAccueilComponent } from './boite-idee-accueil/boite-idee-accueil.component';
import { TodooService } from '../todoo.service';

const routes: Routes = [
  {
    path: '', component: BoiteIdeeMenuComponent, children: [
      { path: 'accueil', component: BoiteIdeeAccueilComponent },
      { path: 'pelemele', component: BoiteIdeePeleMeleComponent },
    ]
  }
];

@NgModule({
  declarations: [   
    BoiteIdeePeleMeleComponent,
    BoiteIdeeMenuComponent,
    BoiteIdeeAccueilComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [TodooService],
  bootstrap: [BoiteIdeeAccueilComponent]
})
export class BoiteIdeeModule { }
