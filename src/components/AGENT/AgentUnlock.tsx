import type { AgentdataProps } from "@/types/type"
import { SEN } from "./SEN"
import { DUE } from "./DUE"
import { INI } from "./INI"
import { CONT } from "./CONT"

export const AgentUnlock = ({Sentinel,duelist,Initiater,controller} :AgentdataProps) =>{
  return (
      <div className="w-full px-4 md:px-0">    
        <SEN A={Sentinel} />

        <h1 className="text-black text-5xl md:text-9xl my-6 md:m-10 text-center"></h1>
        
        <DUE A={duelist} />
        <h1 className="text-black text-5xl md:text-9xl my-6 md:m-10 text-center"></h1>
        
        <INI A={Initiater} />
        <h1 className="text-black text-5xl md:text-9xl my-6 md:m-10 text-center"></h1>
        
        <CONT A={controller} />
      </div>
  )
}