import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'formula-engine-ui-service';
  

  isLoggedIn(){
    var token =   localStorage.getItem('currentUserToken');
    if(token != null){
      return true
    }else{
      return false;
    }

  }
}
