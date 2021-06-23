import { Directive, ElementRef,  HostBinding,  HostListener,  Renderer2 } from "@angular/core";

@Directive({
    selector:"[cHover]"
})

export class CardHoverDirective{
    backgoundColor:string='blue'
  highlightColor:string='yellow'
  defaultColor:string='red'
   
constructor(private el:ElementRef,private renderer:Renderer2){

    renderer.setStyle(el.nativeElement,'background-color','gray');}


/*create a attribute directive which will strike through the text */

@HostBinding('class.card-outline-primary')
private ishovering :boolean =false;

@HostListener('mouseenter')onMouseEnter(){

    this.backgoundColor=  this.highlightColor;
    let data = this.el.nativeElement.querySelector('.card-body');
    this.renderer.setStyle(data,'background-color',this.backgoundColor);
    this.ishovering=true
  }
  
  
  @HostListener('mouseleave') onMouseLeave(){
  
    this.backgoundColor = this.defaultColor;
    let data = this.el.nativeElement.querySelector('.card-body');
    this.renderer.setStyle(data,'background-color',this.backgoundColor);
    this.ishovering =  false;
  }
  
}