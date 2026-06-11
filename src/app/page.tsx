import { Intro } from "@/components/animation/Intro";
import { Top } from "@/components/TOP PAGE/Top";
import { IconHeader } from "@/lib/getIconHeader";
import { RankHeader } from "@/lib/RANK";

export default async function Home() {
  const Icon = await IconHeader()
  const Tier = await RankHeader()
  const VTier = Tier?.smallIcon
  return (
    <Intro>
    <Top Icon={Icon} VTier= {VTier}/>
    </Intro>
  );
}
