import { Component } from "@angular/core";

@Component({
    selector: 'app-contador', //algo que hicimos nostoros
    template: `<h1>{{ title }}</h1>
<h3>La base es: <strong> {{ base }} </strong></h3>

<button (click)="acumular(-base)">+ {{base}}</button>
<span> {{ result }} </span>
<button (click)="acumular(+base)">- {{base}}</button>`,
})

export class ContadorComponent {
  title:string = 'Contador';
  result:number = 10
  base:number = 5

  acumular(num:number) {
    this.result += num
  }
}