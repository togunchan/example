import {Component} from "@angular/core";
import { Product } from './product.model';
import { ProductRepository } from './repository.model';

@Component({
    selector: "app",
    templateUrl: "product.component.html",
    styleUrls: ["product.component.css"]
})
export class ProductComponent{

    //yeni bir "property" tanımlanıp ona bir nesne atandı.
    model: ProductRepository = new ProductRepository();

    //atanan nesne üzerinden metota ulaşabildik
    product: Product = this.model.getProductById(1);

}