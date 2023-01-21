import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/common.service';
import { RegisterModel } from 'src/app/models/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f')
  f: NgForm;

  public model = new RegisterModel('','','','','','');

  constructor(
    public commonService: CommonService,
    public toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.model.roleId = '1';
    this.commonService.register(this.model).subscribe(
      data => {
        this.toastr.success("Registration Successful.", "Success");
      },
      err => {
        this.toastr.error("Error occured while processing request.", "Error");
      }
    )
  }

}
