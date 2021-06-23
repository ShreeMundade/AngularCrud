import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CustomerService } from "../shared/customer.service";

import { Customer } from "./customer";

@Component({

    selector:'edit-customer',
    templateUrl:'edit-customer.component.html'
})
export class EditCustomerComponent implements OnInit{

    
    customer!:Customer;
    editForm!:FormGroup;
    id:number=0;

    constructor(private _ActivatedRoute:ActivatedRoute,
        private formBuilder:FormBuilder,
        private router:Router,
        private service:CustomerService){}


    ngOnInit(): void {
        this.id=Number(this._ActivatedRoute.snapshot.paramMap.get("id"));

        this.service.getCustomerById(this.id).subscribe(
            (data)=>{
                    console.log(data);
                    this.customer =  data;
                    this.editForm =  this.formBuilder.group({

                        id:this.customer.id,
                        username:this.customer.username,
                        password:this.customer.password,
                        role:this.customer.role
                    })



            },
            (err)=>console.log(err)

        );

        
    }

    onSubmit(){

        console.log('form onSubmit of edit customer'+this.editForm.value);
        this.service.updateCustomer(this.id,this.editForm.value).
        subscribe(
            (data)=>{this.customer=data;
            this.router.navigate(['customers'])},
            (err)=>{console.log(err)}
            

        )
        
    }

}
