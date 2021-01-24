import React from 'react';

import './collectionPreviewComponent.scss';

import CollectionItem from '../collectionItem/collectionItemComponent';

const CollectionPreview = ({ collection }) => (
  <div className='collection-preview'>
    <h1 className='title'>{collection.title.toUpperCase()}</h1>
    <div className='preview'>
      {collection.items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
