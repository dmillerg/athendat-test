import { trigger, style, animate, transition } from '@angular/animations';

export const scaleAnimation = trigger('scaleAnimation', [
    transition(':enter', [
        style({ width: '0', overflow: 'hidden' }),
        animate('500ms', style({ width: '100%', overflow: 'hidden' })),
    ]),
    transition(':leave', [
        style({ width: '100%', overflow: 'hidden' }),
        animate('500ms', style({ width: '0', overflow: 'hidden' })),
    ]),
]);