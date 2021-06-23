import { Component } from "@angular/core";
import { Book } from "./Book";
import { IBook } from "./IBook";


@Component({
selector:'spc-book-list',
templateUrl:'./book-list.component.html'

})
export class BookListComponent {
    books!:IBook[]; 
    show!:boolean;
    imageUrl:string='assets/images/greece.jpg';
    imageWi:number=100;
    imageHi:number=100;
    titleToBeSearched:string="Sleeping Giants";
    constructor()
    {
   this.books=[ new Book(1111,'on the shoulders of giants','stephen hawking','SH3400'),
   new Book(1112,'God Created Integers','stephen hawking','SH3401'),
   new Book(1113,'Ultimate mind games','some author','345567'),
   new Book(1114,'Mysterious garden','Enid Blyton','SH340056'),
   

   ];
   this.show=true;

}

onButtonClick(){

    this.show = !this.show;

}

}