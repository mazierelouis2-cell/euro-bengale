import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Menu, X, ShoppingBasket } from 'lucide-react';
import { useI18n, LanguageSwitcher } from '../i18n';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t } = useI18n();

  const links = [
    { label: t.nav.rayons, href: '#rayons' },
    { label: t.nav.monde, href: '#atouts' },
    { label: t.nav.horaires, href: '#contact' },
    { label: t.nav.acces, href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-6xl card rounded-2xl px-5 md:px-8 py-3.5 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-brand text-white">
            <ShoppingBasket size={20} />
          </div>
          <div className="leading-none">
            <span className="text-lg md:text-xl font-extrabold tracking-tight block text-brand">Euro Bengale</span>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{t.tagline}</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-7">
          {links.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-xl text-sm font-bold hover:bg-green-700 transition-all"
          >
            <MapPin size={16} />
            {t.nav.find}
          </a>
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-4 right-4 card rounded-2xl p-6 flex flex-col gap-4 lg:hidden"
        >
          {links.map((item, i) => (
            <a
              key={i}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center justify-between pt-2">
            <LanguageSwitcher />
            <a href="#contact" onClick={() => setIsOpen(false)} className="px-5 py-3 bg-accent text-white rounded-xl font-bold text-center">
              {t.nav.find}
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
