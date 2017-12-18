import { PipeTransform, Pipe } from "@angular/core";
import { Icustomers } from "./product";

@Pipe({
  name: "customerFilter"
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: Icustomers[], filterBy: string): Icustomers[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy
      ? value.filter(
          (customer: Icustomers) =>
            customer.first_name.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
            customer.last_name.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
            customer.email.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
            customer.phone.valueOf().toString().indexOf(filterBy) !== -1
        )
      : value;
  }
}
