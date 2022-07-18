import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { LoginComponent } from './login.component';
import { NavbarModule } from '../navbar/navbar.module';
import { AppComponent } from '../app.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, ReactiveFormsModule,NavbarModule, AppRoutingModule
  ]
})
export class LoginModule { }
