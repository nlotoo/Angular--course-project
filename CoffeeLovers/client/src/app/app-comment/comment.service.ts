import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentFace } from '../interfaces/commentFace';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { Location } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  apiURL = environment.apiURL

  constructor(
  
    private HttpClient: HttpClient,
    private _location: Location,

  ) { }

  createComment(data: any) {
    return this.HttpClient.post<CommentFace>(`${this.apiURL}/post/comment`, data).subscribe((data) => { return data })
  }
  loadComment(itemId: any) {
    return this.HttpClient.get<any>(`${this.apiURL}/load/comment/${itemId}`)
  }
  loadCommentEditPage(commentId: any) {
    return this.HttpClient.get(`${this.apiURL}/edit-comment-page/${commentId}`)
  }
  editComment(objData: any) {
    return this.HttpClient.post(`${this.apiURL}/edit-comment-page/${objData.id}`, objData)
      .subscribe({
        next: () => {
          this._location.back()
        },
        error: (err: any) => {
          // не е настроен еррора
        }
      })
  }

  deleteComment(commentId: any) {
    return this.HttpClient.delete(`${this.apiURL}/edit-comment-page/${commentId}`, commentId).subscribe(
      {
        next: () => {
          this._location.back()
        },
        error: (err: any) => {
          console.log(err)
          // не са  настроени еррорите
        }
      }
    )
  }

  likeComment(data: any) {
    return this.HttpClient.post(`${this.apiURL}/liked/${data.commentID}`, data)
  }

  dislikeComment(data: any) {
    return this.HttpClient.post(`${this.apiURL}/dislike/${data.commentID}`, data)

  }
}
