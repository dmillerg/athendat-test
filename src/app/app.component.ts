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
  imports: [
    RouterOutlet,
    ThemeComponent,
    ProfileComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    SidebarSmComponent,
    LoadingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'athendat-test';
  _router = inject(Router);
  _dataService = inject(DataService);
  _el = inject(ElementRef);
  open: boolean = false;
  loading: boolean = true;
  private circle!: HTMLElement;
  private circle2!: HTMLElement;

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


  ngOnInit() {
    this.circle = document.createElement('div');
    this.circle.classList.add('w-6');
    this.circle.classList.add('h-6');
    this.circle.classList.add('bg-transparent');
    this.circle.classList.add('border');
    this.circle.classList.add('dark:border-platinum');
    this.circle.classList.add('border-colorSilver');
    this.circle.style.position = 'absolute';
    this.circle.style.zIndex = '999999';

    this.circle.style.borderRadius = '50%';
    this.circle.style.pointerEvents = 'none';

    this.circle2 = document.createElement('div');
    this.circle2.classList.add('w-1');
    this.circle2.classList.add('h-1');
    this.circle2.classList.add('bg-transparent');
    this.circle2.classList.add('border');
    this.circle2.classList.add('dark:border-platinum');
    this.circle2.classList.add('border-colorSilver');
    this.circle2.style.position = 'absolute';
    this.circle2.style.zIndex = '999999';

    this.circle2.style.borderRadius = '50%';
    this.circle2.style.pointerEvents = 'none';
    this._el.nativeElement.appendChild(this.circle);
    this._el.nativeElement.appendChild(this.circle2);
  }

  onMouseMove(event: MouseEvent) {
    this.circle.style.left = (event.clientX - 12) + 'px';
    this.circle.style.top = (event.clientY - 12) + 'px';
    this.circle2.style.left = (event.clientX -3) + 'px';
    this.circle2.style.top = (event.clientY -3) + 'px';
  }
}
