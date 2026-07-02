import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail, ArrowRight, MessageCircle } from 'lucide-react';

export default function ContactCTASection() {
  return (
    <section className="w-full py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <MessageCircle className="size-8 text-primary" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            想聊聊？欢迎联系
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            无论是对AI感兴趣、想交流游戏心得，还是单纯想交个朋友，都可以在这里找到我~
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <NavLink to="/contact">
              <Button className="rounded-full px-6 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/25">
                <Mail className="size-4" />
                联系方式
                <ArrowRight className="size-4" />
              </Button>
            </NavLink>
            <NavLink to="/about">
              <Button variant="outline" className="rounded-full px-6 gap-2 border-primary/30 text-primary hover:bg-primary/5">
                了解更多关于我
              </Button>
            </NavLink>
          </div>

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-sm text-muted-foreground italic"
          >
            "对AI发展保持乐观，相信技术能让世界变得更好。"
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
