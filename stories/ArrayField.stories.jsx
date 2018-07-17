import React from 'react';
import { Form } from 'react-final-form';
import theme from '../src';
import SchemaForm from 'react-schema-final-form';
import { storiesOf } from '@storybook/react';
import arrayMutators from 'final-form-arrays';
import { Button } from 'smooth-ui';

const onSubmit = values => {
  window.alert(JSON.stringify(values, 0, 2))
}

const schema = {
  type: 'object',
  properties: {
    foo: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          bar: {
            type: 'string',
            title: 'Bar',
          },
          gra: {
            type: 'string',
            title: 'Gra'
          }
        },
        required: ['bar'],
      },
      title: 'Foo',
    }
  }
}

const ArrayForm = (props) => {
  const {
    schema,
  } = props;
  return (
    <SchemaForm
      schema={schema}
      theme={theme}
    >
      {({ RenderedFields, validate }) => (
        <Form
          onSubmit={onSubmit}
          mutators={{
            ...arrayMutators
          }}
          validate={validate}
        >
          {({ handleSubmit, mutators, values }) => (
            <form onSubmit={handleSubmit}>
              <RenderedFields />
              <Button
                type="submit"
              >
                Submit
              </Button>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )}
        </Form>
      )}
    </SchemaForm>
  )
}

storiesOf('Array', module)
  .add('with array field', () => <ArrayForm schema={schema} />)
