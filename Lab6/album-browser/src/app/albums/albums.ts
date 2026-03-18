import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.html',
  styleUrls: ['./albums.css']
})
export class Albums implements OnInit {
  albums: Album[] = [];
  loading = true;
  error = '';

  constructor(private albumService: AlbumService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        const deleted = JSON.parse(localStorage.getItem('deletedAlbums') || '[]') as number[];
        this.albums = data;
        this.loading = false;
        this.cdr.detectChanges(); 
      },
      error: () => {
        this.error = 'Failed to load albums.';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  deleteAlbum(id: number): void {
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
      this.albums = this.albums.filter(a => a.id !== id);
      const deleted = JSON.parse(localStorage.getItem('deletedAlbums') || '[]') as number[]; 
      if(!deleted.includes(id)) deleted.push(id);
      localStorage.setItem('deletedAlbums', JSON.stringify(deleted));
      
      },
      error: () => {
        alert('Failed to delete album.');
      }
    });
  }
}
