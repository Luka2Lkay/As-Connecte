import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class CounterService {

  private _counter = new BehaviorSubject<number>(0);

  counter$ = this._counter.asObservable();

  updateCounter(newConter: number) {
    this._counter.next(newConter)
  } 
  constructor() { }
  
}
