import { Component, OnInit, ViewChild, ElementRef ,AfterViewInit, Renderer2} from '@angular/core';
import {UserServiceService} from '../user-service.service';
import { User } from '../User';
import { Router } from '@angular/router';
import { InputServiceService } from '../input-service.service';
import { Status } from '../status';
@Component({
  selector: 'app-view-lab-report',
  templateUrl: './view-lab-report.component.html',
  styleUrls: ['./view-lab-report.component.css']
})
export class ViewLabReportComponent implements OnInit {
@ViewChild('op1',{read: ElementRef}) op1:ElementRef;

  data:User;
  constructor(private UserS:UserServiceService,private router:Router,private inputS:InputServiceService,private status:Status,private render:Renderer2) { 
    this.data=UserS.getData();
    
  }

  LCL:number;
  DNA:number;
  PBMNC:number;
  Geneprint:number;
  Kyrotyping:number;
  ngOnInit(): void {
      this.inputS.getLabStatusDetails(this.data).subscribe(response => this.fetchData(response));
   
    
  }

  fetchData(response)
  {
    console.log(response);
      this.status=response;
      this.DNA=this.status.DNA_Status;
      this.LCL=this.status.LCL_Status;
      this.PBMNC=this.status.PBMNC_Status;
      this.Geneprint=this.status.Geneprint_Status;
      this.Kyrotyping=this.status.Kyrotyping_Status;
      
   
    
  

  }

  ngAfterViewInit()
  {
    console.log(this.op1.nativeElement);
    if(this.LCL==0)
    this.render.setStyle(this.op1.nativeElement,'color','red');
      if(this.LCL==1)
      this.render.setStyle(this.op1.nativeElement,'color','yellow');
      if(this.LCL==2)
      this.render.setStyle(this.op1.nativeElement,'color','blue');
      if(this.LCL==3)
    this.render.setStyle(this.op1.nativeElement,'color','green');
  }
  onClickLCL(){
   
  }

  onClickDNA()
  {
      
  }

  onClickPBMNC()
  {

  }

  onClickKyrotyping()
  {

  }

  onClickGeneprint()
  {

  }

  onDecide()
  {
    this.router.navigate(['/DecideDeep']);
  }
}
