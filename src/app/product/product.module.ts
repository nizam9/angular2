import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ProductComponent } from "./product.component";
import { ProductFilterPipe } from "../product/product-filter.pipe";
import { ProductListComponent } from "../product/productList.component";
import { SharedModule } from "../shared_folder/shared.module";
// import { ProductService } from "../product/product.service";

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: "customers", component: ProductComponent },
      { path: "customer/:id", component: ProductListComponent }
    ])
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductFilterPipe,
  ],
  // providers: [ProductService],
  exports: [ProductComponent]
})
export class ProductModule {}
