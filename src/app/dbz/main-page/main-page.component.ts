import { Component } from '@angular/core';

interface Personaje {
  name:string;
  power:number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
   
   personajes: Personaje[] = [
    {name: 'Goku', power: 1500},
    {name: 'Vegeta', power: 200}
  ]
   new:Personaje = {
     name: '',
     power: 0,
   }

   add() {
    if (this.new.name.trim().length === 0) {
      return
    }
    this.personajes.push(this.new)
    this.new = {
      name: '',
      power: 0,
    }
   }
}
