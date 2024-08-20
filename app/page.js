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
      {/* Navigation bars remain unchanged */}

      {/* Hero Section - Blue background with image overlay */}
      <div className="relative bg-[#4169E1] py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 text-white">
              <h1 className="text-5xl font-bold mb-6 leading-tight">链接全球顶级癌症诊疗资源</h1>
              <p className="text-xl mb-8">

                和睦家国际医疗提供一站式解决方案<br/>助你寻求全球肿瘤治疗最佳方案以及资源<br/>
              </p>
              <ul className="mb-10 space-y-4">
                {[
                  "链接全球顶级肿瘤诊疗资源",
                  "权威第二意见",
                  "国内医院网络配套",
                  "出国就医安排"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="bg-white rounded-full p-1 mr-3">
                      <CheckCircle className="w-5 h-5 text-[#4169E1]" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-white text-[#4169E1] px-8 py-4 rounded-full font-semibold text-lg flex items-center hover:bg-opacity-90 transition duration-300 shadow-lg">
                咨询我们的医疗顾问
                <ArrowRight className="ml-2 w-6 h-6" />
              </button>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <img 
                src="/images/doctor-team.png" 
                alt="Medical Team" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#4169E1] to-transparent"></div>
      </div>

      {/* Global Expert Team Section - White background */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-[#4169E1] text-center">全球肿瘤专家网络</h2>
          <PartnerInstitutionsBanner />
          <p className="text-xl mb-8 max-w-3xl mx-auto text-left">
          我们与全球顶尖医疗机构紧密合作，汇集来自香港、美国、新加坡和泰国等地的肿瘤专家精英。依托这一广泛的国际专家网络，我们为患者在各个肿瘤专科，如肺癌、乳腺癌、消化道肿瘤和血液病等，提供最尖端的医疗见解和创新治疗选项，确保您得到无与伦比的专业指导和个性化治疗方案。          </p>
        </div>
      </div>

      {/* Rapid Access Section - White background with blue accents */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-[#4169E1]">迅速获得全球医疗服务</h2>
              <p className="text-lg mb-6 text-gray-700">
                我们深知时间对癌症患者至关重要。和睦家的全球专家网络和专业服务团队能够迅速为您建立连接，让您以最快的速度获得所需的医疗护理或权威的第二诊疗意见。我们的目标是在关键时刻为您争取每一分每一秒，确保您能及时获得最佳的治疗方案。
              </p>
              <p className="text-lg mb-6 text-gray-700">我们承诺为您提供快速、高效的医疗服务：</p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="bg-[#4169E1] rounded-full p-2 mr-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium">最快3个工作日内匹配合适专家</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-[#4169E1] rounded-full p-2 mr-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium">14天内进行首次咨询或开始治疗</span>
                </li>
              </ul>
              <button className="mt-8 bg-[#4169E1] text-white px-6 py-3 rounded-full font-semibold flex items-center hover:bg-opacity-90 transition duration-300">
                了解更多
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="/images/foreign_doctor.jpeg" 
                  alt="Medical Service" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-[#4169E1] text-white py-4 px-6 rounded-lg shadow-md">
                  <p className="font-semibold text-lg">全球医疗网络</p>
                  <p>连接100+顶级医院和专家</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Continuous Care and Comprehensive Local Support Section - White background */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-[#4169E1] text-center">全程诊疗支持配套</h2>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2">
              <p className="text-lg mb-6 text-gray-700">
                依托和睦家遍布中国的20多家诊所和医院网络，我们提供从出国前准备到回国后的跟进服务的全程支持，确保您在整个医疗旅程中得到全面的本地化服务。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#4169E1] mb-3">出国就医前</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>全面体检项目</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>影像学检查</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>实验室检测</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>医疗记录翻译</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#4169E1] mb-3">出国就医后</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>结果解读</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>后续治疗安排</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>康复指导</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>定期随访</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-lg mb-6 text-gray-700">
                我们的本地医生与患者和国际专家无缝协调，确保在整个治疗过程中提供持续支持和清晰沟通。
              </p>
              <button className="mt-4 bg-[#4169E1] text-white px-6 py-3 rounded-full font-semibold flex items-center hover:bg-opacity-90 transition duration-300">
                了解更多关于我们的服务
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="/images/ufh-logo.png" 
                  alt="和睦家医院地图" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#4169E1] text-white py-4 px-6 rounded-lg shadow-md">
                  <p className="font-semibold text-lg">遍布中国的医疗网络</p>
                  <p>20+诊所和医院，提供便捷本地服务</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services Section - Gray background */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#4169E1] mb-12 text-center">我们的服务</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "远程会诊",
                description: "我们为您安排与国际顶级专家进行远程视频咨询。这种便捷的方式让您无需出国，即可获得世界级专家的建议，特别适合需要快速诊断或持续随访的患者。",
                icon: Video,
                details: [
                  "高质量视频咨询",
                  "专业医疗翻译",
                  "安全的医疗信息传输",
                  "灵活预约，全程协调"
                ]
              },
              {
                title: "出国就医",
                description: "如果您需要在海外接受治疗，我们的专业团队将协助您完成从签证申请到医院预约的全过程。我们多家国际知名医疗机构直接合作，确保您能快速获得最佳治疗方案。",
                icon: Plane,
                details: [
                  "快速医疗签证办理",
                  "国际医疗机构直接预约",
                  "全程医疗翻译陪同",
                  "跨境医疗保险协调"
                ]
              },
              {
                title: "药品采购",
                description: "我们帮助患者在全球范围内搜寻和获取最新、最有效的药品。无论是尚未在国内上市的创新药物，还是临床试验中的实验性药品，我们都能为您提供专业的搜寻和采购服务。",
                icon: Globe,
                details: [
                  "全球药数据库检索",
                  "新药临床试验信息",
                  "药品进口手续办理",
                  "个性化用药建议"
                ]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <service.icon className="w-10 h-10 text-[#4169E1] mr-3" />
                  <h3 className="text-2xl font-semibold text-[#4169E1]">{service.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 bg-[#4169E1] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition duration-300">
                  了解更多
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PatientJourney component - White background */}
      <div className="bg-white">
        <PatientJourney />
      </div>

      {/* Medical Concierge Service Section - Gray background */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#4169E1] mb-8 text-center">尊贵礼宾服务</h2>
          
          {/* Placeholder image */}
          <div className="mb-12">
            <img 
              src="/images/medical_concierge.jpeg" 
              alt="Concierge Services" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: MapPin, title: "专属旅行规划", desc: "为您和陪同家属定制舒适的行程安排" },
              { icon: Home, title: "豪华住宿预订", desc: "甄选临近医疗机构的高端酒店或公寓" },
              { icon: Car, title: "VIP机场接送", desc: "私人司机全程接送，尊享无缝衔接的旅程" },
              { icon: MessageSquare, title: "专业翻译陪同", desc: "医疗专业翻译全程陪同，确保沟通无障碍" },
              { icon: Coffee, title: "个性化餐饮安排", desc: "根据您的饮食需求和喜好，提供定制餐饮服" },
              { icon: PhoneCall, title: "24/7紧急支援", desc: "全天候待命，随时解决您的任何题或需求" }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-start">
                  <service.icon className="flex-shrink-0 w-8 h-8 text-[#4169E1] mr-4" />
                  <div>
                    <h3 className="font-semibold text-[#4169E1] text-lg mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}