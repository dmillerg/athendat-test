import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { DomSanitizer } from '@angular/platform-browser';
import { ICONBLOG } from '../../../../core/constant/icon-blog';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {

  blogs: { img: string, title: string, text: string, href: string }[] = [
    {
      img: 'assets/img/blog/article1.png',
      title: `<a href="#" class="transition-colors hover:text-theme">
                                UI Design
                            </a>,
                            <span class="post_date">
                                03 May 2023
                            </span>`,
      text: 'Elevate your mornings with perfectly brewed coffee',
      href: 'blogs/article-details',
    },
    {
      img: 'assets/img/blog/article2.png',
      title: `<a href="#" class="transition-colors hover:text-theme">
                                UI Design
                            </a>,
                            <span class="post_date">
                                03 May 2023
                            </span>`,
      text: 'Mastering the clock: A guide to time management',
      href: 'blogs/article-details',
    },
    {
      img: 'assets/img/blog/article3.png',
      title: `<a href="#" class="transition-colors hover:text-theme">
                                UI Design
                            </a>,
                            <span class="post_date">
                                03 May 2023
                            </span>`,
      text: 'Homeward bound: Crafting a productive home office',
      href: 'blogs/article-details',
    },
    {
      img: 'assets/img/blog/article4.png',
      title: `<a href="#" class="transition-colors hover:text-theme">
                                UI Design
                            </a>,
                            <span class="post_date">
                                03 May 2023
                            </span>`,
      text: 'Design Specialization brings a user design-centric.',
      href: 'blogs/article-details',
    },
    {
      img: 'assets/img/blog/article5.png',
      title: `<a href="#" class="transition-colors hover:text-theme">
                                UI Design
                            </a>,
                            <span class="post_date">
                                03 May 2023
                            </span>`,
      text: 'Design Specialization brings a user design-centric.',
      href: 'blogs/article-details',
    },
    {
      img: 'assets/img/blog/article6.png',
      title: `<a href="#" class="transition-colors hover:text-theme">
                                UI Design
                            </a>,
                            <span class="post_date">
                                03 May 2023
                            </span>`,
      text: 'Design Specialization brings a user design-centric.',
      href: 'blogs/article-details',
    }
  ]
  icon = this.sanitized.bypassSecurityTrustHtml(ICONBLOG)

  constructor(private sanitized: DomSanitizer) { }
}
