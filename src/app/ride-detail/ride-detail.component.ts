import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ride-detail',
  templateUrl: './ride-detail.component.html',
  styleUrls: ['./ride-detail.component.scss']
})
export class RideDetailComponent {
  @Input('childData') childData: any;

}
