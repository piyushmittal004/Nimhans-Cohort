import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import {User} from '../User';
import { TransferUserService } from '../TransferUserService';
import { BreifViewService } from '../breif-view.service';
import{UserServiceService} from '../user-service.service';
import{Router} from '@angular/router';
import{InputServiceService} from '../input-service.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


let user:User[];
let m:User;
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {


  displayedColumns: string[] = ['ADBS_ID', 'Assessment_ID', 'D_no', 'Family_no','p_name','date_of_consent','lab_group','remarks','date_of_assessment','sociodemography','HOPI','Developmental','physical_exam',
  'MSE','Life_chart','Treatment','DSM5CC','Pedigree','MINI','ASRS','HMSE','CGI_S','viewLab','viewOther'];


  displayedColumns1: string[] = ['ADBS_ID', 'Assessment_ID', 'D_no', 'Family_no','viewLab'];
dataSource:any;
//displayedCol:string[];


/**setupFilter(column: string) {
this.dataSource.filterPredicate = (d: dataSource, filter: string) => {
const textToSearch = d[column] && d[column].toLowerCase() || '';
return textToSearch.indexOf(filter) !== -1;
};
}*/

applyFilter(filtervalue: string){
this.dataSource.filter= filtervalue.trim().toLowerCase();



/**  this.dataSource.filterPredicate = function(data, filter: string): boolean {
return data.name.toLowerCase().includes(filter) || data.symbol.toLowerCase().includes(filter) || data.position.toString().includes(filter);
}*/

};

constructor(private TransferS:TransferUserService,private UserS:UserServiceService,private router:Router,private inputS:InputServiceService) {
  
 

}


async sendData(response)
  {
    console.log(response);
    this.TransferS.setData(response);
    user=this.TransferS.getData();
    console.log("ii");
    console.log(user);
    this.dataSource =new MatTableDataSource (user);
    console.log(this.dataSource);
  //  this.router.navigate(['/breifView',this.textArea]);

  }
onClick(data)
{
this.UserS.setData(data);
console.log(data);
this.router.navigate(['/labView']);

}

onClick1(data)
{
alert('Patient Number '+ data.p_number+'\n'+'Assessed By '+data.Assessed_by+'\n'+'PSW '+data.psw+
'\n'+'PDF '+data.pdf+'\n'+'Consultant Incharge '+data.consultant_incharge+ '\n'+
'Document_verified_by '+data.Document_verified_by+'\n'+ 'Date_verified_by '+data.Date_verified_by_pdf
+'\n'+ 'Document_verified_by_cohort '+data.Document_verified_by_cohort );
}

ngOnInit():void {
//displayedCol:string[];
this.inputS.getUserDataBrief().subscribe(response => this.sendData(response));
let i;
//this.displayedColumns=Object.keys(user)

// let x=[];
//  i=0;
// Object.keys(user).forEach(function(key) {
//   x[i]=key;
//   i=i+1;
// })
// this.displayedCol=x;
// console.log(this.displayedCol);

}
}
