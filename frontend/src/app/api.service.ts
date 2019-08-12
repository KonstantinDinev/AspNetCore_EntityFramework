import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class ApiService {

    private selectedQuestions = new Subject<any>();
    questionSelected = this.selectedQuestions.asObservable();

    constructor(private http: HttpClient) {}

    postQuestion(question) {
        this.http.post('http://localhost:60763/api/questions', question).subscribe(res => {
            console.log(res);
        });
    }

    getQuestions() {
        return this.http.get("http://localhost:60763/api/questions");
    }

    selectQuestion(question) {
        console.log(question);
        this.selectedQuestions.next(question);
    }
}