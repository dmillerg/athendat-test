import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ThemeComponent } from './shared/components/theme/theme.component';
import { ProfileComponent } from './pages/home/components/profile/profile.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { DataService } from './core/services/data.service';
import { SidebarSmComponent } from './shared/components/sidebar-sm/sidebar-sm.component';
import { LoadingComponent } from './shared/components/loading/loading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThemeComponent, ProfileComponent, HeaderComponent, SidebarComponent, FooterComponent, SidebarSmComponent, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'athendat-test';
  _router = inject(Router);
  _dataService = inject(DataService);
  open: boolean = false;
  loading: boolean = true;

  @ViewChild('scroll') scroll!: ElementRef

  constructor() {
    setTimeout(() => this.loading = false, 4000)
  }

  onScroll() {
    const cards = document.querySelectorAll('app-card');
    for (let i = 0; i < cards.length; i++) {
      const cardRect = cards[i].getBoundingClientRect();
      if (cardRect.top < 90 && cardRect.top > 0) {
        this._dataService.scroll.set(cards[i].id)
        break; // Salir del bucle si se encuentra la tarjeta visible
      }
    }
  }

  scrollToTop() {
    const scroll = document.getElementById('scroll')
    scroll?.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
