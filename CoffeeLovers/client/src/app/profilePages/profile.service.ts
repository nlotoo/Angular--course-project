import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddItemFace } from '../interfaces/addItemFace';
import { MainServiceService } from '../services/main-service.service';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private HttpClient: HttpClient,
    private route: Router,
    private Mainservice: MainServiceService,
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

    return this.HttpClient.post<AddItemFace>(`${this.apiURL}/add-item`, myObj, { headers: new HttpHeaders({ 'token': `${this.Mainservice.isLoggedOn()}` }) })


  }
  getOneItem(id: string) {
    return this.HttpClient.get(`${this.apiURL}/item/${id}`)

  }
  deleteOne(id: string) {
    return this.HttpClient.get(`${this.apiURL}/delete/${id}`, { headers: new HttpHeaders({ 'token': `${this.Mainservice.isLoggedOn()}` }) }).subscribe((data) => {
      this.route.navigate(['/catalog'])
      return data
    })
  }

  updateOneItem(itemId: any) {

    return this.HttpClient.post<any>(`${this.apiURL}/update-item`, itemId, { headers: new HttpHeaders({ 'token': `${this.Mainservice.isLoggedOn()}` }) }).subscribe((data) => {
      try {
        console.log('Sucssefull request')
      }
      catch (err) {
        console.log(`Server error: ${err}`)
      }
    })
  }


  likeButtonPress(data: object | any) {

    return this.HttpClient.post<any>(`${environment.apiURL}/liked-item/${data.itemID}`, data)

  }

  disLikeButtonPress(data: object | any) {
    
    return this.HttpClient.post<any>(`${environment.apiURL}/disliked-item/${data.itemID}`, data)

  }

}
