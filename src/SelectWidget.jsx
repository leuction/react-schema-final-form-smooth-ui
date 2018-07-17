import React from 'react';
import { Field } from 'react-final-form';
import { Select as suiSelect, FormGroup, Label } from 'smooth-ui';
import adapt from './components/adapt.jsx';
import Error from './components/Error.jsx';
import { require } from './utils';

const Select = adapt(suiSelect);

const SelectWidget = props => {
  const {
    fieldName,
    schema,
    required,
  } = props;
  return (
    <FormGroup>
      {schema.title && <Label>{require(required)(schema.title)}</Label>}
      <Field
        name={fieldName}
        component={Select}
        options={[
          {},
          ...schema.enum.map(val => ({
            value: val,
            label: val,
          }))
        ]}
        control
      />
      <Error name={fieldName} />
    </FormGroup>
  )
};

export default SelectWidget;
