import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../service1/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,  Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/)]],
    confirmPassword: ['', Validators.required]
  }, {
    validators: this.passwordMatchValidator.bind(this)
  });
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    
    const confirmPassword = form.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  get fullName() {
    return this.registerForm.controls['fullName'];
  }

  get email() {
    return this.registerForm.controls['email'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }

  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }


  //from here 


  register(user: any): void {
    this.authService.register(user).subscribe(
      response => {
        console.log('Registration successful:', response);
        // Handle success (e.g., redirect to login page)
        this.router.navigate(['/login']); // Navigate to the login route
      },
      error => {
        console.error('Registration failed:', error);
        // Handle error (e.g., display an error message)
      }
    );
  }
}


