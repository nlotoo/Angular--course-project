import { Component } from '@angular/core';
import { MainServiceService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-favorite-catalog',
  templateUrl: './favorite-catalog.component.html',
  styleUrls: ['./favorite-catalog.component.css']
})
export class FavoriteCatalogComponent {

  favoriteItems: any;

  constructor(
    private MainService: MainServiceService
  ) {




    this.MainService.getFavorite().subscribe((fetchedFavoriteItems) => {
      console.log(fetchedFavoriteItems)
      this.favoriteItems = fetchedFavoriteItems
    })
  }
}
