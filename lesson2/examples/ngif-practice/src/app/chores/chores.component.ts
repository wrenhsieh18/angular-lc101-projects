import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries', 'Do laundry', 'Finish homework'];
   finishedChores = [];

   targetImage = 'https://thumbs.dreamstime.com/b/done-text-green-grungy-vintage-rectangle-stamp-done-text-green-grungy-vintage-stamp-214435444.jpg';

   constructor() { }

   ngOnInit() {
   }

}
