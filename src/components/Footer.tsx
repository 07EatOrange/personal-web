import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-foreground/5 border-t border-border/30 py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center gap-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <span>© 2025 吃个橘子吧</span>
          <span className="text-primary">💎</span>
        </div>
        <div className="flex items-center gap-1">
          <span>Made with</span>
          <Heart className="size-3.5 text-primary fill-primary" />
          <span>by 叫我橘子就好a</span>
        </div>
      </div>
    </footer>
  );
}
