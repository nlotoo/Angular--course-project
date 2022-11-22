import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { AddItemFace } from '../interfaces/addItemFace'

@Injectable({
  providedIn: 'root'
})

export class MainServiceService {
  apiURL = environment.apiURL


  constructor(
    private HttpClient: HttpClient,
  ) { }


  setToken(
    key: string,
    value: string,
  ): void {
    localStorage.setItem(`${key}`, `${value}`)
  }
  clearSession() {
    localStorage.clear()
  }
  getAllItems() {
    return this.HttpClient.get<AddItemFace>(`${this.apiURL}/catalog`, { headers: new HttpHeaders({ 'token': `${this.isLoggedOn()}` }) })
  }
  isLoggedOn() {
    return localStorage.getItem('Session Token')
  }

}