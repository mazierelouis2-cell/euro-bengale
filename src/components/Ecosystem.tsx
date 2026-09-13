import { motion } from 'framer-motion';
import { useI18n } from '../i18n';

const emojis = ['🥬', '🌍', '🍚', '🥤', '🧀', '🧻'];

const Ecosystem = () => {
  const { t } = useI18n();
  return (
    <section id="rayons" className="py-24 md:py-32 px-6 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <div className="text-accent text-xs font-bold tracking-widest uppercase mb-4">{t.rayons.kicker}</div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">{t.rayons.title}</h2>
          <p className="text-lg text-muted-foreground">{t.rayons.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.rayons.items.map((r, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
              className="card rounded-2xl p-7 hover:-translate-y-1 hover:border-accent/30 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center text-3xl mb-5">
                {emojis[index]}
              </div>
              <h3 className="text-xl font-bold mb-2">{r.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
