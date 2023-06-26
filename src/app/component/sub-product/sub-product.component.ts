import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-sub-product',
  templateUrl: './sub-product.component.html',
  styleUrls: ['./sub-product.component.css']
})
export class SubProductComponent implements OnInit {
  prodId: any | undefined;
  sub_product!: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private prodService: ProductService
  ) { }
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      this.prodId = params.get('id');

      // console.log("Collected id: ", this.prodId);
      this.sub_product = this.prodService.products.filter(
        (data: any) => data.prod_id == this.prodId
      );
      console.log("The required sub_product: ", this.sub_product);

    });
  }
}
