import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent {

  constructor(private prod: ProductService) { }
  product!: any;

  ngOnInit(): void {
    this.product = this.prod.products;

    // console.log("ALL-product: ", this.product);
  }
}

