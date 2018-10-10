import {Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  build;

  constructor(private elementRef: ElementRef) {
    this.build = this.elementRef.nativeElement.getAttribute('build');
  }
}
