import { motion } from 'framer-motion';
import { MOCK_PROFILE } from '@/data/profile';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function GamesSection() {
  const games = MOCK_PROFILE.games;

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
            <span className="text-2xl">🎮</span>
            <h2 className="text-2xl font-bold text-foreground">游戏经历</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {games.map((game, i) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <Card className="h-full border-border/40 hover:border-primary/30 hover:shadow-sm transition-all duration-300">
                  <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                    <span className="text-3xl">{game.icon}</span>
                    <h3 className="font-semibold text-sm text-foreground">{game.name}</h3>
                    <Badge variant="outline" className="rounded-full text-xs font-normal border-primary/20 text-primary">
                      {game.rank}
                    </Badge>
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
