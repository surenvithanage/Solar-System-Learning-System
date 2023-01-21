import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { QuizComponent } from './components/pages/quiz/quiz.component';
import { LoginComponent } from './components/pre-login/login/login.component';
import { RegisterComponent } from './components/pre-login/register/register.component';
import { ResetComponent } from './components/pre-login/reset/reset.component';
import { MainComponent } from './components/template/main/main.component';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'register', component: RegisterComponent,
  },
  {
    path: 'reset', component: ResetComponent,
  },
  {
    path: 'home', component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'contactus', component: ContactUsComponent },
      { path: 'quiz', component: QuizComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
