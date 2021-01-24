import React from 'react';

import { CustomButtonContainer } from './customButtonStyle';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
