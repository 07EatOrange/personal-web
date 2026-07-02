import { motion } from 'framer-motion';
import { MOCK_PROJECTS } from '@/data/projects';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Clock, CheckCircle2, Lightbulb } from 'lucide-react';

const statusConfig: Record<string, { icon: React.ReactNode; label: string; className: string }> = {
  completed: {
    icon: <CheckCircle2 className="size-3" />,
    label: '已完成',
    className: 'bg-emerald-100 text-emerald-700',
  },
  'in-progress': {
    icon: <Clock className="size-3" />,
    label: '进行中',
    className: 'bg-blue-100 text-blue-700',
  },
  planned: {
    icon: <Lightbulb className="size-3" />,
    label: '计划中',
    className: 'bg-amber-100 text-amber-700',
  },
};

export default function ProjectShowcaseSection() {
  const projects = MOCK_PROJECTS;

  return (
    <section className="w-full py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">🚀</span>
            <h2 className="text-2xl font-bold text-foreground">项目 & 作品</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <Card className="h-full border-border/40 hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                  <CardContent className="p-5 flex flex-col h-full">
                    {/* Status + Title */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="shrink-0 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="size-4" />
                        </a>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Status badge */}
                    <div className="mb-3">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          statusConfig[project.status]?.className || ''
                        }`}
                      >
                        {statusConfig[project.status]?.icon}
                        {statusConfig[project.status]?.label}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="rounded-full text-xs px-2 py-0"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
