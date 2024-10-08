import React from 'react'
import { CheckCircle, Award, TrendingUp, Users, BookOpen, Briefcase, Shield, Star } from 'lucide-react'

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">关于赶考小状元</h2>
        
        {/* Brand Introduction */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">品牌介绍</h3>
          <p className="mb-4 text-lg">
            赶考状元及赶考小状元始终致力于AI智能教育领域，秉持用科技和爱助力一亿中小学生享受公平而有质量的教育。我们与200多家图书出版社及1300多所公立学校紧密合作，积累了丰富的资源和实践经验。
          </p>
          <p className="mb-4 text-lg">
            基于19年的教培经验和超过10年的在线教育经验，我们成功探索出了AI智能智习室这一新型的"后教培时代"的颠覆式模型，通过AI智能硬件帮助学员精准化查漏补缺，同时结合启迪教练的引导，全方位帮助学员养成科学学习方法及良好的终身学习习惯。
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="公司总部" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">公司概况</h3>
            <ul className="space-y-2">
              <li className="flex items-center"><CheckCircle className="mr-2 text-green-500" /> 总部位于上海松江区，5000平方米现代化办公场地</li>
              <li className="flex items-center"><CheckCircle className="mr-2 text-green-500" /> 500人以上的全职专业团队</li>
              <li className="flex items-center"><CheckCircle className="mr-2 text-green-500" /> 与行业独角兽公司长期合作</li>
              <li className="flex items-center"><CheckCircle className="mr-2 text-green-500" /> 被誉为行业内学习内容及AI学习功能的源头企业</li>
            </ul>
          </div>
        </div>

        {/* Qualifications and Honors */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">资质与荣誉</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="w-16 h-16 mx-auto mb-4 text-blue-600" />
              <h4 className="text-xl font-semibold mb-2">企业荣誉</h4>
              <ul className="text-left list-disc list-inside">
                <li>上海市"高新技术企业"</li>
                <li>上海市"模范集体"荣誉称号</li>
                <li>"上海市总工会工人先锋号"</li>
                <li>"松江区五一劳动奖章"</li>
                <li>全国AAA级信用企业</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Shield className="w-16 h-16 mx-auto mb-4 text-blue-600" />
              <h4 className="text-xl font-semibold mb-2">资质认证</h4>
              <ul className="text-left list-disc list-inside">
                <li>公安部信息安全等级保护三级认证</li>
                <li>ISO9001认证</li>
                <li>教育部APP白名单备案</li>
                <li>出版物经营许可证</li>
                <li>ICP增值电信业务许可证</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Star className="w-16 h-16 mx-auto mb-4 text-blue-600" />
              <h4 className="text-xl font-semibold mb-2">合作伙伴认可</h4>
              <ul className="text-left list-disc list-inside">
                <li>华为"优秀合作伙伴"</li>
                <li>华为"最佳贡献奖"</li>
                <li>华为"行业灯塔奖"</li>
                <li>"讲诚信示范单位"称号</li>
                <li>百余项软件著作权与商标</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-lg">
            此外，我们还获得了广播电视节目制作经营许可证、网络文化经营许可证等多项重要资质，彰显了赶考小状元在教育科技领域的领先地位和综合实力。
          </p>
        </div>

        {/* Product Line */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">产品线</h3>
          <p className="text-lg mb-4">
            赶考小状元的产品线涵盖了AI学习机、AI智能笔、AI词典笔、AI脑波仪、AI护眼仪等智能硬件，以及一系列AI智能教辅材料。
          </p>
          <p className="text-lg">
            我们推出的"AI自习室+学习机+全新启迪服务"的综合解决方案，已经成功助力全国数千家教育机构完成转型，拥有2000多家代理商和5000多家门店，广泛分布在全国各地，赢得了市场的高度认可和广泛好评。
          </p>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">核心价值观</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <TrendingUp className="w-16 h-16 mx-auto mb-4 text-blue-600" />
              <h4 className="text-xl font-semibold mb-2">创新驱动</h4>
              <p>不断探索AI教育前沿，引领行业发展</p>
            </div>
            <div className="text-center">
              <Users className="w-16 h-16 mx-auto mb-4 text-blue-600" />
              <h4 className="text-xl font-semibold mb-2">以人为本</h4>
              <p>关注每个学生的个性化需求，提供精准教育服务</p>
            </div>
            <div className="text-center">
              <Briefcase className="w-16 h-16 mx-auto mb-4 text-blue-600" />
              <h4 className="text-xl font-semibold mb-2">品质至上</h4>
              <p>坚持高标准，为用户提供最优质的教育产品和服务</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}