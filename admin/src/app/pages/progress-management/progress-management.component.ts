import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/common.service';
import { ProgressModel } from 'src/app/models/progress.model';

@Component({
  selector: 'app-progress-management',
  templateUrl: './progress-management.component.html',
  styleUrls: ['./progress-management.component.scss']
})
export class ProgressManagementComponent implements OnInit {
  @ViewChild('f')
  f: NgForm;

  @ViewChild('updateModal') private updateModal: TemplateRef<object>;

  public model = new ProgressModel('', '','','','');
  public updateModel =  new ProgressModel('', '','','','');

  public progressList: any = [];

  public pk_id: any;

  constructor(private modalService: NgbModal, private service: CommonService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.loadList();
  }

  loadList() {
    this.service.loadProgressList().subscribe(
      data => {
        this.progressList = data;
      }
    )
  }

  open(payload) {
    this.pk_id = payload[0];
    this.updateModel.id = payload[0];
    this.updateModel.userId = payload[3];
    this.updateModel.quizId = payload[4];
    this.updateModel.marks = payload[1];
    this.updateModel.progress = payload[2];
    this.modalService.open(this.updateModal, { ariaLabelledBy: 'modal-basic-title', centered: true });
  }

  onUpdate() {
    this.updateModel.id = this.pk_id;
    this.service.updateProgress(this.updateModel).subscribe(
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
    this.service.deleteProgress(payload).subscribe(
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
