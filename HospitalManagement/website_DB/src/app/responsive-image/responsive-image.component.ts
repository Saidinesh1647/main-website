// responsive-image.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-responsive-image',
  templateUrl: './responsive-image.component.html',
  styleUrls: ['./responsive-image.component.css']
})
export class ResponsiveImageComponent implements OnInit {
  imageUrl: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Fetch image URL based on device or resolution
    this.imageUrl = this.getImageUrl();
  }

  getImageUrl(): string {
    // Logic to determine the appropriate image URL
    // Use your image resizing service here

    // Example URL for different sizes
    return 'https://example.com/image-smartphone.jpg';
  }
}
