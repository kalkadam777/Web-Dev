import {Component, OnInit} from '@angular/core';
import {Album} from "../models";
import {AlbumsService} from "../albums.service";
import {CommonModule, NgIf} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [ CommonModule, RouterModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{

    albums!: Album[]
    newAlbum: Album;
    loaded:boolean = false;
  constructor(private albumsService: AlbumsService) {
    this.newAlbum = {
      userId: 101,
      id: 1,
      title: ''
    };
  }
  ngOnInit() {
    this.getAlbums();
  }


  addAlbum() {
    this.albumsService.createAlbum(this.newAlbum).subscribe((album)=>{
      // console.log(album)
      // let maxId = this.albums.reduce((acc, cur) => Math.max(acc, cur.id), 0);
      // album.id = maxId + 1;
      this.albums.push(album);
      this.newAlbum = {} as Album;
    })
  }

  getAlbums() {
    this.albumsService.getAlbums().subscribe((albums)=>{
      // console.log(albums)
      this.albums = albums;
      this.loaded = true;
    });
  }
  deleteAlbum(id: number){
    this.albums = this.albums.filter((album)=>album.id !== id);
      this.albumsService.deleteAlbum(id).subscribe(()=>{

      })
  }
}
