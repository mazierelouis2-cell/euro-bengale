import { motion } from 'framer-motion';
import { useI18n } from '../i18n';

const emojis = ['🥭', '🥬', '🌿', '🍚'];

const Arrivages = () => {
  const { t } = useI18n();
  return (
    <section id="arrivages" className="py-24 md:py-32 px-6 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12">
          <div className="text-warm text-xs font-bold tracking-widest uppercase mb-4">{t.arrivages.kicker}</div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">{t.arrivages.title}</h2>
          <p className="text-lg text-muted-foreground">{t.arrivages.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {t.arrivages.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card rounded-2xl p-6 flex flex-col items-center text-center relative overflow-hidden"
            >
              <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-warm/10 text-warm">
                {item.tag}
              </span>
              <div className="text-5xl mb-4 mt-2">{emojis[i]}</div>
              <div className="font-bold">{item.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Arrivages;
