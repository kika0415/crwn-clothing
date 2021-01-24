import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collectionPreview/collectionPreviewComponent';
import { selectCollectionsForPreveiw } from '../../redux/shop/shopSelectors';

const CollectionOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {collections.map((collection) => (
        <CollectionPreview key={collection.id} collection={collection} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreveiw,
});
export default connect(mapStateToProps)(CollectionOverview);
