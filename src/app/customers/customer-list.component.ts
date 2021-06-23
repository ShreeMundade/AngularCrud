import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CustomerService } from "../shared/customer.service";
import { Customer } from "./customer";

@Component({
    selector:'app-customer-list',
    templateUrl:'./customer-list.component.html'
})
export class CustomerListComponent implements OnInit{

 customers!:Customer[];

private error!:string;
private id:number=0;

constructor(private service:CustomerService,private router:Router){}

ngOnInit(): void {
    this.service.getAllCustomers().subscribe(
        (data)=>this.customers=data,
        (err)=>console.log(err)

       );
    
    }

onEdit(customer:Customer){

    this.router.navigate(['edit-customer',customer.id])


}
onDelete(customer:Customer){

    this.service.deleteCustomerById(customer.id).subscribe(
    (data)=>{console.log('user deleted');
            this.customers = this.customers.filter(
               cust=>cust !== customer 
            )
}   ,
    (err)=> console.log(err)

    );
}

addCustomer(){
  this.router.navigate(['add-customer']);

}



}