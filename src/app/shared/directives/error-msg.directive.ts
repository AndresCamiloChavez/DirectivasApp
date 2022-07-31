import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appErrorMsg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges{

  htmlElement!: ElementRef<HTMLElement>
  _mensaje: string = '';
  _color : string = 'red';

  @Input() set color(valor: string){
    if(valor){
      this.htmlElement.nativeElement.style.color= valor;
    }
  }

  @Input() set mensaje(valor: string){
      this.htmlElement.nativeElement.innerText = valor;
      this._mensaje = valor;
  };

  constructor(private el: ElementRef<HTMLElement> ) {
     this.htmlElement = el;
  }
  
  ngOnInit(): void {
    this.setColor();
    this.htmlElement.nativeElement.innerText = this._mensaje; 
    this.htmlElement.nativeElement.classList.add('form-text');
    // this.htmlElement.nativeElement.addEventListener("",()=>{
    //   console.log('evento');
      
    // })
    console.log('Ng on Init en la directiva');
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Cambios',changes);
    // if(changes['mensaje'] != null) {
    //   this.htmlElement.nativeElement.innerText = changes['mensaje'].currentValue;
    // }
    // if(changes['color'] != null) {
    //   this.htmlElement.nativeElement.style.color= changes['color'].currentValue;
    // };
    }

  setColor(){
    this.htmlElement.nativeElement.style.color = this.color;
  }

}
