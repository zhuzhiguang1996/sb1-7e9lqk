import React from 'react'
import { Brain, Target, TrendingUp, Users, BookOpen, Shield, Star, Zap, Briefcase } from 'lucide-react'

export const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">赶考小状元AI自习室</h2>
        
        {/* What is AI Self-Study Room */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">什么是AI自习室？</h3>
          <p className="text-lg mb-4">
            AI自习室是为学员提供综合的立体化解决方案的场所，通过AI智能设备（赶考小状元AI学习机）帮助学员针对性地查漏补缺，通过AI工具提升学员学习效率。自习室不仅提供专门的学习空间和良好的学习氛围，还结合启迪教练的引导，给予学员有温度的陪伴和指导。
          </p>
          <p className="text-lg">
            在AI自习室里，学员不仅能够显著提升学习成绩，还能养成科学的学习方法和良好的学习习惯，进而获得终身学习的能力。
          </p>
        </div>

        {/* Core Advantages */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">核心优势</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Brain className="w-12 h-12 mb-4 text-blue-600" />
              <h4 className="text-xl font-semibold mb-2">基因优势</h4>
              <ul className="list-disc list-inside">
                <li>19年教育行业深厚积累</li>
                <li>200+图书公司和出版社合作</li>
                <li>11年在线智能学习系统开发经验</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Zap className="w-12 h-12 mb-4 text-blue-600" />
              <h4 className="text-xl font-semibold mb-2">产品优势</h4>
              <ul className="list-disc list-inside">
                <li>全方位闭环学习链</li>
                <li>40+AI工具和素养课程</li>
                <li>成熟的教练工作台</li>
                <li>持续更新与可靠性能</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="w-12 h-12 mb-4 text-blue-600" />
              <h4 className="text-xl font-semibold mb-2">服务优势</h4>
              <ul className="list-disc list-inside">
                <li>全面的培训支持</li>
                <li>多元化的线上陪跑活动</li>
                <li>专属服务群</li>
                <li>AI工具助力</li>
                <li>上门支持</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Product Line */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">产品线</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">智能硬件</h4>
              <ul className="list-disc list-inside">
                <li>赶考小状元AI学习机</li>
                <li>AI智能笔</li>
                <li>AI词典笔</li>
                <li>AI打印机</li>
                <li>AI脑波仪</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">AI智能教辅</h4>
              <ul className="list-disc list-inside">
                <li>AI书法教学教材</li>
                <li>各年级书法字帖</li>
                <li>AI笔记本</li>
                <li>AI智能纠错本</li>
                <li>AI英语听写默写本</li>
                <li>新概念英语练习册</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Target Audience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">适用人群</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BookOpen className="w-12 h-12 mb-4 text-blue-600" />
              <h4 className="text-xl font-semibold mb-2">教育机构</h4>
              <ul className="list-disc list-inside">
                <li>托管机构</li>
                <li>幼儿园</li>
                <li>文化课及艺术类教培机构</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Briefcase className="w-12 h-12 mb-4 text-blue-600" />
              <h4 className="text-xl font-semibold mb-2">创业人群</h4>
              <ul className="list-disc list-inside">
                <li>宝妈、大学生创业</li>
                <li>书店、文具店老板</li>
                <li>房地产、保险从业人员</li>
                <li>花店老板、设计师、建材店老板</li>
                <li>退伍军人等</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Educational Philosophy */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">教育理念</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Target className="w-12 h-12 mb-4 text-blue-600" />
              <h4 className="text-xl font-semibold mb-2">核心目标</h4>
              <ul className="list-disc list-inside">
                <li>培养孩子综合素养能力</li>
                <li>培育家庭幸福力量</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Star className="w-12 h-12 mb-4 text-blue-600" />
              <h4 className="text-xl font-semibold mb-2">学习方法</h4>
              <ul className="list-disc list-inside">
                <li>三元学习力</li>
                <li>时间管理四象限</li>
                <li>七星学习力</li>
                <li>八维学习法</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="w-12 h-12 mb-4 text-blue-600" />
              <h4 className="text-xl font-semibold mb-2">服务原则</h4>
              <ul className="list-disc list-inside">
                <li>五心服务</li>
                <li>启迪教练六原则</li>
                <li>欣赏孩子的九个层次</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}