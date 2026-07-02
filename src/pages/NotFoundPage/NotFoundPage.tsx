import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-center px-4"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="text-7xl mb-6"
        >
          🌊
        </motion.div>

        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-3">404</h1>
        <p className="text-lg text-muted-foreground mb-2">页面被海浪卷走啦~</p>
        <p className="text-sm text-muted-foreground mb-8">你访问的页面不存在或已被移除</p>

        <div className="flex flex-wrap gap-3 justify-center">
          <NavLink to="/">
            <Button className="rounded-full px-6 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/25">
              <ArrowLeft className="size-4" />
              返回首页
            </Button>
          </NavLink>
          <NavLink to="/blog">
            <Button variant="outline" className="rounded-full px-6 gap-2 border-primary/30 text-primary hover:bg-primary/5">
              <Compass className="size-4" />
              随便逛逛
            </Button>
          </NavLink>
        </div>
      </motion.div>
    </div>
  );
}
