import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { SalesOfficerComponent } from './sales-officer/sales-officer.component';
import { SeniorManagerComponent } from './senior-manager/senior-manager.component';
import { SupervisorComponent } from './supervisor/supervisor.component';

const routes: Routes = [
{
  path:"1",
  component:SalesOfficerComponent
},
{
  path:"2",
  component:SupervisorComponent
},
{
  path:"3",
  component:ManagerComponent
},
{
  path:"4",
  component:SeniorManagerComponent
},
{
  path:"",
  component:AdminComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 
  
}
