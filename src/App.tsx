import AboutDay from './components/AboutDay'
import Footer from './components/Footer'
import Header from './components/Header'
import Help from './components/Help'
import Hero from './components/Hero'
import Quiz from './components/Quiz'
import Rights from './components/Rights'
import Sources from './components/Sources'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      <Header />
      <main>
        <Hero />
        <Rights />
        <Quiz />
        <AboutDay />
        <Help />
        <Sources />
      </main>
      <Footer />
    </div>
  )
}

export default App