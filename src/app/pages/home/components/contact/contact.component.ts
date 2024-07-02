import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  _fb = inject(FormBuilder);
  _router = inject(Router);

  form = this._fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  submit() {
    if (this.form.valid) {
      const data = this.form.getRawValue();
      const mailtoLink =
        "mailto:" +
        data.email +
        "?subject=" +
        encodeURIComponent(data.name!) +
        "&body=" +
        encodeURIComponent(data.message!);
      window.open(mailtoLink);
      this._router.navigate(['contact-form']);
    } else {
      this.form.markAllAsTouched()
    }
  }
}
