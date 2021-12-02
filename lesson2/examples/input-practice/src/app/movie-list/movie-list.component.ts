import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   addTolist(movie: string) {
      let errorMsg: string = '';
      if (movie === "") {
         errorMsg = 'Please enter a movie title.';
      } else if (this.movies.includes(movie)){
         errorMsg = 'The movie has already been added to the list.';
      } else {
         this.movies.push(movie);
      }
      return errorMsg;
   }
}