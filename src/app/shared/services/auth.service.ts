import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private storage = localStorage;
  private key : string = "token";

  constructor() { 

  }

  save(token : string) {
    this.storage.setItem(this.key,token);
  }

  get() : string {
    return this.storage.getItem(this.key) || '';
  }

  clear() {

  }

  exist() {

  }

}
