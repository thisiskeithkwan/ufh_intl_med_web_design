"use client";

import { useState, useEffect, useRef } from 'react'
import { ChevronRight, ChevronLeft, Search, User, MapPin, Phone, Globe, Clock, CheckCircle, ArrowRight, Stethoscope, Users, Microscope, FlaskConical, FileText, UserCheck, Calendar, MessageCircle, Home, Car, MessageSquare, Coffee, Compass, PhoneCall, Video, Plane } from 'lucide-react'
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import GlobalExpertMap from './components/GlobalExpertMap';
import MedicalServiceComparison from './components/MedicalServiceComparison';
import PatientJourney from './components/PatientJourney';
import PartnerInstitutionsCarousel from './components/PartnerInstitutionsCarousel';

export default function Component() {
  return (
    <div className="font-sans">
      {/* Navigation bars remain unchanged */}

      {/* Hero Section - Blue background */}
      <div className="relative bg-[#003A8C] py-20">
        <div className="container mx-auto px-4 text-white">
          <h1 className="text-4xl font-bold mb-4">和睦家医疗：癌症诊疗全球链接，一站式解决方案，为您的康复之旅定制速效良方</h1>
          <p className="text-xl mb-6">
            我们致力于迅速汇聚全球顶级肿瘤专家智慧，为您提供权威的二次诊断，并无缝对接国外最先进的治疗方案。在和睦家，我们提供全程、个化的关怀服务，确保您在抗癌斗争中迅速找到最适合的治疗路径。
          </p>
          <p className="mb-8 max-w-2xl">
            立即行动，让我们助您开高效全球癌症诊疗之旅。
          </p>
          <button className="bg-white text-[#003A8C] px-6 py-3 rounded-full font-semibold flex items-center hover:bg-gray-100 transition duration-300">
            咨询我们的医疗顾问
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>


      {/* Global Expert Team Section - White background */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-[#003A8C]">全球肿瘤专家网络</h2>
          <p className="text-xl mb-8 max-w-3xl">
          我们与全球顶尖医疗机构紧密合作，汇集来自香港、美国、新加坡和泰国等地的肿瘤专家精英。依托这一广泛的国际专家网络，我们为患者在各个肿瘤专科，如肺癌、乳腺癌、消化道肿瘤和血液病等，提供最尖端���医疗见解和创新治疗选项，确保您得到无与伦比的专业指导和个性化治疗方案。          </p>
          <GlobalExpertMap />
        </div>
      </div>

      {/* Rapid Access Section - Gray background */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-[#003A8C]">迅速获得世界医疗服务</h2>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2">
              <p className="text-lg mb-4">我们承诺为您提供快速、高效的医疗服务：</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Clock className="w-5 h-5 text-[#003A8C] mr-2" />
                  <span>3个工作日内匹配合适专家</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#003A8C] mr-2" />
                  <span>14天内进行首次咨询或开始治疗</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <MedicalServiceComparison />
            </div>
          </div>
          <div className="mt-8">
            <button className="bg-[#003A8C] text-white px-6 py-3 rounded-full font-semibold flex items-center hover:bg-[#002a66] transition duration-300">
              了解更多
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>


      {/* Continuous Care and Comprehensive Local Support Section - White background */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-[#003A8C] text-center">持续性护理与全面本地支持</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <p className="text-lg mb-4">
                我们的本地医生与患者和国际专家无缝调，确保在整个治疗过程中提供持续支持和清晰沟通。
              </p>
              <p className="text-lg mb-4">
                依托和睦家遍布中国的医疗网络，我们提供从出国前体检项目、陪诊到回国后的跟进服务的全程支持，确保您在整个医疗旅程中得到全面的本地化服务。
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://old.ufh.com.cn/wp-content/uploads/2014/05/UFH-main-hospital.png" 
                alt="持续性护理与全面本地支持" 
                className="rounded-lg shadow-lg max-w-sm"
              />
            </div>
          </div>
          <div className="mt-8 text-center">
            <button className="bg-[#003A8C] text-white px-6 py-3 rounded-full font-semibold flex items-center mx-auto hover:bg-[#002a66] transition duration-300">
              了解更多关于我们的服务
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Our Services Section - Gray background */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#003A8C] mb-12 text-center">我们的服务</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "专家第二意见",
                description: "快速连接全球顶级肿瘤专家，最快三天内获得书面报告或远程咨询。我们专注于管理最具挑战性的病例，包括罕见和难以治疗的癌症，如胰腺癌、胶质母细胞瘤、肉瘤和转移性癌症。",
                icon: Stethoscope,
                details: [
                  "与全球50+顶级癌症中心合作",
                  "覆盖20+癌症专科",
                  "48小时内专家匹配",
                  "7天内出具详细诊疗建议"
                ]
              },
              {
                title: "个性化治疗方案",
                description: "我们的多学科团队为每位患者设计定制的治疗方案，同时考虑临床效果和成本效益。我们提供全球治疗方案的成本分析，协助您在确保治疗效果的同时，做出经济高效的决策。",
                icon: Users,
                details: [
                  "多学科团队会诊",
                  "基于基因检测的精准治疗方案",
                  "全球治疗方案对比",
                  "治疗成本效益分析"
                ]
              },
              {
                title: "先进的诊断和治疗",
                description: "我们使用尖端诊断工具，如PET-CT、MRI和先进的基因测试，确保精确诊断。我们的治疗包括创新疗法，如质子治疗和CAR-T细胞治疗，基于最新医学研究和临床试验。",
                icon: Microscope,
                details: [
                  "全基因组测序",
                  "液体活检",
                  "AI辅助影像诊断",
                  "免疫治疗和靶向治疗"
                ]
              },
              {
                title: "临床试验机会",
                description: "对于罕见和复杂疾病的患者，我们提供参与突破性临床试验的机会，让您接触到最新的医学进展。我们的团队将协助您评估适合的临床试验，并全程指导申请过程。",
                icon: FlaskConical,
                details: [
                  "全球临床试验数据库筛选",
                  "临床试验申请协助",
                  "全程医疗翻译支持",
                  "试验期间的密切监测和随访"
                ]
              },
              {
                title: "远程医疗咨询",
                description: "通过我们先进的远程医疗平台，您可以随时与国际专家进行视频咨询。这种便捷的方式让您无需出国，即可获得世界级专家的建议，特别适合需要持续随访的患者。",
                icon: Video,
                details: [
                  "高清视频会诊系统",
                  "多语言实时翻译",
                  "电子病历共享",
                  "灵活预约，全天候服务"
                ]
              },
              {
                title: "全球医疗转诊",
                description: "如果您需要在海外接受治疗，我们的专业团队将协助您完成从签证申请到医院预约的全过程。我们与多家国际知名医疗机构有直接合作，确保您能快速获得最佳治疗。",
                icon: Plane,
                details: [
                  "快速医疗签证办理",
                  "国际医疗机构直接预约",
                  "全程医疗翻译陪同",
                  "跨境医疗保险协调"
                ]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <service.icon className="w-10 h-10 text-[#003A8C] mr-3" />
                  <h3 className="text-2xl font-semibold text-[#003A8C]">{service.title}</h3>
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
                <button className="mt-6 bg-[#003A8C] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#002a66] transition duration-300">
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

      {/* Partner Institutions Section - Gray background */}
      <div className="bg-gray-100">
        <PartnerInstitutionsCarousel />
      </div>

      {/* Medical Concierge Service Section - White background */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#003A8C] mb-8">尊贵礼宾服务</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MapPin, title: "专属旅行规划", desc: "为您和陪同家属定制舒适的行程安排" },
              { icon: Home, title: "豪华住宿预订", desc: "甄选临近医疗机构的高端酒店或公寓" },
              { icon: Car, title: "VIP机场接送", desc: "私人司机全程接送，尊享无缝衔接的旅程" },
              { icon: MessageSquare, title: "专业翻译陪同", desc: "医疗专业翻译全程陪同，确保沟通无障碍" },
              { icon: Coffee, title: "个性化餐饮安", desc: "根据您的饮食需求和喜好，提供定制餐饮服务" },
              { icon: Compass, title: "文化体验与休闲活动", desc: "在治疗间隙，享受当地独特的文化体验" },
              { icon: PhoneCall, title: "24/7紧急支援", desc: "全天候待命，随时解决您的任何问题或需求" }
            ].map((service, index) => (
              <div key={index} className="flex items-start">
                <service.icon className="flex-shrink-0 w-6 h-6 text-[#003A8C] mr-3" />
                <div>
                  <h3 className="font-semibold text-[#003A8C]">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Commitment Section - Gray background */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#003A8C] mb-6">我们的承诺</h2>
          <div className="max-w-3xl">
            <p className="mb-4">
              和睦家国际医疗服务致力为您提供癌症治疗决策的全球视角，结合本地关怀。我们深知时间的宝贵，承诺在最短的时间内为您提供最��威和性化的第二见，帮助您战胜疾病，重获健康。
            </p>
            <p className="mb-6">
              我们提供全程服务，从国际专家咨询到后续治疗、定期体和药品配备，确保治疗方案的连贯性和效。
            </p>
            <button className="bg-[#003A8C] text-white px-6 py-3 rounded-full font-semibold flex items-center hover:bg-[#002a66] transition duration-300">
              咨询我们的医顾问
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer remains unchanged */}
    </div>
  )
}