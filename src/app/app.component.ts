import { Component } from '@angular/core';
import { carouselImages } from './components/carousel/carousel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sineoin-app';
  carouselImages:carouselImages[]=[
    {
      imageALT:'essential oils',
      imageSRC:'https://images.unsplash.com/photo-1624454002302-36b824d7bd0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZXNzZW50aWFsJTIwb2lsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      imageALT:'essential oils',
      imageSRC:'https://images.unsplash.com/photo-1605039982749-c2fe1dd2a588?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXNzZW50aWFsJTIwb2lsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      imageALT:'essential oils',
      imageSRC:'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      imageALT:'essential oils',
      imageSRC:'https://images.pexels.com/photos/4041386/pexels-photo-4041386.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    ]
}
