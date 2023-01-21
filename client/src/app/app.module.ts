import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SolarSystemComponent } from './components/pages/home/solar-system/solar-system.component';
import { LoginComponent } from './components/pre-login/login/login.component';
import { RegisterComponent } from './components/pre-login/register/register.component';
import { ResetComponent } from './components/pre-login/reset/reset.component';
import { MainComponent } from './components/template/main/main.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { QuizComponent } from './components/pages/quiz/quiz.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SolarSystemComponent,
    LoginComponent,
    RegisterComponent,
    ResetComponent,
    MainComponent,
    FaqComponent,
    QuizComponent,
    ContactUsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
