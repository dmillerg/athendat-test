import { trigger, style, animate, transition } from '@angular/animations';

export const loading = trigger('loading', [
    transition(':enter', [
        style({ height: '0', opacity: '1' }),
        animate('500ms', style({ height: '50%', opacity: '1' })),
        animate('2000ms', style({ height: '50%', opacity: '1' })),
        animate('500ms', style({ height: '100%', opacity: '0' })),
    ]),
]);