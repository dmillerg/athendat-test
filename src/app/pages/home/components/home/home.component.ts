import { Component, OnInit, inject } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { IntroduceComponent } from '../introduce/introduce.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ServicesComponent } from '../services/services.component';
import { ResumeComponent } from '../resume/resume.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { BlogComponent } from '../blog/blog.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { ContactComponent } from '../contact/contact.component';
import { ActivatedRoute, Router } from '@angular/router';
import { scrollTo } from '../../../../core/functions/scroll-to.function';
import { SkillComponent } from '../skill/skill.component';
import { home } from './constant/home';
import { ICONBLOG } from '../../../../core/constant/icon-blog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  _activatedRoute = inject(ActivatedRoute);
  _router = inject(Router);
  _sanitized = inject(DomSanitizer);
  home = home;
  iconBlog = this._sanitized.bypassSecurityTrustHtml(ICONBLOG)

  ngOnInit(): void {
    const route = this._activatedRoute.snapshot.params['route'];
    scrollTo(route)
  }
}
