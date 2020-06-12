export default {
  name: 'formfield',
  title: 'Field',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'The label which will accompany this form input on the screen'
    },
    {
      name: 'id',
      title: 'ID',
      type: 'string',
      description: 'A lowercase single word identifier for this field, usually just the label in lowercase label will suffice. For example: \"First name\" might have an ID of \"first\"'
    },
    {
      name: 'required',
      title: 'Required field',
      type: 'boolean',
      description: 'Does this form field require a value?'
    },
    {
      name: 'input',
      title: 'Input Type',
      type: 'string',
      options: {
        list: [
          'text', 'email', 'telephone', 'date', 'textarea', 'select', 'checkbox', 'radio', 'url', 'file', 'image', 'number'
        ],
        layout: 'dropdown'
      }
    },
    {
      name: 'values',
      title: 'Input Values',
      description: 'If you selected Select, Checkbox, or Radio above, please create values to be available for that input type in the field below',
      type: 'array',
      of: [{type: 'string'}],
      layout: 'tags'
    },
    {
      name: 'regex',
      title: 'Validation regex',
      type: 'string',
      description: 'A regex for validating this field. If you\'re unsure what this means, then leave blank'
    }
  ]
};
