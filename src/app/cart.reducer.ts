import { createReducer, on } from '@ngrx/store';
import { add, clear } from './cart.actions';
import { AppState, Product } from './models/product.model';
import { Actions } from '@ngrx/effects';

export const initialState: AppState = {
  products: [],
};
export const cartReducer = createReducer(
  initialState,
  on(add, (state, { product }) => {
    const newState = { ...state };
    newState.products = [...state.products, product];
    return newState;
  }),
  on(clear, (state) => ({ products: [] }))
);
