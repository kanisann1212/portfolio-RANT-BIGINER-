import type { MapName } from "@/types/type"

const baseUrl = "https://media.valorant-api.com/agents"
const roleUrl = "https://media.valorant-api.com/agents/roles"

type MapsNameType = {
  [key:string]:MapName
}

const MapsPattern : MapsNameType = {
  Ascent: {
    agents: [
      { name: "ジェット", fullPortrait: `${baseUrl}/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png`, roleIcon: `${roleUrl}/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png` },
      { name: "ソーヴァ", fullPortrait: `${baseUrl}/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png`, roleIcon: `${roleUrl}/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png` },
      { name: "KAY/O", fullPortrait: `${baseUrl}/601dbbe7-43ce-be57-2a40-4abd24953621/fullportrait.png`, roleIcon: `${roleUrl}/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png` },
      { name: "キルジョイ", fullPortrait: `${baseUrl}/1e58de9c-4950-5125-93e9-a0aee9f98746/fullportrait.png`, roleIcon: `${roleUrl}/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png` },
      { name: "サイファー", fullPortrait: `${baseUrl}/117ed9e3-49f3-6512-3ccf-0cada7e3823b/fullportrait.png`, roleIcon: `${roleUrl}/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png` },
      { name: "オーメン", fullPortrait: `${baseUrl}/8e253930-4c05-31dd-1b6c-968525494517/fullportrait.png`, roleIcon: `${roleUrl}/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png` },
    ]
  },
  Split: {
    agents: [
      { name: "レイズ", fullPortrait: `${baseUrl}/f94c3b30-42be-e959-889c-5aa313dba261/fullportrait.png`, roleIcon: `${roleUrl}/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png` },
      { name: "ジェット", fullPortrait: `${baseUrl}/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png`, roleIcon: `${roleUrl}/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png` },
      { name: "スカイ", fullPortrait: `${baseUrl}/6f2a04ca-43e0-be17-7f36-b3908627744d/fullportrait.png`, roleIcon: `${roleUrl}/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png` },
      { name: "フェイド", fullPortrait: `${baseUrl}/dade69b4-4f5a-8528-247b-219e5a1facd6/fullportrait.png`, roleIcon: `${roleUrl}/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png` },
      { name: "サイファー", fullPortrait: `${baseUrl}/117ed9e3-49f3-6512-3ccf-0cada7e3823b/fullportrait.png`, roleIcon: `${roleUrl}/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png` },
      { name: "ヴァイス", fullPortrait: `${baseUrl}/efba5359-4016-a1e5-7626-b1ae76895940/fullportrait.png`, roleIcon: `${roleUrl}/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png` },
      { name: "オーメン", fullPortrait: `${baseUrl}/8e253930-4c05-31dd-1b6c-968525494517/fullportrait.png`, roleIcon: `${roleUrl}/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png` },
      { name: "アストラ", fullPortrait: `${baseUrl}/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/fullportrait.png`, roleIcon: `${roleUrl}/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png` },
    ]
  },
  Haven: {
    agents: [
      { name: "ジェット", fullPortrait: `${baseUrl}/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png`, roleIcon: `${roleUrl}/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png` },
      { name: "ネオン", fullPortrait: `${baseUrl}/bb2a4828-46eb-8cd1-e765-15848195d751/fullportrait.png`, roleIcon: `${roleUrl}/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png` },
      { name: "ソーヴァ", fullPortrait: `${baseUrl}/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png`, roleIcon: `${roleUrl}/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png` },
      { name: "ブリーチ", fullPortrait: `${baseUrl}/5f8d3a7f-467b-97f3-062c-13acf203c006/fullportrait.png`, roleIcon: `${roleUrl}/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png` },
      { name: "キルジョイ", fullPortrait: `${baseUrl}/1e58de9c-4950-5125-93e9-a0aee9f98746/fullportrait.png`, roleIcon: `${roleUrl}/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png` },
      { name: "サイファー", fullPortrait: `${baseUrl}/117ed9e3-49f3-6512-3ccf-0cada7e3823b/fullportrait.png`, roleIcon: `${roleUrl}/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png` },
      { name: "オーメン", fullPortrait: `${baseUrl}/8e253930-4c05-31dd-1b6c-968525494517/fullportrait.png`, roleIcon: `${roleUrl}/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png` },
      { name: "アストラ", fullPortrait: `${baseUrl}/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/fullportrait.png`, roleIcon: `${roleUrl}/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png` },
    ]
  },
  Bind: {
    agents: [
      { name: "ジェット", fullPortrait: `${baseUrl}/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png`, roleIcon: `${roleUrl}/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png` },
      { name: "レイズ", fullPortrait: `${baseUrl}/f94c3b30-42be-e959-889c-5aa313dba261/fullportrait.png`, roleIcon: `${roleUrl}/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png` },
      { name: "スカイ", fullPortrait: `${baseUrl}/6f2a04ca-43e0-be17-7f36-b3908627744d/fullportrait.png`, roleIcon: `${roleUrl}/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png` },
      { name: "ゲッコー", fullPortrait: `${baseUrl}/e370fa57-4757-3604-3648-499e1f642d3f/fullportrait.png`, roleIcon: `${roleUrl}/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png` },
      { name: "サイファー", fullPortrait: `${baseUrl}/117ed9e3-49f3-6512-3ccf-0cada7e3823b/fullportrait.png`, roleIcon: `${roleUrl}/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png` },
      { name: "ヴァイパー", fullPortrait: `${baseUrl}/707eab51-4836-f488-046a-cda6bf494859/fullportrait.png`, roleIcon: `${roleUrl}/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png` },
      { name: "ブリムストーン", fullPortrait: `${baseUrl}/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/fullportrait.png`, roleIcon: `${roleUrl}/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png` },
    ]
  },
  Icebox: {
    agents: [
      { name: "ジェット", fullPortrait: `${baseUrl}/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png`, roleIcon: `${roleUrl}/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png` },
      { name: "ソーヴァ", fullPortrait: `${baseUrl}/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png`, roleIcon: `${roleUrl}/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png` },
      { name: "ゲッコー", fullPortrait: `${baseUrl}/e370fa57-4757-3604-3648-499e1f642d3f/fullportrait.png`, roleIcon: `${roleUrl}/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png` },
      { name: "セージ", fullPortrait: `${baseUrl}/569fdd95-4d10-43ab-ca70-79becc718b46/fullportrait.png`, roleIcon: `${roleUrl}/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png` },
      { name: "キルジョイ", fullPortrait: `${baseUrl}/1e58de9c-4950-5125-93e9-a0aee9f98746/fullportrait.png`, roleIcon: `${roleUrl}/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png` },
      { name: "ヴァイパー", fullPortrait: `${baseUrl}/707eab51-4836-f488-046a-cda6bf494859/fullportrait.png`, roleIcon: `${roleUrl}/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png` },
    ]
  },
  Breeze: {
    agents: [
      { name: "ジェット", fullPortrait: `${baseUrl}/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png`, roleIcon: `${roleUrl}/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png` },
      { name: "ソーヴァ", fullPortrait: `${baseUrl}/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png`, roleIcon: `${roleUrl}/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png` },
      { name: "KAY/O", fullPortrait: `${baseUrl}/601dbbe7-43ce-be57-2a40-4abd24953621/fullportrait.png`, roleIcon: `${roleUrl}/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png` },
      { name: "サイファー", fullPortrait: `${baseUrl}/117ed9e3-49f3-6512-3ccf-0cada7e3823b/fullportrait.png`, roleIcon: `${roleUrl}/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png` },
      { name: "チェンバー", fullPortrait: `${baseUrl}/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/fullportrait.png`, roleIcon: `${roleUrl}/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png` },
      { name: "ヴァイパー", fullPortrait: `${baseUrl}/707eab51-4836-f488-046a-cda6bf494859/fullportrait.png`, roleIcon: `${roleUrl}/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png` },
      { name: "アストラ", fullPortrait: `${baseUrl}/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/fullportrait.png`, roleIcon: `${roleUrl}/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png` },
    ]
  },
  Fracture: {
    agents: [
      { name: "ネオン", fullPortrait: `${baseUrl}/bb2a4828-46eb-8cd1-e765-15848195d751/fullportrait.png`, roleIcon: `${roleUrl}/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png` },
      { name: "レイズ", fullPortrait: `${baseUrl}/f94c3b30-42be-e959-889c-5aa313dba261/fullportrait.png`, roleIcon: `${roleUrl}/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png` },
      { name: "ブリーチ", fullPortrait: `${baseUrl}/5f8d3a7f-467b-97f3-062c-13acf203c006/fullportrait.png`, roleIcon: `${roleUrl}/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png` },
      { name: "フェイド", fullPortrait: `${baseUrl}/dade69b4-4f5a-8528-247b-219e5a1facd6/fullportrait.png`, roleIcon: `${roleUrl}/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png` },
      { name: "キルジョイ", fullPortrait: `${baseUrl}/1e58de9c-4950-5125-93e9-a0aee9f98746/fullportrait.png`, roleIcon: `${roleUrl}/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png` },
      { name: "チェンバー", fullPortrait: `${baseUrl}/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/fullportrait.png`, roleIcon: `${roleUrl}/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png` },
      { name: "ブリムストーン", fullPortrait: `${baseUrl}/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/fullportrait.png`, roleIcon: `${roleUrl}/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png` },
      { name: "ミクス", fullPortrait: `${baseUrl}/7c8a4701-4de6-9355-b254-e09bc2a34b72/fullportrait.png`, roleIcon: `${roleUrl}/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png` },
      { name: "テホ", fullPortrait: `${baseUrl}/b444168c-4e35-8076-db47-ef9bf368f384/fullportrait.png`, roleIcon: `${roleUrl}/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png` },
    ]
  },
  Pearl: {
    agents: [
      { name: "ジェット", fullPortrait: `${baseUrl}/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png`, roleIcon: `${roleUrl}/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png` },
      { name: "フェイド", fullPortrait: `${baseUrl}/dade69b4-4f5a-8528-247b-219e5a1facd6/fullportrait.png`, roleIcon: `${roleUrl}/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png` },
      { name: "ソーヴァ", fullPortrait: `${baseUrl}/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png`, roleIcon: `${roleUrl}/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png` },
      { name: "スカイ", fullPortrait: `${baseUrl}/6f2a04ca-43e0-be17-7f36-b3908627744d/fullportrait.png`, roleIcon: `${roleUrl}/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png` },
      { name: "キルジョイ", fullPortrait: `${baseUrl}/1e58de9c-4950-5125-93e9-a0aee9f98746/fullportrait.png`, roleIcon: `${roleUrl}/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png` },
      { name: "アストラ", fullPortrait: `${baseUrl}/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/fullportrait.png`, roleIcon: `${roleUrl}/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png` },
      { name: "フェニックス", fullPortrait: `${baseUrl}/eb93336a-449b-9c1b-0a54-a891f7921d69/fullportrait.png`, roleIcon: `${roleUrl}/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png` },
    ]
  },
  Lotus: {
    agents: [
      { name: "レイズ", fullPortrait: `${baseUrl}/f94c3b30-42be-e959-889c-5aa313dba261/fullportrait.png`, roleIcon: `${roleUrl}/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png` },
      { name: "ジェット", fullPortrait: `${baseUrl}/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png`, roleIcon: `${roleUrl}/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png` },
      { name: "フェイド", fullPortrait: `${baseUrl}/dade69b4-4f5a-8528-247b-219e5a1facd6/fullportrait.png`, roleIcon: `${roleUrl}/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png` },
      { name: "ブリーチ", fullPortrait: `${baseUrl}/5f8d3a7f-467b-97f3-062c-13acf203c006/fullportrait.png`, roleIcon: `${roleUrl}/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png` },
      { name: "オーメン", fullPortrait: `${baseUrl}/8e253930-4c05-31dd-1b6c-968525494517/fullportrait.png`, roleIcon: `${roleUrl}/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png` },
      { name: "キルジョイ", fullPortrait: `${baseUrl}/1e58de9c-4950-5125-93e9-a0aee9f98746/fullportrait.png`, roleIcon: `${roleUrl}/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png` },
      { name: "ヴァイス", fullPortrait: `${baseUrl}/efba5359-4016-a1e5-7626-b1ae76895940/fullportrait.png`, roleIcon: `${roleUrl}/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png` },
    ]
  },
  Sunset: {
    agents: [
      { name: "レイズ", fullPortrait: `${baseUrl}/f94c3b30-42be-e959-889c-5aa313dba261/fullportrait.png`, roleIcon: `${roleUrl}/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png` },
      { name: "ゲッコー", fullPortrait: `${baseUrl}/e370fa57-4757-3604-3648-499e1f642d3f/fullportrait.png`, roleIcon: `${roleUrl}/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png` },
      { name: "フェイド", fullPortrait: `${baseUrl}/dade69b4-4f5a-8528-247b-219e5a1facd6/fullportrait.png`, roleIcon: `${roleUrl}/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png` },
      { name: "ソーヴァ", fullPortrait: `${baseUrl}/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png`, roleIcon: `${roleUrl}/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png` },
      { name: "ジェット", fullPortrait: `${baseUrl}/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png`, roleIcon: `${roleUrl}/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png` },
      { name: "オーメン", fullPortrait: `${baseUrl}/8e253930-4c05-31dd-1b6c-968525494517/fullportrait.png`, roleIcon: `${roleUrl}/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png` },
      { name: "サイファー", fullPortrait: `${baseUrl}/117ed9e3-49f3-6512-3ccf-0cada7e3823b/fullportrait.png`, roleIcon: `${roleUrl}/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png` },
      { name: "ヴァイス", fullPortrait: `${baseUrl}/efba5359-4016-a1e5-7626-b1ae76895940/fullportrait.png`, roleIcon: `${roleUrl}/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png` },
    ]
  },
  Abyss: {
    agents: [
      { name: "ジェット", fullPortrait: `${baseUrl}/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png`, roleIcon: `${roleUrl}/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png` },
      { name: "ソーヴァ", fullPortrait: `${baseUrl}/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png`, roleIcon: `${roleUrl}/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png` },
      { name: "オーメン", fullPortrait: `${baseUrl}/8e253930-4c05-31dd-1b6c-968525494517/fullportrait.png`, roleIcon: `${roleUrl}/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png` },
      { name: "アストラ", fullPortrait: `${baseUrl}/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/fullportrait.png`, roleIcon: `${roleUrl}/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png` },
      { name: "ゲッコー", fullPortrait: `${baseUrl}/e370fa57-4757-3604-3648-499e1f642d3f/fullportrait.png`, roleIcon: `${roleUrl}/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png` },
      { name: "サイファー", fullPortrait: `${baseUrl}/117ed9e3-49f3-6512-3ccf-0cada7e3823b/fullportrait.png`, roleIcon: `${roleUrl}/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png` },
    ]
  },
  Corrode: {
    agents: [
      { name: "ネオン", fullPortrait: `${baseUrl}/bb2a4828-46eb-8cd1-e765-15848195d751/fullportrait.png`, roleIcon: `${roleUrl}/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png` },
      { name: "ウェイレイ", fullPortrait: `${baseUrl}/df1cb487-4902-002e-5c17-d28e83e78588/fullportrait.png`, roleIcon: `${roleUrl}/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png` },
      { name: "ヨル", fullPortrait: `${baseUrl}/7f94d92c-4234-0a36-9646-3a87eb8b5c89/fullportrait.png`, roleIcon: `${roleUrl}/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png` },
      { name: "フェイド", fullPortrait: `${baseUrl}/dade69b4-4f5a-8528-247b-219e5a1facd6/fullportrait.png`, roleIcon: `${roleUrl}/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png` },
      { name: "ヴァイス", fullPortrait: `${baseUrl}/efba5359-4016-a1e5-7626-b1ae76895940/fullportrait.png`, roleIcon: `${roleUrl}/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png` },
      { name: "オーメン", fullPortrait: `${baseUrl}/8e253930-4c05-31dd-1b6c-968525494517/fullportrait.png`, roleIcon: `${roleUrl}/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png` },
      { name: "ヴァイパー", fullPortrait: `${baseUrl}/707eab51-4836-f488-046a-cda6bf494859/fullportrait.png`, roleIcon: `${roleUrl}/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png` },
    ]
  },
}