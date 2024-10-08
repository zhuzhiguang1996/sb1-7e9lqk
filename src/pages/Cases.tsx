import React from 'react'
import { ChevronRight, DollarSign, Users, MapPin, Star } from 'lucide-react'

export const Cases: React.FC = () => {
  const storeModels = [
    { type: "周末卡", time: "周六-周日\n每周一次/4小时/次", price: "800/月", income: "800×150×12=1440000", machineIncome: "200×5780=1156000", note: "面积100平方" },
    { type: "畅学卡", time: "周二-周日\n营业时间内", price: "1500/月", income: "1500×50×12=900000", machineIncome: "", note: "周六日分4批" },
  ]

  const investmentDetails = [
    { city: "4. 县城", area: "50-200㎡", initialInvestment: "17.42万元 (65台)", decoration: "5万元", rent: "0.5万*6个月=6万元", reserve: "5万", total: "约34万" },
    { city: "3. 地级市及百强县", area: "50-200㎡", initialInvestment: "18.76万元 (70台)", decoration: "5万元", rent: "1万*6个月=6万元", reserve: "5万", total: "约35万" },
    { city: "2. 省会及重点城市", area: "50-200㎡", initialInvestment: "21.44万元 (80台)", decoration: "5万元", rent: "1万*6个月=6万元", reserve: "5万", total: "约38万" },
    { city: "1. 北上广深", area: "50-200㎡", initialInvestment: "40.20万元 (150台)", decoration: "5万元", rent: "2万*6个月=12万", reserve: "5万", total: "约62万" },
  ]

  const successCases = [
    {
      name: "重庆铜梁代理商",
      investor: "花店老板",
      location: "初中学校门口",
      recruitmentModel: "地推9.9元体验7天，紧盯报单系统学习",
      scale: "2个月30个学员，达到盈利，目前10家店",
      highlight: "严格跟进总部学习要求，落实启迪督学的13个流程，用心极致服务客户。"
    },
    {
      name: "山东聊城代理商",
      investor: "王老师",
      recruitmentModel: "同总部合作招生400个9.9元小课包，实现转化200人",
      scale: "6个月内开设30个门店，学习机销售量3000多台",
      highlight: "多次参加总部线下学习，大量参加直播课，自发每周一次的全员培训，开设10-20台的专卖分店模式，快速开展门店和合伙人数量。"
    },
    {
      name: "山西运城代理商",
      investor: "张老师",
      recruitmentModel: "与当地托管班深度合作，举办1对1沙龙及家长会，通过学习机+服务的模式进行新招和转化，同时坚持2-3个月短视频招生",
      scale: "拥有180名在线学员，累计推荐学习机销售1200台+",
      highlight: "学习公司的直播课程模式，并坚持直播宣传；善于盘活当地托管机构，深度合作，创造多维营收模式，实现收益最大化"
    },
    {
      name: "河南代理商",
      investor: "张老师",
      recruitmentModel: "学校门口1个月发放单页6万张，快速积累口碑，提供会员打印服务19.9元/年，融入家庭教育和学习方法知识分布，转介绍方案落地效果显著，强化自习室翻台率，推行异业合作",
      scale: "6个月新开28家门店，每月纯利润突破30万",
      highlight: "强化单店运营模式，实现异业合作裂变模式共赢，推行自习室三剑客（AI智能测评/错题本/知识图谱+专项课）"
    },
    {
      name: "扬州宝应自习室店",
      investor: "侯老师",
      location: "学校周边",
      recruitmentModel: "地推推9.9元体验7天和图书卡模式等",
      scale: "3个自习室店，目前激活300多台",
      highlight: "扬州最美书店，书店转型成功案例"
    },
    {
      name: "陕西西安蓝田赶考小状元",
      investor: "邢老师",
      location: "附近小学初中",
      recruitmentModel: "地推宣传，组织活动，和与学校进行沟通合作",
      scale: "7月初装修完成试运营，截至目前会员激活60+",
      highlight: "积极参加活动，组织员工培训，进行系统化的学习"
    },
    {
      name: "山东泰安门店",
      investor: "刘老师",
      location: "学校附近",
      recruitmentModel: "学生破冰，学生交9.9测评，奖励员工5元，返家长19.8",
      scale: "两家自习室门店，学生会员80+",
      highlight: "退休教师转型，一个月卖97台"
    },
    {
      name: "山东青岛即墨店",
      investor: "音乐、乐器转型",
      location: "学校门口，社区周边",
      recruitmentModel: "地推+短视频+老生裂变",
      scale: "1个月门店12家店，三个月22家店，首家店第一个月，学员70多个半年卡，20多名年卡，40多名月卡",
      highlight: "卓越的督学服务体系，高提分率，注重培养孩子的内驱力，给予孩子充分的情绪价值"
    },
    {
      name: "重庆21家 聊城16",
      investor: "宋老师",
      location: "学校附近，附近有初中大型社区，商场",
      recruitmentModel: "学校门口地推、商场&店铺地推、线上口播&直播、家长转介绍",
      scale: "3000+学员，达到盈利30家门店",
      highlight: "出勤率高，孩子们学习动力强，启迪教练和孩子们一起制定的目标会100%完成，提分率达到97%，每天有效的费曼输出"
    },
    {
      name: "赶考小状元钟山体验中心",
      investor: "卢老师",
      location: "广西壮族自治区贺州市钟山县广场西路55号",
      recruitmentModel: "地推，转介绍",
      scale: "两层三百多平，现在只使用了一层150平，座位30个，正价学生18人，启迪教练2人",
      highlight: "周边三个大型学校，一个初中两个小学，距离最近的小学150米，学生集中有助于迅速提升知名度和生源数量"
    },
    {
      name: "赶考小状元AI智能自习室",
      investor: "冯文杰",
      location: "平昌县第二中学下行斑马线对面二楼",
      recruitmentModel: "体验班59元1人，2人团报29元/人，3人团报19元/人（2次课，一次2小时）",
      scale: "招生100人",
      highlight: "精准测评，找出知识薄弱点，点对点针对性提升，个性化学习，一对一老师督学规划"
    }
  ]

  return (
    <section id="cases" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">案例分享</h2>
        
        {/* 单店模型 */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">单店模型</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2">卡型</th>
                  <th className="border border-gray-300 p-2">智习时间</th>
                  <th className="border border-gray-300 p-2">基准价格</th>
                  <th className="border border-gray-300 p-2">收入模型</th>
                  <th className="border border-gray-300 p-2">学习机营收</th>
                  <th className="border border-gray-300 p-2">备注</th>
                </tr>
              </thead>
              <tbody>
                {storeModels.map((model, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 p-2">{model.type}</td>
                    <td className="border border-gray-300 p-2 whitespace-pre-line">{model.time}</td>
                    <td className="border border-gray-300 p-2">{model.price}</td>
                    <td className="border border-gray-300 p-2">{model.income}</td>
                    <td className="border border-gray-300 p-2">{model.machineIncome}</td>
                    <td className="border border-gray-300 p-2">{model.note}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={3} className="border border-gray-300 p-2 font-bold">总计</td>
                  <td colSpan={3} className="border border-gray-300 p-2 font-bold">年应收：3496000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-sm text-gray-600">可招收200学员</p>
        </div>

        {/* 单店投入费用明细 */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">AI自习室-单店投入费用明细</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2">项目</th>
                  {investmentDetails.map((detail, index) => (
                    <th key={index} className="border border-gray-300 p-2">{detail.city}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold">面积要求</td>
                  {investmentDetails.map((detail, index) => (
                    <td key={index} className="border border-gray-300 p-2">{detail.area}</td>
                  ))}
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold">首批进货量</td>
                  {investmentDetails.map((detail, index) => (
                    <td key={index} className="border border-gray-300 p-2">{detail.initialInvestment}</td>
                  ))}
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold">装修：硬装、软装、桌椅</td>
                  {investmentDetails.map((detail, index) => (
                    <td key={index} className="border border-gray-300 p-2">{detail.decoration}</td>
                  ))}
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold">房租</td>
                  {investmentDetails.map((detail, index) => (
                    <td key={index} className="border border-gray-300 p-2">{detail.rent}</td>
                  ))}
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold">备用金</td>
                  {investmentDetails.map((detail, index) => (
                    <td key={index} className="border border-gray-300 p-2">{detail.reserve}</td>
                  ))}
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-bold">总投入合计</td>
                  {investmentDetails.map((detail, index) => (
                    <td key={index} className="border border-gray-300 p-2 font-bold">{detail.total}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-sm text-gray-600">（以上费用为预估，以实际支出为准，相关细节请详询拓展经理）</p>
        </div>

        {/* 成功案例 */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">成功案例</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {successCases.map((case_, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">{case_.name}</h4>
                <p><strong>投资人：</strong>{case_.investor}</p>
                {case_.location && <p><strong>选址：</strong>{case_.location}</p>}
                <p><strong>招生模式：</strong>{case_.recruitmentModel}</p>
                <p><strong>规模：</strong>{case_.scale}</p>
                <p><strong>亮点：</strong>{case_.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}