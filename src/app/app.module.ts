import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { ProductComponent } from "./product/product.component";
import { ProductFilterPipe } from "./product/product-filter.pipe";
import { StarComponent } from "./shared_folder/star/star.component";
import { ProductListComponent } from "./product/productList.component";
import { WelcomeComponent } from "./product/welcome.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductFilterPipe,
    ProductListComponent,
    WelcomeComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: "customers", component: ProductComponent },
      { path: "customers/:id", component: ProductListComponent },
      { path: "welcome", component: WelcomeComponent },
      { path: "", redirectTo: "welcome", pathMatch: "full" },
      { path: "**", redirectTo: "welcome", pathMatch: "full" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
