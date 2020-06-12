import {MdMap} from 'react-icons/md';

export default {
  name: 'LayoutMap',
  title: 'Map Segment',
  type: 'document',
  icon: MdMap,
  fields: [
    {title: 'Map segment name', name: 'name', type: 'string'},
    {
      title: 'Heading',
      name: 'heading',
      type: 'string'
    },
    {
      name: 'blurb',
      title: 'Blurb',
      type: 'blockContent'
    },
    {
      name: 'details',
      title: 'Detail lines',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Type',
              name: 'type',
              type: 'string',
              options: {
                list: ['email', 'telephone', 'time', 'location'],
                layout: 'dropdown'
              }
            },
            {
              title: 'Text',
              name: 'value',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      title: 'Call to action',
      name: 'actions',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'pagereference',
          title: 'Page reference',
          fields: [
            {
              title: 'Page',
              name: 'page',
              type: 'reference',
              to: [{type: 'page'}]
            },
            {title: 'Button label', name: 'label', type: 'string'}
          ]
        },
        {
          type: 'object',
          name: 'link',
          title: 'External link',
          fields: [
            {title: 'Button label', name: 'label', type: 'string'},
            {title: 'URL', name: 'url', type: 'url'}
          ]
        },
        {
          type: 'object',
          name: 'directions',
          title: 'Directions',
          fields: [{title: 'Button label', name: 'label', type: 'string'}]
        }
      ]
    },
    {
      title: 'Meeting Location',
      name: 'location',
      description:
        'Adding a geopoint to this field will render a map within this segment on the homepage. It will render the following fields irrelevant: background, actions.',
      type: 'object',
      fields: [
        {name: 'location', title: 'Pinned location', type: 'geopoint'},
        {name: 'latcentrepoint', title: 'Latitude centrepoint', type: 'number'},
        {
          name: 'longcentrepoint',
          title: 'Longitude centrepoint',
          type: 'number'
        }
      ]
    }
  ]
};
