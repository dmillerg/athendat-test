import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CircularProgressBarComponent } from '../../../../shared/components/circular-progress-bar/circular-progress-bar.component';
import { IncrementalNumberComponent } from '../../../../shared/components/incremental-number/incremental-number.component';
import { scaleAnimation } from '../../../../core/animations/show-hide.animation';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, CircularProgressBarComponent, IncrementalNumberComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  animations: [scaleAnimation]
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

  activeText:string[]=['Web Developer', 'Photographers', 'Web Designer']

  ngOnInit(): void {
    setInterval(() => {
      let d = this.active;
      this.active = 4
      setTimeout(() => {
        this.active = d;
        if (this.active > 1) { this.active = 0 } else { this.active += 1 }
      }, 500)
    }, 3000);
  }
}
