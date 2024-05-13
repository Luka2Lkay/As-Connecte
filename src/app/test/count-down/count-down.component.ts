import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit{

  private readonly countdownDuration = 60 * 60 * 1000; // 1 hour in milliseconds
  startTime: number= 0;

  days: number= 0;
  hours: number =0;
  minutes: number = 0;
  seconds: number = 0;
  isLoaded: any = false;
  oneDayVouchers = ['123456789123', '123456789124', '123456789125'];
  loadVoucherField: any;
  message: any;
  _voucherService: any;
  voucher:any =''

  ngOnInit() {
    // Step 2: Retrieve start time from local storage
    // const storedStartTime = localStorage.getItem('countdownStartTime');

    // if (storedStartTime) {
    //   this.startTime = Number(storedStartTime);
    //   this.resumeCountdown();
    // } else {
    //   // Step 1: Start a new countdown
    //   // this.startTime = new Date().getTime();
    //   // localStorage.setItem('countdownStartTime', this.startTime.toString());
    //   // this.resumeCountdown();
    // }
  }

  // resumeCountdown() {
  //   setInterval(() => {
      
  //     // Step 3: Calculate remaining time and update display
  //     const currentTime = new Date().getTime();
  //     const elapsedTime = Number(currentTime - this.startTime);
  //     const remainingTime = Number(this.countdownDuration - elapsedTime);

  //     this.days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  //     this.hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //     this.minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  //     this.seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  //     console.log(typeof(this.seconds ))
  //     localStorage.setItem('countdownStartTime', JSON.stringify(this.startTime));
  //   }, 1000);
  // }

  // loadVoucher() {
  //   let array = []
  //    const  voucher  = this.voucher;
    
  //    if (this.oneDayVouchers.includes(voucher)){
      
  //     console.log(voucher)
  //     this.resumeCountdown()
  //    }
 
    //  //this.message = this._voucherService.invalidVoucher(voucher);
 
    //  if (this.isLoaded === false) {
    //    if (
    //      this.oneDayVouchers.includes(voucher)
         
    //    ) {
    //      this.message = 'Succesfully loaded';
    //      this.isLoaded = true;
         
    //      if (this.oneDayVouchers.includes(voucher)) {
    //        this.getOneDayVoucher();
    //      } 
    //    }
    //  } else if (this.isLoaded === true) {
    //    this.loadVoucherField;
    //    array.push(this.isLoaded)
    //    window.location.href = 'https://www.google.com/';
    //  }
   }


