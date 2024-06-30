import { Component } from '@angular/core';
import { MenuItem } from '../../../../core/model/menu-item.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  menu: MenuItem[] = [
    {
      label: 'home',
      route: 'introduce',
      icon: 'bi bi-house-door'
    },
    {
      label: 'about',
      route: 'about',
      icon: 'bi bi-person'
    },
    {
      label: 'service',
      route: 'service',
      icon: 'bi bi-briefcase'
    },
    {
      label: 'skill',
      route: 'skill',
      icon: 'bi bi-mortarboard'
    },
    {
      label: 'resume',
      route: 'resume',
      icon: 'bi bi-file-earmark-richtext'
    },
    {
      label: 'poftfolio',
      route: 'poftfolio',
      icon: 'bi bi-list-task'
    },
    {
      label: 'blog',
      route: 'blog',
      icon: 'bi bi-substack'
    },
    {
      label: 'testimonial',
      route: 'testimonial',
      icon: 'bi bi-chat-square-text'
    },
    {
      label: 'contact',
      route: 'contact',
      icon: 'bi bi-envelope'
    },
  ];
}
