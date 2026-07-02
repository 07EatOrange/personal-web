import { motion } from 'framer-motion';
import { MOCK_SOCIAL_PLATFORMS } from '@/data/social';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const platformColors: Record<string, string> = {
  '抖音': 'from-pink-500/10 to-rose-500/10',
  'B站': 'from-blue-500/10 to-sky-500/10',
  '小红书': 'from-red-500/10 to-rose-400/10',
};

const platformIcons: Record<string, string> = {
  '抖音': '🎵',
  'B站': '📺',
  '小红书': '📕',
};

export default function SocialLinksSection() {
  const platforms = MOCK_SOCIAL_PLATFORMS;

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
            <span className="text-2xl">💌</span>
            <h2 className="text-2xl font-bold text-foreground">找到我</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {platforms.map((platform, i) => (
              <motion.a
                key={platform.id}
                href={platform.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Card className={`h-full border-border/40 hover:border-primary/30 hover:shadow-md transition-all duration-300 bg-gradient-to-br ${platformColors[platform.name] || 'from-primary/5 to-primary/10'}`}>
                  <CardContent className="p-5 flex flex-col items-center text-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-background/80 flex items-center justify-center text-3xl shadow-sm">
                      {platformIcons[platform.name] || platform.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{platform.name}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{platform.account}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-primary">
                      <span>访问主页</span>
                      <ExternalLink className="size-3" />
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
