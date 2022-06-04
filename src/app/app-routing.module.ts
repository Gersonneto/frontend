import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CaminhaoCrudComponent } from './views/caminhao-crud/caminhao-crud.component';
import { CaminhaoCreateComponent } from './components/caminhao/caminhao-create/caminhao-create.component';
import { CaminhaoUpdateComponent } from './components/caminhao/caminhao-update/caminhao-update.component';
import { CaminhaoDeleteComponent } from './components/caminhao/caminhao-delete/caminhao-delete.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "caminhao",
  component: CaminhaoCrudComponent
},
{
  path: "caminhao/create",
  component: CaminhaoCreateComponent
},
{
  path: "caminhao/update/:id",
  component: CaminhaoUpdateComponent
},
{
  path: "caminhao/delete/:id",
  component: CaminhaoDeleteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
