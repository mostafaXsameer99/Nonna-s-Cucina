import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { MenuComponent } from './components/pages/menu/menu.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:key', component: MenuComponent },
  { path: 'tag/:tag', component: MenuComponent },
  { path: 'food/:id', component: FoodPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'menu', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
