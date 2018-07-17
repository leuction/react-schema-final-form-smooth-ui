import React from 'react';
import { renderObjectProperties, withSchema } from 'react-schema-final-form';
import { FormGroup, Typography } from 'smooth-ui';
import { require } from './utils';
import Error from './components/Error.jsx';

const ObjectWidget = props => {
  const {
    rootSchema,
    schema,
    theme,
    fieldName,
    required,
  } = props;
  console.log(theme);
  return (
    <FormGroup>
      {schema.title && <Typography variant="h3">{require(required)(schema.title)}</Typography>}
      {schema.description && <p>{schema.description}</p>}
      {renderObjectProperties({
        schema,
        rootSchema,
        theme,
        fieldName,
      })}
      <Error name={fieldName} isNotField />
    </FormGroup>
  );
};

export default withSchema(ObjectWidget);
