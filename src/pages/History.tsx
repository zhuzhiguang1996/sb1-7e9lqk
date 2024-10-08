import React from 'react'
import { Calendar, Zap, TrendingUp, Award, Star, Target } from 'lucide-react'

export const History: React.FC = () => {
  const timelineEvents = [
    { year: 2005, title: "耐飞教育成立", description: "专注于一对一培训服务，为学生提供个性化的教育辅导方案。", icon: Calendar },
    { year: 2013, title: "赶考网成立", description: "开启互联网+教育的新模式探索。", icon: Zap },
    { year: 2015, title: "上海亿山睦成立", description: "强化平台的综合实力。", icon: TrendingUp },
    { year: 2018, title: "品牌升级", description: "\"赶考网\"变更为\"赶考状元\"。", icon: Award },
    { year: 2021, title: "AI智能教育硬件发展", description: "全面发展AI智能学习平板、智能笔、扫读笔等\"端+云融合\"智能教育硬件。", icon: Star },
    { year: 2024, title: "集团化运作战略启动", description: "启动八大发展主题、十大服务计划、六大公益平台。", icon: Target },
  ]

  return (
    <section id="history" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-800">公司发展历程</h2>
        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500"></div>
          
          {/* Timeline events */}
          {timelineEvents.map((event, index) => (
            <div key={event.year} className={`mb-16 flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
              <div className="w-full md:w-5/12">
                <div className="p-6 bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
                  <event.icon className="w-16 h-16 mb-4 text-blue-600 mx-auto" />
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">{event.year}: {event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
              <div className="flex-grow md:flex hidden justify-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full border-4 border-white shadow flex items-center justify-center">
                  <span className="text-2xl text-white font-bold">{event.year}</span>
                </div>
              </div>
              <div className="w-full md:w-5/12 md:hidden"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}