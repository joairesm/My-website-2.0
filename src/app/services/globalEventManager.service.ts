import { Injectable, Output, EventEmitter } from "@angular/core";



@Injectable()
export class globalEventManager {


  @Output() changeTitleEmitter: EventEmitter<string> = new EventEmitter();
  @Output() changeThemeEmitter: EventEmitter<string> = new EventEmitter();


  changeTitle(newTitle: string) { 
    this.changeTitleEmitter.emit(newTitle)
  }

  changeTheme(newThemeName: string){
    this.changeThemeEmitter.emit(newThemeName)
  }

}