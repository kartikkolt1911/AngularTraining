import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule} from '@angular/forms'
import {MatchPasswordDirective} from './directives/match-password.directive'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-template-froms',
  standalone: true,
  imports: [FormsModule,MatchPasswordDirective,CommonModule],
  templateUrl: './template-froms.component.html',
  styleUrl: './template-froms.component.scss'
})
export class TemplateFromsComponent {
  form = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  };

  onSubmit(): void {
    console.log(JSON.stringify(this.form, null, 2));
  }

  onReset(form: NgForm): void {
    form.reset();
  }
}
