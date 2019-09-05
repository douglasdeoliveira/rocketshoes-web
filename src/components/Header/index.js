import PropTypes from 'prop-types';
import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';

import { Cart, Container } from './styles';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

Header.propTypes = {
  cartSize: PropTypes.number.isRequired,
};

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
