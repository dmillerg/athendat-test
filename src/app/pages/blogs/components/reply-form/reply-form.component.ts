import { Component, model } from '@angular/core';

@Component({
  selector: 'app-reply-form',
  standalone: true,
  imports: [],
  templateUrl: './reply-form.component.html',
  styleUrl: './reply-form.component.scss', 
})
export class ReplyFormComponent {

  open = model(false);
}
