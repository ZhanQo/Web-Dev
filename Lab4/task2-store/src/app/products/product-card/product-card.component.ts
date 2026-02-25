import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="card">
      <a class="imgWrap" [href]="product().link" target="_blank" rel="noopener">
        <img [src]="currentImage()" [alt]="product().name">
      </a>

      <h3 class="name">
        <a [href]="product().link" target="_blank" rel="noopener">{{ product().name }}</a>
      </h3>

      <p class="desc">{{ product().description }}</p>

      <div class="meta">
        <span class="price">{{ product().price }} ₸</span>
        <span class="rating" [title]="'Rating: ' + product().rating">
          {{ starsText() }} ({{ product().rating }})
        </span>
      </div>

      @if (product().images.length >= 3) {
        <div class="thumbs">
          @for (img of product().images; track img) {
            <button class="thumbBtn" type="button" (click)="setImage(img)">
              <img [src]="img" [alt]="product().name">
            </button>
          }
        </div>
      }
      

      <div class="actions">
        <a class="btn" [href]="whatsappShare()" target="_blank" rel="noopener">WhatsApp</a>
        <a class="btn" [href]="telegramShare()" target="_blank" rel="noopener">Telegram</a>
      </div>
    </article>
  `,
  styles: [`
    .card { border: 1px solid #e7e7e7; border-radius: 12px; padding: 12px; background: #fff; display: flex; flex-direction: column; gap: 10px; }
    .imgWrap img {
    width: 100%;
    height: 240px;      
    object-fit: contain;  
    display: block;
}
    img { width: 100%; height: 180px; object-fit: cover; display:block; }
    .name { margin: 0; font-size: 16px; }
    .name a { color: inherit; text-decoration: none; }
    .desc { margin: 0; color: #555; font-size: 13px; line-height: 1.35; }
    .meta { display:flex; justify-content: space-between; align-items: center; gap: 10px; }
    .price { font-weight: 700; }
    .rating { font-size: 13px; background: #f5f5f5; padding: 4px 8px; border-radius: 999px; }
    .thumbs { display:flex; gap: 8px; overflow:auto; padding-bottom: 4px; }
    .thumbBtn { border: 1px solid #e7e7e7; background:#fff; border-radius: 8px; padding: 0; width: 56px; height: 56px; overflow:hidden; cursor:pointer; flex: 0 0 auto; }
    .thumbBtn img {
    width: 56px;
    height: 56px;
    object-fit: cover;
    display: block; }

    .actions { display:flex; gap: 8px; margin-top: 2px; }
    .btn { text-decoration:none; border: 1px solid #e7e7e7; padding: 8px 10px; border-radius: 10px; font-size: 13px; }
  `]
})
export class ProductCardComponent {
  product = input.required<Product>();

  private selected = signal<string>('');

  currentImage = computed(() => this.selected() || this.product().image);

  setImage(img: string) {
    this.selected.set(img);
  }

  starsText = computed(() => {
    const r = Math.round(this.product().rating);
    return '★'.repeat(r) + '☆'.repeat(5 - r);
  });

  whatsappShare() {
    const text = `Check out this product: ${this.product().link}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }

  telegramShare() {
    const url = encodeURIComponent(this.product().link);
    const text = encodeURIComponent(this.product().name);
    return `https://t.me/share/url?url=${url}&text=${text}`;
  }
}