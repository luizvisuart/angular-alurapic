import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

// Configura as rotas de minha aplicação
const routes: Routes = [
  { path: 'user/flavio', component: PhotoListComponent},
  { path: 'p/add', component: PhotoFormComponent},

  // roteamento em caso de não existir a página
  { path: '**', component: NotFoundComponent},


];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule{ }
