import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'

import { Media } from '@/components/Media'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'

import { getLabel, projectTypeOptions, techStackOptions } from '@/collections/Projects/options'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const projects = await payload.find({
    collection: 'projects',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = projects.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Project({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const url = '/projects/' + decodedSlug
  const project = await queryProjectBySlug({ slug: decodedSlug })

  if (!project) return <PayloadRedirects url={url} />

  return (
    <article className="pt-16 pb-16">
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <div className="container">
        <Media resource={project.heroMedia} />
        <h1 className="text-4xl font-bold my-8">{project.title}</h1>
        <p className="text-lg mb-8">{project.projectIntro}</p>
        <ul className="flex gap-2">
          {project.projectType?.map((type) => (
            <li key={type}>{getLabel(projectTypeOptions, type)}</li>
          ))}
        </ul>
        <ul className="flex gap-2">
          {project.techStack?.map((tech) => (
            <li key={tech}>{getLabel(techStackOptions, tech)}</li>
          ))}
        </ul>
        {project.demoUrl && <a href={project.demoUrl}>Live demo</a>}
        {project.githubRepo && <a href={project.githubRepo}>Project Repo on Github</a>}

        <RichText data={project.mainText} enableGutter={false} />

        {project.gallery?.map(
          (item) => typeof item === 'object' && <Media key={item.id} resource={item} />,
        )}

        {project.reflectionText && <RichText data={project.reflectionText} enableGutter={false} />}
      </div>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const project = await queryProjectBySlug({ slug: decodedSlug })

  return generateMeta({ doc: project })
}

const queryProjectBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'projects',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
