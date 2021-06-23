import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './customers/add-customer.component';
import { CustomerListComponent } from './customers/customer-list.component';
import { CustomerComponent } from './customers/customer.component';
import { EditCustomerComponent } from './customers/edit-customer.component';

const routes: Routes = [
  {path:'customers',component:CustomerListComponent},
  {path:'customers/:id',component:CustomerComponent},
  {path:'add-customer',component:AddCustomerComponent},
  {path:'edit-customer/:id',component:EditCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
