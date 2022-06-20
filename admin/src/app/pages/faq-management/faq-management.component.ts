import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/common.service';
import { FaqModel } from 'src/app/models/faq.model';

@Component({
  selector: 'app-faq-management',
  templateUrl: './faq-management.component.html',
  styleUrls: ['./faq-management.component.scss']
})
export class FaqManagementComponent implements OnInit {
  @ViewChild('f')
  f: NgForm;

  @ViewChild('createModal') private createModal: TemplateRef<object>;
  @ViewChild('updateModal') private updateModal: TemplateRef<object>;

  public model = new FaqModel('', '', '');
  public updateModel = new FaqModel('', '', '');

  public faqList: any = [];

  public pk_id: any;

  constructor(private modalService: NgbModal, private service: CommonService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadList();
  }

  loadList() {
    this.service.loadFaqList().subscribe(
      data => {
        this.faqList = data;
      }
    )
  }

  create() {
    this.modalService.open(this.createModal, { ariaLabelledBy: 'modal-basic-title', centered: true });
  }

  open(payload) {
    this.pk_id = payload.id;
    this.updateModel = payload;
    this.modalService.open(this.updateModal, { ariaLabelledBy: 'modal-basic-title', centered: true });
  }

  onSubmit() {
    this.service.createFaq(this.model).subscribe(
      data => {
        this.toastr.success("Created successfully.", "Success");
        this.modalService.dismissAll();
        this.loadList();
      }, err => {
        this.toastr.error("Error occured while processing request.", "Error");
      }
    )
  }

  onUpdate() {
    this.updateModel.id = this.pk_id;
    this.service.updateFaq(this.updateModel).subscribe(
      data => {
        this.toastr.success("Updated successfully.", "Success");
        this.modalService.dismissAll();
        this.loadList();
      }, err => {
        this.toastr.error("Error occured while processing request.", "Error");
      }
    )
  }

  delete(payload) {
    this.service.deleteFaq(payload).subscribe(
      data => {
        this.toastr.success("Deleted successfully.", "Success");
        this.modalService.dismissAll();
        this.loadList();
      }, err => {
        this.toastr.error("Error occured while processing request.", "Error");
      }
    )
  }

}
