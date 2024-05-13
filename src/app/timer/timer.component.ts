// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Subscription, interval } from 'rxjs';


// @Component({
//   selector: 'app-timer',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './timer.component.html',
<<<<<<< HEAD
//   styleUrls: './timer.component.scss'
// })
// export class TimerComponent implements OnInit, OnDestroy {

//   // private subscription!: Subscription;
=======
//   styleUrl: './timer.component.scss'
// })
// export class TimerComponent implements OnInit, OnDestroy {

//   private subscription!: Subscription;
>>>>>>> 1d0abe3f095c5de22b8bec5198437b5821d6c44d

//   public dateNow = new Date()
//   public dDay = new Date('Nov 29 2023 14:00 :00');

//   milliSecondsInASecond = 1000;
//   hoursInADay = 24;
//   minutesInAnHour = 60;
//   SecondsInAMinute  = 60;

//   public timeDifference: any;
//   public secondsToDday: any;
//   public minutesToDday: any;
//   public hoursToDday:any;
//   public daysToDday: any;

//   private getTimeDifference () {
//     this.timeDifference = this.dDay.getTime() - new  Date().getTime();
//     this.allocateTimeUnits(this.timeDifference);
// }

// private allocateTimeUnits (timeDifference: any) {
//   this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
//   this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
//   this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
//   this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
// }

// ngOnInit() {
//   this.subscription = interval(1000)
//       .subscribe(x => { this.getTimeDifference(); });
//  }

// ngOnDestroy() {
// this.subscription.unsubscribe();
// }




// }
