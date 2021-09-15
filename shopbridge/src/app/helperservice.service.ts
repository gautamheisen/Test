import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HelperserviceService {
Url = "assets/mockdata.json"
// Url = "http://localhost:64905/api/TestController/GetData"

private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
  
    console.error('An error occurred:', error.error.message);
  } else {
    
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // Return an observable with a user-facing error message.
  return throwError(
    'Something bad happened; please try again later.');
}
UserName = ""
  constructor(private http:HttpClient) { }
  
  
  getInventoryList(){
   let headers= new HttpHeaders()
  //  .set('Authorization', 'http://localhost:4200');
  .set('Access-Control-Allow-Hesder','Content-Type')
  .set('Access-Control-Allow-Methods', 'GET')
  .set('Access-Control-Allow-Origin', 'http://localhost:4200');

  // headers = headers.set('Authorization', 'http://localhost:4200')
  // .set('Content-Type','application/javascript')
  console.log(headers)
   return this.http.get(this.Url,{headers,observe: 'response'  }).pipe(
    catchError(this.handleError)
   )
  }
  postInventory(data){
    return this.http.post(this.Url,data).pipe(
      catchError(this.handleError)
     )
  }
  UpdateInventory(data){
    return this.http.put(this.Url,data).pipe(
      catchError(this.handleError)
     )
  }
  DeleteInventory(data){
    return this.http.delete(this.Url+'/'+data.id).pipe(
      catchError(this.handleError)
     )
  }
  setUserName(username:any){
this.UserName = username
  }
}
