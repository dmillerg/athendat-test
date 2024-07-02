import { trigger, style, animate, transition } from '@angular/animations';

export const scaleDown = trigger('scaleDown', [
    transition(':enter', [
        style({ height: '0', overflow: 'hidden' }),
        animate('300ms', style({ height: '170px', overflow: 'hidden' })),
    ]),
    transition(':leave', [
        style({ height: '170px', overflow: 'hidden' }),
        animate('300ms', style({ height: '0', overflow: 'hidden' })),
    ]),
]);