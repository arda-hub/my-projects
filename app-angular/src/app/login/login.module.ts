import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { LoginComponent } from './login.component';
import { NavbarModule } from '../navbar/navbar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, ReactiveFormsModule,NavbarModule
  ]
})
export class LoginModule { }
