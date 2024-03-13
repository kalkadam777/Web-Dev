import {Component, OnInit} from '@angular/core';
import {AlbumsService} from "../albums.service";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {Album, Photo} from "../models";
import {CommonModule, NgIf} from "@angular/common";

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [RouterModule, NgIf, CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent  implements  OnInit{

    photos: Photo[] = [];
    constructor( private albumService: AlbumsService,
                 private route: ActivatedRoute,
                 private router: Router) {
    }

    ngOnInit() {
      this.getPhotos();
    }

    getPhotos(){
      this.route.paramMap.subscribe((params)=>{
        const albumId: number = Number(params.get('albumId'));
        this.albumService.getAlbumPhotos(albumId).subscribe((photos)=>{
          this.photos = photos;
          console.log(photos);
        });
      })
    }

  goBack(): void {
    this.router.navigate(['/albums']);
  }


}
