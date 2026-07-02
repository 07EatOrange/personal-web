import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { MOCK_BLOG_POSTS } from '@/data/blog';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, BookOpen } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const post = MOCK_BLOG_POSTS.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-4">🌊</div>
          <h1 className="text-2xl font-bold text-foreground mb-2">文章未找到</h1>
          <p className="text-muted-foreground mb-4">这篇文章走丢啦，去看看别的吧~</p>
          <Button
            variant="outline"
            className="rounded-full"
            onClick={() => navigate('/blog')}
          >
            <ArrowLeft className="size-4 mr-2" />
            返回博客列表
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Article header */}
        <section className="w-full bg-gradient-to-br from-primary/10 via-background to-blue-100/30 py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Back button */}
              <button
                onClick={() => navigate('/blog')}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="size-4" />
                返回博客列表
              </button>

              {/* Cover image */}
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-6 shadow-lg">
                {post.coverUrl ? (
                  <Image
                    src={post.coverUrl}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-400/20 via-primary/10 to-blue-200/20 flex items-center justify-center">
                    <BookOpen className="size-12 text-primary/30" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1.5">
                  <Calendar className="size-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="size-4" />
                  <span>约 {Math.ceil(post.content.length / 400)} 分钟阅读</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="rounded-full px-3 py-1 text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article content */}
        <section className="w-full py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="border-border/40 shadow-sm">
                <CardContent className="p-6 md:p-8">
                  <article className="prose prose-sm max-w-none prose-headings:text-foreground prose-p:text-foreground/80 prose-strong:text-foreground prose-a:text-primary prose-li:text-foreground/80">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {post.content}
                    </ReactMarkdown>
                  </article>

                  {/* Decorative divider */}
                  <div className="flex items-center justify-center gap-2 mt-8 pt-6 border-t border-border/30">
                    <span className="text-lg">🌊</span>
                    <span className="text-sm text-muted-foreground">感谢阅读~</span>
                    <span className="text-lg">🌊</span>
                  </div>
                </CardContent>
              </Card>

              {/* Bottom nav */}
              <div className="flex justify-center mt-8">
                <Button
                  variant="outline"
                  className="rounded-full px-6 border-primary/30 text-primary hover:bg-primary/5"
                  onClick={() => navigate('/blog')}
                >
                  <ArrowLeft className="size-4 mr-2" />
                  返回博客列表
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
    </>
  );
}
