import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service';
import { User } from '../User';
@Component({
  selector: 'app-view-lab-report',
  templateUrl: './view-lab-report.component.html',
  styleUrls: ['./view-lab-report.component.css']
})
export class ViewLabReportComponent implements OnInit {


  data:User;
  constructor(private UserS:UserServiceService) { 
    this.data=UserS.getData();
    this.LCL=false;
    this.DNA=false;
  }

  LCL:boolean;
  DNA:boolean
  ngOnInit(): void {
  }
  onClickLCL(){
    this.LCL=true;
  }

  onClickDNA()
  {
      this.DNA=true;
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
}
