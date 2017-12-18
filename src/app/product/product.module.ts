// Angular Imports
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
// This Module's Components
import { ProductComponent } from "./product.component";
import { ProductFilterPipe } from "../product/product-filter.pipe";
import { StarComponent } from "../shared_folder/star/star.component";
import { ProductListComponent } from "../product/productList.component";
// import { ProductService } from "../product/product.service";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      { path: "customers", component: ProductComponent },
      { path: "customer/:id", component: ProductListComponent }
    ])
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent
  ],
  // providers: [ProductService],
  exports: [ProductComponent]
})
export class ProductModule {}
