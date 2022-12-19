import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MainServiceService } from '../../services/main-service.service';
import { AddItemFace } from '../../interfaces/addItemFace'
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {


  addItemForm: any
  warningMessage: any

  constructor(
    private fb: FormBuilder, 
    // private ServiceComponent: MainServiceService, 
    private route: Router,
    private ProfileService:ProfileService,
    ) {


  }

  ngOnInit(): void {
    this.addItemForm = this.fb.group({
      itemName: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      price: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
      description: ['', [Validators.required]],
    })
  }
  addItem() {

    let answer: AddItemFace = this.addItemForm.value

    this.ProfileService.newAddItem(answer).subscribe({
      next: () => {
        this.route.navigate(['/catalog'])
      },
      error: (err: any) => {
        this.warningMessage = err.error.message
      }
    })
  }


}
