import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-component.html',
  styleUrl: './register-component.scss',
})
export class RegisterComponent {
  registerForm: FormGroup;
  showPassword = false;
  showPasswordConfirm = false;
  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]],
    });
  }

  registerProfile() {}
  
  goLogin() {
    this.router.navigate(['/login']);
  }

  get name(): AbstractControl | null {
    return this.registerForm.get('name');
  }
  get email(): AbstractControl | null {
    return this.registerForm.get('email');
  }
  get password(): AbstractControl | null {
    return this.registerForm.get('password');
  }
  get passwordConfirm(): AbstractControl | null {
    return this.registerForm.get('passwordConfirm');
  }
  get terms(): AbstractControl | null {
    return this.registerForm.get('terms');
  }

  togglePassword(): void { this.showPassword = !this.showPassword; }
  togglePasswordConfirm(): void { this.showPasswordConfirm = !this.showPasswordConfirm; }
}
