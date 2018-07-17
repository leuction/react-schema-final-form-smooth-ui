import * as React from "react";
import PropTypes from "prop-types";
import { renderField, withSchema } from 'react-schema-final-form';
import { FieldArray } from "react-final-form-arrays";
import { FormGroup, Typography, Button } from 'smooth-ui';
import styled from 'styled-components';
import CloseIcon from './components/CloseIcon.jsx';
import { require } from './utils';
import Error from './components/Error.jsx';

const Close = styled(CloseIcon)`
  width: 12px;
  height: 12px;
  transform: scale(1.5);
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
  line {
    stroke: #555;
  }
  &:hover line {
    stroke: #000;
  }
  transition: all 0.24s ease;
`

const AddButton = Button.extend`
  display: block;
`;

const ItemWrapper = styled.div`
  border: 1px #e8e8e8 solid;
  border-radius: 3px;
  display: block;
  width: 100%;
  padding: 1rem;
  position: relative;
`;

const ArrayWidget = (props, context) => {
  const {
    fieldName,
    schema,
    theme,
    required,
  } = props;
  const {
    reactFinalForm: { mutators },
  } = context;
  return (
    <FieldArray name={fieldName}>
      {({
        fields,
        meta: { error },
      }) => (
        <FormGroup>
          {schema.title && <Typography variant="h3">{require(required)(schema.title)}</Typography>}
          {schema.description && <p>{schema.description}</p>}
          {fields.map((name, index) => (
            <FormGroup key={name}>
              <ItemWrapper>
                <Close onClick={() => { fields.remove(index) }}/>
                {renderField({
                  schema: schema.items,
                  fieldName: name,
                  theme,
                  // This will directly inject into the widget props that we expect to render
                  // You can use it or just ignore it.
                  arrayIndex: index,
                })}
              </ItemWrapper>
            </FormGroup>
          ))}
          <Error name={fieldName} isNotField />
          <AddButton
            type="button"
            // If the item is a object, we will try to push a object instead of a null so that ajv could validate if some fields in the object is required.
            onClick={() => { mutators.push(fieldName, schema.items && schema.items.type === 'object' ? {} : undefined) }}
          >
            Add
          </AddButton>
        </FormGroup>
      )}
    </FieldArray>
  );
};

ArrayWidget.contextTypes = {
  reactFinalForm: PropTypes.object.isRequired,
};

export default withSchema(ArrayWidget);
