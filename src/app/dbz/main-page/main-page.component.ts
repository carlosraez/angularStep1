import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  //  personajes: Personaje[] = []
   
   new:Personaje = {
     name: 'Trunks 3',
     power: 100,
   }

  //  get personajes():Personaje[] {
  //     return this.dbzService.personajes
  //  }

   //recibo la prop del compoennte Hijo con el evento 
  //  addNewPersonaje(argument:Personaje) { 
  //   this.personajes.push(argument)
  //  }



}
