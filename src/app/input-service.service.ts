import { Injectable } from '@angular/core';
import { RouteReuseStrategy, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import '../assets/dummy.json';
import { Observable } from 'rxjs';
import {User} from './User';
import { RowFilter } from './filtering/RowFilter';
import { Status } from './status';


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
      return this._http.get<User[]>(this._url);
    // return this._http.post<User[]>(this._url,JsonData,{headers});
    
  }

  getUserDataBrief():Observable<User[]>
  {
   //let JsonData={'adbsID':[patientID]};
     const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJQaXl1c2giLCJleHAiOjE1ODQyMDk1ODksImlhdCI6MTU4NDE3MzU4OX0.mNtaoHSSKwB2LzG-_Fdj8cAXb01G8P-61SNZCzH6V5w'};
   //  console.log(patientID);
      return this._http.get<User[]>(this._url);
    // return this._http.post<User[]>(this._url,JsonData,{headers});
    
  }

  getBreifTable(data:string):Observable<User[]>
  {
    let _url1:string="http://localhost:3000/User";
  //  let JsonData={'adbsID':[patientID]};
     const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJQaXl1c2giLCJleHAiOjE1ODQyMDk1ODksImlhdCI6MTU4NDE3MzU4OX0.mNtaoHSSKwB2LzG-_Fdj8cAXb01G8P-61SNZCzH6V5w'};
     console.log(data);
     // return this._http.get<User[]>(this._url);
     return this._http.get<User[]>(_url1);
  }

  getLabStatusDetails(data:User):Observable<Status>
  {
    let _url1:string="http://localhost:3000/User";
    let JsonData={'assess_id':data.Assessment_ID};
    const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJQaXl1c2giLCJleHAiOjE1ODQyMDk1ODksImlhdCI6MTU4NDE3MzU4OX0.mNtaoHSSKwB2LzG-_Fdj8cAXb01G8P-61SNZCzH6V5w'};
    console.log(JsonData);
     return this._http.post<Status>(_url1,JsonData,{headers});

  }
}
