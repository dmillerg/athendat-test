import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ThemeComponent } from './shared/components/theme/theme.component';
import { ProfileComponent } from './pages/home/components/profile/profile.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './pages/home/components/sidebar/sidebar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThemeComponent, ProfileComponent, HeaderComponent, SidebarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'athendat-test';
  activo = signal('');
  _router = inject(Router);

  onScroll(event: Event) {
    const cards = document.querySelectorAll('app-card');
    for (let i = 0; i < cards.length; i++) {
      const cardRect = cards[i].getBoundingClientRect();
      if (cardRect.top >= 0 && cardRect.top <= ((event.target as HTMLElement).scrollHeight - 10)) {
        this.activo.set(cards[i].id);
        // this._router.navigate([`home/${cards[i].id}`])
        break; // Salir del bucle si se encuentra la tarjeta visible
      }
    }
  }
}
