import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';
import { CHANGETHEME } from '../../../core/functions/theme.function';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss'
})
export class ThemeComponent {
  active: boolean = false;
  open = model(false);

  theme: string = localStorage.getItem('theme') ?? 'light';

  constructor() {
    this.changeTheme();
  }

  changeTheme(theme?: string) {
    CHANGETHEME(theme ?? this.theme);
    this.theme = localStorage.getItem('theme') ?? 'light';
  }
}
