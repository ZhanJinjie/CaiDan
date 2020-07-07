import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// 属性指令
@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  constructor(private el: ElementRef) { }

  @Input() defaultColor: string;

  @Input('appHightlight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter(): void {
    this.highlight(this.highlightColor || this.defaultColor || 'yellow'); // 未输入值时，默认高亮黄色
  }
  @HostListener('mouseleave') onMouseLeave(): void {
    this.highlight(null);
  }

  private highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
