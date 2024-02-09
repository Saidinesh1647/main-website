import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service1/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  get email() {
    return this.loginForm.controls['email'];
  }
  get password() { return this.loginForm.controls['password']; }


  //from here
  login(credentials: any): void {
    // Assume your AuthService has a login method
    this.authService.login(credentials).subscribe(
      response => {
        console.log('Login successful:', response);
        // Handle success (e.g., store user data and redirect to home page)
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Login failed:', error);
        // Handle error (e.g., display an error message)
        if (error instanceof HttpErrorResponse) {
          console.error('Status:', error.status);
          console.error('Body:', error.error);
        }

        // Check if the error is related to email not found
        if (error.status === 404 && error.error.message === 'Email not found') {
          alert('Email not found. Please register.');
        }
      }
    );
  }
}