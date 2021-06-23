import {Component, OnChanges, SimpleChanges} from '@angular/core'

@Component({

selector:'parent',
templateUrl:'parent.component.html'

})
export class ParentComponent implements OnChanges{
    ngOnChanges(changes: SimpleChanges): void {
        console.log(this.studentFullName)
    }

    parentTitle='Parent Component';
    numberOfReviews:number=100;
    studentFullName!:string;
    
    receiveDataFromChild(rev: any){
         console.log('rev value',rev);
        this.numberOfReviews =rev;
        console.log(this.numberOfReviews)
    }

    receiveFullName(evv:any){
        console.log('in receive full name')
        this.studentFullName=evv;
        console.log(this.studentFullName)
    }


}
  