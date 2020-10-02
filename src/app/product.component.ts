import { Component } from "@angular/core";
import { Product } from './product.model';
import { ProductRepository } from './repository.model';

@Component({
    selector: "app",
    templateUrl: "product.component.html",
    styleUrls: ["product.component.css"]
})
export class ProductComponent {

    //yeni bir "property" tanımlanıp ona bir nesne atandı.
    model: ProductRepository = new ProductRepository();
    disabled = true;

    getClasses(id: number): string {
        let product = this.model.getProductById(id);
        return (product.price <= 1000 ? "bg-info" : "bg-secondary") + " m-2 p-2 text-white";
    }

    getClassMap(id: number): Object {
        let product = this.model.getProductById(id);
        return {
            //":"dan sonraki değerler "true" ise değer döndürülür.
            "bg-info": product.price <= 1000,
            "bg-secondary": product.price > 1000,
            "text-center text-white": product.name == "Samsung s6"
        }
    }

    color: string = this.model.getProductById(1).price <= 1000 ? "green" : "red";
    fontSize: string = "25px";

    getStyles(id: number) {
        let product = this.model.getProductById(1);
        return {
            fontSize: "25px",
            color: this.model.getProductById(1).price <= 1000 ? "green" : "red"
        }
    }


}