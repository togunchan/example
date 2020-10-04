import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { Product } from './product.model';
import { ProductRepository } from './repository.model';


@Component({
    selector: "app",
    /*<input [value]="email" type="text" (keyup.enter)="email= $event.target.value; onKeyUp()">*/
    template: `
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()">
    <br>
    <span>
        {{email}}
    </span>
    `,
    styleUrls: ["product.component.css"]
})
export class ProductComponent {

    //yeni bir "property" tanımlanıp ona bir nesne atandı.
    model: ProductRepository = new ProductRepository();

    email= "email@gmail.com";

    onKeyUp(){
            console.log(this.email);
    }

}