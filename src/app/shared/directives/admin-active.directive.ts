import { Directive, ElementRef, HostListener, Input, Renderer2, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAdminActive]'
})
export class AdminActiveDirective {
  @Input('appAdminActive')
   cssClass!: string;



  constructor(private elementRef: ElementRef, private renderer2:Renderer2) { 
  }

  @HostListener('click') onClick(){
    console.log(this.elementRef);
    console.log(this.renderer2);
    console.log(this.cssClass);
  }

  @HostListener('document:click', ['$event.target'])//this passes the target of the event as an argument. In this case the element that was clicked
  public onClick2(targetElement:any){
    console.log(targetElement);
  }

}
