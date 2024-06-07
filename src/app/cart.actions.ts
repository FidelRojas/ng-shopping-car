import { createAction, props } from '@ngrx/store';
import { Product } from './models/product.model';

export const add = createAction('[Product] Add', props<{ product: Product }>());
export const clear = createAction('[Product] Clear');
