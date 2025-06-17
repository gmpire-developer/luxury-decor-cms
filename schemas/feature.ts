import { Rule } from '@sanity/types';

const feature = {
  name: 'feature',
  title: 'Feature',
  type: 'document',
  fields: [
    {
      name: 'icon',
      title: 'Icon (Emoji or Short Text)',
      type: 'string',
      validation: (Rule : Rule) => Rule.required()
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule : Rule) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule : Rule) => Rule.required()
    }
  ]
};

export default feature;
