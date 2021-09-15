import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({

    selector :'[testhover]'
})

export class testDirective{
 @HostListener('focus')   onFocus(){
        console.log("on Focus")
    }
    @HostListener('blur')   onBlur(){
        console.log("on Focus")
        let value:string = this.el.nativeElement
        this.el.nativeElement.value = "gautam"
    }
    constructor(private el:ElementRef){

    }
}