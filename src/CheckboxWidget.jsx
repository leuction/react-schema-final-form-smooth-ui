import React from 'react';
import { Field } from 'react-final-form';
import { FormGroup, FormCheck, Checkbox as suiCheckbox, FormCheckLabel } from 'smooth-ui';
import adapt from './components/adapt.jsx';
import Error from './components/Error.jsx';
import { require } from './utils';

const Checkbox = adapt(suiCheckbox);

const SwitchWidget = props => {
  const {
    fieldName,
    schema,
    required,
  } = props;
  return (
    <FormGroup>
      <FormCheck>
        <Field
          name={fieldName}
          component={Checkbox}
          type="checkbox"
          id={fieldName}
          required={required}
        />
        {schema.title && <FormCheckLabel htmlFor={fieldName}>{require(required)(schema.title)}</FormCheckLabel>}
      </FormCheck>
      <Error name={fieldName} />
    </FormGroup>
  )
};

export default SwitchWidget;
