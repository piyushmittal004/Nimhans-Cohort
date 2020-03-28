import { Injectable } from '@angular/core';
import { RouteReuseStrategy, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import '../assets/dummy.json';
import { Observable } from 'rxjs';
import {User} from './User';


@Injectable({
  providedIn: 'root'
})
export class InputServiceService {

  constructor(private route:Router, private _http:HttpClient) { }

   private _url:string="http://localhost:3000/User";
  getUserData(patientID:number):Observable<User[]>
  {
   let JsonData={'adbsID':[patientID]};
     const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJQaXl1c2giLCJleHAiOjE1ODQyMDk1ODksImlhdCI6MTU4NDE3MzU4OX0.mNtaoHSSKwB2LzG-_Fdj8cAXb01G8P-61SNZCzH6V5w'};
     console.log(patientID);
     // return this._http.get<User[]>(this._url);
     return this._http.post<User[]>(this._url,JsonData,{headers});
    
  }
}
