import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { Observable } from "rxjs";
import { Customer } from "../customers/customer";

@Injectable({
    providedIn:'root'
})
export class CustomerService{

    private baseUrl:string='http://localhost:8081/api/v1';
    
    constructor(private http:HttpClient){}

    getAllCustomers():Observable<Customer[]>{
            return <Observable<Customer[]>>this.http.get(this.baseUrl+"/customers");

    }

    getCustomerById(id:number):Observable<Customer>{

        return <Observable<Customer>>this.http.get(this.baseUrl+"/customers/"+id)
    }

    deleteCustomerById(id:number):Observable<Customer>{

        return <Observable<Customer>>this.http.delete(this.baseUrl+"/customers/"+id)
    }

    updateCustomer(id:number,customer:Customer):Observable<Customer>{

        return <Observable<Customer>>this.http.patch(this.baseUrl+"/customers/"+id,customer)
    }
  
    addCustomer(customer:Customer):Observable<Customer>{

        return <Observable<Customer>>this.http.post(this.baseUrl+"/customers",customer);
    }

}