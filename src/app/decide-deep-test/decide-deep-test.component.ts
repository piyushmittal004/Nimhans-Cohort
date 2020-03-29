import { Component, OnInit } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import{SelectionModel} from '@angular/cdk/collections';



@Component({
  selector: 'app-decide-deep-test',
  templateUrl: './decide-deep-test.component.html',
  styleUrls: ['./decide-deep-test.component.css']
})
export class DecideDeepTestComponent implements OnInit {
   data=[];
   checked:boolean[];
  constructor() {
    this.data=['MRI','Eye Tracking','fNIRS','EEG','Neuropsych'];
    this.checked = [false,false,false,false,false];
    this.finalSData=[];
   }
 
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
   initialSelection = [];
 allowMultiSelect = true;
 finalSData:any;
 
//selection = new SelectionModel<PeriodicElement>(this.allowMultiSelect, this.initialSelection);


onClick()
{
  let i;
  let k=0;
  for(i=0;i<this.data.length;i++)
  {
       if(this.checked[i]==true)
       {
       this.finalSData[k]=this.data[i];
       k=k+1;
       }
  }
  
  //this.finalSData=this.data.filter(item => this.checked[item.position]==true);
  console.log(this.finalSData);
  window.location.reload();

}
  ngOnInit(): void {
  }

}
