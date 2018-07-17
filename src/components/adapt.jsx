import React from 'react';

const adapt = Component => ({
  input,
  meta: { valid },
  ...rest
}) => (
  <Component
    {...input}
    {...rest}
    valid={valid}
  />
);

export default adapt;
