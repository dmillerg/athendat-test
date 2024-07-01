import { Component, HostListener } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { home } from '../../../home/components/home/constant/home';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-detail',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './projects-detail.component.html',
  styleUrl: './projects-detail.component.scss'
})
export class ProjectsDetailComponent {

  home = home;
  active: boolean = true

  technologies: { img: string, name: string, value: number }[] = [
    {
      img: 'assets/img/skill/html.svg',
      name: 'HTML5',
      value: 90,
    },
    {
      img: 'assets/img/skill/css.svg',
      name: 'CSS3',
      value: 80,
    },
    {
      img: 'assets/img/skill/js.svg',
      name: 'javascript',
      value: 60,
    },
    {
      img: 'assets/img/skill/tailwind.svg',
      name: 'TailwindCSS',
      value: 90,
    },
    {
      img: 'assets/img/skill/figma.svg',
      name: 'Figma',
      value: 80,
    },
  ]

  @HostListener('scroll', ['$event.target']) onScroll() {
    console.log('da');
    
    // const scrollElement = this.elementRef.nativeElement.querySelector('#scrollElement');
    // Aquí puedes realizar las acciones que necesites cuando se produce el evento de scroll
    console.log('El elemento con scroll se ha desplazado');
  }
}
