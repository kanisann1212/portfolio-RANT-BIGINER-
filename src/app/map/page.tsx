import { MapList } from "@/components/MAP/Maplist"
import { Header } from "@/components/TOP PAGE/Header"
import { MIBAE } from "@/components/TOP PAGE/MIBAE"

export default async function Mapp1() {
  return (
    <>
      <Header  />
      <MIBAE syubun="ヴァロラントは頭脳戦です。" hukubun="頭を使い地の利を生かしましょう" kime="ーGame onー" gazou="https://totnfaipgpkmgjvlcqee.supabase.co/storage/v1/object/public/RANTBIGINNER.IMAGE/MAPT.jpg"/>
      <MapList />
    </>
  )
}




