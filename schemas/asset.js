export default {
  name: 'asset',
  title: 'Asset',
  type: 'file',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string'
    },
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: {type: 'author'}
    }
  ],
  options: {
    accept: '.doc,.docx,.txt,.pdf,.xlsx, .xls'
  }
};
