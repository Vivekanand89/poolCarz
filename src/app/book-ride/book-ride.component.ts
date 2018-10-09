import { Component, OnInit, DoCheck } from '@angular/core';
import { BookRide } from './book-ride';
import { RideService } from '../ride.service';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.scss']
})
export class BookRideComponent implements OnInit{
  bookrides: BookRide[];
  error: any;
  constructor(private rideService: RideService){}
  
  getAllRules(){
    this.rideService.getAllRules().subscribe(
      data => this.bookrides = data.body,
      error => this.error = error
    );
  }

  ngOnInit(): void {
    this.getAllRules();
  }
  
}
