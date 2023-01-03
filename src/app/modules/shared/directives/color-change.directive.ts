import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColorChange]'
})
export class ColorChangeDirective {
  color = 'red';

  constructor(private el: ElementRef) { }

  @Input() set appColorChange(color: string) {
    if(!color) {
      return;
    }
    
    this.color = color;
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = this.color;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = 'black';
  }
}
