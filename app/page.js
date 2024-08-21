"use client";

import { useState, useEffect, useRef } from 'react'
import { ChevronRight, ChevronLeft, Search, User, MapPin, Phone, Globe, Clock, CheckCircle, ArrowRight, Stethoscope, Users, Microscope, FlaskConical, FileText, UserCheck, Calendar, MessageCircle, Home, Car, MessageSquare, Coffee, Compass, PhoneCall, Video, Plane, Syringe } from 'lucide-react'
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import PatientJourney from './components/PatientJourney';
import PartnerInstitutionsBanner from './components/PartnerInstitutionsBanner';

export default function Component() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="bg-[#0669f2]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 relative">
              {/* Use the Standard Logo with smaller size */}
              <img src="/ufh_logos/logo_white.jpeg" alt="UFH Logo" className="w-32 mb-6" />
              <h1 className="text-3xl font-bold mb-6 text-white" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>
                和疗提供一站式解决方案<br />
                助你链接香港欧美肿瘤治疗最佳方案以及资源
              </h1>
              <ul className="mb-8 space-y-2">
                {[
                  "链接全球顶级肿瘤诊疗资源",
                  "权威第二意见",
                  "和睦家医院网络配套",
                  "海外就医全流程安排",
                  "全球新药采购"
                ].map((point, index) => (
                  <li key={index} className="flex items-center text-white">
                    <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span className="text-lg" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>{point}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-white text-[#0669f2] px-6 py-3 font-semibold hover:bg-opacity-90 transition duration-300" style={{ fontFamily: 'Moderat, sans-serif' }}>
                咨询我们的医疗顾问
              </button>
            </div>
            <div className="h-full">
              <img
                src="/images/doctor-team.png"
                alt="Medical Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Global Expert Team Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-[#0669f2]" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>全球肿瘤专家网络</h2>
          <p className="text-lg mb-8 text-gray-700" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>
            我们与全球顶尖医疗机构紧密合作，汇集来自香港、美国、新加坡和泰国等地的肿瘤专家精英。
          </p>
          {/* Add the PartnerInstitutionsBanner component here */}
          <PartnerInstitutionsBanner />
        </div>
      </div>

      {/* Rapid Access Section */}
      <div className="bg-[#f4f7fe] py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#0669f2]" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>迅速获得全球医疗服务</h2>
              <p className="text-lg mb-8 text-gray-700" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>
                我们深知时间对癌症患者至关重要。和睦家的全球专家网络和专业服务团队能够快速为您建立连接，确保您在最短时间内获得所需的医疗护理或权威的第二诊疗意见。
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-center bg-white p-4 shadow-sm">
                  <div className="bg-[#0669f2] p-2 rounded-full mr-4">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-800 font-medium" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>
                    最快<span className="text-[#0669f2] text-2xl font-bold mx-1" style={{ fontFamily: 'Moderat, sans-serif' }}>三天</span>开始<span className="text-[#0669f2] text-2xl font-bold mx-1" style={{ fontFamily: 'Moderat, sans-serif' }}>远程会诊</span>
                  </p>
                </div>
                <div className="flex items-center bg-white p-4 shadow-sm">
                  <div className="bg-[#0669f2] p-2 rounded-full mr-4">
                    <Syringe className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-800 font-medium" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>
                    最快<span className="text-[#0669f2] text-2xl font-bold mx-1" style={{ fontFamily: 'Moderat, sans-serif' }}>七天</span>开始<span className="text-[#0669f2] text-2xl font-bold mx-1" style={{ fontFamily: 'Moderat, sans-serif' }}>治疗</span>
                  </p>
                </div>
              </div>
              <button className="bg-[#0669f2] text-white px-8 py-3 font-semibold flex items-center hover:bg-opacity-90 transition duration-300" style={{ fontFamily: 'Moderat, sans-serif' }}>
                了解更多服务细节
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            <div className="h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-[#0669f2] transform -skew-x-6"></div>
              <img
                src="/images/foreign_doctor.jpeg"
                alt="专业医疗团队"
                className="w-full h-full object-cover relative z-10 transform skew-x-6 scale-110"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#0669f2] mb-6 text-center" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>我们的服务</h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>
            和疗致力于为您提供全面的医疗服务，从远程会诊到出国就医，再到全球药品采购。我们的专业团队将全程陪伴您的医疗旅程，确保您获得最优质的医疗资源和个性化的照护。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "远程癌症会诊",
                description: "我们为您安排与国际顶级癌症专家进行远程视频咨询。这种便捷的方式让您无需出国，即可获得世界级肿瘤专家的专业意见。无论您是刚被诊断、正在接受治疗，还是在寻求进一步的治疗方案，我们的服务都能为您提供宝贵的第二诊疗意见。远程会诊不仅节省了您的时间和费用，还让您能在舒适的环境中获得个性化的癌症诊疗建议。",
                icon: Video,
                details: [
                  "高质量视频咨询，确保与癌症专家的清晰沟通",
                  "专业医疗翻译，消除与国际肿瘤专家的语言障碍",
                  "安全的医疗信息传输，保护您的隐私和敏感的癌症相关数据",
                  "灵活预约，全程协调，适应您的时间安排",
                  "详细的癌症会诊报告和个性化治疗建议",
                  "与本地肿瘤医生的无缝对接，协助制定或优化治疗方案"
                ]
              },
              {
                title: "海外癌症治疗",
                description: "如果您需要在海外接受先进的癌症治疗，我们的专业团队将协助您完成从签证申请到医院预约的全过程。我们与多家国际知名肿瘤医疗中心直接合作，确保您能快速获得最佳的个性化癌症治疗方案。我们的服务不仅包括专业的医疗安排，还涵盖了全面的旅行支持，让您的海外抗癌之旅无忧无虑。",
                icon: Plane,
                details: [
                  "加急医疗签证办理，缩短癌症患者的等待时间",
                  "国际顶级肿瘤医疗中心直接预约，优先安排会诊和治疗",
                  "专业肿瘤医疗翻译全程陪同，确保与医疗团队沟通顺畅",
                  "跨境癌症医疗保险协调，最大化您的治疗保障",
                  "个性化癌症治疗方案制定和长期跟进",
                  "适合癌症患者的海外住宿和特殊交通安排，全方位照顾",
                  "癌症相关紧急情况处理和24/7专业医疗支持"
                ]
              },
              {
                title: "抗癌药品采购",
                description: "我们帮助癌症患者在全球范围内搜寻和获取最新、最有效的抗癌药物。无论是尚未在国内上市的创新肿瘤靶向药物，还是临床试验中的实验性免疫疗法，我们都能为您提供专业的搜寻和采购服务。我们的肿瘤专家团队将评估您的具体病情和需求，确保您能获得最适合的个性化癌症药物治疗方案。",
                icon: Globe,
                details: [
                  "全球抗癌药品数据库检索，找到最适合您病情的药物",
                  "最新肿瘤临床试验信息更新，掌握前沿癌症治疗动向",
                  "海外抗癌药品进口手续办理，简化复杂流程",
                  "和睦家医院网络配套，确保用药安全和有效性",
                  "个性化癌症用药方案制定和长期跟踪管理服务",
                  "抗癌药物副作用管理和生活质量改善建议",
                  "癌症患者营养支持和辅助用药指导"
                ]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <service.icon className="w-10 h-10 text-[#0669f2] mr-3" />
                  <h3 className="text-2xl font-semibold text-[#0669f2]" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>{service.title}</h3>
                </div>
                <p className="text-gray-700 mb-4" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#0669f2] mr-2 flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-600" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>{detail}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 bg-[#0669f2] text-white px-4 py-2 text-sm font-semibold hover:bg-opacity-90 transition duration-300" style={{ fontFamily: 'Moderat, sans-serif' }}>
                  了解更多
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Continuous Care and Comprehensive Local Support Section */}
      <div className="bg-[#f0f7ff] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8">
              <h2 className="text-4xl font-bold mb-8 text-[#0669f2]" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>全程诊疗支持配套</h2>
              <p className="text-lg mb-6 text-gray-700" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>
                依托和睦家遍布中国的20多家医院的医疗网络，我们供从出国前准备到回国的跟进服务的全程支持，确保您在整个医疗旅程中得到全面的本地化服务。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-[#f0f7ff] p-4">
                  <h3 className="text-xl font-semibold text-[#0669f2] mb-3" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>海外癌症治疗前</h3>
                  <ul className="space-y-2">
                    {[
                      "肿瘤标志物全面检测",
                      "癌症分期精确评估",
                      "基因突变检测",
                      "PET-CT全身扫描",
                      "病理样本复核",
                      "既往治疗效果评估",
                      "癌症病历翻译整理"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-[#0669f2] mr-2" />
                        <span style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#f0f7ff] p-4">
                  <h3 className="text-xl font-semibold text-[#0669f2] mb-3" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>海外癌症治疗后</h3>
                  <ul className="space-y-2">
                    {[
                      "治疗方案详细解读",
                      "后续靶向药物安排",
                      "免疫治疗反应监测",
                      "放化疗后康复指导",
                      "营养方案定制",
                      "心理健康辅导",
                      "远程定期随访安排"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-[#0669f2] mr-2" />
                        <span style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button className="mt-4 bg-[#0669f2] text-white px-6 py-3 font-semibold flex items-center hover:bg-opacity-90 transition duration-300" style={{ fontFamily: 'Moderat, sans-serif' }}>
                了解更多��于我们的服务
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            <div className="bg-white p-8">
              <div className="relative">
                <img
                  src="/images/ufh-logo.png"
                  alt="和睦家医院地图"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#0669f2] text-white py-4 px-6 rounded-lg shadow-md">
                  <p className="font-semibold text-lg" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>遍布中国的医疗网络</p>
                  <p style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>20+和睦家医院，提供便捷本地服务</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Patient Journey Component */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <PatientJourney />
        </div>
      </div>

      {/* Medical Concierge Service Section */}
      <div className="bg-[#f0f7ff] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#0669f2] mb-12 text-center" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>尊贵礼宾服务</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8">
              <img
                src="/images/medical_concierge.jpeg"
                alt="Concierge Services"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="bg-white p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: MapPin, title: "专属旅行规划", desc: "为您和陪同家属定制舒适的行程安" },
                  { icon: Home, title: "豪华住宿预订", desc: "甄选临近医疗机构的高端酒店或公寓" },
                  { icon: Car, title: "VIP机场接送", desc: "私人司机全程接送，尊享无缝衔接的旅程" },
                  { icon: MessageSquare, title: "专业翻译陪同", desc: "医疗专业翻译全程陪同，确保沟通无障碍" },
                  { icon: Coffee, title: "个性化餐饮安排", desc: "根据您的饮食需求和喜好，提供定制餐饮服务" },
                  { icon: PhoneCall, title: "24/7紧急支援", desc: "全天候待命，随时解决您的任何问题或需求" }
                ].map((service, index) => (
                  <div key={index} className="flex items-start">
                    <service.icon className="flex-shrink-0 w-8 h-8 text-[#0669f2] mr-4" />
                    <div>
                      <h3 className="font-semibold text-[#0669f2] text-lg mb-2" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>{service.title}</h3>
                      <p className="text-gray-700" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Add CTA button for the entire service */}
          <div className="mt-12 text-center">
            <button className="bg-[#0669f2] text-white px-8 py-4 font-semibold hover:bg-opacity-90 transition duration-300 text-lg" style={{ fontFamily: 'Moderat, sans-serif' }}>
              咨询我们的医疗顾问
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}