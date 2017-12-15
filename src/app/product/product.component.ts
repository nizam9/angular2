import { Component, OnInit } from "@angular/core";
import { Icustomers } from "./product";
import { ProductService } from "./product.service";
@Component({
  selector: "app-product",
  moduleId: module.id,
  templateUrl: "product.component.html",
  styleUrls: ["product.component.css"]
})
export class ProductComponent implements OnInit {
  pageTitle = "Product List";
  imgWidth = 40;
  marginPx = 3;
  productList: Icustomers[];
  errorMessage: string;
  visible: Boolean = true;

  constructor(private _productService: ProductService) {}

  visibility(): void {
    this.visible = !this.visible;
  }

  ngOnInit(): void {
    console.log("_productService");
    this._productService
      .getProducts()
      .subscribe(
        products => (this.productList = products),
        error => alert(error)
      );
  }

  onRatingClicked(message: string): void {
    this.pageTitle = message;
  }
}
