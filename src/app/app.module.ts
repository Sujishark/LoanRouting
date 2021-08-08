import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesOfficerComponent } from './sales-officer/sales-officer.component';
import { FormsModule } from '@angular/forms';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { SeniorManagerComponent } from './senior-manager/senior-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesOfficerComponent,
    SupervisorComponent,
    AdminComponent,
    ManagerComponent,
    SeniorManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
