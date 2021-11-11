import { Component, OnInit } from '@angular/core';
import { Product } from './shared/product.module';
import { ProductServiceService } from './shared/services/product-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  products!: Product[];

  constructor(private productService:ProductServiceService){

  }

  ngOnInit(): void {
    this.getData();
  }
  
  async getData(){
    try {
      this.products = (await this.productService.getProducts()) || [];
    } catch (error) {
      console.log(error);
    }
  }

  async save(product:Product){
    try {
      await this.productService.postProduct(product);
      this.getData();
    } catch (error) {
      console.log(error);
    }
}

async delete(id: number){
  try {
    await this.productService.deleteProduct(id);
    this.getData();
  } catch (error) {
    console.log(error);
  }
}
async edit(id:number, product:Product){
  try {
    await this.productService.putProduct(id,product);
    this.getData();
  } catch (error) {
    console.log(error);
  }
}
  
}
