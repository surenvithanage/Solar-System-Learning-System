import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/common.service';
import { QuizModel } from 'src/app/models/quiz.model';

@Component({
  selector: 'app-quiz-management',
  templateUrl: './quiz-management.component.html',
  styleUrls: ['./quiz-management.component.scss']
})
export class QuizManagementComponent implements OnInit {
  @ViewChild('f')
  f: NgForm;

  @ViewChild('createModal') private createModal: TemplateRef<object>;
  @ViewChild('updateModal') private updateModal: TemplateRef<object>;

  public model = new QuizModel('', '','','');
  public updateModel =  new QuizModel('', '','','');

  public dataList: any = [];

  public pk_id: any;

  constructor(private modalService: NgbModal, private service: CommonService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.loadList();
  }

  loadList() {
    this.service.loadQuizList().subscribe(
      data => {
        this.dataList = data;
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
    this.service.createQuiz(this.model).subscribe(
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
    this.service.updateQuiz(this.updateModel).subscribe(
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
    this.service.deleteQuiz(payload).subscribe(
      data => {
        this.toastr.success("Deleted successfully.", "Success");
        this.modalService.dismissAll();
        this.loadList();
      }, err => {
        this.toastr.error("Error occured while processing request.", "Error");
      }
    )
  }

  handleUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.model.quizFile = reader.result.toString().substring(28);
    };
  }

}
