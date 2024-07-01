import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CircularProgressBarComponent } from '../../../../shared/components/circular-progress-bar/circular-progress-bar.component';
import { IncrementalNumberComponent } from '../../../../shared/components/incremental-number/incremental-number.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, CircularProgressBarComponent, IncrementalNumberComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  profile: { label: string, value: string }[] = [
    { label: 'Residence:', value: 'Cuba' },
    { label: 'City:', value: 'Havana' },
    { label: 'Age:', value: '27' },
  ]

  profession: string[] = ['Web Developer ', 'Photographers ', 'Web Designer '];

  language: { name: string, value: number }[] = [
    { name: 'HTML', value: 90 },
    { name: 'CSS', value: 80 },
    { name: 'JS', value: 80 },
    { name: 'PHP', value: 90 },
  ]

  width: boolean = false;
  active: number = 0;
  interval: any;

  ngOnInit(): void {
    setInterval(() => {
      this.width = !this.width;
      if (this.width) {
        setTimeout(() => {
          if (this.active > 1) { this.active = 0 } else { this.active += 1 }
        }, 10500)
      }
    }, 3000);
  }
}
