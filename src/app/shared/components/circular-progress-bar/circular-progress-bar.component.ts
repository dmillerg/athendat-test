import { Component, model } from '@angular/core';

@Component({
  selector: 'app-circular-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './circular-progress-bar.component.html',
  styleUrl: './circular-progress-bar.component.scss'
})
export class CircularProgressBarComponent {
  progress = model();
  strokeWidth = model('15px');
}
