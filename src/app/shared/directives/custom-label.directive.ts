import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective {

  private htmlElement?: ElementRef<HTMLElement>;

  constructor(
    private elementRef: ElementRef<HTMLElement>
  ) {
    console.log(elementRef);
    this.htmlElement = elementRef;
  }

}
