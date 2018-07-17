import StringWidget from './StringWidget.jsx';
import ObjectWidget from './ObjectWidget.jsx';
import ArrayWidget from './ArrayWidget.jsx';
import CheckboxWidget from './CheckboxWidget.jsx';
import SelectWidget from './SelectWidget.jsx';
import IntegerWidget from './IntegerWidget.jsx';

const theme = {
  'string': StringWidget,
  'object': ObjectWidget,
  'array': ArrayWidget,
  'boolean': CheckboxWidget,
  'choice': SelectWidget,
  'integer': IntegerWidget,
}

export default theme;
