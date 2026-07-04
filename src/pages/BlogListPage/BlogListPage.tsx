import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { MOCK_BLOG_POSTS } from '@/data/blog';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function BlogListPage() {
  const posts = MOCK_BLOG_POSTS;

  return (
    <>
      {/* Header */}
        <section className="w-full bg-gradient-to-br from-primary/10 via-background to-blue-100/30 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <BookOpen className="size-6 text-primary" />
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">博客</h1>
              </div>
              <p className="text-muted-foreground max-w-md mx-auto">
                分享 AI和个人经验 🌊
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog list */}
        <section className="w-full py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <NavLink to={`/blog/${post.id}`} className="block group">
                    <Card className="h-full border-border/40 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 overflow-hidden">
                      {/* Cover */}
                      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                        {post.coverUrl ? (
                          <Image
                            src={post.coverUrl}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-blue-400/20 via-primary/10 to-blue-200/20 flex items-center justify-center">
                            <BookOpen className="size-10 text-primary/30" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                      </div>

                      <CardContent className="p-5">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                          <Calendar className="size-3" />
                          <span>{post.date}</span>
                        </div>

                        <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {post.summary}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {post.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="rounded-full text-xs px-2 py-0"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center gap-1 text-xs text-primary font-medium">
                          <span>阅读全文</span>
                          <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
    </>
  );
}
