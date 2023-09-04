import { Component } from '@angular/core';
import 'bootstrap';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isAuthenticate: boolean = false;
  isAdmin: boolean = false;

  cartQuantity:number=0;
  constructor(cartService:CartService) {
    cartService.getCartObservable().subscribe(newCart=>{
      this.cartQuantity=newCart.totalCount;
    })
  }

}
