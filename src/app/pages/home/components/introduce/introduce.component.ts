import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { scrollTo } from '../../../../core/functions/scroll-to.function';

@Component({
  selector: 'app-introduce',
  standalone: true,
  imports: [],
  templateUrl: './introduce.component.html',
  styleUrl: './introduce.component.scss'
})
export class IntroduceComponent {

  _router = inject(Router);

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

  navigate(route: string) {
    this._router.navigate([`home/${route}`]);
    scrollTo(route);
  }

}
