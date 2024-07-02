import { Component, inject, model } from '@angular/core';
import { MenuItem } from '../../../core/model/menu-item.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { scrollTo } from '../../../core/functions/scroll-to.function';
import { ICONSVG } from '../../../core/constant/icon-blog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  _router = inject(Router);
  _sanitized = inject(DomSanitizer)


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
      icon: this._sanitized.bypassSecurityTrustHtml(ICONSVG)
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

  activo = model('');

  navigate(route: string) {
    this._router.navigate(['home/' + route]);
    scrollTo(route)
  }
}
