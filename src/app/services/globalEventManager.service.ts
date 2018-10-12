import { Injectable, Output, EventEmitter } from "@angular/core";



@Injectable()
export class globalEventManager {

  lighttheme: boolean;

  @Output() changeTitleEmitter: EventEmitter<string> = new EventEmitter();
  @Output() changeThemeEmitter: EventEmitter<boolean> = new EventEmitter();


  changeTitle(newTitle: string) { 
    this.changeTitleEmitter.emit(newTitle)
  }

  changeTheme(newTheme: boolean){
    this.lighttheme = newTheme;
    this.changeThemeEmitter.emit(newTheme)
  }

}