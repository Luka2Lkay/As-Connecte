import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VoucherloadedService {
  constructor() { }

  invalidVoucher(voucher: any) {
    let message;
    if (voucher.length < 12 || (voucher.length > 12 && voucher.length > 0)) {
      message = 'The voucher must be 12 digits long!'
    } else if (voucher.length === 0) {
      message = 'Please enter the voucher number!'
    } else if (/[^\d]/.test(voucher)) {
      message = 'The voucher must contain digits only!'
    }
    return message
  }

}
