import { Component, inject } from '@angular/core';
import { IncrementalNumberComponent } from '../../../../shared/components/incremental-number/incremental-number.component';
import { DataService } from '../../../../core/services/data.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [IncrementalNumberComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  _dataService= inject(DataService);
}
