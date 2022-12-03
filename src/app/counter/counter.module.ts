
import { NgModule } from "@angular/core";

import { ContadorComponent } from "./counterComponent/counter.component";

@NgModule({
    declarations: [
        ContadorComponent,
    ],
    exports: [
        ContadorComponent,
    ],
})
export class CounterModule {}