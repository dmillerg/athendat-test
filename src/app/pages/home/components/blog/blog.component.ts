import { Component } from '@angular/core';
import { Blog } from '../../models/blog.model';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

  blogs: Blog[] = [
    {
      img: 'assets/img/blog/article1.png',
      title: `<a href="#" class="transition-colors hover:text-theme">
                                UI Design
                            </a>,
                            <span class="post_date">
                                03 May 2023
                            </span>`,
      text: 'Elevate your mornings with perfectly brewed coffee',
      href: 'blogs/details',
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
      href: 'blogs/details',
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
      href: 'blogs/details',
    },

  ]
}
