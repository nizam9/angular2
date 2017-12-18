import { Component, OnInit } from "@angular/core";
import { ActivatedRoute , Router } from "@angular/router";

@Component({
  moduleId: module.id,
  templateUrl: "product-list-component.html"
})
export class ProductListComponent implements OnInit {
    constructor(private _route: ActivatedRoute ,
                private _router: Router) {}
    value: string;

    ngOnInit(): void {
        const id = +this._route.snapshot.params['id'];
        this.value = `${id}`;
    }

    onBack(): void {
      this._router.navigate(['/customers']);
    }

}
