import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { NavbarModule } from './navbar/navbar.module';



@NgModule({
  declarations: [
    AppComponent,NavbarComponent,LoginComponent

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
