import { trigger, state, style, animate, transition } from '@angular/animations';

export const slideLeftRight = trigger('slideLeftRight', [
  state('start', style({
    transform: 'translateX(-100%)'
  })),
  state('end', style({
    transform: 'translateX(0%)'
  })),
  transition('start => end', animate('1s ease-in-out')),
  transition('end => start', animate('1s ease-in-out'))
]);
