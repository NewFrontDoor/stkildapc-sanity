export default {
  name: 'form',
  title: 'Form',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'id',
      title: 'ID',
      type: 'string'
    },
    {
      name: 'body',
      title: 'Form description',
      type: 'blockContent'
    },
    {
      name: 'fields',
      title: 'fields',
      type: 'array',
      of: [
        {
          type: 'formfield'
        }
      ]
    }
  ]
};
