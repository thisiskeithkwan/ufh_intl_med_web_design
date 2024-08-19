import { ArrowDownIcon, VideoIcon, ClipboardListIcon, CalendarIcon, FileTextIcon, PlaneIcon, BuildingHospitalIcon, HeartPulseIcon, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const ProcessStep = ({ step, index, isLast }) => (
  <div className="flex flex-col items-center mb-8 last:mb-0 relative">
    <motion.div
      className="w-16 h-16 rounded-full bg-[#003A8C] flex items-center justify-center z-10"
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
      <h3 className="font-semibold text-[#003A8C] text-lg mb-1">{step.title}</h3>
      <p className="text-gray-600 text-sm">{step.description}</p>
    </motion.div>
    {!isLast && (
      <motion.div 
        className="my-4"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
      >
        <ArrowDownIcon className="w-6 h-6 text-[#003A8C]" />
      </motion.div>
    )}
  </div>
)

const ProcessCard = ({ title, steps }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="bg-[#003A8C] p-6">
      <h2 className="text-2xl font-bold text-white text-center">{title}</h2>
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
    { title: "服务咨询", description: "一对一免费在线咨询，专家匹配", icon: VideoIcon },
    { title: "医疗记录", description: "收集、整理和审查医疗记录", icon: ClipboardListIcon },
    { title: "预约安排", description: "发送信息，匹配海外医生", icon: CalendarIcon },
    { title: "视频咨询", description: "在线咨询，提供翻译和解释服务", icon: FileTextIcon },
  ]

  const overseasTreatmentSteps = [
    { title: "咨询", description: "提交病历，签署协议", icon: FileTextIcon },
    { title: "医疗记录", description: "整理和翻��医疗记录", icon: ClipboardListIcon },
    { title: "医生预约", description: "推荐并确认海外医院/专科医生", icon: CalendarIcon },
    { title: "签证处理", description: "协助医疗签证申请和面试", icon: FileTextIcon },
    { title: "旅行安排", description: "预订旅行、住宿，安排翻译", icon: PlaneIcon },
    { title: "海外治疗", description: "本地支持，医疗治疗", icon: BuildingHospitalIcon },
    { title: "后续跟进", description: "返回协助，持续医疗支持", icon: HeartPulseIcon },
  ]

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-[#003A8C] mb-8 text-center">国际医疗服务患者旅程</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          体验我们全面的远程咨询和海外医疗治疗服务，获得世界级的医疗保健。
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ProcessCard title="远程咨询流程" steps={remoteConsultationSteps} />
          <ProcessCard title="海外医疗治疗流程" steps={overseasTreatmentSteps} />
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-white bg-[#003A8C] hover:bg-[#002a66] transition duration-300"
          >
            开始您的旅程
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  )
}