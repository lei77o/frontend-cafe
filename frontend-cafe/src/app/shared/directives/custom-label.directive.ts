import { Directive, ElementRef, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
  standalone: true,
})
export class CustomLabelDirective {
  private htmlElement?: ElementRef<HTMLElement>;

  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  @Input() set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorsMessages();
  }

  constructor(private el: ElementRef) {
    this.htmlElement = this.el;
  }

  setStyle(): void {
    if (!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorsMessages(): void {
    if (!this.htmlElement) return;

    if (!this._errors) {
      this.htmlElement.nativeElement.innerText = 'No errors';
      return;
    }

    const errors = Object.keys(this._errors);

    if (errors.includes('required')) {
      this.htmlElement.nativeElement.innerText = 'Email required';
      return;
    }

    if (errors.includes('minLength')) {
      const min = this._errors!['requiredLength']['minLength'];
      const current = this._errors!['minLength']['actualLength'];
      this.htmlElement.nativeElement.innerText = `Min ${current}/${min} charters`;
      return;
    }

    if (errors.includes('email')) {
      this.htmlElement.nativeElement.innerText = 'No email';
      return;
    }
  }
}
