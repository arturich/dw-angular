import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor() { }

  loadingStatus: BehaviorSubject<boolean> = new BehaviorSubject(false);

  loading(flag : boolean) {
    this.loadingStatus.next(flag);
  }

}
