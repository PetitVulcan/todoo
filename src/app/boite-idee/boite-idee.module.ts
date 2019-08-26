import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoiteIdeePeleMeleComponent } from './boite-idee-pele-mele/boite-idee-pele-mele.component';

const routes: Routes = [
  { path: '', component: BoiteIdeePeleMeleComponent, children : [
    { path: 'pelemele', component: BoiteIdeePeleMeleComponent},
  ]}
]

@NgModule({
  declarations: [
    BoiteIdeePeleMeleComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class BoiteIdeeModule { }
