import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators'; 
import { BookRide } from './book-ride/book-ride';

@Injectable({
  providedIn: 'root'
})
export class RideService {
  bookedRideUrl = 'assets/data.json';
  constructor(private http: HttpClient) { }
  
  // getAllRules(): Observable<BookRide[]>{
  //   return this.http.get<BookRide[]>(this.bookedRideUrl);
  // }

  getAllRules(): Observable<BookRide[]>{
    return this.http.get<BookRide[]>(this.bookedRideUrl).pipe(
      retry(4),
      catchError(this.handleError)
    );
  }

  // HTTP HEADERs
  // getAllRules(): Observable<HttpResponse<BookRide[]>>{
  //   return this.http.get<BookRide[]>(this.bookedRideUrl, {observe: 'response'}).pipe(
  //     tap(data => console.log(data.headers.get('Date'))),
  //     retry(4),
  //     catchError(this.handleError)
  //   );
  // }

  handleError(err: HttpErrorResponse){
    var error: string;
    if(err instanceof Error){
      console.log("Network Error!");
      error = err.error.message; 
    }else{
      console.log(`Backend Error : ${err.status}`);
      error = err.error.status;
    }
    return throwError(error);
  }
}
