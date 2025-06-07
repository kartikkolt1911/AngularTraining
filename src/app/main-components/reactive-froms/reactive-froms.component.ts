import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,

} from '@angular/forms';
import { MustMatch } from './validation';
import { UserInfoService } from './services/user.service';
import { UserInfo } from './models/user-info-model';

@Component({
  selector: 'reactive-froms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-froms.component.html',
  styleUrl: './reactive-froms.component.scss'
})
export class ReactiveFromsComponent {
  @ViewChild('Myinput') input: ElementRef;
  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userInfoService: UserInfoService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
      },
      {
        validators: [MustMatch('password', 'confirmPassword')],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    debugger
    console.log(JSON.stringify(this.form.value, null, 2));
    const userInfo: UserInfo = new UserInfo();
    userInfo.fullname = this.form.value.fullname;
    userInfo.username = this.form.value.username;
    userInfo.email = this.form.value.email;
    userInfo.password = this.form.value.password;
    userInfo.confirmPassword = this.form.value.confirmPassword;
debugger;
    this.userInfoService.create(userInfo).subscribe(x => console.log(x));;
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  getUser() {
    debugger
    //this.input.nativeElement
    console.log(this.input.nativeElement)
    console.log((this.input.nativeElement.value));
    this.userInfoService.get(this.input.nativeElement.value).subscribe(x => console.log(x));
  }
}

