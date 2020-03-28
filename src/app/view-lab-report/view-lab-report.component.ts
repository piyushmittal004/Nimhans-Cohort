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

  }

  ngOnInit(): void {
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
}
