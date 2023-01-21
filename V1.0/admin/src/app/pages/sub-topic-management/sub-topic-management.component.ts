import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/common.service';
import { SubTopicModel } from 'src/app/models/subtopic.model';

@Component({
  selector: 'app-sub-topic-management',
  templateUrl: './sub-topic-management.component.html',
  styleUrls: ['./sub-topic-management.component.scss']
})
export class SubTopicManagementComponent implements OnInit {
  @ViewChild('f')
  f: NgForm;

  @ViewChild('createModal') private createModal: TemplateRef<object>;
  @ViewChild('updateModal') private updateModal: TemplateRef<object>;

  public model = new SubTopicModel('', '','','');
  public updateModel =  new SubTopicModel('', '','','');

  public dataList: any = [];
  public topicList: any = [];

  public pk_id: any;

  constructor(private modalService: NgbModal, private service: CommonService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.loadList();
    this.loadTopicList();
  }

  loadList() {
    this.service.loadSubTopicList().subscribe(
      data => {
        this.dataList = data;
      }
    )
  }

  loadTopicList() {
    this.service.loadTopicList().subscribe(
      data => {
        this.topicList = data;
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
    this.service.createSubTopic(this.model).subscribe(
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
    this.service.updateSubTopic(this.updateModel).subscribe(
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
    this.service.deleteSubTopic(payload).subscribe(
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
