import { Component } from '@angular/core';
import {FormGroup, Validators, FormControl } from  '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})

export class SupportComponent {

constructor(public dialog: MatDialog, private _router: Router){}

supportForm: FormGroup= new FormGroup({
  cellphone: new FormControl('', Validators.required),
  email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
  reasonForContact: new FormControl('', Validators.required),
  message: new FormControl('', Validators.required)
})

public isHidden : boolean = false;

  submitSupportForm(){
    const dialogRef = this.dialog.open(SuccessDialogComponent);

    dialogRef.afterClosed().subscribe(()=> {
      this.supportForm.reset();
      this._router.navigate(['/', 'home'])
    });
  }
}

