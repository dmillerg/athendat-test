import { Component, inject, model } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ICONSVG } from '../../../core/constant/icon-blog';
import { MenuItem } from '../../../core/model/menu-item.model';
import { DataService } from '../../../core/services/data.service';
import { Router } from '@angular/router';
import { scrollTo } from '../../../core/functions/scroll-to.function';

@Component({
  selector: 'app-sidebar-sm',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-sm.component.html',
  styleUrl: './sidebar-sm.component.scss'
})
export class SidebarSmComponent {

  _dataService = inject(DataService);
  _sanitized = inject(DomSanitizer);
  _router = inject(Router);

  open = model(false);

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

  navigate(route: string) {
    this._router.navigate(['home/' + route]);
    scrollTo(route)
  }
}
