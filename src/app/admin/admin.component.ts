import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanServiceService } from '../loan-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public Employee={
    level:'',
    userid:'',
    password:''
  }
  constructor(private loanService:LoanServiceService,private router: Router) { }

  ngOnInit(): void {
  }

  loginEmployee():void{
      this.loanService.getUserById(parseInt(this.Employee.userid)).subscribe(data=>{
          if(data.password==this.Employee.password){
            this.router.navigate([`/${data.level}`]);
        }}
      ,error=>{console.log(error);})
  }
}
