export default {
  name: 'main',
  title: 'Main',
  type: 'document',
  __experimental_actions: [/* 'create', */ 'update', /* 'delete', */ 'publish'],
  fields: [
    {
      title: 'Home page heading',
      name: 'heading',
      description: 'This is your main welcome text',
      type: 'string'
    },
    {
      title: 'Main image',
      name: 'mainImage',
      type: 'image'
    },
    {
      title: 'Service details',
      name: 'services',
      description:
        'This is a collection of service details output to the main page',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Address',
              name: 'address',
              type: 'reference',
              to: [{type: 'address'}]
            },
            {
              title: 'Page',
              name: 'page',
              type: 'reference',
              to: [{type: 'page'}]
            },
            {title: 'Button text', name: 'text', type: 'string'}
          ]
        }
      ]
    },
    {
      name: 'tagline',
      title: 'Tag line',
      type: 'string'
    },
    {
      title: 'Main page segments',
      name: 'content',
      description:
        'Add segments below to feature on the front page, create segments using the segment menu to the left',
      type: 'array',
      of: [
        {
          type: 'reference',
          title: 'Segment',
          description: 'Pick a segment from the dropdown list below',
          to: [{type: 'LayoutHome'}, {type: 'GalleryHome'}, {type: 'LayoutMap'}]
        }
      ]
    },
    {
      title: 'Main menu items',
      name: 'menuitems',
      description:
        'Add pages below to feature in the main menu. This can be a nested menu. If only one child item is included, it willbe displayed as a primary link. If is are more than one child, it will be displayed as a dropdown menu.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {title: 'Menu text', name: 'text', type: 'string'},
            {
              title: 'Child pages',
              name: 'childpages',
              type: 'array',
              of: [
                {
                  type: 'reference',
                  title: 'Child page',
                  description: 'Pick a page from the dropdown list below',
                  to: [
                    {
                      type: 'page'
                    }
                  ]
                },
                {
                  type: 'object',
                  title: 'External page',
                  description: 'Enter a URL below and provide the menu text',
                  fields: [
                    {title: 'Menu text', name: 'text', type: 'string'},
                    {title: 'External URL', name: 'url', type: 'url'}
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: 'Footer menu items',
      name: 'footermenu',
      description:
        'Add pages below to feature in the footer menu. This is a flat menu.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {title: 'Menu text', name: 'text', type: 'string'},
            {
              title: 'Child pages',
              name: 'childpages',
              type: 'reference',
              to: [
                {
                  type: 'page'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: 'Social media links',
      name: 'sociallinks',
      description:
        'Add your social media urls for inclusion on your site (must be full url with protocol, e.g. "https://"). If you want to include an email or phone link, then use the "mailto://" or "tel://" protocol',
      type: 'array',
      of: [
        {
          title: 'Link',
          name: 'href',
          type: 'url',
          validation: Rule =>
            Rule.uri({
              scheme: ['https', 'mailto', 'tel']
            })
        }
      ]
    }
  ]
};
