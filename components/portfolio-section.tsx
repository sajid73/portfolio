'use client'

import { useState } from 'react'
import { ExternalLink, Eye, ArrowUpRight } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

interface PortfolioSectionProps {
  data?: typeof portfolioData
}

export function PortfolioSection({ data = portfolioData }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects =
    activeFilter === 'all' ? data.projects : data.projects.filter((p) => p.category === activeFilter)

  const categoryColors: Record<string, string> = {
    'ml': 'text-violet-400 bg-violet-400/10 border-violet-400/20',
    'fullstack': 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
    'frontend': 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    'backend': 'text-orange-400 bg-orange-400/10 border-orange-400/20',
    'all': 'text-accent bg-accent/10 border-accent/20',
  }

  const getColor = (cat: string) => categoryColors[cat] ?? 'text-accent bg-accent/10 border-accent/20'

  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Portfolio</h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 md:gap-3">
        {data.categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 md:px-5 py-2 md:py-2.5 rounded-xl text-xs md:text-sm font-medium capitalize transition-all ${
              activeFilter === category
                ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/20'
                : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="group relative flex flex-col justify-between p-5 md:p-6 rounded-2xl border border-border bg-secondary/30 hover:bg-secondary/60 hover:border-foreground/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/10 overflow-hidden"
          >
            {/* Background number watermark */}
            <span className="absolute bottom-3 right-4 text-7xl font-black text-foreground/[0.04] select-none pointer-events-none leading-none">
              {String(index + 1).padStart(2, '0')}
            </span>

            {/* Top Row */}
            <div className="flex items-start justify-between gap-3 mb-4">
              <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold border capitalize ${getColor(project.category)}`}>
                {project.category}
              </span>

              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <a
                  href={project.liveUrl || project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 bg-accent text-accent-foreground rounded-lg text-xs font-medium hover:opacity-90 transition-opacity"
                >
                  <Eye className="w-3 h-3" />
                  Preview
                </a>
                <a
                  href={project.githubUrl || project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 bg-background border border-border text-foreground rounded-lg text-xs font-medium hover:border-foreground/30 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  Code
                </a>
              </div>
            </div>

            {/* Title */}
            <div className="mb-3">
              <div className="flex items-center gap-2">
                <h3 className="text-base md:text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all duration-200 -translate-y-0.5 translate-x-0 group-hover:-translate-y-1 group-hover:translate-x-0.5" />
              </div>
            </div>

            {/* Description */}
            {project.description && (
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                {project.description}
              </p>
            )}

            {/* Tech Stack */}
            {project.tech && project.tech.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.map((tag: string, i: number) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-background/60 border border-border rounded-md text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}