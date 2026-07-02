import { motion } from 'framer-motion';
import { MOCK_PROFILE } from '@/data/profile';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, User, Monitor } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function ProfileDetailSection() {
  const profile = MOCK_PROFILE;

  const details = [
    { icon: User, label: '网名', value: profile.nickname },
    { icon: User, label: '性别', value: `${profile.gender} · ${profile.age}岁` },
    { icon: Calendar, label: '生日', value: '2007年4月24日' },
    { icon: MapPin, label: '出生地', value: profile.birthPlace },
    { icon: MapPin, label: '成长地', value: profile.currentCity },
    { icon: Monitor, label: '计算机基础', value: profile.computerSkill },
  ];

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
            <span className="text-2xl">📋</span>
            <h2 className="text-2xl font-bold text-foreground">个人档案</h2>
          </div>

          <Card className="border-border/40 shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                {/* Avatar */}
                <div className="shrink-0">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-primary/30 shadow-md">
                    <Image
                      src={profile.avatarUrl}
                      alt={profile.nickname}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                  {details.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.06 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-muted/50"
                    >
                      <div className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="size-4 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="text-base font-medium text-foreground">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
