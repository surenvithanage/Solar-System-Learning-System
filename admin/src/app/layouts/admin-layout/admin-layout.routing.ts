import { Routes } from '@angular/router';

import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { UserManagementComponent } from 'src/app/pages/user-management/user-management.component';
import { EndpointManagementComponent } from 'src/app/pages/endpoint-management/endpoint-management.component';
import { FaqManagementComponent } from 'src/app/pages/faq-management/faq-management.component';
import { ProgressManagementComponent } from 'src/app/pages/progress-management/progress-management.component';
import { QuizManagementComponent } from 'src/app/pages/quiz-management/quiz-management.component';
import { RoleManagementComponent } from 'src/app/pages/role-management/role-management.component';
import { SubTopicManagementComponent } from 'src/app/pages/sub-topic-management/sub-topic-management.component';
import { TopicManagementComponent } from 'src/app/pages/topic-management/topic-management.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'user',           component: UserManagementComponent },
    { path: 'endpoint',       component: EndpointManagementComponent },
    { path: 'faq',           component: FaqManagementComponent },
    { path: 'progress',           component: ProgressManagementComponent },
    { path: 'quiz',           component: QuizManagementComponent },
    { path: 'subtopic',           component: SubTopicManagementComponent },
    { path: 'topic',           component: TopicManagementComponent },
    { path: 'role',           component: RoleManagementComponent }
];
