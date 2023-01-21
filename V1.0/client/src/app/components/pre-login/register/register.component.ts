import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterModel } from '../../model/register.model';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  @ViewChild('f')
  f: NgForm;

  public model = new RegisterModel('', '', '', '', '', '2');

  constructor(
    private service: CommonService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.register(this.model).subscribe(
      data => {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Registration Successful',
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(() => {
          window.location.href = 'http://localhost:4200/login';
        }, 1500);
        localStorage.setItem('user', JSON.stringify(data));
        localStorage.setItem('authorized', JSON.stringify(true));
      }, err => {
        Swal.fire({
          position: 'top-center',
          icon: 'error',
          title: 'Error occured while processing',
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }

}
