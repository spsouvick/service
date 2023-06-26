import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  prodID: any | undefined;
  subId: any | undefined;
  sub_product!: any;
  single_prod!: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private prodService: ProductService
  ) { }
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      this.prodID = params.get('id');
      this.subId = params.get('pid');
      // console.log( this.prodID, this.subId);
      this.sub_product = this.prodService.products.find(
        (data: any) => data.prod_id == this, this.prodID
      );
      // console.log("The required sub_product:  ", this.sub_product);
      this.single_prod = this.sub_product.sub_prod.find(
        (data: any) => data.sub_id == this.subId
      );
      console.log("Single data: ", this.single_prod);
    });
  }
}

