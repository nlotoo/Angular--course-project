import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { AddItemFace } from '../interfaces/addItemFace'

@Injectable({
  providedIn: 'root'
})

export class MainServiceService {
  apiURL = environment.apiURL
  userId = localStorage.getItem('User ID')

  constructor(
    private HttpClient: HttpClient,
  ) { }

  dataObject: any = {
    userId: this.userId
  }


  clearSession() {
    localStorage.clear()
  }
  getAllItems() {
    return this.HttpClient.get<AddItemFace>(`${this.apiURL}/catalog`, { headers: new HttpHeaders({ 'token': `${this.isLoggedOn()}` }) })
  }

  getFavorite() {
    return this.HttpClient.post<AddItemFace>(`${this.apiURL}/favorite-catalog`, this.dataObject, { headers: new HttpHeaders({ 'token': `${this.isLoggedOn()}` }) })

  }
  isLoggedOn() {
    return localStorage.getItem('Session Token')
  }

}