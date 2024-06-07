import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../../models/product.model';
import { clear } from '../../cart.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private readonly store: Store<Product[]>) {}

  onReset() {
    this.store.dispatch(clear())
  }
}
