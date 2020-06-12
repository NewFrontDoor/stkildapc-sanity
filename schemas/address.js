export default {
  name: 'address',
  title: 'Address',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint'
    }
  ]
};
