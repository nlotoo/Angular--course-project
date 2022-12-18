import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddItemFace } from 'src/app/interfaces/addItemFace';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

  item: any
  authorBoolean: boolean = false
  isLiked: any;
  isDislike: boolean = false

  isLoged: string | null = localStorage.getItem('Session Token')




  constructor(
    private route: ActivatedRoute,
    private ServiceComponent: ProfileService,
    private HttpClient: HttpClient,

  ) {

  }
  locastorageID = localStorage.getItem('User ID')
  ngOnInit(): void {

    this.route.params.subscribe((data) => {
      this.ServiceComponent.getOneItem(data['id']).subscribe((itemById) => {
        this.item = itemById
        this.isLiked = this.item.likedAuthor.includes(this.locastorageID)
        this.authorBoolean = this.item.author == this.locastorageID
      })

    })

  }



  likeItem(): void {
    let data = {
      itemID: this.item._id,
      logedUserID: this.locastorageID,
    }

    this.ServiceComponent.likeButtonPress(data).subscribe(
      {
        next: () => {

          console.log('Sucssefull request')
          window.location.reload();
        },
        error: (err) => {
          console.log(`Server error: ${err.error.message}`)
        }
      }
    )


  }

  disLikeItem(): void {
    let data = {
      itemID: this.item._id,
      logedUserID: this.locastorageID,
    }

    this.ServiceComponent.disLikeButtonPress(data).subscribe(
      {
        next: () => {
          console.log('Sucssefull request')
          window.location.reload();
        },
        error: (err) => {
          console.log(`Server error: ${err}`)
        }
      }
    )


  }

  deleteItem() {
    let id = this.item._id
    return this.ServiceComponent.deleteOne(id)
  }

}
