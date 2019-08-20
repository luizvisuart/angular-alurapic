import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent
  ],
  imports: [
    HttpClientModule,
    // Module para usar as diretivas o angular como ngFor, ngIf, etc.
    CommonModule
  ]
})
export class PhotosModule {}
