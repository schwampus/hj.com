import type { Block } from 'payload'

export const FeaturedProjects: Block = {
  slug: 'featuredProjects',
  interfaceName: 'FeaturedProjectsBlock',
  labels: {
    singular: 'Featured Projects',
    plural: 'Featured Projects',
  },
  fields: [
    { name: 'heading', type: 'text', defaultValue: 'Selected Projects' },
    {
      name: 'projects',
      type: 'relationship',
      relationTo: 'projects',
      hasMany: true,
      required: true,
      maxRows: 8,
    },
  ],
}
