import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { VoucherloadedService } from 'src/services/voucherloaded.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loadvoucher',
  templateUrl: './loadvoucher.component.html',
  styleUrls: ['./loadvoucher.component.scss'],
})
export class LoadvoucherComponent implements OnInit {
  countdown: number = 0;
  timer: any;
  redeemedVoucher!: string;
  expirationTime!: number;
  voucherCode!: string;

  isTimerExpired: boolean = false;

  voucherForm: FormGroup = new FormGroup({
    voucher: new FormControl('', Validators.required),
  });

  constructor(
    private _voucherService: VoucherloadedService,
    private _router: Router
  ) {}

  message?: string;
  isLoaded: boolean = false;
  isHidden: boolean = false;

  oneDayVouchers = ['123456789124', '123456789125'];

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  ngOnInit(): void {
    //saves on the localStorage
    const redeemedVoucher = localStorage.getItem('redeemedVoucher');
    const expirationTime = localStorage.getItem('expirationTime');

    if (redeemedVoucher && expirationTime) {
      this.redeemedVoucher = redeemedVoucher;
      this.expirationTime = Number(expirationTime);
      this.isLoaded = true;
      this.isHidden = true;
      this.startCountdown();
    } else {
      this.isLoaded = false;
      this.isHidden = false;
    }
  }

  loadVoucher() {
    let { voucher } = this.voucherForm.value;

    this.message = this._voucherService.invalidVoucher(voucher);

    if (this.isLoaded === false) {
      if (this.oneDayVouchers.includes(voucher)) {
        setTimeout(() => {
          this.message = '';
        }, 2000);
        this.message = 'Successfuly loaded!';
        this.isLoaded = true;
        localStorage.setItem('isLoaded', this.isLoaded.toString());
        this.redeemVoucher();
      } else {
        setTimeout(() => {
          this.message = '';
        }, 2000);
        this.message = 'Invalid Voucher!';
      }
    } else if (this.isLoaded === true) {
      window.open('https://www.google.com/', '_target');
    }
  }

  startCountdown() {
    this.countdown = this.getRemainingTime();

    this.timer = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        this.stopCountdown();
      }
    }, 1000);
  }

  stopCountdown() {
    clearInterval(this.timer);
    localStorage.removeItem('redeemedVoucher');
    window.location.reload();
  }

  formatTime(totalSeconds: number): string {
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (days >= 0 && hours >= 0 && minutes >= 0 && seconds >= 0) {
      return `${this.pad(days)}:${this.pad(hours)}:${this.pad(
        minutes
      )}:${this.pad(seconds)}`;
    }

    return '00:00:00:00';
  }

  private pad(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  getRemainingTime(): number {
    const currentTime = Math.floor(new Date().getTime() / 1000);
    if (currentTime != this.expirationTime) {
      const remainingTime = this.expirationTime - currentTime;
      return remainingTime > 0 ? remainingTime : 0;
    }
    return 0;
  }

  redeemVoucher() {
    const { voucher } = this.voucherForm.value;
    this.redeemedVoucher = voucher;

    this.expirationTime = this.calculateExpirationTime();

    localStorage.setItem('redeemedVoucher', this.redeemedVoucher);
    localStorage.setItem('expirationTime', JSON.stringify(this.expirationTime));

    this.startCountdown();
  }

  private calculateExpirationTime(): number {
    const currentTimestamp = Math.floor(new Date().getTime() / 1000);
    return currentTimestamp - 1 + 1 * 60;
  }

  twitter() {
    window.location.href = 'twitter.com';
  }
}
