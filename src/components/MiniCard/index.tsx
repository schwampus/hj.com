import Link from 'next/link'
import React from 'react'

import type { Project } from '@/payload-types'

import { Media } from '@/components/Media'
import { Button } from '@/components/ui/button'
import { getLabel, projectTypeOptions, techStackOptions } from '@/collections/Projects/options'

type Props = {
  project: Pick<Project, 'slug' | 'title' | 'thumbnail' | 'heroMedia'>
}

export const MiniCard: React.FC<Props> = ({ project }) => {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block overflow-hidden rounded-lg border border-border shadlow-md"
    >
      <Media
        resource={project.thumbnail || project.heroMedia}
        imgClassName="aspect-square w-full object-cover"
      />
      <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/70 via-black/20 to-transparent p-4 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
        <h3 className="translate-y-2 text-lg font-bold text-white transition-transform duration-300 group-hover:translate-y-0">
          {project.title}
        </h3>
      </div>
    </Link>
  )
}
