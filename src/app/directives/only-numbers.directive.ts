import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[onlyNumbers]'
})
export class OnlyNumbersDirective {
  @HostListener('input') 
  onInput ($event: any) {
    this.mask();
  }
  constructor(private el: ElementRef) { }
  mask(){
    let number = this.el.nativeElement.value.match(/\d+/g);
    if(number){
      this.el.nativeElement.value = parseInt(number.join(""));
    }
  }
}
