import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function 醫療服務比較() {
  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>醫療服務比較</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="text-sm font-medium">傳統流程（最多40天）</div>
            <div className="bg-muted overflow-hidden rounded-full h-8 flex w-full">
              <div className="bg-blue-300 h-full w-[12.5%]" title="初步研究與諮詢: 5天" />
              <div className="bg-blue-400 h-full w-[7.5%]" title="記錄準備: 3天" />
              <div className="bg-blue-500 h-full w-[17.5%]" title="翻譯: 7天" />
              <div className="bg-blue-600 h-full w-[7.5%]" title="聯繫醫院/專家: 3天" />
              <div className="bg-blue-700 h-full w-[12.5%]" title="預約安排: 5天" />
              <div className="bg-blue-800 h-full w-[35%]" title="簽證申請: 14天" />
              <div className="bg-blue-900 h-full w-[7.5%]" title="旅行安排: 3天" />
            </div>
            <div className="text-sm text-muted-foreground flex justify-between">
              <span>0天</span>
              <span>40天</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">我們的加急服務（最多7天*）</div>
            <div className="bg-muted overflow-hidden rounded-full h-8 flex w-[17.5%]">
              <div className="bg-green-400 h-full w-[28.57%]" title="初步諮詢、專家配對和記錄準備: 2天" />
              <div className="bg-green-600 h-full w-[71.43%]" title="專家審查和諮詢: 5天" />
            </div>
            <div className="text-sm text-muted-foreground flex justify-between" style={{width: '17.5%'}}>
              <span>0天</span>
              <span>7天*</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-medium mb-2">傳統流程</h3>
            <ul className="space-y-1">
              {[
                "初步研究與諮詢：5天",
                "記錄準備：3天",
                "翻譯：7天",
                "聯繫醫院/專家：3天",
                "預約安排：5天",
                "簽證申請：14天",
                "旅行安排：3天"
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">我們的加急服務</h3>
            <ul className="space-y-1">
              <li>初步諮詢、專家配對和記錄準備：2天</li>
              <li>專家審查和諮詢：5天</li>
            </ul>
            <p className="mt-2 text-xs text-muted-foreground">* 額外服務如簽證申請和旅行安排將根據需要提供，可能延長時間。</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}