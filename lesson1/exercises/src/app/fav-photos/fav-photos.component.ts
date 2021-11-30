import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My favorite animals';
  image1 = 'https://www.gannett-cdn.com/-mm-/9e1f6e2ee20f44aa1f3be4f71e9f3e52b6ae2c7e/c=0-110-2121-1303/local/-/media/2020/06/22/USATODAY/usatsports/MotleyFool-TMOT-3c937e85-a-tortoise.jpg?width=2121&height=1193&fit=crop&format=pjpg&auto=webp';
  image2 = 'https://www.aces.edu/wp-content/uploads/2018/11/iStock-182344013.jpg';
  image3 = 'https://files.worldwildlife.org/wwfcmsprod/images/African_Elephant_Kenya_112367/story_full_width/qxyqxqjtu_WW187785.jpg';

  constructor() { }

  ngOnInit() {
  }

}