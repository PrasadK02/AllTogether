import { Component } from '@angular/core';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css']
})
export class TypingComponent {

  textData:string = "This is some text with card body";
  enteredText: string = " ";

  onInput(value: string){
    this.enteredText= value;
    console.log(this.enteredText);
  }
  compare(tl: string, el: string){
    if(!el) return "pending";

    return el === tl ? "correct" : "incorrect";
  }
}
