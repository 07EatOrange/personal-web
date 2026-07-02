import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, User, Mail, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const NAV_ITEMS = [
  { path: '/', label: '首页', icon: Home },
  { path: '/blog', label: '博客', icon: BookOpen },
  { path: '/about', label: '关于我', icon: User },
  { path: '/contact', label: '联系方式', icon: Mail },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'bg-primary/10 text-primary shadow-sm'
        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
        <NavLink
          to="/"
          end
          className="flex items-center gap-2 text-lg font-bold text-foreground hover:text-primary transition-colors"
        >
          <span className="text-2xl">🌊</span>
          <span className="hidden sm:inline">吃个橘子吧</span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink key={item.path} to={item.path} end={item.path === '/'} className={linkClass}>
                <Icon className="size-4" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="rounded-lg">
              <Menu className="size-5" />
              <span className="sr-only">菜单</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[260px] pt-12">
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === '/'}
                    className={linkClass}
                    onClick={() => setOpen(false)}
                  >
                    <Icon className="size-4" />
                    <span>{item.label}</span>
                  </NavLink>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
