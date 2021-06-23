import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductComponent } from './products/product.component';
import { ContactComponent } from './contacts/contact.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { CardHoverDirective } from './products/CardHoverDirective';
import { RemoveSpacesPipe } from './removespacespipe';
import { AddCustomerComponent } from './customers/add-customer.component';
import { EditCustomerComponent } from './customers/edit-customer.component';
import { CustomerListComponent } from './customers/customer-list.component';
import { CustomerComponent } from './customers/customer.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    WelcomeComponent,
    ProductComponent,
    ContactComponent,
    HomeComponent,
    ParentComponent,
    ChildComponent,
    CardHoverDirective,
    RemoveSpacesPipe,
    AddCustomerComponent,
    EditCustomerComponent,
    CustomerListComponent,
    CustomerComponent
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
