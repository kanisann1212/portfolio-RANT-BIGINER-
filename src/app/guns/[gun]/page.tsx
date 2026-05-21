import { Header } from "@/components/TOP PAGE/Header";

type GunPromise = {
  params:Promise<{gun:string}>
}

export default async function Gun( {params}:GunPromise){
  const {gun} = await params

  return(
    <>
      <Header />
    </>
  )

}