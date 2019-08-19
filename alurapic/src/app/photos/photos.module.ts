import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoService } from './Photo/photo.service';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent],
  imports: [HttpClientModule]
})
export class PhotosModule {
  photos: any[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService.listFromUser('flavio')
      .subscribe(
        photos => {
          this.photos = photos
        }
      );
  }
}
