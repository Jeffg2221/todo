import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    // console.log("Hello Bean Service")
  }

  executeHelloWorldBeanServiceWithPathVariable(name:any){
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
    // console.log("Hello Bean Service")
  }
}
