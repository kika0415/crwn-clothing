import React from 'react';
import { connect } from 'react-redux';

import './collectionItemComponent.scss';

import CustomButton from '../customButton/customButtonComponent';
import { addItem } from '../../redux/cart/cartActions';

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({ addItem: (item) => dispatch(addItem(item)) });

export default connect(null, mapDispatchToProps)(CollectionItem);
