import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  getProducts(): Promise<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/product`).toPromise();
  }

  getProduct(id: number): Promise<Product> {
    return this.http.get<Product>(`${environment.apiUrl}/product/${id}`).toPromise();
  }

  postProduct(data: Product): Promise<Product> {
    return this.http.post<Product>(`${environment.apiUrl}/product`, data).toPromise();
  }

  putProduct(id: number, data: Product): Promise<Product> {
    return this.http.put<Product>(`${environment.apiUrl}/product/${id}`, data).toPromise();
  }

  deleteProduct(id:number): Promise<Product>{
    return this.http.delete<Product>(`${environment.apiUrl}/product/${id}`).toPromise();
  }
}
