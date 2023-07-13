import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
  message = 'Some Welcome message'

  welcomeMessageFromService:string = ''

  name= ''

  constructor(
    private route : ActivatedRoute,
    private service: WelcomeDataService
    ){

  }

  ngOnInit(){
  //  
 this.name = this.route.snapshot.params['name']
  }
  getWelcomeMessageWithParameter(){
    // console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccesfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    // console.log("get welcome message");
  }


  getWelcomeMessage(){
    // console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccesfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    // console.log("get welcome message");
  }

  handleSuccesfulResponse(response:any){
    this.welcomeMessageFromService = response.message;
    console.log(response)
    console.log(response.message)
  }

  handleErrorResponse(error: any){
    this.welcomeMessageFromService = error.error.message
  }

}
