import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { DomSanitizer } from '@angular/platform-browser';
import { ICONBLOG } from '../../../../core/constant/icon-blog';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent {

  icon =this.sanitized.bypassSecurityTrustHtml(ICONBLOG)

  constructor(private sanitized: DomSanitizer) { }
}
