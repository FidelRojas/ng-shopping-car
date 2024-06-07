import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './models/product.model';

// Get complete state of the cart in application
export const selectAppState = createFeatureSelector<AppState>('cart');

// get All products
export const productsInCart = createSelector(
  selectAppState,
  (state: AppState) => state.products
);
