import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {
  testimonials: { img: string, rating: number[], text: string, name: string, job: string }[] = [
    {
      img: 'assets/img/testimonial/author1.png',
      rating: [1, 2, 3, 4, 5],
      text: `<div class="text-sm md:text-[15px] leading-loose content">
                        Working with <span class="font-semibold text-theme">Reddick</span> is a game-changer. Their
                        coding expertise and commitment to quality make every project a success.
                    </div>`,
      name: 'Alex Johnson',
      job: 'Developer'
    },
    {
      img: 'assets/img/testimonial/author2.png',
      rating: [1, 2, 3, 4, 5],
      text: `<div class="text-sm md:text-[15px] leading-loose content">
                        <span class="font-semibold text-theme">Reddick</span> exceeds expectations with top-tier coding
                        skills. Reliable, collaborative, and a true asset to any project. Highly recommended
                    </div>`,
      name: 'Mily Martin',
      job: 'CEO-itTheme'
    },
    {
      img: 'assets/img/testimonial/author2.png',
      rating: [1, 2, 3, 4, 5],
      text: `<div class="text-sm md:text-[15px] leading-loose content">
                        <span class="font-semibold text-theme">Reddick</span> delivers excellence in every line of code.
                        Dependable, innovative, and a key player in project success. Outstanding performance.
                    </div>`,
      name: 'Alex Johnson',
      job: 'Developer'
    },
  ];
}
