import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductAddComponent } from './product-add/product-add.component';

const routes: Routes = [
  {path:'',component:ProductHomeComponent},
  {path:'product/add',component:ProductAddComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
