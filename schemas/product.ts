import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } }),
    defineField({ name: 'description', type: 'text', title: 'Description' }),
    defineField({ name: 'price', type: 'string', title: 'Price' }),
    defineField({ name: 'images', type: 'array', of: [{ type: 'image' }], title: 'Images' }),
    defineField({name: 'bannerImage', title: 'Banner Image', type: 'image', validation: (rule) => rule.required()}),
    defineField({ name: 'sizes', type: 'array', of: [{ type: 'string' }], title: 'Sizes' }),
    defineField({
      name: 'keyValueSpecs',
      title: 'Specifications (Key-Value)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'key', type: 'string', title: 'Key' },
          { name: 'value', type: 'string', title: 'Value' }
        ]
      }]
    }),
    defineField({
      name: 'bulletSpecs',
      title: 'Specifications (Bullets)',
      type: 'array',
      of: [{ type: 'string' }]
    }),
  ],
});
