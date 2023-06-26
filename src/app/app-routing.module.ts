import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllProductComponent } from './component/all-product/all-product.component';
import { SubProductComponent } from './component/sub-product/sub-product.component';
import { DetailsComponent } from './component/details/details.component';

const routes: Routes = [
{path: 'product', component: AllProductComponent},
{path:'product/sub-category/:id',component: SubProductComponent},
{path:'product/sub-category/:id/details/:pid',component:DetailsComponent},
{ path: 'item', loadChildren: () => import('./item/item.module').then(m => m.ItemModule) },
{ path: 'details', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule) },
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
