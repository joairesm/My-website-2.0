import { Injectable, Output, EventEmitter } from "@angular/core";



@Injectable()
export class globalEventManager {


  @Output() change: EventEmitter<string> = new EventEmitter();



  changeTitle(newTitle: string) { 
    this.change.emit(newTitle)
  }

}