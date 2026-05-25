type GaugeProps = {
  label:string,
  value:number,
  max:number
  reverse?:boolean,
}

export const Gauge = ({label,value,max,reverse = false }:GaugeProps) => {
  const percent = reverse
  ? Math.min(100 - (value/max) * 100, 100)
  : Math.min((value/max)* 100, 100)
  return(
    <div className="mb-2 border-r-4 p-10 w-full">
      <div className="flex flex-col text-2xl mb-1">
        <span className="text-center mb-5 break-words min-w-0">{label}</span>
        <span>{value}</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-red-500 h-2 rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}