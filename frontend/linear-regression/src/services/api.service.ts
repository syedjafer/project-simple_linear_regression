import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RestApiService {
    constructor(private http: HttpClient) { }
    public hostUrl = "http://localhost:5000/"
    headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
    getData(): Observable<any>{
        return this.http.get(this.hostUrl+'datasets');
    }

    getPredictedValue(value:any): Observable<any>{
	console.log(value);
        return this.http.post<any>(this.hostUrl+"get-predicted-value", 
        { "value": value },
        {headers:this.headers})
    }
}  
