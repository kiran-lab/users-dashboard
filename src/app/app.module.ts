import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RoleDistributionChartComponent } from './common/role-distribution-chart/role-distribution-chart.component';
import { MaterialModule } from './module/material.module';
import { AddUserModule } from './add-user/add-user.module';

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    RoleDistributionChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule, 
    MaterialModule,
    AddUserModule
  ],
  providers: [
    provideAnimationsAsync('animations')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
