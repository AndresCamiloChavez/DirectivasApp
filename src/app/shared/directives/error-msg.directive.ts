import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appErrorMsg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges{

  htmlElement!: ElementRef<HTMLElement>
  _mensaje: string = 'Este campo es obligatorio';
  _color : string = 'red';

  @Input() set color(valor: string){
      this.htmlElement.nativeElement.style.color= valor;
      this._color = valor;
  }
  @Input() set valido(valor: boolean){
    if(valor){
      this.htmlElement.nativeElement.classList.add('hidden')
    }else{
      this.htmlElement.nativeElement.classList.remove('hidden')
    }
  }
  @Input() set mensaje(valor: string){
      this.htmlElement.nativeElement.innerText = valor;
      this._mensaje = valor;
  };

  constructor(private el: ElementRef<HTMLElement> ) {
     this.htmlElement = el;
     this.htmlElement.nativeElement.style.color= this._color;
     this.htmlElement.nativeElement.innerText = this._mensaje;

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
