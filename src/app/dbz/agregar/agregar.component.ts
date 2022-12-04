import { 
  Component, 
  EventEmitter, 
  Input, 
  Output } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
   
  @Input()
  new: Personaje = {
    name:'',
    power:0
  }

  // @Output() onNewPersonaje:EventEmitter<Personaje> = new EventEmitter()

  constructor (private dbzService:DbzService) {}
   
  add() {
    if (this.new.name.trim().length === 0) {
      return
    }
    this.dbzService.addPersonaje(this.new)
    // this.onNewPersonaje.emit(this.new)
    this.new = {
      name: '',
      power: 0,
    }
   }
}
