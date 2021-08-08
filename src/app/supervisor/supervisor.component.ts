import { Component, OnInit } from '@angular/core';
import { LoanServiceService } from '../loan-service.service';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css']
})
export class SupervisorComponent implements OnInit {

  dynamicArray:any=[];
  // newDynamic: any = {};
 
  buttonDisabled:any=[];

 
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
         if(!((request.status==="Rejected")||(request.status==="Completed")||(request.status==="Requested"))){
       //    this.newDynamic = {remarks:""}; 

           this.dynamicArray.push(request.remarks[2]); 
           this.requests.push(request);

           if((request.status==="Approved by Manager")||(request.status==="Loan Approved")||(request.status==="Approved by Supervisor")||(request.status==="Loan Approved by Senior Manager"))
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
       "status":"Approved by Supervisor",
       "salesOfficerApproved":true,
       "supervisorApproved":true,
       "managerApproved":false,
       "srManagerApproved":false,
       "remarks":{
         "1":request.remarks[1],
         "2":this.dynamicArray[index],
         "3": "",
         "4": ""
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
 
  //  addRemark(index:any,request:any){
  //    const data:any={
  //      "id":request.id,
  //      "name":request.name,
  //      "amount":request.amount,
  //      "salary":request.salary,
  //      "email":request.email,
  //      "aadhar":request.aadhar,
  //      "pan":request.pan,
  //      "status":request.status,
  //      "salesOfficerApproved":true,
  //      "supervisorApproved":true,
  //      "managerApproved":false,
  //      "srManagerApproved":false,
  //      "remarks":{
  //        "1":this.dynamicArray[index],
  //        "2":this.dynamicArray[index],
  //        "3":'',
  //        "4":''
  //    }
  //    }
 
  //    this.loanService.updateRequest(request.id,data).
  //    subscribe(data=>{this.requests=data;
  //      console.log(data);
  //    },error=>{console.log(error);});
 
  //  }
 

}
