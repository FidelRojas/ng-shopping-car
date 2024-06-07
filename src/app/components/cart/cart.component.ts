import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { Store, select } from '@ngrx/store';
import { productsInCart } from '../../cart.selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  products: Observable<Array<Product>> = this.store.pipe(
    select(productsInCart)
  );
  constructor(private readonly store: Store<Product[]>) {}
}
