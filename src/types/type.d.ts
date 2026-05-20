
export type midashiProps = {
  midashi: string,
  src:string,
  honbun:string
  page:string
}

export type MapType = {
  uuid: string,
  callouts:MapInfo[]
  displayName: string,
  displayIcon: string,
  mapUrl: string,
  premierBackgroundImage: string,
  stylizedBackgroundImage: string,
  splash: string
  tacticalDescription:string,
  xMultiplier:number,
  xScalarToAdd:number,
  xMultiplier:number,
  yScalarToAdd:number
}

type Location = {
  x:number,
  y:number,
}

type MapInfo = {
  location:Location,
  reginName:string,
  superRegion:string,
  superRegionName:string
}