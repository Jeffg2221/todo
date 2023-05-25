import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = 'jeffg2221'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  //Router
  //Angular.giveMeRouter
  //Dependency Injection

  constructor(private router:Router, 
    private harcodedAuthenticationService : HardcodedAuthenticationService){}

    ngOnInit(){

    }

  handleLogin(){
    // console.log(this.username)
    // if(this.username === "jeffg2221" && this.password === "random"){
      if(this.harcodedAuthenticationService.authenticate(this.username, this.password)){
      //redirect to welcome page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    }else{
      this.invalidLogin = true
    }
    
  }

}
