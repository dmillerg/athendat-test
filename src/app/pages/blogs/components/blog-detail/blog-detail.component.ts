import { Component, inject } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { DomSanitizer } from '@angular/platform-browser';
import { ICONBLOG } from '../../../../core/constant/icon-blog';
import { ReplyFormComponent } from '../reply-form/reply-form.component';
import { Comment } from '../../models/comments.model';
import { scaleDown } from '../../../../core/animations/scale-down.animation';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CardComponent, ReplyFormComponent],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss',
  animations: [scaleDown]
})
export class BlogDetailComponent {
  _sanitized = inject(DomSanitizer);
  icon = this._sanitized.bypassSecurityTrustHtml(ICONBLOG);

  comments: Comment[] = [
    {
      img: 'assets/img/blog/comment-author.png',
      name: 'Mily Martin',
      date: 'November 02, 2023',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      reply: false,
    },
    {
      img: 'assets/img/blog/comment-author2.png',
      name: 'Mily Martin',
      date: 'November 02, 2023',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      reply: false,
    },
    {
      img: 'assets/img/blog/comment-author.png',
      name: 'Mily Martin',
      date: 'November 02, 2023',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      reply: false,
    },
  ]

}
