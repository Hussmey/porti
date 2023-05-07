import { Component } from '@angular/core';

@Component({
  selector: 'app-up-to-up',
  templateUrl: './up-to-up.component.html',
  styleUrls: ['./up-to-up.component.css']
})
export class UpToUpComponent {
  scrollToTop() {
    window.scrollTo(0, 0);
  }

}
