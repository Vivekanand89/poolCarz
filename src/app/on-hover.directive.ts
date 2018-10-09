import { Directive, Renderer2, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appOnHover]'
})
export class OnHoverDirective {
  
  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }
  
  @HostListener('mouseenter') change1(){
    this.renderer2.setStyle(this.elementRef.nativeElement, 'background', '#ddd');
  }
  @HostListener('mouseleave') change2(){
    this.renderer2.setStyle(this.elementRef.nativeElement, 'background', '#fff');
  }
}
