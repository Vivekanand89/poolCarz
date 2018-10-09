import { Pipe, PipeTransform, HostListener } from '@angular/core';

@Pipe({
  name: 'filterRides'
})
export class FilterRidesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    function sliceArray(element){
      if(args==='frominfosys' && element.startPoint.toLowerCase()==='infosys'){
        return element;
      } else if(args==='toinfosys' && element.endPoint.toLowerCase()==='infosys'){
        return element;
      }else if(args===undefined){
        return element;
      }
    }
    return value.filter(sliceArray);
  }

}
