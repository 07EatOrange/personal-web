import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { MOCK_PROFILE } from '@/data/profile';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';

export default function HeroSection() {
  const profile = MOCK_PROFILE;

  return (
    <section className="w-full bg-gradient-to-br from-primary/10 via-background to-blue-100/30 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="shrink-0"
          >
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg shadow-primary/20 ring-2 ring-primary/10">
                <Image
                  src={profile.avatarUrl}
                  alt={profile.nickname}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative diamond */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-2 -right-2 text-3xl"
              >
                💎
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-1 -left-2 text-2xl"
              >
                ⭐
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              {profile.nickname}
              <span className="ml-2 inline-block animate-bounce">🌊</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
               二次元 · AI · Live2D · 游戏 🎮
            </p>
            <p className="text-sm text-muted-foreground mb-8 max-w-md">
              {profile.age}岁 · {profile.gender} · 来自{profile.birthPlace} · 现居{profile.currentCity}
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <NavLink to="/about">
                <Button className="rounded-full px-6 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/25">
                  了解更多
                  <ArrowRight className="size-4" />
                </Button>
              </NavLink>
              <NavLink to="/blog">
                <Button variant="outline" className="rounded-full px-6 gap-2 border-primary/30 text-primary hover:bg-primary/5">
                  看看博客
                  <span>📝</span>
                </Button>
              </NavLink>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
