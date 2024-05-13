import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { VoucherloadedService } from 'src/services/voucherloaded.service';

@Component({
  selector: 'app-loadvoucher',
  templateUrl: './loadvoucher.component.html',
  styleUrls: ['./loadvoucher.component.scss'],
})
export class LoadvoucherComponent implements OnInit {
  countdown: number=0;
  timer: any;
  redeemedVoucher!: string;
  expirationTime!: number;
  voucherCode!: string

  isTimerExpired: boolean = false;

  // myVouche={voucherid: 1,
  // expirationTime:this.expirationTime,
  // price: 24, voucherCode: '123456'}

  voucherForm: FormGroup = new FormGroup({
    voucher: new FormControl('', Validators.required),
  });
  private startTime!: number;
  private readonly countdownDuration = 60 * 60 * 1000;

  constructor(private _voucherService: VoucherloadedService) {}

  message?: string;
  message_class = ""
  isLoaded: any = false;
  oneDayVouchers = ['123456789124', '123456789125'];
  // threeDaysVouchers = ['123456789126', '123456789127', '123456789128'];
  // sevenDaysVouchers = ['123456789133', '123456789144', '123456789155'];

  days: any = 0;
  hours: any = 0;
  minutes: any = 0;
  seconds: any = 0;
  isloasdedFrom :any
  ngOnInit(): void {
    this.isloasdedFrom = localStorage.getItem("isLoaded")
    // const storedTime = Number(localStorage.getItem("timerExpiration"));
    // const now = localStorage.getItem('now');

    // if (storedTime) {
    //   this.startTime = Number(storedTime);
    //   console.log(now)
    //   //this.resumeCountdown();
    //   console.log(this.startTime)
    // } else {
    //   // Step 1: Start a new countdown
    //   this.startTime = new Date().getTime();
    //   //localStorage.setItem('countdownStartTime', this.startTime.toString());
    //   console.log(storedTime)
    
    // }

    //saves on the localStorage
      const redeemedVoucher = localStorage.getItem('redeemedVoucher');
      const expirationTime = localStorage.getItem('expirationTime');

      if (redeemedVoucher && expirationTime) {
          this.redeemedVoucher = redeemedVoucher;
          this.expirationTime = Number(expirationTime);
          this.startCountdown();
      }
  }


    // resumeCountdown1() {
    //   setInterval(() => {
    //     // Step 3: Calculate remaining time and update display
    //     const currentTime = new Date().getTime();
    //     const elapsedTime = currentTime - this.startTime;
    //     const remainingTime = this.countdownDuration - elapsedTime;

    //     this.days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    //     this.hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //     this.minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    //     this.seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    //   }, 1000);
    // }
  

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

  // getOneDayVoucher() {

  //   const date = new Date().toDateString().split(' ');
  //   const getHours = new Date().getHours();
  //   const getMinutes = new Date().getMinutes();
  //   const getSeconds = new Date().getSeconds();

  //   const countDownDate = new Date(
  //     `Nov ${parseInt(date[2]) + 1}, 2023 ${getHours}:${getMinutes}:${getSeconds}`
  //   ).getTime();


  
  //   setInterval(() => {
  //     const currentTime = new Date().getTime();
  //     const timeDiff = countDownDate - currentTime;
  
  //     //update time remaning
  //     this.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  //     this.hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //     this.minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  //     this.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  //     // Check if the timer has expired
  //     this.isTimerExpired = timeDiff <= 0;
            
  //     // Update sessionStorage with the remaining time
  //     localStorage.setItem('timerExpiration', timeDiff.toString());
  //     localStorage.setItem('now',Date());
      
  //   }, 
  //   1000);
  // }

    // resumeTime(){
    //   const storedTimeDiff = localStorage.getItem('timerExpiration');
    //   if(storedTimeDiff){
    //     const timeDiff = parseInt(storedTimeDiff, 10);

    //     //call getOnedayVoucher with remaining time
    //     this.getOneDayVoucher();
    //   } else {
    //     //start a new timer if no stored time
    //     this.getOneDayVoucher();
    //   }
    // }


  // clearTimeInteval(){
  //   //clear the interval when the component is distroyed
  //   if(this.)
  // }


    loadVoucher() {
    let array = []
    let ls_voucher = localStorage.getItem('redeemedVoucher')
    const { voucher } = this.voucherForm.value;
   
    // if(voucher == ls_voucher){
      
    //   this.message = "Voucher already redeemed!";
    //   this.message_class = 'fail'
    //   return
    // }

    this.message = this._voucherService.invalidVoucher(voucher);

    this.validateRedeemedVoucher();

    if (this.isLoaded === false) {
      if (this.oneDayVouchers.includes(voucher)) {
        this.message = 'Succesfully loaded';
        this.message_class = 'success'
        this.isLoaded = true;
        this.isloasdedFrom = true
        localStorage.setItem('isLoaded', this.isLoaded)
        
        if (this.oneDayVouchers.includes(voucher)) {
          this.redeemVoucher();
          //this.resumeCountdown1()
        }  
      }
    } else if (this.isLoaded === true) {
      window.location.href = 'https://www.google.com/';
      this.voucherForm;
      array.push(this.isLoaded)
      
    }

    if (this.getRemainingTime() > 0 && array.includes(voucher)) {
      this.message = 'Seems like the voucher has already been loaded!';
    }
  }

  //

      startCountdown() {
      this.countdown = this.getRemainingTime();

      this.timer = setInterval(() =>
      {
      this.countdown--;
        if (this.countdown <= 0) {
        this.stopCountdown();
        }
      }, 1000); // Update everysecond
      }
      stopCountdown() {
      clearInterval(this.timer);
      // You may want to reset the voucher state here if needed
      }

      formatTime(totalSeconds: number):string {
        const days = Math.floor(totalSeconds / (24 * 60 * 60));
        const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        
        return `${this.pad(days)}:${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
      }

      private pad(value: number):string {
        
        return value < 10 ? `0${value}`: `${value}`;

      }

      getRemainingTime(): number {
        const currentTime = Math.floor(new Date().getTime() / 1000);
        const remainingTime = this.expirationTime - currentTime;
        
        return remainingTime > 0 ? remainingTime : 0;
      }

        redeemVoucher() {
          const { voucher } = this.voucherForm.value;
          this.redeemedVoucher = voucher;
          
          if(!this.oneDayVouchers.includes(voucher)){
            console.log("~ Invalid Voucher")
            return
          }

  
          this.expirationTime = this.calculateExpirationTime();

          localStorage.setItem('redeemedVoucher', this.redeemedVoucher);
          localStorage.setItem('expirationTime',
            JSON.stringify(this.expirationTime));

          this.startCountdown()

        }

        validateRedeemedVoucher(){
          // const redeemedVoucher = localStorage.getItem('redeemedVoucher');
    
          const { voucher } = this.voucherForm.value;
          this.redeemedVoucher = voucher;
          
          if(voucher == localStorage.getItem('redeemedVoucher')){
            this.message = "Voucher doesn't exist";
            return
          }
            localStorage.removeItem('redeemedVoucher')
        }

        private calculateExpirationTime(): number {

        const currentTimestamp = Math.floor(new Date().getTime() /1000);
        return currentTimestamp -1 + 24 * 60; // 24 hours in seconds  
  }

  twitter(){
    window.location.href="twitter.com"
  }
}
