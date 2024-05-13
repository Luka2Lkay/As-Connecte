import { Component } from '@angular/core';
import {FormGroup, Validators, FormControl } from  '@angular/forms';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent {


ngOnInIt(): void{}

supportForm: FormGroup= new FormGroup({
  cellphone: new FormControl('', Validators.required),
  email: new FormControl('', Validators.required),
  reasonforcontact: new FormControl('', Validators.required),
  message: new FormControl('', Validators.required)

})

  submitSupportForm(){

  }

}

