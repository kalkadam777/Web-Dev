import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {Album} from "../models";
import {AlbumsService} from "../albums.service";
import {CommonModule, Location, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterModule, NgIf, CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{

  album!:Album;
  loaded!: boolean;
  constructor(private route: ActivatedRoute,
              private albumService:AlbumsService,
              private location: Location) {
  }

  ngOnInit() {
    this.getAlbum();
  }

  goBack(){
    this.location.back()
  }

  save(): void {
    this.albumService.updateAlbum(this.album.id, this.album).subscribe(() => {
      console.log('worked')

      this.goBack();
    });
  }

  getAlbum() {
    this.route.paramMap.subscribe((params)=>{
      const albumId: number = Number(params.get('albumId'));
      this.loaded = false;
      this.albumService.getAlbum(albumId).subscribe((album)=>{
        this.album = album;
        this.loaded = true;
      })
    })
  }
}
