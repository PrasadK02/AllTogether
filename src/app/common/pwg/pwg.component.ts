import { Component } from '@angular/core';

@Component({
  selector: 'app-pwg',
  templateUrl: './pwg.component.html',
  styleUrls: ['./pwg.component.css']
})
export class PwgComponent {
  passLength = 0;
  generatedPass: string = '';

  includeChar: boolean = false;
  includeNum: boolean = false;
  includeSym: boolean = false;

  getLength(length: string){
    this.passLength =+ length;
  }

  includeCharacter(){
    this.includeChar = !this.includeChar;
  }

  includeNumber(){
    this.includeNum = !this.includeNum;
  }

  includeSymbol(){
    this.includeSym = !this.includeSym;
  }

  genPass(){
    this.generatedPass="";
    let validchar = '';
    
    if(this.includeChar){
      validchar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    if(this.includeNum){
      validchar += "1234567890"
    }

    if(this.includeSym){
      validchar += "!@#$%&*+-"
    }
    console.log(this.generatedPass);


    for(var s = 0; s < this.passLength; s++){
      this.generatedPass += validchar.charAt(Math.round(Math.random()*validchar.length))
    }
   
    
  }
}
