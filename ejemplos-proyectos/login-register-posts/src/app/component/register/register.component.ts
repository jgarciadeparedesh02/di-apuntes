import { Component } from '@angular/core';
import { UserService } from '../../services/userservice.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup;
  registrationSuccess = false;
  errors: { [key: string]: string } = {};

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.errors = {};
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach(key => {
        const controlErrors = this.form.get(key)?.errors;
        if (controlErrors) {
          this.errors[key] = Object.keys(controlErrors).map(
            errorKey => {
              return {
                key,
                errorKey,
                message: controlErrors[errorKey]
              };
            }
          ).map(err => `${err.key} ${err.errorKey}`).join(', ');
        }
      });
      return;
    }

    if (this.form.get('password')?.value !== this.form.get('confirmPassword')?.value) {
      this.errors['confirmPassword'] = 'Passwords do not match';
      return;
    }

    this.userService.registerUser(this.form.get('email')?.value, this.form.get('password')?.value, (success: boolean) => {
      if (!success) {
        this.errors['email'] = 'Registration failed';
      } else {
        this.registrationSuccess = true;
      }
    });
  }
}

