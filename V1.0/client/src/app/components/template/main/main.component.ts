import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public isAuthorized: boolean;

  constructor() {
    this.isAuthorized = false;
  }

  ngOnInit(): void {
    this.isAuthorized = JSON.parse(localStorage.getItem('authorized'));
  }

  redirectHome() {
    window.location.href = 'http://localhost:4200/home';
  }

  logout() {
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'Successfully Logged Out',
      showConfirmButton: false,
      timer: 1500
    })
    setTimeout(() => {
      localStorage.removeItem('user');
      localStorage.setItem('authorized', JSON.stringify(false));
      window.location.href = 'http://localhost:4200/login';
    }, 1500);

  }
}
