import { Component } from '@angular/core';
import { AllproductsComponent } from '../allproducts/allproducts.component';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [AllproductsComponent],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.scss',
})
export class ProductlistComponent {
  productList: any;

  constructor(public productSerivce: ProductService, private router: Router) {}
  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productSerivce.getAllProducts().then((data: any) => {
      this.productList = data;
    });
  }
}
