import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CustomerService } from "../shared/customer.service";
import { Customer } from "./customer";

@Component({

    selector:'app-customer',
    templateUrl:'customer.component.html'
})
export class CustomerComponent implements OnInit{
  customer!:Customer;
  id:number=0;

  constructor(
      private _ActivatedRoute:ActivatedRoute,
      private router:Router,
      private service:CustomerService ){}


    ngOnInit(): void {
        this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));

        this.service.getCustomerById(this.id).subscribe(
            (data)=>{
                console.log(data);
                this.customer = data
            },
            (err)=>console.log(err)
        );
       
    }

    onBack(){

        this.router.navigate(['customers']);
    }
}