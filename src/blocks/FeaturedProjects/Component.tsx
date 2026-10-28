import Link from 'next/link'
import React from 'react'

import type { FeaturedProjectsBlock as Props } from '@/payload-types'

import { MiniCard } from '@/components/MiniCard'

export const FeaturedProjectsBlock: React.FC<Props> = ({ heading, projects }) => {
  const visibleProjects = (projects || []).filter((project) => typeof project === 'object')
  if (visibleProjects.length === 0) return null

  return (
    <section className="container">
      {heading && <h2 className="mb-8 text-3xl font-bold">{heading}</h2>}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {visibleProjects.map((project) => (
          <MiniCard key={project.id} project={project} />
        ))}
      </div>
      <Link
        href="/projects"
        className="mt-8 inline-block text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        View all of my projects →
      </Link>
    </section>
  )
}
