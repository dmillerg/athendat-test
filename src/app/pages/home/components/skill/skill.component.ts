import { Component, inject } from '@angular/core';
import { CircularProgressBarComponent } from '../../../../shared/components/circular-progress-bar/circular-progress-bar.component';
import { IncrementalNumberComponent } from '../../../../shared/components/incremental-number/incremental-number.component';
import { DataService } from '../../../../core/services/data.service';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CircularProgressBarComponent, IncrementalNumberComponent],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {

  skill: Skill[] = [
    {
      img: 'assets/img/skill/figma.svg',
      value: 90,
      name: 'Figma'
    },
    {
      img: 'assets/img/skill/webflow.svg',
      value: 85,
      name: 'Weblfow'
    },
    {
      img: 'assets/img/skill/tailwind.svg',
      value: 90,
      name: 'Tailwind'
    },
    {
      img: 'assets/img/skill/html.svg',
      value: 95,
      name: 'HTML5'
    },
    {
      img: 'assets/img/skill/css.svg',
      value: 95,
      name: 'CSS3'
    },
    {
      img: 'assets/img/skill/js.svg',
      value: 75,
      name: 'JavaScript'
    },
    {
      img: 'assets/img/skill/jquery.svg',
      value: 70,
      name: 'jQuery'
    },
  ]

  activeIndex: number = 0;
  _dataService = inject(DataService);

}
