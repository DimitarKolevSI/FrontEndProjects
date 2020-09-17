import { Component, OnInit } from '@angular/core'
import { IProduct } from './products'
import { ProductService } from './product.service'

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers: [ProductService]
})

export class ProductListComponent implements OnInit{
  pageTitle:string = 'Product List!';
  imageWidth:number = 50;
  imageMargin:number = 2;
  showImage:boolean = false;
  private _listFilter: string;
  errorMessage:string;
  filteredProducts: IProduct[];
  products: IProduct[];
  ngOnInit(): void {
      this.productService.getProducts().subscribe({
        next: products => {
          this.products = products;
          this.filteredProducts = this.products; 
        },
        error: err => this.errorMessage = err
      })
  }
    
  constructor(private productService: ProductService){
      
  }

  public get listFilter(): string {
      return this._listFilter;
  }
  public set listFilter(value: string) {
      this._listFilter = value;
      this.filteredProducts = this._listFilter ? this.performFilter(this._listFilter):this.products;
  }

  onRatingClicked(message: string): void{
    this.pageTitle = 'Product List: ' + message;
  }

  performFilter(filterBy: string):IProduct[]{
      filterBy = filterBy.toLowerCase();
      return this.products.filter((product: IProduct) => 
              product.productName.toLowerCase().indexOf(filterBy)!== -1);
  }
    

  toogleImage():void{
      this.showImage = !this.showImage;
  }
}