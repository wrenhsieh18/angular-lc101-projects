import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Exercises: Angular Lesson 3';

  color: string = 'green';
  height: number = 0;
  width: number = 0;
  message: string = 'Space shuttle ready for takeoff!';
  backgroundColor: string = 'green';
  xPosition: string = '0px';
  yPosition: string = '0px';
  buttonInactive: boolean = true;
  buttonInactiveUp: boolean = true;
  buttonInactiveDown: boolean = true;
  buttonInactiveRight: boolean = true;
  buttonInactiveLeft: boolean = true;

  readyToTakeOff() {
    let toTakeOff = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (toTakeOff) {
      this.message = `Shuttle in flight`;
      this.backgroundColor = 'blue';
      //this.height += 10000;
      this.move(10,'v');
      this.buttonInactive = false;
      this.buttonInactiveUp = false;
      this.buttonInactiveDown = false;
      this.buttonInactiveRight = false;
      this.buttonInactiveLeft = false;
    }
  }

  landing() {
    window.alert("The shuttle is landing. Landing gear engaged.");
    this.message = `The shuttle has landed.`;
    this.backgroundColor = 'green';
    this.height = 0;
    this.buttonInactive = true;
    this.buttonInactiveUp = true;
    this.buttonInactiveDown = true;
    this.buttonInactiveRight = true;
    this.buttonInactiveLeft = true;
  }

  abortMission() {
    let toAbortMission = window.confirm("Confirm to abort the mission.")
    if (toAbortMission) {
      this.message = `Mission aborted`;
      this.backgroundColor = 'red';
      this.height = 0;
      this.buttonInactive = true;
      this.buttonInactiveUp = true;
      this.buttonInactiveDown = true;
      this.buttonInactiveRight = true;
      this.buttonInactiveLeft = true;
    }
  }

  move(delta: number, direction: string) {
    this.buttonInactiveUp = false;
    this.buttonInactiveDown = false;
    this.buttonInactiveRight = false;
    this.buttonInactiveLeft = false;
    if (direction === 'h') {
      this.xPosition = Number(this.xPosition.substring(0,this.xPosition.length-2)) + delta + 'px';
      this.backgroundColor = 'blue'; 
    } else if (direction === 'v') {
      this.backgroundColor = 'blue';
      this.yPosition = Number(this.yPosition.substring(0,this.yPosition.length-2)) + delta + 'px';
      this.height += delta * 1000;
      if (this.height <= 10000) {
        this.height = 10000;
      }
    }

    if (Number(this.xPosition.substring(0,this.xPosition.length-2)) > 450) {
      this.buttonInactiveRight = true;
      this.backgroundColor = 'orange';
      this.xPosition = "450px";
    } else if (Number(this.xPosition.substring(0,this.xPosition.length-2)) < 0) {
      this.buttonInactiveLeft = true;
      this.backgroundColor = 'orange';
      this.xPosition = "0px";
    }

    if (Number(this.yPosition.substring(0,this.yPosition.length-2)) > 320) {
      this.buttonInactiveUp = true;
      this.backgroundColor = 'orange';
      this.yPosition = "320px";
    } else if (Number(this.yPosition.substring(0,this.yPosition.length-2)) < 0) {
      this.buttonInactiveDown = true;
      this.backgroundColor = 'orange';
      this.yPosition = "0px";
    }
  }
}
