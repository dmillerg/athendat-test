import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CHANGETHEME } from '../../../../core/functions/theme.function';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
  profile: { label: string, value: string }[] = [
    { label: 'Residence:', value: 'Cuba' },
    { label: 'City:', value: 'Regla' },
    { label: 'Age:', value: '27' },
  ]

  width: boolean = false;

  ngOnInit(): void {
    setInterval(()=>{
      this.width = !this.width
    },1500)
  }

  theme(){
    CHANGETHEME('dark')
  }
}
