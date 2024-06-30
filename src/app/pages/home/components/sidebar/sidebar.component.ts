import { Component } from '@angular/core';
import { MenuItem } from '../../../../core/model/menu-item.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCommentAlt, faEnvelope, faFileAlt, faUser } from '@fortawesome/free-regular-svg-icons';
import { faChrome } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  menu: MenuItem[] = [
    {
      label: 'home',
      route: 'home',
      icon: 'bi bi-house-door'
    },
    {
      label: 'about',
      route: 'home',
      icon: 'bi bi-person'
    },
    {
      label: 'service',
      route: 'home',
      icon: 'bi bi-briefcase'
    },
    {
      label: 'skill',
      route: 'home',
      icon: 'bi bi-mortarboard'
    },
    {
      label: 'resume',
      route: 'home',
      icon: 'bi bi-file-earmark-richtext'
    },
    {
      label: 'poftfolio',
      route: 'home',
      icon: 'bi bi-list-task'
    },
    {
      label: 'blog',
      route: 'home',
      icon: 'bi bi-substack'
    },
    {
      label: 'testimonial',
      route: 'home',
      icon: 'bi bi-chat-square-text'
    },
    {
      label: 'contact',
      route: 'home',
      icon: 'bi bi-envelope'
    },
  ];
}
