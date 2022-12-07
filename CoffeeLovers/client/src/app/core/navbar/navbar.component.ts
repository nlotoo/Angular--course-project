import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../../services/main-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  logedUser: any
  constructor(private ServiceComponent: MainServiceService) {
  }
  
  isAuth() {
    return this.ServiceComponent.isLoggedOn()
  }


  logout() {
    this.ServiceComponent.clearSession();
  }

}
