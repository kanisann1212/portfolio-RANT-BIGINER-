

export type midashiProps = {
  midashi: string,
  src: string,
  page: string
}

export type AProps = {
  A: Agent[]
}

export type MapType = {
  uuid: string,
  callouts: MapInfo[]
  displayName: string,
  displayIcon: string,
  mapUrl: string,
  premierBackgroundImage: string,
  stylizedBackgroundImage: string,
  splash: string
  tacticalDescription: string,
  xMultiplier: number,
  xScalarToAdd: number,
  yMultiplier: number,
  yScalarToAdd: number
}

type Location = {
  x: number,
  y: number,
}

type MapInfo = {
  location: Location,
  regionName: string,
  superRegion: string,
  superRegionName: string
}


export type WeponType = {
  uuid: string,
  displayIcon: string,
  displayName: string,
  killStreamIcon: string,
  weaponStats: WeaponStatus
  skins: skin[]
  shopData: Shop
  defaultSkinUuid:string,
}

type Range = {
  bodyDamage: number,
  headDamage: number,
  legDamage: number,
  rangeEndMeters: number,
  rangeStartMeters: number
}

type Shop = {
  categoryText: string,
  cost: number,
  newImage: string
}

export type Skined = {
  uuid: string,
  displayName: string,
  displayIcon: string,
  chromas: SkinLevels[]
}

export type SkinLevels = {
  uuid: string,
  displayIcon: string,
  streamedVideo: string,
  swatch: string,
}

type WeaponStatus = {
  fireRate: number,
  firstBulletAccuracy: number,
  magazineSize: number,
  reloadTimeSeconds: number,
  damageRanges: Range[]
}

export type Agent = {
  uuid: string,
  displayName: string,
  description: string,
  developerName: string,
  minimapPortrait: string,
  killfeedPortrait: string,
  displayIconSmall: string,
  displayIcon: string,
  bustPortrait: string,
  role:role
  background: string,
  abilities:skils[]
}

export type role = {
  description: string,
  displayName: string,
  displayIcon: string,
}

export type skils = {
  slot:string,
  displayName:string,
  description:string,
  displayIcon:string,
}