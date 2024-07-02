import { Component, Input, effect, model } from '@angular/core';

@Component({
  selector: 'app-incremental-number',
  standalone: true,
  imports: [],
  templateUrl: './incremental-number.component.html',
  styleUrl: './incremental-number.component.scss'
})
export class IncrementalNumberComponent {
  @Input() startValue: number = 0;
  @Input() endValue: number = 100;
  @Input() duration: number = 1000;

  start = model(true);

  currentValue: number = 0;

  constructor() {
    effect(() => {
      if (this.start()) {
        this.animateCounter();
      }
    })
  }

  animateCounter() {
    const steps = Math.ceil(this.duration / 10);
    const increment = (this.endValue - this.startValue) / steps;
    let count = this.startValue;

    const interval = setInterval(() => {
      count += increment;
      this.currentValue = Math.round(count);

      if (count >= this.endValue) {
        clearInterval(interval);
        this.currentValue = this.endValue;
      }
    }, 10);
  }
}
