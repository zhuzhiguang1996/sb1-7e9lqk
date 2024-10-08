import React from 'react'
import { Menu } from 'lucide-react'

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">赶考小状元</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#home" className="text-gray-600 hover:text-blue-600">首页</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600">关于我们</a>
          <a href="#history" className="text-gray-600 hover:text-blue-600">发展历程</a>
          <a href="#products" className="text-gray-600 hover:text-blue-600">产品服务</a>
          <a href="#profit-model" className="text-gray-600 hover:text-blue-600">盈利模式</a>
          <a href="#cases" className="text-gray-600 hover:text-blue-600">案例分享</a>
        </nav>
        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </header>
  )
}