import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddItemFace } from '../interfaces/addItemFace';
import { MainServiceService } from '../services/main-service.service';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private HttpClient: HttpClient,
    private HttpHeaders: HttpHeaders,
    private MainSerice: MainServiceService
  ) { }

  apiURL = environment.apiURL
  newAddItem(data: AddItemFace) {


    let { itemName, weight, imageUrl, description, price, } = data
    let creator = localStorage.getItem('User ID')
    let myObj = {
      itemName: itemName,
      weight: weight,
      price: price,
      imageUrl: imageUrl,
      description: description,
      author: creator

    }

    return this.HttpClient.post<AddItemFace>(`${this.apiURL}/add-item`, myObj, { headers: new HttpHeaders({ 'token': `${this.MainSerice.isLoggedOn()}` }) })


  }
}
