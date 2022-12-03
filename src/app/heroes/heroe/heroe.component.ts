import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl:'./heroe.component.html'
}) 
 export class HeroeComponent {
    nombre:string = 'Ironman'
    edad:number = 45

    get nameToUperCase():string {
      return  this.nombre.toUpperCase()
    }

    getName ():string  {
        return `${this.nombre} - ${this.edad}`
    }

    changeName ():void {
       this.nombre = 'Spiderman';
    }

    changeAge():void {
        this.edad = 30
    }
 }