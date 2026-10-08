import configPromise from '@payload-config'
import { getPayload } from 'payload'
import Link from 'next/link'

import { Media } from '@/components/Media'
import { Button } from '@/components/ui/button'

import { getLabel, projectTypeOptions, techStackOptions } from '@/collections/Projects/options'

export default async function ProjectsPage() {
  const payload = await getPayload({ config: configPromise })

  const projects = await payload.find({
    collection: 'projects',
    depth: 1,
    limit: 100,
    overrideAccess: false,
    sort: '-publishedAt ',
    select: {
      title: true,
      slug: true,
      projectIntro: true,
      projectType: true,
      techStack: true,
      heroMedia: true,
      thumbnail: true,
      demoUrl: true,
    },
  })

  return (
    <div className="container pt-24 pb-24">
      <h1 className="text-4xl font-bold mb-8">My Different Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.docs.map((project, index) => (
          <div
            key={project.id}
            className="animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out fill-mode-both motion-reduce:animate-none"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden h-full rounded-lg border border-border bg-card shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <Link href={`/projects/${project.slug}`}>
                <Media
                  resource={project.thumbnail || project.heroMedia}
                  imgClassName="aspect-square w-full object-cover"
                />
              </Link>
              <div className="flex flex-col flex-1 p-5">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  {project.projectType
                    ?.map((type) => getLabel(projectTypeOptions, type))
                    .join(' · ')}
                </p>
                <div className="mt-1 flex items-start justify-between gap-3">
                  <h2 className="text-xl font-bold leading-tight">
                    <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                  </h2>
                </div>
                <p className="text-sm mt-2 text-muted-foreground line-clamp-3">
                  {project.projectIntro}
                </p>
                <ul className="flex mt-4 flex-wrap gap-1.5">
                  {project.techStack?.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border px-2.5 py-0.5 text-xs"
                    >
                      {getLabel(techStackOptions, tech)}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex gap-6 pt-4 ">
                  <Button asChild size="sm">
                    <Link href={`/projects/${project.slug}`}>Read more</Link>
                  </Button>
                  {project.demoUrl && (
                    <Button variant="outline">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" text-muted-foreground hover:text-foreground"
                      >
                        Live demo ↗
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  )
}
