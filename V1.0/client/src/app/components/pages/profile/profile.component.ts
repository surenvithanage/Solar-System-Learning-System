import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../model/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public model = new UserModel('','','','');

  constructor() { }

  ngOnInit(): void {
    this.model.username = JSON.parse(localStorage.getItem('user'))['username'];
    this.model.address = JSON.parse(localStorage.getItem('user'))['address'];
    this.model.dob = JSON.parse(localStorage.getItem('user'))['dob'];
    this.model.email = JSON.parse(localStorage.getItem('user'))['email'];
  }

}
