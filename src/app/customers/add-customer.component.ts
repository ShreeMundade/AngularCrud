
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { CustomerService } from "../shared/customer.service";
import { Customer } from "./customer";

@Component({

    selector:'add-customer',
    templateUrl:'add-customer.component.html'
})
export class AddCustomerComponent implements OnInit{

customer!:Customer;
id:number=0;
addCustomerForm!:FormGroup;

constructor(
    private formBuilder:FormBuilder,
    private service:CustomerService,
    private router:Router){}

ngOnInit(): void {

    this.addCustomerForm =  this.formBuilder.group({
        username:['',Validators.required],
        password:['',Validators.required],
        role:['',Validators.required]
    })
        
    }

     
    onSubmit(){
        console.log("in the formsubmission for add")
       console.log(this.addCustomerForm.value)
        this.service.addCustomer(this.addCustomerForm.value).
        subscribe(
            (data)=>{this.customer=data;this.router.navigate(['customers'])},
            (err)=>console.log(err)
        )

    }



}