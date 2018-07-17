import React from 'react';
import { Field } from 'react-final-form';
import { ControlFeedback } from 'smooth-ui';
import _isString from 'lodash.isstring';
const Error = ({ name, isNotField = false }) => (
  <Field name={name} subscription={{ error: true, touched: true }}>
    {({ meta: { touched, error } }) =>
      (touched || isNotField) && error && _isString(error) ? (
        <ControlFeedback valid={!error}>{error}</ControlFeedback>
      ) : null
    }
  </Field>
);

export default Error;
