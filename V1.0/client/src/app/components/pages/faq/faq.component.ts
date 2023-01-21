import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  faqList: any = [];

  constructor(
    public service: CommonService
  ) { }

  ngOnInit(): void {
    this.service.faq().subscribe(
      data => {
        this.faqList = data;
      }
    )
  }

}
