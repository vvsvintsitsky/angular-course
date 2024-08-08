import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appWithShadow]',
  standalone: true,
})
export class WithShadowDirective {
  constructor(private elementRef: ElementRef) {}

  @Input() appWithShadow = '';

  @HostListener('mouseenter')
  onMouseEnter() {
    const style = this.elementRef.nativeElement.style;
    style.zIndex = 1;
    style.position = 'relative';
    style.boxShadow = `10px 10px 10px 10px ${this.appWithShadow}`;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    const style = this.elementRef.nativeElement.style;
    style.zIndex = '';
    style.position = '';
    style.boxShadow = '';
  }
}
