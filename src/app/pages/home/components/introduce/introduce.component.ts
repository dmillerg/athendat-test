import { Component } from '@angular/core';

@Component({
  selector: 'app-introduce',
  standalone: true,
  imports: [],
  templateUrl: './introduce.component.html',
  styleUrl: './introduce.component.scss'
})
export class IntroduceComponent {

  patners: string[] = [
    'assets/img/partners/logo4.svg',
    'assets/img/partners/logo2.svg',
    'assets/img/partners/logo4.svg',
    'assets/img/partners/logo2.svg',
    'assets/img/partners/logo1.svg',
    'assets/img/partners/logo2.svg',
    'assets/img/partners/logo3.svg',
    'assets/img/partners/logo4.svg',
    'assets/img/partners/logo2.svg',
    'assets/img/partners/logo4.svg',
    'assets/img/partners/logo2.svg',
    'assets/img/partners/logo4.svg',
    'assets/img/partners/logo2.svg',
    'assets/img/partners/logo1.svg',
    'assets/img/partners/logo2.svg',
    'assets/img/partners/logo3.svg',
    'assets/img/partners/logo4.svg'
  ]

  next() {
    document.getElementById('8')?.scrollIntoView({
      behavior: 'smooth'
    })
  }
}
