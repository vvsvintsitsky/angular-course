import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appWithShadow]',
  standalone: true,
})
export class WithShadowDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    const style = this.elementRef.nativeElement.style;
    style.zIndex = 1;
    style.position = 'relative';
    style.boxShadow = '10px 10px 10px 10px';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    const style = this.elementRef.nativeElement.style;
    style.zIndex = '';
    style.position = '';
    style.boxShadow = '';
  }
}
