import { Injectable } from '@angular/core';
import { RouteReuseStrategy, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import '../assets/dummy.json';
import { Observable } from 'rxjs';

import {User} from './User';
@Injectable({
  providedIn: 'root'
})
export class BreifViewService {

  

  constructor(private route:Router, private _http:HttpClient) { }

   private _url:string="https://localhost:8443/brieftable";
   
  getUserData():Observable<User[]>
  {
    const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJQaXl1c2giLCJleHAiOjE1ODI2NDcxMDQsImlhdCI6MTU4MjYxMTEwNH0.1SPd_TOCgo8hrcNL1DKSHJrl-Ml1n4gK5aSZtnnc6yo'};
     return this._http.get<User[]>(this._url,{headers});;
  }
}
