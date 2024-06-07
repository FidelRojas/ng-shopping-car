export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface AppState {
  products: Product[];
}
