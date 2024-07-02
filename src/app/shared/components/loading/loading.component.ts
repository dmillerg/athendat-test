import { Component } from '@angular/core';
import { loading } from '../../../core/animations/loading.animation';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
  animations: [loading]
})
export class LoadingComponent {

  show: boolean = true;

  constructor(){
    setTimeout(()=>{
this.show = false
    }, 3000);
  }
}
