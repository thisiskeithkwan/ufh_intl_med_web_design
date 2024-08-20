import { ArrowDownIcon, VideoIcon, ClipboardListIcon, CalendarIcon, FileTextIcon, PlaneIcon, Hospital, HeartPulseIcon, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const ProcessStep = ({ step, index, isLast }) => (
  <div className="flex flex-col items-center mb-6 last:mb-0 relative">
    <motion.div
      className="w-16 h-16 bg-[#0669f2] flex items-center justify-center z-10"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
    >
      {step.icon && <step.icon className="w-8 h-8 text-white" />}
    </motion.div>
    <motion.div 
      className="mt-4 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.1 }}
    >
      <h3 className="font-semibold text-[#0669f2] text-lg mb-1" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>{step.title}</h3>
      <p className="text-gray-600 text-sm" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>{step.description}</p>
    </motion.div>
    {!isLast && (
      <motion.div 
        className="my-4"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
      >
        <ArrowDownIcon className="w-6 h-6 text-[#0669f2]" />
      </motion.div>
    )}
  </div>
)

const ProcessCard = ({ title, steps }) => (
  <div className="bg-white shadow-md overflow-hidden">
    <div className="bg-[#0669f2] p-6">
      <h2 className="text-2xl font-bold text-white text-center" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>{title}</h2>
    </div>
    <div className="p-6">
      {steps.map((step, index) => (
        <ProcessStep key={index} step={step} index={index} isLast={index === steps.length - 1} />
      ))}
    </div>
  </div>
)

export default function PatientJourney() {
  const remoteConsultationSteps = [
    { title: "初步咨询", description: "与我们的医疗顾问进行免费在线咨询", icon: VideoIcon },
    { title: "医疗记录审核", description: "协助收集和审查您的医疗记录", icon: ClipboardListIcon },
    { title: "专家匹配", description: "为您匹配合适的国际专家", icon: CalendarIcon },
    { title: "远程会诊安排", description: "协调安排在线视频咨询，提供翻译服务", icon: FileTextIcon },
  ]

  const overseasTreatmentSteps = [
    { title: "需求评估", description: "详细了解您的医疗需求，提供初步建议", icon: FileTextIcon },
    { title: "医疗档案准备", description: "协助整理和翻译您的医疗记录", icon: ClipboardListIcon },
    { title: "医院和医生推荐", description: "推荐适合的海外医院和专科医生", icon: Hospital },
    { title: "行程规划", description: "协助安排签证、旅行和住宿", icon: PlaneIcon },
    { title: "治疗协调", description: "全程协调您的海外治疗流程", icon: HeartPulseIcon },
    { title: "后续跟进", description: "提供返回后的持续医疗支持", icon: CalendarIcon },
  ]

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-[#0669f2] mb-8 text-center" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>国际医疗服务流程</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto" style={{ fontFamily: 'M XiangHe Hei SC, sans-serif' }}>
          我们致力于为您提供高质量的远程咨询和海外医疗治疗服务，帮助您连接世界级的医疗资源。
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ProcessCard title="远程咨询服务" steps={remoteConsultationSteps} />
          <ProcessCard title="海外就医服务" steps={overseasTreatmentSteps} />
        </div>

        <div className="text-center space-y-4">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold text-white bg-[#0669f2] hover:bg-opacity-90 transition duration-300"
            style={{ fontFamily: 'Moderat, sans-serif' }}
          >
            咨询详情
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  )
}