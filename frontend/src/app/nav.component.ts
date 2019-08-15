import { Component } from '@angular/core';

@Component({
  selector: 'nav',
  template: `
    <mat-toolbar>
        <button mat-button routerLink="/">Home</button>
        <button mat-button routerLink="/quiz">Quiz</button>
        <button mat-button routerLink="/question">Question</button>
        <span style="flex: 1"></span>
        <button mat-button routerLink="/register">Register</button>
    </mat-toolbar>
  `
})
export class NavComponent {
  title = 'My App';
}
