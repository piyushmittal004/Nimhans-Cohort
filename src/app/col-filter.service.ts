import { Injectable } from '@angular/core';
import { RowFilter } from './filtering/RowFilter';

@Injectable({
  providedIn: 'root'
})
export class ColFilterService {

  constructor() { }
  userList:RowFilter;

  setData(data:RowFilter)
  {
    this.userList=data;
  }

  getData():RowFilter
  {
    let d=this.userList;
    this.userList=null;
    return d;
  }
}
