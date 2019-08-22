import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  lists = [{'email':'123@123', 'password':'123'},{'email':'1234@1234', 'password':'1234'},{'email':'1234@123', 'password':'123456'}]

  constructor(private router: Router, private from :FormsModule) { }


  ngOnInit() {
    
  }

  itemClicked() {
    var valid = false
    for(let i=0;i<3;i++){
      
      if (this.username == this.lists[i].email && this.password == this.lists[i].email){
        valid = true;
        alert("OK");
        this.nav();
      }

    }
    if ( valid == false){
      alert("something wrong");
    }
  }

  nav(){
         this.router.navigateByUrl('/account');
      }
    
}
