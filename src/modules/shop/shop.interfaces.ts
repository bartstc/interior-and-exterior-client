import { ShopActionTypes } from './shop.types';

/* ===== Common Shop Action Types ===== */

export type Type =
  | 'all'
  | 'chairs'
  | 'lamps'
  | 'clocks'
  | 'vases'
  | 'benches'
  | 'flowerpots'
  | 'plants';

export interface Product {
  id: string;
  name: string;
  collection: string;
  type: Type;
  price: string;
  color: string;
  character: string;
  description: string;
  images: string[];
}

export interface FilterItem {
  description: string;
  amountOfProducts: number;
}

export interface FiltersMap {
  [key: string]: FilterItem;
}

/* ===== Action Interfaces ===== */

export interface FetchProductsByTypeAction {
  type: ShopActionTypes.FETCH_PRODUCTS_BY_TYPE;
  payload: string;
}

export interface FetchProductsByQueryAction {
  type: ShopActionTypes.FETCH_PRODUCTS_BY_QUERY;
  payload: string;
}

export interface FetchProductsSuccessAction {
  type: ShopActionTypes.FETCH_PRODUCTS_SUCCESS;
  payload: Product[];
}

export interface FetchProductsFailureAction {
  type: ShopActionTypes.FETCH_PRODUCTS_FAILURE;
  payload: string;
}

export type ShopActions =
  | FetchProductsByTypeAction
  | FetchProductsByQueryAction
  | FetchProductsSuccessAction
  | FetchProductsFailureAction;
