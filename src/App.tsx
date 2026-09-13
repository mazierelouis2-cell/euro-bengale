import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ecosystem from './components/Ecosystem'
import Mission from './components/Mission'
import Arrivages from './components/Arrivages'
import Contact from './components/Contact'
import WhatsAppButton from './components/WhatsAppButton'
import { useI18n } from './i18n'

function App() {
  const { t } = useI18n()
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Ecosystem />
        <Mission />
        <Arrivages />
        <Contact />
      </main>
      <footer className="border-t border-black/5 py-10 px-6 text-center text-sm text-muted-foreground">
        <div className="font-bold text-foreground mb-1">{t.footer.brand}</div>
        {t.footer.line}
        <div className="mt-2 text-xs">© {new Date().getFullYear()} Euro Bengale. {t.footer.rights}</div>
      </footer>
      <WhatsAppButton />
    </div>
  )
}

export default App
