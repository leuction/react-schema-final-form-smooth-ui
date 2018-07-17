import React from 'react';
import { Field } from 'react-final-form';
import { FormGroup, Input as suiInput, Label } from 'smooth-ui';
import adapt from './components/adapt.jsx';
import Error from './components/Error.jsx';
import { require } from './utils';

const Input = adapt(suiInput);

const BaseInputWidget = props => {
  const {
    fieldName,
    schema,
    required,
    type,
    theme,
    ...rest
  } = props;
  const placeholder = schema.default ? schema.default + '' : '';
  return (
    <FormGroup>
      {schema.title && <Label>{require(required)(schema.title)}</Label>}
      <Field
        name={fieldName}
        component={Input}
        placeholder={placeholder}
        type={type}
        control
        required={required}
        {...rest}
      />
      <Error name={fieldName} />
    </FormGroup>
  )
};

export default BaseInputWidget;
