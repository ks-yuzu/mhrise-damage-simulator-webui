export interface Weapon {
  name:         string
  attack:       number
  elementType:  string
  elementValue: number
  slot:         number[]
  rampageSlot:  number[]
}

const WEAPONS = Object.freeze([
  {
    "name": "里守護ノ弓・勇",
    "attack": 230,
    "affinity": 0,
    "elementType": null,
    "elementValue": null,
    "slot": [],
    "rampageSlot": []
  },
  {
    "name": "カムラノ傑弓",
    "attack": 350,
    "affinity": 0,
    "elementType": null,
    "elementValue": null,
    "slot": [
      4,
      2
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "渇望のヴァンピア",
    "attack": 340,
    "affinity": 0,
    "elementType": "龍",
    "elementValue": 20,
    "slot": [
      4
    ],
    "rampageSlot": [
      1
    ]
  },
  {
    "name": "デゼス・ド・エテルネ",
    "attack": 300,
    "affinity": 30,
    "elementType": "火",
    "elementValue": 45,
    "slot": [
      2,
      1,
      1
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "クオレ・ダ・ラヴァタ",
    "attack": 320,
    "affinity": 20,
    "elementType": "爆破",
    "elementValue": 33,
    "slot": [
      2,
      2
    ],
    "rampageSlot": [
      3
    ]
  },
  {
    "name": "なぐるやの遠境真射弓改",
    "attack": 330,
    "affinity": 15,
    "elementType": "水",
    "elementValue": 28,
    "slot": [
      1
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "破邪之霊弓クズノハ",
    "attack": 320,
    "affinity": 10,
    "elementType": "火",
    "elementValue": 11,
    "slot": [
      2,
      2,
      2
    ],
    "rampageSlot": [
      1
    ]
  },
  {
    "name": "誓願王・アイゼン之天弓",
    "attack": 350,
    "affinity": 0,
    "elementType": null,
    "elementValue": null,
    "slot": [
      3
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "緋天之弓・六仙アイゼン",
    "attack": 340,
    "affinity": 0,
    "elementType": "爆破",
    "elementValue": 16,
    "slot": [
      2
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "無明弓【正定】",
    "attack": 330,
    "affinity": 40,
    "elementType": null,
    "elementValue": null,
    "slot": [
      2
    ],
    "rampageSlot": [
      1
    ]
  },
  {
    "name": "極星弓【太一】",
    "attack": 360,
    "affinity": 0,
    "elementType": null,
    "elementValue": null,
    "slot": [
      2
    ],
    "rampageSlot": [
      1
    ]
  },
  {
    "name": "万雷弓【羽々矢】改",
    "attack": 330,
    "affinity": 15,
    "elementType": "雷",
    "elementValue": 27,
    "slot": [],
    "rampageSlot": [
      1
    ]
  },
  {
    "name": "琥牙弓アルヴァランガ",
    "attack": 310,
    "affinity": 30,
    "elementType": "氷",
    "elementValue": 28,
    "slot": [
      1,
      1
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "グルト・ポイゾン",
    "attack": 360,
    "affinity": 0,
    "elementType": null,
    "elementValue": null,
    "slot": [
      1,
      1
    ],
    "rampageSlot": [
      1
    ]
  },
  {
    "name": "青熊剛弓【甜壺】",
    "attack": 370,
    "affinity": 0,
    "elementType": null,
    "elementValue": null,
    "slot": [
      1
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "ワイズハンターボウ改",
    "attack": 370,
    "affinity": 0,
    "elementType": null,
    "elementValue": null,
    "slot": [
      1
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "黒電弓ウェザイス",
    "attack": 340,
    "affinity": 30,
    "elementType": "雷",
    "elementValue": 18,
    "slot": [
      1
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "闘王弓グラディエンテ改",
    "attack": 360,
    "affinity": 0,
    "elementType": null,
    "elementValue": null,
    "slot": [
      1,
      1
    ],
    "rampageSlot": [
      3
    ]
  },
  {
    "name": "ソニックリゾネイター",
    "attack": 310,
    "affinity": 0,
    "elementType": "雷",
    "elementValue": 31,
    "slot": [
      1,
      1
    ],
    "rampageSlot": [
      1
    ]
  },
  {
    "name": "乱吹の瑞華晶弓",
    "attack": 300,
    "affinity": 0,
    "elementType": "氷",
    "elementValue": 53,
    "slot": [
      3
    ],
    "rampageSlot": [
      3
    ]
  },
  {
    "name": "氷輪弓ルノルーニ",
    "attack": 340,
    "affinity": 0,
    "elementType": "氷",
    "elementValue": 22,
    "slot": [
      1,
      1
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "Ｄ＝ティカトル",
    "attack": 310,
    "affinity": 0,
    "elementType": "水",
    "elementValue": 52,
    "slot": [
      2,
      1
    ],
    "rampageSlot": [
      3
    ]
  },
  {
    "name": "トリニテ＝Ｙ",
    "attack": 310,
    "affinity": 0,
    "elementType": "火",
    "elementValue": 54,
    "slot": [
      3
    ],
    "rampageSlot": [
      3
    ]
  },
  {
    "name": "クラリチェエテノルク改",
    "attack": 330,
    "affinity": 0,
    "elementType": "火",
    "elementValue": 41,
    "slot": [
      4,
      1
    ],
    "rampageSlot": [
      3
    ]
  },
  {
    "name": "月穿ちセレーネ",
    "attack": 350,
    "affinity": 0,
    "elementType": "龍",
    "elementValue": 28,
    "slot": [
      4
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "ローゼンズィッヘル",
    "attack": 330,
    "affinity": 20,
    "elementType": "火",
    "elementValue": 15,
    "slot": [
      1
    ],
    "rampageSlot": [
      1
    ]
  },
  {
    "name": "カクトスズィッヘル",
    "attack": 350,
    "affinity": 15,
    "elementType": "火",
    "elementValue": 27,
    "slot": [
      4
    ],
    "rampageSlot": [
      3
    ]
  },
  {
    "name": "炎撃弓フラム",
    "attack": 350,
    "affinity": 0,
    "elementType": "火",
    "elementValue": 34,
    "slot": [
      1
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "天開きヒュペリオン",
    "attack": 300,
    "affinity": 35,
    "elementType": "火",
    "elementValue": 49,
    "slot": [],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "ピコ・カトリスぺイル",
    "attack": 340,
    "affinity": 30,
    "elementType": null,
    "elementValue": null,
    "slot": [
      1,
      1,
      1
    ],
    "rampageSlot": [
      1
    ]
  },
  {
    "name": "ティラ・フルラルク改",
    "attack": 330,
    "affinity": 0,
    "elementType": "雷",
    "elementValue": 42,
    "slot": [
      3
    ],
    "rampageSlot": [
      3
    ]
  },
  {
    "name": "シャープシューター改",
    "attack": 380,
    "affinity": 0,
    "elementType": null,
    "elementValue": null,
    "slot": [],
    "rampageSlot": [
      3
    ]
  },
  {
    "name": "叛弓アルナスル",
    "attack": 380,
    "affinity": 10,
    "elementType": null,
    "elementValue": null,
    "slot": [
      1,
      1
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "オオタチバサミ",
    "attack": 340,
    "affinity": 0,
    "elementType": "水",
    "elementValue": 23,
    "slot": [
      4,
      2,
      1
    ],
    "rampageSlot": [
      3
    ]
  },
  {
    "name": "イヌキ",
    "attack": 360,
    "affinity": 0,
    "elementType": null,
    "elementValue": null,
    "slot": [
      1
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "轟弓【大虎髯】改",
    "attack": 400,
    "affinity": -25,
    "elementType": null,
    "elementValue": null,
    "slot": [],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "グロズヌィ改",
    "attack": 380,
    "affinity": -15,
    "elementType": null,
    "elementValue": null,
    "slot": [
      1
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "真・王牙弓【天命】",
    "attack": 340,
    "affinity": 0,
    "elementType": "雷",
    "elementValue": 35,
    "slot": [
      2,
      1
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "毒妖弓ヒルヴンアピス改",
    "attack": 380,
    "affinity": 0,
    "elementType": null,
    "elementValue": null,
    "slot": [
      1,
      1
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "蛮炎弓ロギンアルクス改",
    "attack": 360,
    "affinity": -20,
    "elementType": "火",
    "elementValue": 20,
    "slot": [
      2,
      1
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "水撃ドロスギニオン改",
    "attack": 330,
    "affinity": 0,
    "elementType": "水",
    "elementValue": 37,
    "slot": [
      3,
      1
    ],
    "rampageSlot": [
      3
    ]
  },
  {
    "name": "巨塊弓ゴルボザ",
    "attack": 410,
    "affinity": 0,
    "elementType": null,
    "elementValue": null,
    "slot": [
      4,
      2,
      1
    ],
    "rampageSlot": [
      3
    ]
  },
  {
    "name": "ル・トゥベリドーズ",
    "attack": 360,
    "affinity": 0,
    "elementType": null,
    "elementValue": null,
    "slot": [
      2
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "アルクトレスノワール",
    "attack": 310,
    "affinity": 20,
    "elementType": "龍",
    "elementValue": 35,
    "slot": [
      1,
      1,
      1
    ],
    "rampageSlot": [
      3
    ]
  },
  {
    "name": "アルクトレスジョーヌ",
    "attack": 310,
    "affinity": 15,
    "elementType": "雷",
    "elementValue": 37,
    "slot": [
      2
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "アルククアトルージュ",
    "attack": 310,
    "affinity": 20,
    "elementType": "火",
    "elementValue": 34,
    "slot": [
      2,
      1
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "アルククアトブラン",
    "attack": 320,
    "affinity": 10,
    "elementType": "氷",
    "elementValue": 39,
    "slot": [
      2,
      1
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "禍業物・大幽鬼キューヌ",
    "attack": 330,
    "affinity": 0,
    "elementType": "爆破",
    "elementValue": 23,
    "slot": [
      2,
      1
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "鎧幽鬼弓ディキューヌ",
    "attack": 340,
    "affinity": 0,
    "elementType": "爆破",
    "elementValue": 28,
    "slot": [
      3,
      1
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "ビジョンofヴァニシュ",
    "attack": 330,
    "affinity": 25,
    "elementType": "龍",
    "elementValue": 23,
    "slot": [
      1
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "THEイノセンス",
    "attack": 310,
    "affinity": 40,
    "elementType": "龍",
    "elementValue": 30,
    "slot": [],
    "rampageSlot": [
      1
    ]
  },
  {
    "name": "アピアーorヴァニシュ",
    "attack": 330,
    "affinity": 15,
    "elementType": "龍",
    "elementValue": 42,
    "slot": [
      3,
      1
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "大鹿角ノ破弾弓",
    "attack": 360,
    "affinity": 0,
    "elementType": null,
    "elementValue": null,
    "slot": [
      2,
      2
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "震雷弓【萬獣王】",
    "attack": 360,
    "affinity": 0,
    "elementType": "雷",
    "elementValue": 16,
    "slot": [
      3
    ],
    "rampageSlot": [
      1
    ]
  },
  {
    "name": "雷公怒弓【征天大聖】",
    "attack": 350,
    "affinity": 0,
    "elementType": "雷",
    "elementValue": 11,
    "slot": [],
    "rampageSlot": [
      1
    ]
  },
  {
    "name": "神貫・風雲冥冥",
    "attack": 350,
    "affinity": 0,
    "elementType": "龍",
    "elementValue": 16,
    "slot": [],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "神貫・雷禍明明",
    "attack": 310,
    "affinity": 0,
    "elementType": "雷",
    "elementValue": 48,
    "slot": [
      2,
      1
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "サジタル＝ダオラ",
    "attack": 310,
    "affinity": 15,
    "elementType": "氷",
    "elementValue": 43,
    "slot": [
      1
    ],
    "rampageSlot": [
      3
    ]
  },
  {
    "name": "剛勇と宿望の凄絶弓",
    "attack": 330,
    "affinity": 0,
    "elementType": "爆破",
    "elementValue": 49,
    "slot": [
      2
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "大魔導弓レメゲティア",
    "attack": 370,
    "affinity": 0,
    "elementType": null,
    "elementValue": null,
    "slot": [
      3,
      1
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "赫絶の飛翼アガステヤ",
    "attack": 310,
    "affinity": 0,
    "elementType": "龍",
    "elementValue": 48,
    "slot": [
      2
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "冥淵剛弓スィエラ",
    "attack": 360,
    "affinity": -20,
    "elementType": "龍",
    "elementValue": 12,
    "slot": [],
    "rampageSlot": [
      3
    ]
  },
  {
    "name": "氷妖イヴェリア",
    "attack": 340,
    "affinity": 0,
    "elementType": "氷",
    "elementValue": 20,
    "slot": [
      4
    ],
    "rampageSlot": [
      3
    ]
  },
  {
    "name": "カジキ弓【姿造】",
    "attack": 360,
    "affinity": 0,
    "elementType": null,
    "elementValue": null,
    "slot": [
      1
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "絡繰機巧ネコ弐九弓",
    "attack": 360,
    "affinity": -15,
    "elementType": null,
    "elementValue": null,
    "slot": [
      3,
      1
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "恍然忘我混沌のゴン",
    "attack": 360,
    "affinity": 0,
    "elementType": null,
    "elementValue": null,
    "slot": [
      2,
      1
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "麗枝弓ステラフロル",
    "attack": 340,
    "affinity": 30,
    "elementType": null,
    "elementValue": null,
    "slot": [
      2
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "大蛛弦ピェジスアルク",
    "attack": 350,
    "affinity": 20,
    "elementType": null,
    "elementValue": null,
    "slot": [],
    "rampageSlot": [
      3
    ]
  },
  {
    "name": "王国騎士弓シンシア改",
    "attack": 350,
    "affinity": 10,
    "elementType": null,
    "elementValue": null,
    "slot": [
      2
    ],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "オルドマキナ・B",
    "attack": 340,
    "affinity": 0,
    "elementType": "水",
    "elementValue": 12,
    "slot": [],
    "rampageSlot": [
      2
    ]
  },
  {
    "name": "蒼世ノ龍弓【天翔】",
    "attack": 190,
    "affinity": 20,
    "elementType": "水",
    "elementValue": 25,
    "slot": [
      3
    ],
    "rampageSlot": []
  },
  {
    "name": "百竜弓【有為転変】",
    "attack": 210,
    "affinity": 0,
    "elementType": null,
    "elementValue": null,
    "slot": [],
    "rampageSlot": []
  }
])
export default WEAPONS
