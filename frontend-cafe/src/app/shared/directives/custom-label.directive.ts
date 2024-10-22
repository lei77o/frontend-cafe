import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[customLabel]',
  standalone: true,
})
export class CustomLabelDirective {
  private htmlElement?: ElementRef<HTMLElement>;

  constructor(private el: ElementRef) {
    this.htmlElement = this.el;
    this.htmlElement.nativeElement.innerHTML = 'Hola Mundo';
  }
}
