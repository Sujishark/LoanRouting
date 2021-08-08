import { Component, OnInit } from '@angular/core';
import { LoanServiceService } from '../loan-service.service';

@Component({
  selector: 'app-senior-manager',
  templateUrl: './senior-manager.component.html',
  styleUrls: ['./senior-manager.component.css']
})
export class SeniorManagerComponent implements OnInit {

  

  dynamicArray:any=[];
  buttonDisabled:any=[];
  // newDynamic: any = {};
 
 
 
   data_json={
     "id":'',
     "name":'',
     "amount":'',
     "salary":'',
     "email":'',
     "aadhar":'',
     "pan":'',
     "status":'',
     "salesOfficerApproved":'',
     "supervisorApproved":'',
     "managerApproved":'',
     "srManagerApproved":'',
     "remarks":''
   }
 
   requests:any=[];
   constructor(private loanService:LoanServiceService) { }
 
   ngOnInit(): void {
     this.retrieveRequests();
   }
 
   retrieveRequests():void{
     this.loanService.getAllRequests().
     subscribe(data=>{
       data.forEach((request:any)=>{
         if((request.status==="Approved by Manager")||(request.status==="Loan Approved by Senior Manager")){
           this.dynamicArray.push(""); 
           
           this.requests.push(request);

           if(request.status==="Loan Approved by Senior Manager")
           this.buttonDisabled.push(true);
           else 
           this.buttonDisabled.push(false);
       }
       })
     },error=>{console.log(error);})
   }
 
   approveRequest(request:any,index:any){
 
    // this.addRemark(index,request);
 
     console.log(this.data_json);
 
 
     const data={
       "id":request.id,
       "name":request.name,
       "amount":request.amount,
       "salary":request.salary,
       "email":request.email,
       "aadhar":request.aadhar,
       "pan":request.pan,
       "status":"Loan Approved by Senior Manager",
       "salesOfficerApproved":true,
       "supervisorApproved":true,
       "managerApproved":true,
       "srManagerApproved":true,
       "remarks":{
         "1":request.remarks[1],
         "2":request.remarks[2],
         "3":request.remarks[3],
         "4":this.dynamicArray[index]
     }
   }
  
     this.loanService.updateRequest(request.id,data).
     subscribe(data=>{this.requests=data;
       console.log(data);
     },error=>{console.log(error);});
   }
 
   rejectRequest(request:any){
     //this.addRemark(index,request);
 
     const data={
       "id":request.id,
       "name":request.name,
       "amount":request.amount,
       "salary":request.salary,
       "email":request.email,
       "aadhar":request.aadhar,
       "pan":request.pan,
       "status":"Rejected",
       "salesOfficerApproved":false,
       "supervisorApproved":false,
       "managerApproved":false,
       "srManagerApproved":false,
       "remarks":request.remarks
     }
 
     this.loanService.updateRequest(request.id,data).
     subscribe(data=>{this.requests=data;
       console.log(data);
     },error=>{console.log(error);});
    
   }

}
