import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public user: any;

  constructor() {
    this.user = JSON.parse(localStorage.getItem('user'));
   }

  ngOnInit() {
  }

}
