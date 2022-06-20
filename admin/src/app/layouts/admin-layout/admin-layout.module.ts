import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserManagementComponent } from 'src/app/pages/user-management/user-management.component';
import { EndpointManagementComponent } from 'src/app/pages/endpoint-management/endpoint-management.component';
import { FaqManagementComponent } from 'src/app/pages/faq-management/faq-management.component';
import { ProgressManagementComponent } from 'src/app/pages/progress-management/progress-management.component';
import { RoleManagementComponent } from 'src/app/pages/role-management/role-management.component';
import { SubTopicManagementComponent } from 'src/app/pages/sub-topic-management/sub-topic-management.component';
import { TopicManagementComponent } from 'src/app/pages/topic-management/topic-management.component';
import { QuizManagementComponent } from 'src/app/pages/quiz-management/quiz-management.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    UserProfileComponent,
    UserManagementComponent,
    EndpointManagementComponent,
    FaqManagementComponent,
    ProgressManagementComponent,
    RoleManagementComponent,
    SubTopicManagementComponent,
    TopicManagementComponent,
    QuizManagementComponent
  ]
})

export class AdminLayoutModule {}
