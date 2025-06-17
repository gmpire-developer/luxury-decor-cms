import { Rule } from '@sanity/types'

const trendingProduct = {
  name: 'trendingProduct',
  title: 'Trending Products',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }]
        }
      ],
      validation: (Rule: Rule) => Rule.required().length(3) // Exactly 3 products required
    }
  ]
}

export default trendingProduct;
