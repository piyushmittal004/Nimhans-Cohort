import { Component, OnInit } from '@angular/core';
import {User} from  '../User'
import { InputServiceService } from '../input-service.service';
import { Router } from '@angular/router';
import { TransferUserService } from '../TransferUserService';



@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
   textArea:number;
   user:User[];
  


  constructor(private inputS:InputServiceService,private router:Router,private transfer:TransferUserService) { }

  async onClickButton(data)
  {
    console.log(this.textArea);
   // this.inputS.getUserData(this.textArea).subscribe(response => this.sendData(response));
   this.sendData(data);
   

  }
  sendData(response)
  {
    console.log(response);
   // this.transfer.setData(response);
    this.router.navigate(['/breifView',this.textArea]);

  }

  ngOnInit(): void {
  }

}
