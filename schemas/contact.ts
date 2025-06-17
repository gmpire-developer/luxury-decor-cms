import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'contact',
  title: 'Contact Information',
  type: 'document',
  fields: [
    defineField({ name: 'address', type: 'text', title: 'Address' }),
    defineField({ name: 'phone', type: 'string', title: 'Phone' }),
    defineField({ name: 'email', type: 'string', title: 'Email' }),
    defineField({ name: 'googleMapUrl', type: 'url', title: 'Google Map URL' }),
    defineField({
      name: 'socialLinks',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'platform', type: 'string', title: 'Platform' },
          { name: 'url', type: 'url', title: 'URL' },
        ]
      }]
    }),
  ],
});
