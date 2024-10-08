import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">联系我们</h3>
            <p>地址：您的公司地址</p>
            <p>电话：您的联系电话</p>
            <p>邮箱：您的邮箱地址</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">快速链接</h3>
            <ul>
              <li><a href="#home" className="hover:text-blue-400">首页</a></li>
              <li><a href="#about" className="hover:text-blue-400">关于我们</a></li>
              <li><a href="#products" className="hover:text-blue-400">产品服务</a></li>
              <li><a href="#cases" className="hover:text-blue-400">案例分享</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">关注我们</h3>
            <p>关注我们的社交媒体，获取最新动态</p>
            {/* 这里可以添加社交媒体图标 */}
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 您的公司名称. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  )
}