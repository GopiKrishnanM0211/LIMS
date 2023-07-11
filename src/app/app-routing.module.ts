import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { Routes } from '@angular/router';

const routes : Routes =[
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
