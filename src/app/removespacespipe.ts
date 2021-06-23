import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'removeSpaces'})
export class RemoveSpacesPipe implements PipeTransform{
    transform(value:string, ...args: any[]) {
       return value.replace(/\s/g,'');
    }


/* create another pipe which returns sqr of that number*/

}