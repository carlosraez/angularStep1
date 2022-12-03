import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
   heroes: string[] = ['Spiderman', 'Ironman', ' Huclk']
   heroDelete:string = ''
  
   constructor() {
    console.log(this.heroDelete);
   }
   deleteHero () {
    this.heroDelete =  this.heroes.shift() || ''
    
    
   }
}
