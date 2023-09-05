import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  foods: Food[] = [];

  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    let foodsObservable: Observable<Food[]>;
    activatedRoute.params.subscribe(params => {
      if (params.key) {
        foodsObservable = this.foodService.getAllBySearch(params.key);
      } else if (params.tag) {
        foodsObservable = this.foodService.getAllByTag(params.tag);
      }
      else {
        foodsObservable = foodService.getAll();
      }

      foodsObservable.subscribe(serverFoods => {
        this.foods = serverFoods;
      });
    })


  }


}
