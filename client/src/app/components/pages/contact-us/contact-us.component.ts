import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from '../../common.service';
import { ContactModel } from '../../model/contact.model';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  @ViewChild('f')
  f: NgForm;

  public model = new ContactModel('', '', '');

  constructor(
    public service: CommonService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.contact(this.model).subscribe(
      data => {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Request Sent Successfully',
          showConfirmButton: false,
          timer: 1500
        });
        this.model = new ContactModel('', '', '');
      }, err => {
        Swal.fire({
          position: 'top-center',
          icon: 'error',
          title: 'Error occured while processing request',
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }

}
