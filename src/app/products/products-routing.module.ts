import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsLevelThreeOneComponent } from './products-level-three-one/products-level-three-one.component';

const routes: Routes = [
  {
    path: 'level3.1',
    component: ProductsLevelThreeOneComponent
  },
  {
    path: 'level3.2',
    component: ProductsLevelThreeOneComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
