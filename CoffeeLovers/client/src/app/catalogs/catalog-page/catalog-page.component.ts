import { Component, OnInit } from '@angular/core';

import { MainServiceService } from '../../services/main-service.service';


@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css']
})
export class CatalogPageComponent implements OnInit {

  items: any = {};

  constructor(
    private ServiceComponent: MainServiceService,
  ) {
    this.ServiceComponent.getAllItems().subscribe((arrayOfItems) => {
      this.items = arrayOfItems
    })
  }

  ngOnInit(): void {


  }




}






