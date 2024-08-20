"use client";

import { useState, useEffect, useRef } from 'react'
import { ChevronRight, ChevronLeft, Search, User, MapPin, Phone, Globe, Clock, CheckCircle, ArrowRight, Stethoscope, Users, Microscope, FlaskConical, FileText, UserCheck, Calendar, MessageCircle, Home, Car, MessageSquare, Coffee, Compass, PhoneCall, Video, Plane } from 'lucide-react'
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
                和睦家国际医疗提供一站式解决方案<br/>
                助你寻求全球肿瘤治疗最佳方案以及资源
              </h1>
              <ul className="mb-8 space-y-2">
                {[
                  "链接全球顶级肿瘤诊疗资源",
                  "权威第二意见",
                  "国内医院网络配套",
                  "出国就医安排"
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
      <div className="bg-[#f4f7fe] py-16"> {/* Using Light Blue #4 for background */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8">
              <h2 className="text-3xl font-bold mb-6 text-[#0669f2]" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>迅速获得全球医疗服务</h2>
              <p className="text-lg mb-6 text-gray-700" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>
                我们深知时间对癌症患者至关重要。和睦家的全球专家网络和专业服务团队能够迅速为您建立连接，让您以最快的速度获得所需的医疗护理或权威的第二诊疗意见。
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="bg-[#0669f2] p-2 mr-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>最快3个工作日内匹配合适专家</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-[#0669f2] p-2 mr-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>14天内进行首次咨询或开始治疗</span>
                </li>
              </ul>
              <button className="mt-8 bg-[#0669f2] text-white px-6 py-3 font-semibold flex items-center hover:bg-opacity-90 transition duration-300" style={{ fontFamily: 'Moderat, sans-serif' }}>
                了解更多
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            <div className="bg-white p-8">
              <div className="relative">
                <img 
                  src="/images/foreign_doctor.jpeg" 
                  alt="Medical Service" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-[#0669f2] text-white py-4 px-6 rounded-lg shadow-md">
                  <p className="font-semibold text-lg" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>全球医疗网络</p>
                  <p style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>连接100+顶级医院和专家</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Continuous Care and Comprehensive Local Support Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8">
              <h2 className="text-4xl font-bold mb-8 text-[#0669f2]" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>全程诊疗支持配套</h2>
              <p className="text-lg mb-6 text-gray-700" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>
                依托和睦家遍布中国的20多家诊所和医院网络，我们提供从出国前准备到回国后的跟进服务的全程支持，确保您在整个医疗旅程中得到全面的本地化服务。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-[#f0f7ff] p-4">
                  <h3 className="text-xl font-semibold text-[#0669f2] mb-3" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>出国就医前</h3>
                  <ul className="space-y-2">
                    {["全面体检项目", "影像学检查", "实验室检测", "医疗记录翻译"].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-[#0669f2] mr-2" />
                        <span style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#f0f7ff] p-4">
                  <h3 className="text-xl font-semibold text-[#0669f2] mb-3" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>出国就医后</h3>
                  <ul className="space-y-2">
                    {["结果解读", "后续治疗安排", "康复指导", "定期随访"].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-[#0669f2] mr-2" />
                        <span style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button className="mt-4 bg-[#0669f2] text-white px-6 py-3 font-semibold flex items-center hover:bg-opacity-90 transition duration-300" style={{ fontFamily: 'Moderat, sans-serif' }}>
                了解更多关于我们的服务
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
                  <p style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>20+诊所和医院，提供便捷本地服务</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="bg-[#f0f7ff] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#0669f2] mb-12 text-center" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>我们的服务</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "远程会诊",
                description: "我们为您安排与国际顶级专家进行远程视频咨询。这种便捷的方式让您无需出国，即可获得世界级专家的建议，特别适合需要快速诊断或持续随访的患者。",
                icon: Video,
                details: ["高质量视频咨询", "专业医疗翻译", "安全的医疗信息传输", "灵活预约，全程协调"]
              },
              {
                title: "出国就医",
                description: "如果您需要在海外接受治疗，我们的专业团队将协助您完成从签证申请到医院预约的全过程。我们多家国际知名医疗机构直接合作，确保您能快速获得最佳治疗方案。",
                icon: Plane,
                details: ["快速医疗签证办理", "国际医疗机构直接预约", "全程医疗翻陪同", "跨境医疗保险协调"]
              },
              {
                title: "药品采购",
                description: "我们帮助患者在全球范围内搜寻和获取最新、最有效的药品。无论是尚未在国上的创新药物，还是临床试验中的实验性药品，我们都能为您提供专业的搜寻和采购服务。",
                icon: Globe,
                details: ["全球药数据库检索", "新药临床试验信息", "药品进口手续办理", "个性化用药建议"]
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
        </div>
      </div>
    </div>
  )
}