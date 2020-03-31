import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css']
})
export class FilteringComponent implements OnInit {
  table;
  selected;
  select;
  selectTest;
  listCol;
  numbers=[];
  num;
  concanted:string='';
  constructor() {

    this.table=['Brief','Deep'];
    this.listCol=['Sociodemography','HOPI','Developmental','Age'];
    let i:number;
    //this.numbers=new Array[100];
    for(i=1;i<100;i++)
    {
      this.numbers[i]=i;
    }
   }

   onClick()
   {
     if(this.num!=undefined&&this.num!=null)
     this.concanted=this.concanted+' '+this.select+' '+this.selectTest+' '+ this.num;
     else
     this.concanted=this.concanted+' '+this.select+' '+this.selectTest;
     this.num=null;
     this.selectTest=null;
     this.select=null;
     //this.selected=null;
     console.log(this.concanted);
     this.concanted=this.concanted+' and ';
   }

   onClickSave()
   {
    if(this.num!=undefined&&this.num!=null)
    this.concanted=this.concanted+' '+this.select+' '+this.selectTest+' '+ this.num;
    else
    this.concanted=this.concanted+' '+this.select+' '+this.selectTest;
    this.num=null;
       console.log(this.selected+' '+this.concanted);
   }
  
  ngOnInit(): void {
  }

}
