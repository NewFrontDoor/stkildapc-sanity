export default {
  name: 'GalleryHome',
  title: 'Home Gallery',
  type: 'document',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string'
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'string'
    },
    {
      name: 'content',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'},{type: 'author'}]
        }
      ]
    }
  ]
};
