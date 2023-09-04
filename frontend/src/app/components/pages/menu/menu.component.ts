import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    activatedRoute.params.subscribe(params => {
      if (params.key) {
        this.foods = this.foodService.getAllBySearch(params.key);
      } else if (params.tag) {
        this.foods = this.foodService.getAllByTag(params.tag);
      }
      else {
        this.foods = foodService.getAll();
      }
    })

  }


}
