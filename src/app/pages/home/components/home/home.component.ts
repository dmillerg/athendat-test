import { Component, OnInit, inject, signal } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ProfileComponent } from '../profile/profile.component';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { IntroduceComponent } from '../introduce/introduce.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ServicesComponent } from '../services/services.component';
import { ResumeComponent } from '../resume/resume.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { BlogComponent } from '../blog/blog.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { ContactComponent } from '../contact/contact.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { ActivatedRoute, Router } from '@angular/router';
import { scrollTo } from '../../../../core/functions/scroll-to.function';
import { SkillComponent } from '../skill/skill.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SidebarComponent,
    ProfileComponent,
    CardComponent,
    IntroduceComponent,
    AboutMeComponent,
    ServicesComponent,
    SkillComponent,
    ResumeComponent,
    PortfolioComponent,
    BlogComponent,
    TestimonialComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  _activatedRoute = inject(ActivatedRoute);
  _router= inject(Router);
  activo = signal('');

  ngOnInit(): void {
    const route = this._activatedRoute.snapshot.params['route'];
    scrollTo(route)
  }

  onScroll(event: Event) {
    const cards = document.querySelectorAll('app-card');
    for (let i = 0; i < cards.length; i++) {
      const cardRect = cards[i].getBoundingClientRect();
      if (cardRect.top >= 0 && cardRect.top <= ((event.target as HTMLElement).scrollHeight-10)) {
        this.activo.set(cards[i].id);
        this._router.navigate([`home/${cards[i].id}`])
        break; // Salir del bucle si se encuentra la tarjeta visible
      }
    }
  }
}
