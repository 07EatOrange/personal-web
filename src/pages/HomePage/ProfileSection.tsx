import { motion } from 'framer-motion';
import { MOCK_PROFILE } from '@/data/profile';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Heart, User } from 'lucide-react';

const infoItems = [
  { icon: User, label: '网名', value: MOCK_PROFILE.nickname },
  { icon: Calendar, label: '生日', value: '2007年4月24日' },
  { icon: MapPin, label: '家乡', value: `${MOCK_PROFILE.birthPlace} · 现居${MOCK_PROFILE.currentCity}` },
  { icon: Heart, label: '兴趣', value: MOCK_PROFILE.interests.join(' · ') },
];

export default function ProfileSection() {
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
            <span className="text-2xl">💎</span>
            <h2 className="text-2xl font-bold text-foreground">关于我</h2>
          </div>

          <Card className="border-border/40 shadow-sm">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {infoItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-muted/50"
                  >
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="size-6 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-base font-medium text-foreground truncate">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {MOCK_PROFILE.interests.map((interest) => (
                  <Badge key={interest} variant="secondary" className="rounded-full px-3 py-1 text-xs">
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
