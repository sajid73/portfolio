import { BookOpen, Briefcase } from 'lucide-react'
import { resumeData } from '@/lib/portfolio-data'

interface ResumeSectionProps {
  data?: typeof resumeData
}

export function ResumeSection({ data = resumeData }: ResumeSectionProps) {
  return (
    <div className="space-y-8 md:space-y-10">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Resume</h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
      </div>

      {/* Education */}
      <div>
        <div className="flex items-center gap-2 md:gap-3 mb-6">
          <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          <h3 className="text-xl md:text-2xl font-bold text-foreground">Education</h3>
        </div>
        <div className="space-y-4">
          {data.education.map((item, index) => (
            <div key={index} className="relative pl-5 md:pl-6 pb-6 border-l-2 border-border last:pb-0">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">{item.title}</h4>
              {/* <p className="text-xs md:text-sm text-accent mb-2">{item.period}</p> */}
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <div className="flex items-center gap-2 md:gap-3 mb-6">
          <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          <h3 className="text-xl md:text-2xl font-bold text-foreground">Experience</h3>
        </div>
        <div className="space-y-4">
          {data.experience.map((item, index) => (
            <div key={index} className="relative pl-5 md:pl-6 pb-6 border-l-2 border-border last:pb-0">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">{item.title}</h4>
              {/* <p className="text-xs md:text-sm text-accent mb-2">{item.period}</p> */}
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-8">My Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.skills.map((skill, index) => (
            <div
              key={index}
              className="group relative p-4 rounded-2xl border border-border bg-secondary/30 hover:bg-secondary/60 hover:border-foreground/20 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">{skill.icon}</span>
                <h4 className="text-sm font-semibold text-foreground tracking-wide uppercase opacity-70">
                  {skill.group}
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skill.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-background/70 hover:bg-background rounded-lg text-xs text-foreground/80 border border-border hover:border-foreground/30 hover:text-foreground transition-all duration-200 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
