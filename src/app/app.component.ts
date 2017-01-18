import { Component } from '@angular/core';
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
constructor(private userservice: UserService){

}
login(){
  this.userservice.userLogin().subscribe(
    data=>{console.log(data)}
  )
}
}
