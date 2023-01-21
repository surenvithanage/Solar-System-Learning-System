import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { CommonService } from '../../common.service';
import { LoginModel } from '../../model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  @ViewChild('f')
  f: NgForm;

  public model = new LoginModel('', '');

  constructor(
    public service: CommonService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.login(this.model).subscribe(
      data => {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Authorized',
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(() => {
          window.location.href = 'http://localhost:4200/home';
        }, 1500);
        localStorage.setItem('user', JSON.stringify(data));
        localStorage.setItem('authorized', JSON.stringify(true));
      }, err => {
        Swal.fire({
          position: 'top-center',
          icon: 'error',
          title: 'Invalid Credentials',
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }

}
