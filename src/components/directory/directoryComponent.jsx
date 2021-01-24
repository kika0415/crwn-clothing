import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directorySelectors';

import MenuItem from '../menuItem/menuItemComponent';

import './directoryComponent.scss';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...othersSectionProps }) => (
      <MenuItem key={id} {...othersSectionProps} />
    ))}
  </div>
);
const mapStatetoProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStatetoProps)(Directory);
