import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective {

  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: (ValidationErrors | null);

  @Input()
  public set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input()
  public set errors(value: (ValidationErrors | null | undefined)) {
    (value == undefined)
      ? this._errors = null
      : this._errors = value;

    console.log(value);
    this.setErroMsg();
  }

  constructor(
    private elementRef: ElementRef<HTMLElement>
  ) {
    console.log(elementRef);
    this.htmlElement = elementRef;
  }

  setStyle(): void {
    if(!this.htmlElement) return;

    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErroMsg(): void {
    if(!this.htmlElement) return;
    if(!this._errors) {
      this.htmlElement.nativeElement.innerText = 'There are no errors.'
      return;
    }

    const errors = Object.keys(this._errors);

    if(errors.includes('required')) {
      this.htmlElement.nativeElement.innerText = 'This field is required.';
    } else if(errors.includes('minlength')) {
      const min = this._errors!['minlength']['requiredLength'];
      this.htmlElement.nativeElement.innerText = `This field require more than ${min-1} characters.`;
    } else if(errors.includes('email')) {
      this.htmlElement.nativeElement.innerText = 'This field require an email format.';
    } else {
      this.htmlElement.nativeElement.innerText = 'Unknow error.';
    }

  }

}
