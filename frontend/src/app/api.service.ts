import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class ApiService {

    private selectedQuestions = new Subject<any>();
    questionSelected = this.selectedQuestions.asObservable();

    private selectedQuiz = new Subject<any>();
    quizSelected = this. selectedQuiz.asObservable();

    constructor(private http: HttpClient) {}

    postQuestion(question) {
        this.http.post('http://localhost:60763/api/questions', question).subscribe(res => {
            console.log(res);
        });
    }

    putQuestion(question) {
        this.http.put(`http://localhost:60763/api/questions/${question.id}`, question).subscribe(res => {
            console.log(res);
        });
    }

    getQuestions() {
        return this.http.get("http://localhost:60763/api/questions");
    }

    getQuizzes() {
        return this.http.get("http://localhost:60763/api/quizzes");
    }

    postQuiz(quiz) {
        this.http.post('http://localhost:60763/api/quizzes', quiz).subscribe(res => {
            console.log(res);
        });
    }

    putQuiz(quiz) {
        this.http.put(`http://localhost:60763/api/quizzes/${quiz.id}`, quiz).subscribe(res => {
            console.log(res);
        });
    }

    selectQuestion(question) {
        console.log(question);
        this.selectedQuestions.next(question);
    }

    selectQuiz(quiz) {
        console.log(quiz);
        this.selectedQuiz.next(quiz);
    }
}