import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/common.service';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserManagementComponent implements OnInit {
  @ViewChild('f')
  f: NgForm;

  @ViewChild('createUser') private createUser: TemplateRef<object>;
  @ViewChild('updateUser') private updateUser: TemplateRef<object>;

  public model = new UserModel('', '', '', '', '', '', '');
  public updateModel = new UserModel('', '', '', '', '', '', '');
  public deleteModal = new UserModel('', '', '', '', '', '', '');

  public userList: any = [];

  public pk_id: any;

  constructor(private modalService: NgbModal, private service: CommonService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadList();
  }

  loadList() {
    this.service.loadUserList().subscribe(
      data => {
        this.userList = data;
      }
    )
  }

  create() {
    this.modalService.open(this.createUser, { ariaLabelledBy: 'modal-basic-title', centered: true });
  }

  open(payload) {
    this.pk_id = payload.id;
    this.updateModel = payload;
    this.modalService.open(this.updateUser, { ariaLabelledBy: 'modal-basic-title', centered: true });
  }

  onSubmit() {
    this.model.roleId = '1';
    this.service.createUser(this.model).subscribe(
      data => {
        this.toastr.success("User created successfully.", "Success");
        this.modalService.dismissAll();
        this.loadList();
      }, err => {
        this.toastr.error("Error occured while processing request.", "Error");
      }
    )
  }

  onUpdate() {
    this.updateModel.id = this.pk_id;
    this.service.updateUser(this.updateModel).subscribe(
      data => {
        this.toastr.success("User updated successfully.", "Success");
        this.modalService.dismissAll();
        this.loadList();
      }, err => {
        this.toastr.error("Error occured while processing request.", "Error");
      }
    )
  }

  delete(payload) {
    this.deleteModal.id = payload.id;
    this.service.deleteUser(this.deleteModal).subscribe(
      data => {
        this.toastr.success("User deleted successfully.", "Success");
        this.modalService.dismissAll();
        this.loadList();
      }, err => {
        this.toastr.error("Error occured while processing request.", "Error");
      }
    )
  }


}
