import {Component, inject} from '@angular/core';
import {usernameAvailableValidator} from "../shared/utils/username-available-validator";
import {adultValidator} from "../shared/utils/adult-validator";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {toSignal} from "@angular/core/rxjs-interop";
import {passwordMatchesValidator} from "../shared/utils/password-matches-validator";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private fb = inject(FormBuilder);

  myForm = this.fb.nonNullable.group({
    username: ['', Validators.required, usernameAvailableValidator],
    age: [null, adultValidator],
  });

  createForm = this.fb.nonNullable.group(
    {
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      //The AbstractControl will have access to all the inputs in here.
      validators: [passwordMatchesValidator],
    }
  );

  usernameStatus = toSignal(this.myForm.controls.username.statusChanges);


  handleSubmit() {
    console.log(this.myForm.value);
  }
}
