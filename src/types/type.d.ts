

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

type RoleInfo = {
  uuid: string
  displayName: string
  description: string
  displayIcon: string
  assetPath: string
}

type AbilityInfo = {
  slot: string
  displayName: string
  description: string
  displayIcon: string | null
}

export type AgentTypeInfo = {
  uuid: string
  displayName: string
  description: string
  developerName: string
  background: string
  backgroundGradientColors: string[]
  displayIcon: string
  displayIconSmall: string
  bustPortrait: string
  fullPortrait: string
  fullPortraitV2: string
  killfeedPortrait: string
  minimapPortrait: string
  characterTags: string[] | null
  role: Role        // ← ネストしたオブジェクト
  abilities: Ability[]  // ← オブジェクトの配列
  isPlayableCharacter: boolean
  isBaseContent: boolean
  isAvailableForTest: boolean
  isFullPortraitRightFacing: boolean
  releaseDate: string
  recruitmentData: null
  voiceLine: null
  homeScreenPromoTileImage: null
  assetPath: string
}