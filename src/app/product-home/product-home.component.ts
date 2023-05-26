import { Component } from '@angular/core';
import { IProduct } from '../interface/product';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent {
products:IProduct[]=[]
constructor(private abc:ProductService){
  this.abc.getProducts().subscribe(data=>{
    this.products=data
    console.log(this.products);
    
  })
}
xoasp(id:any){
  this.abc.deleteProduct(id).subscribe(()=> {
    this.products=this.products.filter(item=>item.id !==id)
  })
}
}
