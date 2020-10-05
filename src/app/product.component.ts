import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { Product } from './product.model';
import { ProductRepository } from './repository.model';

@Component({
    selector: "app",
    /*<input [value]="email" type="text" (keyup.enter)="email= $event.target.value; onKeyUp()">*/
    template: `
        {{text | summary: 5}}
    `,
    styleUrls: ["product.component.css"]
})
export class ProductComponent {

    text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.';

}