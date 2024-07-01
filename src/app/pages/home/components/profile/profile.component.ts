import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  profile: { label: string, value: string }[] = [
    { label: 'Residence:', value: 'Cuba' },
    { label: 'City:', value: 'Havana' },
    { label: 'Age:', value: '27' },
  ]

  profession: string[] = ['Web Developer ', 'Photographers ', 'Web Designer ']

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
