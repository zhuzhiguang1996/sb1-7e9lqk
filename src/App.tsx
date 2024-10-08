import React, { useEffect } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { History } from './pages/History'
import { Products } from './pages/Products'
import { ProfitModel } from './pages/ProfitModel'
import { Cases } from './pages/Cases'

const App: React.FC = () => {
  useEffect(() => {
    // Any side effects can be handled here
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Home />
        <About />
        <History />
        <Products />
        <ProfitModel />
        <Cases />
      </main>
      <Footer />
    </div>
  )
}

export default App