import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivationStart, Router, RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/common.service';
import { LoginModel } from 'src/app/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  @ViewChild('f')
  f: NgForm;

  @ViewChild(RouterOutlet) outlet: RouterOutlet;

  public model = new LoginModel('', '');

  constructor(
    public commonService: CommonService,
    public toastr: ToastrService,
    public router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart)
        this.outlet.deactivate();
    });
  }

  onSubmit() {
    this.commonService.login(this.model).subscribe(
      data => {
        localStorage.setItem('user', JSON.stringify(data));
        this.router.navigate(['/user']);
      }, err => {
        this.toastr.error("Invalid Credentials", "Error");
      }
    )
  }

  ngOnDestroy(): void {
    
  }

}
