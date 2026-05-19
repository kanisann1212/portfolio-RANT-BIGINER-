import { User } from "lucide-react"
import { Video } from "@/components/Video";
import { Top } from "@/components/Top";
export default function Home() {
  return (
    <>
      <Video />
      <div className="absolute top-10 right-10" >
        <User className="w-7 h-7 text-white" />
      </div>
      <Top />
    </>
  );
}
