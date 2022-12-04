import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
     private _personajes: Personaje[] = [
            {name: 'Goku', power: 1500},
            {name: 'Vegeta', power: 200}
           ]
      
      get personajes():Personaje[] {
           return [...this._personajes] 
      } 
      constructor() {}

      addPersonaje(personaje:Personaje) {
            this._personajes.push(personaje)
      }
}