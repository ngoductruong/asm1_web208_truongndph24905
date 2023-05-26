import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../interface/product';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(' http://localhost:3000/products');
  }
  deleteProduct(id:number | string):Observable<IProduct>{
    return this.http.delete<IProduct>('http://localhost:3000/products/' +id);
  }


  addProduct(product:IProduct):Observable<IProduct>{
    return this.http.post<IProduct>('http://localhost:3000/products',product)
  }
}
