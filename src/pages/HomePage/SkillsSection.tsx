import { motion } from 'framer-motion';
import { MOCK_PROFILE } from '@/data/profile';
import { Card, CardContent } from '@/components/ui/card';

export default function SkillsSection() {
  const skills = MOCK_PROFILE.skills;

  return (
    <section className="w-full py-12 md:py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">🛠️</span>
            <h2 className="text-2xl font-bold text-foreground">技能 & 兴趣</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Card className="h-full border-border/40 hover:border-primary/30 hover:shadow-md hover:shadow-primary/10 transition-all duration-300">
                  <CardContent className="p-5 flex flex-col items-center text-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-13px">{skill.name}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{skill.description}</p>
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
