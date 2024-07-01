import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { home } from '../../../home/components/home/constant/home';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  home = home
}
