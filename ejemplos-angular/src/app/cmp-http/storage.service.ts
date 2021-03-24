import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getToken() {
    return window.localStorage.getItem('auth');
  }

  saveToken() {
    window.localStorage.setItem('auth', 'asdj3h7d3bdy3d232d23d');
  }
}
