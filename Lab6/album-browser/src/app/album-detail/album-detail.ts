import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.html',
  styleUrls: ['./album-detail.css']
})
export class AlbumDetail implements OnInit {
  album: Album | null = null;
  loading = true;
  error = '';

  editedTitle = '';
  saving = false;

  private albumId = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbum(this.albumId).subscribe({
      next: (data) => {
        this.album = data;
        this.editedTitle = data.title;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load album.';
        this.loading = false;
      }
    });
  }

  save(): void {
    if (!this.album) return;

    this.saving = true;
    const updated: Album = { ...this.album, title: this.editedTitle };

    this.albumService.updateAlbum(updated).subscribe({
      next: (saved) => {
        // JSONPlaceholder не сохраняет реально, но UI обновляем локально
        this.album = saved;
        this.editedTitle = saved.title;
        this.saving = false;
      },
      error: () => {
        alert('Save failed (API may be unreachable).');
        this.saving = false;
      }
    });
  }

  goPhotos(): void {
    this.router.navigate(['/albums', this.albumId, 'photos']);
  }

  backToAlbums(): void {
    this.router.navigate(['/albums']);
  }
}