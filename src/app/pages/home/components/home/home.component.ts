import { Component, OnInit, inject } from '@angular/core';
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
import { ActivatedRoute } from '@angular/router';
import { scrollTo } from '../../../../core/functions/scroll-to.function';
import { SkillComponent } from '../skill/skill.component';

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
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    const route = this.activatedRoute.snapshot.params['route'];
    scrollTo(route)
  }
}
