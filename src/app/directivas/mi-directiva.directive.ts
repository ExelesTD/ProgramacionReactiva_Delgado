import { Directive,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMiDirectiva]'
})
export class MiDirectivaDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { 
    renderer.setStyle(element.nativeElement, 'fontSize', '20px');
  }

}
