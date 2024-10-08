import React from 'react'
import { TrendingUp, BookOpen, Zap } from 'lucide-react'

export const Home: React.FC = () => {
  return (
    <section id="home" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">赶考小状元：引领新时代教育变革</h1>
        <p className="text-xl md:text-2xl mb-12 text-center">智能学习 · 全面发展 · 未来领航</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg">
            <TrendingUp className="w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-center">行业前景</h3>
            <p className="text-center">新时代教育变革，AI+学习需求爆发</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg">
            <BookOpen className="w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-center">政策支持</h3>
            <p className="text-center">国家大力发展"人工智能+"教育</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg">
            <Zap className="w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-center">创新科技</h3>
            <p className="text-center">AI驱动的第五代学习机革新</p>
          </div>
        </div>
      </div>
    </section>
  )
}