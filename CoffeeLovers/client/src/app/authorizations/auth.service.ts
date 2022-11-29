import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { registerFace } from '../interfaces/registerFace';
import { environment } from 'src/environments/environment.prod';
import { tap } from 'rxjs';
import { MainServiceService } from '../services/main-service.service';






@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(
    private HttpClient: HttpClient,
    private MainService: MainServiceService,

    
  ) {
  
  }


  setToken(
    key: string,
    value: string,
  ): void {
    localStorage.setItem(`${key}`, `${value}`)
  }

  createUser(data: registerFace) {

    return this.HttpClient.post<any>(`${environment.apiURL}/register`, data
    ).pipe(tap((inscriptionData) => {

      this.setToken("Session Token", `${inscriptionData['reduceUserInfo'].token}`)
      this.setToken("User ID", `${inscriptionData['reduceUserInfo'].userId}`)
      this.setToken("Email", `${inscriptionData['reduceUserInfo'].email}`)

    }))

  }
  loginUser(data: registerFace) {



    return this.HttpClient.post<any>(`${environment.apiURL}/login`, data)
      .pipe(tap((inscriptionData) => {
        this.setToken("Session Token", `${inscriptionData['reduceUserInfo'].token}`)
        this.setToken("User ID", `${inscriptionData['reduceUserInfo'].userId}`)
        this.setToken("email", `${inscriptionData['reduceUserInfo'].email}`)
      }))
  }
}
