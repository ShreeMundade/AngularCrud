import { EventEmitter } from '@angular/core';
import {Component , Input , Output} from '@angular/core'


@Component({
selector:'child-component',
templateUrl:'./child.component.html'

})
export class ChildComponent{


@Input()
reviews!:number;

@Output()
sendReviewsEvent = new EventEmitter<number>();

@Output()
fullNameEvent = new EventEmitter<string>();
studentFullName!:string;
firstName:string='a';
lastName:string = 'b';

sendReviews(){
    console.log('before click',this.reviews)
    this.reviews += 1;

    console.log('after click',this.reviews)

    this.sendReviewsEvent.emit(this.reviews);
}


sendFullName(){
    this.studentFullName =  this.firstName + this.lastName;
    console.log(this.studentFullName)
 this.fullNameEvent.emit(this.studentFullName);
 console.log('event emitted')

}
}