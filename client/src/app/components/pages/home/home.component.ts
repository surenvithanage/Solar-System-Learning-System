import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  endpointList: any = [];

  constructor(
    public service: CommonService
  ) {
  }

  ngOnInit(): void {
    this.service.endpoint().subscribe(
      data => {
        this.endpointList = data;
      }
    )
  }

}
