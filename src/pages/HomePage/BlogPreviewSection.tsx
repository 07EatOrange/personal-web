import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { MOCK_BLOG_POSTS } from '@/data/blog';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';

export default function BlogPreviewSection() {
  const recentPosts = MOCK_BLOG_POSTS.slice(0, 2);

  return (
    <section className="w-full py-12 md:py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <BookOpen className="size-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">最新文章</h2>
            </div>
            <NavLink to="/blog">
              <Button variant="ghost" className="rounded-full gap-1 text-sm text-muted-foreground hover:text-primary">
                查看全部
                <ArrowRight className="size-4" />
              </Button>
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recentPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <NavLink to={`/blog/${post.id}`} className="block group">
                  <Card className="h-full border-border/40 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <Calendar className="size-3" />
                        <span>{post.date}</span>
                      </div>
                      <h3 className="font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {post.summary}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 3).map((tag) => (
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
                </NavLink>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
