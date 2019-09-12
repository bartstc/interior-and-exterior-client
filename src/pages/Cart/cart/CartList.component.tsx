import React from 'react';
import { connect } from 'react-redux';

import { CartListWrapper, Warning } from './CartList.styles';

import { CartProduct } from './cartList/CartProduct.component';
import { Product } from '../../../modules/shop/shop.interfaces';
import { createStructuredSelector } from 'reselect';
import { Store } from '../../../modules/rootReducer';
import { selectCartItems } from '../../../modules/cart/cart.selectors';

interface CartItemSelection {
  cartItems: Product[];
}

interface IProps extends CartItemSelection {}

const _CartList: React.FC<IProps> = ({ cartItems }) => {
  return !cartItems.length ? (
    <Warning>Cart is empty.</Warning>
  ) : (
    <CartListWrapper>
      {cartItems.map(cartItem => (
        <CartProduct key={cartItem.id} cartItemData={cartItem} />
      ))}
    </CartListWrapper>
  );
};

const mapStateToProps = createStructuredSelector<Store, CartItemSelection>({
  cartItems: selectCartItems
});

export const CartList = connect(mapStateToProps)(_CartList);
