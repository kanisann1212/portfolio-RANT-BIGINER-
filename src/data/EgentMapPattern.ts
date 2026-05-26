const baseMapUrl = "https://media.valorant-api.com/maps"

const maps = {
  Ascent:   { uuid: "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319", displayName: "Ascent",   splash: `${baseMapUrl}/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png` },
  Split:    { uuid: "d960549e-485c-e861-8d71-aa9d1aed12a2", displayName: "Split",    splash: `${baseMapUrl}/d960549e-485c-e861-8d71-aa9d1aed12a2/splash.png` },
  Fracture: { uuid: "b529448b-4d60-346e-e89e-00a4c527a405", displayName: "Fracture", splash: `${baseMapUrl}/b529448b-4d60-346e-e89e-00a4c527a405/splash.png` },
  Bind:     { uuid: "2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba", displayName: "Bind",     splash: `${baseMapUrl}/2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba/splash.png` },
  Breeze:   { uuid: "2fb9a4fd-47b8-4e7d-a969-74b4046ebd53", displayName: "Breeze",   splash: `${baseMapUrl}/2fb9a4fd-47b8-4e7d-a969-74b4046ebd53/splash.png` },
  Abyss:    { uuid: "224b0a95-48b9-f703-1bd8-67aca101a61f", displayName: "Abyss",    splash: `${baseMapUrl}/224b0a95-48b9-f703-1bd8-67aca101a61f/splash.png` },
  Lotus:    { uuid: "2fe4ed3a-450a-948b-6d6b-e89a78e680a9", displayName: "Lotus",    splash: `${baseMapUrl}/2fe4ed3a-450a-948b-6d6b-e89a78e680a9/splash.png` },
  Sunset:   { uuid: "92584fbe-486a-b1b2-9faa-39b0f486b498", displayName: "Sunset",   splash: `${baseMapUrl}/92584fbe-486a-b1b2-9faa-39b0f486b498/splash.png` },
  Pearl:    { uuid: "fd267378-4d1d-484f-ff52-77821ed10dc2", displayName: "Pearl",     splash: `${baseMapUrl}/fd267378-4d1d-484f-ff52-77821ed10dc2/splash.png` },
  Icebox:   { uuid: "e2ad5c54-4114-a870-9641-8ea21279579a", displayName: "Icebox",   splash: `${baseMapUrl}/e2ad5c54-4114-a870-9641-8ea21279579a/splash.png` },
  Corrode:  { uuid: "1c18ab1f-420d-0d8b-71d0-77ad3c439115", displayName: "Corrode",  splash: `${baseMapUrl}/1c18ab1f-420d-0d8b-71d0-77ad3c439115/splash.png` },
  Haven:    { uuid: "2bee0dc9-4ffe-519b-1cbd-7fbe763a6047", displayName: "Haven",    splash: `${baseMapUrl}/2bee0dc9-4ffe-519b-1cbd-7fbe763a6047/splash.png` },
}

type MapAgent ={ [key: string]: { maps: typeof maps[keyof typeof maps][] } }

export const AgentMapPattern: MapAgent = {
  ジェット:       { maps: [maps.Ascent, maps.Haven, maps.Lotus, maps.Breeze] },
  ソーヴァ:       { maps: [maps.Ascent, maps.Breeze, maps.Icebox, maps.Haven] },
  "KAY/O":        { maps: [maps.Abyss, maps.Ascent] },
  キルジョイ:     { maps: [maps.Ascent, maps.Pearl, maps.Icebox, maps.Lotus] },
  サイファー:     { maps: [maps.Sunset, maps.Abyss, maps.Bind, maps.Split] },
  オーメン:       { maps: [maps.Ascent, maps.Sunset, maps.Abyss, maps.Haven] },
  レイズ:         { maps: [maps.Sunset, maps.Bind, maps.Lotus, maps.Fracture] },
  スカイ:         { maps: [maps.Split, maps.Bind] },
  フェイド:       { maps: [maps.Fracture, maps.Split, maps.Bind, maps.Corrode, maps.Lotus] },
  ヴァイス:       { maps: [maps.Pearl, maps.Ascent, maps.Lotus, maps.Corrode] },
  ネオン:         { maps: [maps.Corrode, maps.Pearl, maps.Fracture] },
  ブリーチ:       { maps: [maps.Fracture, maps.Lotus, maps.Sunset] },
  ゲッコー:       { maps: [maps.Sunset, maps.Lotus, maps.Abyss, maps.Pearl] },
  セージ:         { maps: [maps.Sunset, maps.Icebox, maps.Split] },
  ヴァイパー:     { maps: [maps.Corrode, maps.Icebox, maps.Lotus, maps.Haven, maps.Breeze, maps.Bind, maps.Split] },
  チェンバー:     { maps: [maps.Icebox, maps.Haven, maps.Breeze, maps.Abyss, maps.Lotus, maps.Fracture] },
  ブリムストーン: { maps: [maps.Bind, maps.Fracture] },
  アストラ:       { maps: [maps.Corrode, maps.Pearl, maps.Breeze, maps.Fracture] },
  ハーバー:       { maps: [maps.Breeze, maps.Icebox] },
  フェニックス:   { maps: [maps.Bind, maps.Ascent, maps.Haven, maps.Pearl] },
  ヨル:           { maps: [maps.Corrode, maps.Icebox, maps.Abyss, maps.Haven, maps.Breeze] },
  ウェイレイ:     { maps: [maps.Abyss, maps.Corrode] },
  アイソ:         { maps: [maps.Icebox, maps.Haven] },
  クローヴ:       { maps: [maps.Sunset, maps.Haven, maps.Bind, maps.Ascent] },
  ミクス:         { maps: [maps.Fracture, maps.Lotus] },
  テホ:           { maps: [maps.Fracture, maps.Split] },
  レイナ:         { maps: [maps.Ascent, maps.Sunset] },
  デッドロック: { maps: [maps.Abyss, maps.Sunset, maps.Corrode] },
}