import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {

  skill: {img: string, value:number, name:string}[]=[
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

  activeIndex: number=0;

  next(){
    console.log();
    
  }
}
