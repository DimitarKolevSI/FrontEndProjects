import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ActivatedRoute, Router } from '@angular/router'
import { ProductService } from './product.service'

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product:IProduct;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: ProductService) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.service.getProducts().subscribe({
      next: products => {
        this.product = products.filter(_product=>_product.productId === id)[0];
      }
    });
  }

  onBack():void{
    this.router.navigate(['/products']);
  }
}
