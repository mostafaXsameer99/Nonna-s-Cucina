import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_dishes, sample_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[] {
    return sample_dishes;
  }

  getAllBySearch(key: string) {

    return this.getAll().filter(food => food.name.toLowerCase().includes(key.toLowerCase()));
  }

  getAllTags(): Tag[] {
    return sample_tags
  }

  getAllByTag(tag: String): Food[] {
    return tag === "All" ?
      this.getAll()
      :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getFoodById(foodId: String): Food {
    // return this.getAll()[Number(foodId)] ;
    return this.getAll().find(food => food.id == foodId) ?? new Food();
  }
}
