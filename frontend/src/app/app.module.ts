import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatCardModule,
  MatListModule,
  MatToolbarModule
  } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import { ApiService } from './api.service';
import { QuestionsComponent } from './questions.component';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav.component';
import { QuizComponent } from './quiz.component';
import { QuizzesComponent } from './quizzes.component';
import { RegisterComponent } from './register.component';
import { AuthService } from './auth.service';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'question/:quizId', component: QuestionComponent },
  //{ path: 'questions', component: QuestionsComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  declarations: [
    AppComponent, 
    QuestionComponent,
    QuestionsComponent,
    HomeComponent,
    NavComponent,
    QuizComponent,
    QuizzesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    RouterModule.forRoot(routes),
    BrowserModule, 
    BrowserAnimationsModule,
    MatButtonModule, 
    MatInputModule, 
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatCheckboxModule,
    MatToolbarModule
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
