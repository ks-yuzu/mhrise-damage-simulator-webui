import type {ArmorType} from '$lib/mhrise-metadata'

export interface Skill {
  name:  string
  level: string
}

export interface Armor {
  part:   ArmorType
  name:   string
  skills: Skill[]
  slots:  string
}


const ARMORS: readonly Armor[][] = ([
  [
    {
      "part": "頭",
      "name": "アークヘルム/フィリアヘルム",
      "skills": [
        {
          "name": "災禍転福",
          "level": "2"
        },
        {
          "name": "狂竜症【蝕】",
          "level": "1"
        }
      ],
      "slots": "300"
    },
    {
      "part": "胴",
      "name": "アークメイル/フィリアメイル",
      "skills": [
        {
          "name": "会心撃【属性】",
          "level": "1"
        },
        {
          "name": "死中に活",
          "level": "2"
        },
        {
          "name": "狂竜症【蝕】",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "腕",
      "name": "アークアーム/フィリアアーム",
      "skills": [
        {
          "name": "会心撃【属性】",
          "level": "2"
        },
        {
          "name": "死中に活",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腰",
      "name": "アークコイル/フィリアコイル",
      "skills": [
        {
          "name": "業物",
          "level": "2"
        },
        {
          "name": "弾丸節約",
          "level": "2"
        },
        {
          "name": "災禍転福",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "脚",
      "name": "アークグリーヴ/フィリアグリーヴ",
      "skills": [
        {
          "name": "業物",
          "level": "1"
        },
        {
          "name": "弾丸節約",
          "level": "1"
        },
        {
          "name": "狂竜症【蝕】",
          "level": "1"
        }
      ],
      "slots": "320"
    }
  ],
  [
    {
      "part": "頭",
      "name": "アケノXヘルム",
      "skills": [
        {
          "name": "火属性攻撃強化",
          "level": "1"
        },
        {
          "name": "抜刀術【技】",
          "level": "1"
        },
        {
          "name": "納刀術",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "胴",
      "name": "アケノXメイル",
      "skills": [
        {
          "name": "フルチャージ",
          "level": "1"
        },
        {
          "name": "抜刀術【技】",
          "level": "1"
        },
        {
          "name": "納刀術",
          "level": "1"
        }
      ],
      "slots": "110"
    },
    {
      "part": "腕",
      "name": "アケノXアーム",
      "skills": [
        {
          "name": "フルチャージ",
          "level": "1"
        },
        {
          "name": "火属性攻撃強化",
          "level": "2"
        },
        {
          "name": "会心撃【属性】",
          "level": "1"
        }
      ],
      "slots": "211"
    },
    {
      "part": "腰",
      "name": "アケノXコイル",
      "skills": [
        {
          "name": "納刀術",
          "level": "1"
        },
        {
          "name": "会心撃【属性】",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "脚",
      "name": "アケノXグリーヴ",
      "skills": [
        {
          "name": "フルチャージ",
          "level": "1"
        },
        {
          "name": "火属性攻撃強化",
          "level": "2"
        },
        {
          "name": "抜刀術【技】",
          "level": "1"
        }
      ],
      "slots": "110"
    }
  ],
  [
    {
      "part": "頭",
      "name": "アシラXヘルム",
      "skills": [
        {
          "name": "防御",
          "level": "3"
        },
        {
          "name": "不屈",
          "level": "1"
        },
        {
          "name": "早食い",
          "level": "1"
        }
      ],
      "slots": "111"
    },
    {
      "part": "胴",
      "name": "アシラXメイル",
      "skills": [
        {
          "name": "逆恨み",
          "level": "1"
        },
        {
          "name": "逆襲",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腕",
      "name": "アシラXアーム",
      "skills": [
        {
          "name": "防御",
          "level": "1"
        },
        {
          "name": "逆恨み",
          "level": "2"
        },
        {
          "name": "逆襲",
          "level": "1"
        }
      ],
      "slots": "110"
    },
    {
      "part": "腰",
      "name": "アシラXコイル",
      "skills": [
        {
          "name": "防御",
          "level": "3"
        },
        {
          "name": "早食い",
          "level": "1"
        },
        {
          "name": "逆襲",
          "level": "1"
        }
      ],
      "slots": "210"
    },
    {
      "part": "脚",
      "name": "アシラXグリーヴ",
      "skills": [
        {
          "name": "早食い",
          "level": "1"
        }
      ],
      "slots": "321"
    }
  ],
  [
    {
      "part": "頭",
      "name": "アルブーロXヘッド",
      "skills": [
        {
          "name": "ブレ抑制",
          "level": "2"
        },
        {
          "name": "弾導強化",
          "level": "2"
        },
        {
          "name": "チューンアップ",
          "level": "1"
        }
      ],
      "slots": "210"
    },
    {
      "part": "胴",
      "name": "アルブーロXベスト",
      "skills": [
        {
          "name": "通常弾・連射矢強化",
          "level": "1"
        },
        {
          "name": "貫通弾・貫通矢強化",
          "level": "1"
        },
        {
          "name": "チューンアップ",
          "level": "1"
        }
      ],
      "slots": "110"
    },
    {
      "part": "腕",
      "name": "アルブーロXグローブ",
      "skills": [
        {
          "name": "通常弾・連射矢強化",
          "level": "1"
        },
        {
          "name": "散弾・拡散矢強化",
          "level": "2"
        }
      ],
      "slots": "110"
    },
    {
      "part": "腰",
      "name": "アルブーロXパレオ",
      "skills": [
        {
          "name": "通常弾・連射矢強化",
          "level": "1"
        },
        {
          "name": "弾導強化",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "脚",
      "name": "アルブーロXサンダル",
      "skills": [
        {
          "name": "散弾・拡散矢強化",
          "level": "1"
        },
        {
          "name": "貫通弾・貫通矢強化",
          "level": "2"
        }
      ],
      "slots": "110"
    }
  ],
  [
    {
      "part": "頭",
      "name": "アロイXヘルム",
      "skills": [
        {
          "name": "水属性攻撃強化",
          "level": "1"
        },
        {
          "name": "砥石使用高速化",
          "level": "1"
        },
        {
          "name": "剛刃研磨",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "胴",
      "name": "アロイXメイル",
      "skills": [
        {
          "name": "砥石使用高速化",
          "level": "2"
        },
        {
          "name": "剛刃研磨",
          "level": "2"
        }
      ],
      "slots": "300"
    },
    {
      "part": "腕",
      "name": "アロイXアーム",
      "skills": [
        {
          "name": "水属性攻撃強化",
          "level": "1"
        },
        {
          "name": "見切り",
          "level": "2"
        }
      ],
      "slots": "210"
    },
    {
      "part": "腰",
      "name": "アロイXコイル",
      "skills": [
        {
          "name": "水属性攻撃強化",
          "level": "3"
        },
        {
          "name": "見切り",
          "level": "1"
        }
      ],
      "slots": "310"
    },
    {
      "part": "脚",
      "name": "アロイXグリーヴ",
      "skills": [
        {
          "name": "見切り",
          "level": "2"
        }
      ],
      "slots": "400"
    }
  ],
  [
    {
      "part": "頭",
      "name": "イズチXヘルム",
      "skills": [
        {
          "name": "回避性能",
          "level": "2"
        },
        {
          "name": "見切り",
          "level": "1"
        }
      ],
      "slots": "110"
    },
    {
      "part": "胴",
      "name": "イズチXメイル",
      "skills": [
        {
          "name": "回復速度",
          "level": "2"
        },
        {
          "name": "回避性能",
          "level": "1"
        },
        {
          "name": "見切り",
          "level": "2"
        }
      ],
      "slots": "100"
    },
    {
      "part": "腕",
      "name": "イズチXアーム",
      "skills": [
        {
          "name": "体術",
          "level": "2"
        },
        {
          "name": "回避性能",
          "level": "1"
        }
      ],
      "slots": "110"
    },
    {
      "part": "腰",
      "name": "イズチXコイル",
      "skills": [
        {
          "name": "体術",
          "level": "1"
        },
        {
          "name": "見切り",
          "level": "2"
        }
      ],
      "slots": "110"
    },
    {
      "part": "脚",
      "name": "イズチXグリーヴ",
      "skills": [
        {
          "name": "体術",
          "level": "2"
        },
        {
          "name": "回復速度",
          "level": "1"
        },
        {
          "name": "回避性能",
          "level": "1"
        }
      ],
      "slots": "110"
    }
  ],
  [
    {
      "part": "頭",
      "name": "イソネXヘルム",
      "skills": [
        {
          "name": "弾丸節約",
          "level": "1"
        },
        {
          "name": "睡眠耐性",
          "level": "2"
        },
        {
          "name": "睡眠属性強化",
          "level": "1"
        }
      ],
      "slots": "220"
    },
    {
      "part": "胴",
      "name": "イソネXメイル",
      "skills": [
        {
          "name": "装填拡張",
          "level": "1"
        },
        {
          "name": "睡眠属性強化",
          "level": "1"
        }
      ],
      "slots": "311"
    },
    {
      "part": "腕",
      "name": "イソネXアーム",
      "skills": [
        {
          "name": "ボマー",
          "level": "2"
        },
        {
          "name": "弾丸節約",
          "level": "2"
        },
        {
          "name": "精霊の加護",
          "level": "1"
        },
        {
          "name": "匠",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "腰",
      "name": "イソネXコイル",
      "skills": [
        {
          "name": "ボマー",
          "level": "1"
        },
        {
          "name": "装填拡張",
          "level": "1"
        },
        {
          "name": "睡眠属性強化",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "脚",
      "name": "イソネXグリーブ",
      "skills": [
        {
          "name": "睡眠耐性",
          "level": "1"
        },
        {
          "name": "精霊の加護",
          "level": "2"
        }
      ],
      "slots": "410"
    }
  ],
  [
    {
      "part": "頭",
      "name": "イソネZヘルム",
      "skills": [
        {
          "name": "挑戦者",
          "level": "2"
        },
        {
          "name": "達人芸",
          "level": "1"
        }
      ],
      "slots": "220"
    },
    {
      "part": "胴",
      "name": "イソネZメイル",
      "skills": [
        {
          "name": "挑戦者",
          "level": "2"
        },
        {
          "name": "会心撃【属性】",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腕",
      "name": "イソネZアーム",
      "skills": [
        {
          "name": "氷属性攻撃強化",
          "level": "1"
        },
        {
          "name": "会心撃【属性】",
          "level": "1"
        },
        {
          "name": "達人芸",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "腰",
      "name": "イソネZコイル",
      "skills": [
        {
          "name": "氷属性攻撃強化",
          "level": "2"
        },
        {
          "name": "達人芸",
          "level": "1"
        }
      ],
      "slots": "420"
    },
    {
      "part": "脚",
      "name": "イソネZグリーヴ",
      "skills": [
        {
          "name": "挑戦者",
          "level": "1"
        },
        {
          "name": "氷属性攻撃強化",
          "level": "2"
        },
        {
          "name": "会心撃【属性】",
          "level": "1"
        }
      ],
      "slots": "410"
    }
  ],
  [
    {
      "part": "頭",
      "name": "インゴットXヘルム",
      "skills": [
        {
          "name": "風圧耐性",
          "level": "1"
        },
        {
          "name": "攻撃",
          "level": "2"
        }
      ],
      "slots": "410"
    },
    {
      "part": "胴",
      "name": "インゴットXメイル",
      "skills": [
        {
          "name": "風圧耐性",
          "level": "2"
        },
        {
          "name": "見切り",
          "level": "2"
        }
      ],
      "slots": "310"
    },
    {
      "part": "腕",
      "name": "インゴットXアーム",
      "skills": [
        {
          "name": "雷属性攻撃強化",
          "level": "3"
        }
      ],
      "slots": "420"
    },
    {
      "part": "腰",
      "name": "インゴットXコイル",
      "skills": [
        {
          "name": "攻撃",
          "level": "1"
        },
        {
          "name": "強化持続",
          "level": "2"
        }
      ],
      "slots": "300"
    },
    {
      "part": "脚",
      "name": "インゴットXグリーヴ",
      "skills": [
        {
          "name": "攻撃",
          "level": "2"
        },
        {
          "name": "見切り",
          "level": "2"
        }
      ],
      "slots": "110"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ヴァイクXヘルム",
      "skills": [
        {
          "name": "装填拡張",
          "level": "2"
        },
        {
          "name": "回復速度",
          "level": "1"
        }
      ],
      "slots": "310"
    },
    {
      "part": "胴",
      "name": "ヴァイクXメイル",
      "skills": [
        {
          "name": "腹減り耐性",
          "level": "1"
        }
      ],
      "slots": "321"
    },
    {
      "part": "腕",
      "name": "ヴァイクXアーム",
      "skills": [
        {
          "name": "業物",
          "level": "2"
        },
        {
          "name": "腹減り耐性",
          "level": "1"
        },
        {
          "name": "通常弾・連射矢強化",
          "level": "2"
        }
      ],
      "slots": "210"
    },
    {
      "part": "腰",
      "name": "ヴァイクXコイル",
      "skills": [
        {
          "name": "業物",
          "level": "1"
        },
        {
          "name": "通常弾・連射矢強化",
          "level": "1"
        },
        {
          "name": "回復速度",
          "level": "2"
        }
      ],
      "slots": "400"
    },
    {
      "part": "脚",
      "name": "ヴァイクXグリーヴ",
      "skills": [
        {
          "name": "腹減り耐性",
          "level": "1"
        },
        {
          "name": "装填拡張",
          "level": "1"
        }
      ],
      "slots": "410"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ウツシ表【御面】真/依巫・燿【元結】",
      "skills": [
        {
          "name": "満足感",
          "level": "1"
        },
        {
          "name": "早食い",
          "level": "2"
        },
        {
          "name": "幸運",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "胴",
      "name": "ウツシ表【上衣】真/依巫・燿【白衣】",
      "skills": [
        {
          "name": "体力回復量UP",
          "level": "1"
        },
        {
          "name": "広域化",
          "level": "1"
        },
        {
          "name": "幸運",
          "level": "1"
        }
      ],
      "slots": "210"
    },
    {
      "part": "腕",
      "name": "ウツシ表【手甲】真/依巫・燿【花袖】",
      "skills": [
        {
          "name": "体力回復量UP",
          "level": "1"
        },
        {
          "name": "広域化",
          "level": "2"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腰",
      "name": "ウツシ表【腰巻】真/依巫・燿【腰巻】",
      "skills": [
        {
          "name": "満足感",
          "level": "1"
        },
        {
          "name": "早食い",
          "level": "1"
        },
        {
          "name": "体力回復量UP",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "脚",
      "name": "ウツシ表【脚絆】真/依巫・燿【緋袴】",
      "skills": [
        {
          "name": "満足感",
          "level": "1"
        },
        {
          "name": "広域化",
          "level": "2"
        },
        {
          "name": "幸運",
          "level": "1"
        }
      ],
      "slots": "200"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ウツシ裏【御面】真/神凪・洸【元結】",
      "skills": [
        {
          "name": "業物",
          "level": "2"
        },
        {
          "name": "弾丸節約",
          "level": "2"
        },
        {
          "name": "攻撃",
          "level": "2"
        },
        {
          "name": "翔蟲使い",
          "level": "1"
        }
      ],
      "slots": "100"
    },
    {
      "part": "胴",
      "name": "ウツシ裏【上衣】真/神凪・洸【白衣】",
      "skills": [
        {
          "name": "業物",
          "level": "1"
        },
        {
          "name": "挑戦者",
          "level": "1"
        },
        {
          "name": "弾丸節約",
          "level": "1"
        },
        {
          "name": "回避性能",
          "level": "3"
        }
      ],
      "slots": "100"
    },
    {
      "part": "腕",
      "name": "ウツシ裏【手甲】真/神凪・洸【花袖】",
      "skills": [
        {
          "name": "攻撃",
          "level": "2"
        },
        {
          "name": "回避性能",
          "level": "1"
        },
        {
          "name": "翔蟲使い",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "腰",
      "name": "ウツシ裏【腰巻】真/神凪・洸【腰巻】",
      "skills": [
        {
          "name": "挑戦者",
          "level": "2"
        },
        {
          "name": "攻撃",
          "level": "1"
        },
        {
          "name": "翔蟲使い",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "脚",
      "name": "ウツシ裏【脚絆】真/神凪・洸【緋袴】",
      "skills": [
        {
          "name": "挑戦者",
          "level": "1"
        },
        {
          "name": "攻撃",
          "level": "2"
        },
        {
          "name": "回避性能",
          "level": "1"
        }
      ],
      "slots": "111"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ウルクXヘルム",
      "skills": [
        {
          "name": "装填速度",
          "level": "1"
        },
        {
          "name": "氷属性攻撃強化",
          "level": "2"
        },
        {
          "name": "見切り",
          "level": "1"
        },
        {
          "name": "達人芸",
          "level": "1"
        }
      ],
      "slots": "300"
    },
    {
      "part": "胴",
      "name": "ウルクXメイル",
      "skills": [
        {
          "name": "体術",
          "level": "2"
        },
        {
          "name": "装填速度",
          "level": "1"
        },
        {
          "name": "滑走強化",
          "level": "1"
        },
        {
          "name": "達人芸",
          "level": "1"
        }
      ],
      "slots": "110"
    },
    {
      "part": "腕",
      "name": "ウルクXアーム",
      "skills": [
        {
          "name": "氷属性攻撃強化",
          "level": "3"
        },
        {
          "name": "見切り",
          "level": "2"
        }
      ],
      "slots": "210"
    },
    {
      "part": "腰",
      "name": "ウルクXコイル",
      "skills": [
        {
          "name": "体術",
          "level": "3"
        }
      ],
      "slots": "200"
    },
    {
      "part": "脚",
      "name": "ウルクXグリーヴ",
      "skills": [
        {
          "name": "装填速度",
          "level": "1"
        },
        {
          "name": "ジャンプ鉄人",
          "level": "1"
        },
        {
          "name": "見切り",
          "level": "1"
        },
        {
          "name": "達人芸",
          "level": "1"
        }
      ],
      "slots": "300"
    }
  ],
  [
    {
      "part": "頭",
      "name": "エーデルXフロール",
      "skills": [
        {
          "name": "早食い",
          "level": "1"
        },
        {
          "name": "毒耐性",
          "level": "2"
        }
      ],
      "slots": "420"
    },
    {
      "part": "胴",
      "name": "エーデルXトロンコ",
      "skills": [
        {
          "name": "体力回復量UP",
          "level": "2"
        },
        {
          "name": "広域化",
          "level": "1"
        }
      ],
      "slots": "310"
    },
    {
      "part": "腕",
      "name": "エーデルXラーマ",
      "skills": [
        {
          "name": "広域化",
          "level": "3"
        },
        {
          "name": "捕獲名人",
          "level": "1"
        }
      ],
      "slots": "210"
    },
    {
      "part": "腰",
      "name": "エーデルXオッハ",
      "skills": [
        {
          "name": "体力回復量UP",
          "level": "1"
        },
        {
          "name": "広域化",
          "level": "1"
        }
      ],
      "slots": "420"
    },
    {
      "part": "脚",
      "name": "エーデルXライース",
      "skills": [
        {
          "name": "早食い",
          "level": "2"
        },
        {
          "name": "毒耐性",
          "level": "1"
        }
      ],
      "slots": "410"
    }
  ],
  [
    {
      "part": "頭",
      "name": "エスピナゲヒル",
      "skills": [
        {
          "name": "麻痺属性強化",
          "level": "3"
        },
        {
          "name": "破壊王",
          "level": "1"
        }
      ],
      "slots": "220"
    },
    {
      "part": "胴",
      "name": "エスピナムスケル",
      "skills": [
        {
          "name": "破壊王",
          "level": "2"
        },
        {
          "name": "攻勢",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腕",
      "name": "エスピナフォアスト",
      "skills": [
        {
          "name": "剛刃研磨",
          "level": "2"
        },
        {
          "name": "速射強化",
          "level": "1"
        },
        {
          "name": "攻勢",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腰",
      "name": "エスピナナーベル",
      "skills": [
        {
          "name": "挑戦者",
          "level": "2"
        },
        {
          "name": "剛刃研磨",
          "level": "1"
        }
      ],
      "slots": "310"
    },
    {
      "part": "脚",
      "name": "エスピナフェルゼ",
      "skills": [
        {
          "name": "毒属性強化",
          "level": "3"
        },
        {
          "name": "ひるみ軽減",
          "level": "2"
        },
        {
          "name": "攻勢",
          "level": "1"
        }
      ],
      "slots": "410"
    }
  ],
  [
    {
      "part": "頭",
      "name": "エスピナZゲヒル",
      "skills": [
        {
          "name": "業物",
          "level": "1"
        },
        {
          "name": "弾丸節約",
          "level": "1"
        },
        {
          "name": "攻撃",
          "level": "2"
        }
      ],
      "slots": "320"
    },
    {
      "part": "胴",
      "name": "エスピナZムスケル",
      "skills": [
        {
          "name": "ランナー",
          "level": "2"
        },
        {
          "name": "攻撃",
          "level": "2"
        },
        {
          "name": "チャージマスター",
          "level": "1"
        }
      ],
      "slots": "220"
    },
    {
      "part": "腕",
      "name": "エスピナZファオスト",
      "skills": [
        {
          "name": "業物",
          "level": "2"
        },
        {
          "name": "弾丸節約",
          "level": "2"
        },
        {
          "name": "攻撃",
          "level": "1"
        },
        {
          "name": "剛心",
          "level": "1"
        }
      ],
      "slots": "420"
    },
    {
      "part": "腰",
      "name": "エスピナZナーベル",
      "skills": [
        {
          "name": "ランナー",
          "level": "1"
        },
        {
          "name": "連撃",
          "level": "1"
        },
        {
          "name": "チャージマスター",
          "level": "2"
        }
      ],
      "slots": "411"
    },
    {
      "part": "脚",
      "name": "エスピナZフェルゼ",
      "skills": [
        {
          "name": "攻撃",
          "level": "1"
        },
        {
          "name": "連撃",
          "level": "2"
        },
        {
          "name": "剛心",
          "level": "1"
        }
      ],
      "slots": "410"
    }
  ],
  [
    {
      "part": "頭",
      "name": "オロミドXヘルム",
      "skills": [
        {
          "name": "高速変形",
          "level": "2"
        },
        {
          "name": "強化持続",
          "level": "1"
        }
      ],
      "slots": "220"
    },
    {
      "part": "胴",
      "name": "オロミドXメイル",
      "skills": [
        {
          "name": "業物",
          "level": "2"
        },
        {
          "name": "強化持続",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腕",
      "name": "オロミドXアーム",
      "skills": [
        {
          "name": "高速変形",
          "level": "1"
        },
        {
          "name": "回避性能",
          "level": "2"
        }
      ],
      "slots": "410"
    },
    {
      "part": "腰",
      "name": "オロミドXコイル",
      "skills": [
        {
          "name": "弾丸節約",
          "level": "1"
        },
        {
          "name": "強化持続",
          "level": "1"
        },
        {
          "name": "回避性能",
          "level": "2"
        }
      ],
      "slots": "410"
    },
    {
      "part": "脚",
      "name": "オロミドXグリーヴ",
      "skills": [
        {
          "name": "業物",
          "level": "1"
        },
        {
          "name": "弾丸節約",
          "level": "1"
        },
        {
          "name": "回避性能",
          "level": "1"
        }
      ],
      "slots": "420"
    }
  ],
  [
    {
      "part": "頭",
      "name": "オロミドZヘルム",
      "skills": [
        {
          "name": "火属性攻撃強化",
          "level": "3"
        },
        {
          "name": "逆恨み",
          "level": "1"
        },
        {
          "name": "火事場力",
          "level": "2"
        }
      ],
      "slots": "300"
    },
    {
      "part": "胴",
      "name": "オロミドZメイル",
      "skills": [
        {
          "name": "火事場力",
          "level": "2"
        },
        {
          "name": "死中に活",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "腕",
      "name": "オロミドZアーム",
      "skills": [
        {
          "name": "逆恨み",
          "level": "1"
        },
        {
          "name": "火事場力",
          "level": "1"
        },
        {
          "name": "ガード強化",
          "level": "2"
        }
      ],
      "slots": "300"
    },
    {
      "part": "腰",
      "name": "オロミドZコイル",
      "skills": [
        {
          "name": "死中に活",
          "level": "1"
        },
        {
          "name": "ガード強化",
          "level": "1"
        }
      ],
      "slots": "330"
    },
    {
      "part": "脚",
      "name": "オロミドZグリーヴ",
      "skills": [
        {
          "name": "逆恨み",
          "level": "1"
        },
        {
          "name": "死中に活",
          "level": "1"
        }
      ],
      "slots": "330"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ガーグァXフェイク",
      "skills": [
        {
          "name": "飛び込み",
          "level": "1"
        },
        {
          "name": "幸運",
          "level": "2"
        }
      ],
      "slots": "400"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ガーディアンヘルム",
      "skills": [
        {
          "name": "耳栓",
          "level": "1"
        },
        {
          "name": "ガード性能",
          "level": "1"
        },
        {
          "name": "ガード強化",
          "level": "1"
        }
      ],
      "slots": "300"
    },
    {
      "part": "胴",
      "name": "ガーディアンスーツ",
      "skills": [
        {
          "name": "砥石使用高速化",
          "level": "1"
        },
        {
          "name": "属性やられ耐性",
          "level": "1"
        },
        {
          "name": "ガード性能",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "腕",
      "name": "ガーディアンアーム",
      "skills": [
        {
          "name": "耳栓",
          "level": "1"
        },
        {
          "name": "砥石使用高速化",
          "level": "1"
        },
        {
          "name": "ガード性能",
          "level": "1"
        }
      ],
      "slots": "221"
    },
    {
      "part": "腰",
      "name": "ガーディアンコイル",
      "skills": [
        {
          "name": "陽動",
          "level": "1"
        },
        {
          "name": "砥石使用高速化",
          "level": "1"
        },
        {
          "name": "属性やられ耐性",
          "level": "2"
        }
      ],
      "slots": "411"
    },
    {
      "part": "脚",
      "name": "ガーディアンブーツ",
      "skills": [
        {
          "name": "耳栓",
          "level": "1"
        },
        {
          "name": "ガード性能",
          "level": "2"
        }
      ],
      "slots": "210"
    }
  ],
  [
    {
      "part": "頭",
      "name": "カイザーXクラウン",
      "skills": [
        {
          "name": "見切り",
          "level": "3"
        },
        {
          "name": "超会心",
          "level": "1"
        }
      ],
      "slots": "111"
    },
    {
      "part": "胴",
      "name": "カイザーXメイル",
      "skills": [
        {
          "name": "弾導強化",
          "level": "2"
        },
        {
          "name": "見切り",
          "level": "2"
        },
        {
          "name": "達人芸",
          "level": "2"
        }
      ],
      "slots": "110"
    },
    {
      "part": "腕",
      "name": "カイザーXアーム",
      "skills": [
        {
          "name": "見切り",
          "level": "1"
        },
        {
          "name": "超会心",
          "level": "1"
        },
        {
          "name": "炎鱗の恩恵",
          "level": "1"
        }
      ],
      "slots": "300"
    },
    {
      "part": "腰",
      "name": "カイザーXコイル",
      "skills": [
        {
          "name": "見切り",
          "level": "1"
        },
        {
          "name": "炎鱗の恩恵",
          "level": "2"
        }
      ],
      "slots": "300"
    },
    {
      "part": "脚",
      "name": "カイザーXグリーヴ",
      "skills": [
        {
          "name": "超会心",
          "level": "1"
        },
        {
          "name": "炎鱗の恩恵",
          "level": "1"
        },
        {
          "name": "達人芸",
          "level": "1"
        }
      ],
      "slots": "200"
    }
  ],
  [
    {
      "part": "頭",
      "name": "カガチXヘルム",
      "skills": [
        {
          "name": "体術",
          "level": "1"
        },
        {
          "name": "ジャンプ鉄人",
          "level": "1"
        },
        {
          "name": "見切り",
          "level": "3"
        }
      ],
      "slots": "110"
    },
    {
      "part": "胴",
      "name": "カガチXメイル",
      "skills": [
        {
          "name": "会心撃【属性】",
          "level": "1"
        },
        {
          "name": "見切り",
          "level": "1"
        },
        {
          "name": "心眼",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腕",
      "name": "カガチXアーム",
      "skills": [
        {
          "name": "不屈",
          "level": "1"
        },
        {
          "name": "体術",
          "level": "3"
        }
      ],
      "slots": "300"
    },
    {
      "part": "腰",
      "name": "カガチXコイル",
      "skills": [
        {
          "name": "貫通弾・貫通矢強化",
          "level": "1"
        },
        {
          "name": "会心撃【属性】",
          "level": "1"
        },
        {
          "name": "心眼",
          "level": "2"
        }
      ],
      "slots": "410"
    },
    {
      "part": "脚",
      "name": "カガチXグリーヴ",
      "skills": [
        {
          "name": "体術",
          "level": "1"
        },
        {
          "name": "会心撃【属性】",
          "level": "1"
        },
        {
          "name": "見切り",
          "level": "2"
        }
      ],
      "slots": "210"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ガブラスXヘッド",
      "skills": [
        {
          "name": "風圧耐性",
          "level": "1"
        },
        {
          "name": "毒属性強化",
          "level": "1"
        }
      ],
      "slots": "421"
    },
    {
      "part": "胴",
      "name": "ガブラスXボディ",
      "skills": [
        {
          "name": "毒属性強化",
          "level": "2"
        },
        {
          "name": "超会心",
          "level": "1"
        }
      ],
      "slots": "311"
    },
    {
      "part": "腕",
      "name": "ガブラスXグラブ",
      "skills": [
        {
          "name": "風圧耐性",
          "level": "2"
        },
        {
          "name": "会心撃【属性】",
          "level": "1"
        }
      ],
      "slots": "411"
    },
    {
      "part": "腰",
      "name": "ガブラスXベルト",
      "skills": [
        {
          "name": "毒耐性",
          "level": "1"
        },
        {
          "name": "会心撃【属性】",
          "level": "2"
        }
      ],
      "slots": "220"
    },
    {
      "part": "脚",
      "name": "ガブラスXフット",
      "skills": [
        {
          "name": "毒耐性",
          "level": "2"
        },
        {
          "name": "弱点特効",
          "level": "1"
        }
      ],
      "slots": "410"
    }
  ],
  [
    {
      "part": "頭",
      "name": "カムラノ装【頭巾】継",
      "skills": [
        {
          "name": "精霊の加護",
          "level": "2"
        },
        {
          "name": "死中に活",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "胴",
      "name": "カムラノ装【上衣】継",
      "skills": [
        {
          "name": "壁面移動",
          "level": "1"
        },
        {
          "name": "見切り",
          "level": "1"
        },
        {
          "name": "翔蟲使い",
          "level": "2"
        }
      ],
      "slots": "110"
    },
    {
      "part": "腕",
      "name": "カムラノ装【手甲】継",
      "skills": [
        {
          "name": "見切り",
          "level": "2"
        },
        {
          "name": "火事場力",
          "level": "1"
        },
        {
          "name": "精霊の加護",
          "level": "1"
        }
      ],
      "slots": "100"
    },
    {
      "part": "腰",
      "name": "カムラノ装【腰巻】継",
      "skills": [
        {
          "name": "見切り",
          "level": "1"
        },
        {
          "name": "翔蟲使い",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "脚",
      "name": "カムラノ装【脚絆】継",
      "skills": [
        {
          "name": "滑走強化",
          "level": "1"
        },
        {
          "name": "壁面移動",
          "level": "2"
        },
        {
          "name": "死中に活",
          "level": "1"
        }
      ],
      "slots": "200"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ギザミヘルム",
      "skills": [
        {
          "name": "フルチャージ",
          "level": "2"
        },
        {
          "name": "見切り",
          "level": "1"
        }
      ],
      "slots": "220"
    },
    {
      "part": "胴",
      "name": "ギザミメイル",
      "skills": [
        {
          "name": "ランナー",
          "level": "2"
        },
        {
          "name": "見切り",
          "level": "1"
        },
        {
          "name": "研磨術【鋭】",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "腕",
      "name": "ギザミアーム",
      "skills": [
        {
          "name": "フルチャージ",
          "level": "1"
        },
        {
          "name": "貫通弾・貫通矢強化",
          "level": "1"
        },
        {
          "name": "見切り",
          "level": "2"
        },
        {
          "name": "研磨術【鋭】",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "腰",
      "name": "ギザミコイル",
      "skills": [
        {
          "name": "見切り",
          "level": "2"
        },
        {
          "name": "匠",
          "level": "1"
        },
        {
          "name": "研磨術【鋭】",
          "level": "1"
        }
      ],
      "slots": "100"
    },
    {
      "part": "脚",
      "name": "ギザミグリーヴ",
      "skills": [
        {
          "name": "ランナー",
          "level": "1"
        },
        {
          "name": "貫通弾・貫通矢強化",
          "level": "2"
        },
        {
          "name": "見切り",
          "level": "1"
        },
        {
          "name": "匠",
          "level": "2"
        }
      ],
      "slots": "100"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ギルドバード/スカラーフード",
      "skills": [
        {
          "name": "キノコ大好き",
          "level": "1"
        },
        {
          "name": "回避性能",
          "level": "2"
        }
      ],
      "slots": "300"
    },
    {
      "part": "胴",
      "name": "ギルドバード/スカラースーツ",
      "skills": [
        {
          "name": "回避性能",
          "level": "1"
        },
        {
          "name": "精霊の加護",
          "level": "1"
        },
        {
          "name": "幸運",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腕",
      "name": "ギルドバード/スカラーグラブ",
      "skills": [
        {
          "name": "キノコ大好き",
          "level": "1"
        },
        {
          "name": "回避性能",
          "level": "1"
        },
        {
          "name": "幸運",
          "level": "1"
        }
      ],
      "slots": "210"
    },
    {
      "part": "腰",
      "name": "ギルドバード/スカラースカート",
      "skills": [
        {
          "name": "笛吹き名人",
          "level": "1"
        },
        {
          "name": "回避性能",
          "level": "1"
        },
        {
          "name": "幸運",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "脚",
      "name": "ギルドバード/スカラーソックス",
      "skills": [
        {
          "name": "キノコ大好き",
          "level": "1"
        },
        {
          "name": "精霊の加護",
          "level": "2"
        }
      ],
      "slots": "400"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ギルドパレスヘルム",
      "skills": [
        {
          "name": "挑戦者",
          "level": "1"
        },
        {
          "name": "攻めの守勢",
          "level": "2"
        }
      ],
      "slots": "300"
    },
    {
      "part": "胴",
      "name": "ギルドパレスメイル",
      "skills": [
        {
          "name": "挑戦者",
          "level": "2"
        },
        {
          "name": "火事場力",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腕",
      "name": "ギルドパレスアーム",
      "skills": [
        {
          "name": "挑戦者",
          "level": "2"
        },
        {
          "name": "壁面移動【翔】",
          "level": "1"
        },
        {
          "name": "災禍転福",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腰",
      "name": "ギルドパレスコイル",
      "skills": [
        {
          "name": "攻めの守勢",
          "level": "1"
        },
        {
          "name": "火事場力",
          "level": "2"
        }
      ],
      "slots": "310"
    },
    {
      "part": "脚",
      "name": "ギルドパレスグリーヴ",
      "skills": [
        {
          "name": "火事場力",
          "level": "2"
        },
        {
          "name": "災禍転福",
          "level": "2"
        }
      ],
      "slots": "300"
    }
  ],
  [
    {
      "part": "頭",
      "name": "クシャナXアンク",
      "skills": [
        {
          "name": "通常弾・連射矢強化",
          "level": "2"
        },
        {
          "name": "匠",
          "level": "2"
        }
      ],
      "slots": "400"
    },
    {
      "part": "胴",
      "name": "クシャナXディール",
      "skills": [
        {
          "name": "装填拡張",
          "level": "2"
        },
        {
          "name": "回復速度",
          "level": "3"
        },
        {
          "name": "匠",
          "level": "2"
        }
      ],
      "slots": "220"
    },
    {
      "part": "腕",
      "name": "クシャナXハトゥー",
      "skills": [
        {
          "name": "挑戦者",
          "level": "2"
        },
        {
          "name": "鋼殻の恩恵",
          "level": "2"
        }
      ],
      "slots": "100"
    },
    {
      "part": "腰",
      "name": "クシャナXアンダ",
      "skills": [
        {
          "name": "挑戦者",
          "level": "3"
        },
        {
          "name": "鋼殻の恩恵",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "脚",
      "name": "クシャナXペイル",
      "skills": [
        {
          "name": "通常弾・連射矢強化",
          "level": "1"
        },
        {
          "name": "匠",
          "level": "1"
        },
        {
          "name": "鋼殻の恩恵",
          "level": "1"
        }
      ],
      "slots": "400"
    }
  ],
  [
    {
      "part": "頭",
      "name": "クルルXヘルム",
      "skills": [
        {
          "name": "納刀術",
          "level": "1"
        },
        {
          "name": "渾身",
          "level": "2"
        },
        {
          "name": "気絶耐性",
          "level": "1"
        }
      ],
      "slots": "110"
    },
    {
      "part": "胴",
      "name": "クルルXメイル",
      "skills": [
        {
          "name": "納刀術",
          "level": "1"
        },
        {
          "name": "KO術",
          "level": "2"
        }
      ],
      "slots": "210"
    },
    {
      "part": "腕",
      "name": "クルルXアーム",
      "skills": [
        {
          "name": "納刀術",
          "level": "1"
        },
        {
          "name": "スタミナ奪取",
          "level": "2"
        },
        {
          "name": "KO術",
          "level": "1"
        }
      ],
      "slots": "210"
    },
    {
      "part": "腰",
      "name": "クルルXコイル",
      "skills": [
        {
          "name": "スタミナ奪取",
          "level": "1"
        },
        {
          "name": "渾身",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "脚",
      "name": "クルルXグリーヴ",
      "skills": [
        {
          "name": "気絶耐性",
          "level": "2"
        },
        {
          "name": "見切り",
          "level": "2"
        }
      ],
      "slots": "300"
    }
  ],
  [
    {
      "part": "頭",
      "name": "グローシアヘッド",
      "skills": [
        {
          "name": "スタミナ奪取",
          "level": "1"
        },
        {
          "name": "攻撃",
          "level": "2"
        },
        {
          "name": "研磨術【鋭】",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "胴",
      "name": "グローシアメイル",
      "skills": [
        {
          "name": "耐震",
          "level": "1"
        },
        {
          "name": "スタミナ奪取",
          "level": "1"
        },
        {
          "name": "攻撃",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "腕",
      "name": "グローシアアーム",
      "skills": [
        {
          "name": "力の解放",
          "level": "2"
        },
        {
          "name": "攻撃",
          "level": "1"
        },
        {
          "name": "回復速度",
          "level": "3"
        }
      ],
      "slots": "111"
    },
    {
      "part": "腰",
      "name": "グローシアコイル",
      "skills": [
        {
          "name": "耐震",
          "level": "2"
        },
        {
          "name": "スタミナ奪取",
          "level": "1"
        },
        {
          "name": "攻撃",
          "level": "1"
        }
      ],
      "slots": "300"
    },
    {
      "part": "脚",
      "name": "グローシアグリーヴ",
      "skills": [
        {
          "name": "力の解放",
          "level": "1"
        },
        {
          "name": "攻撃",
          "level": "2"
        },
        {
          "name": "研磨術【鋭】",
          "level": "1"
        }
      ],
      "slots": "200"
    }
  ],
  [
    {
      "part": "腰",
      "name": "クロムメタルXコイル",
      "skills": [
        {
          "name": "ひるみ軽減",
          "level": "1"
        }
      ],
      "slots": "321"
    },
    {
      "part": "脚",
      "name": "クロムメタルXブーツ",
      "skills": [
        {
          "name": "ひるみ軽減",
          "level": "2"
        }
      ],
      "slots": "400"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ケイオス/ネフィリムヘルム",
      "skills": [
        {
          "name": "見切り",
          "level": "2"
        },
        {
          "name": "弱点特効【属性】",
          "level": "1"
        },
        {
          "name": "奮闘",
          "level": "1"
        }
      ],
      "slots": "420"
    },
    {
      "part": "胴",
      "name": "ケイオス/ネフィリムメイル",
      "skills": [
        {
          "name": "見切り",
          "level": "2"
        },
        {
          "name": "超会心",
          "level": "2"
        },
        {
          "name": "奮闘",
          "level": "1"
        }
      ],
      "slots": "310"
    },
    {
      "part": "腕",
      "name": "ケイオス/ネフィリムアーム",
      "skills": [
        {
          "name": "逆恨み",
          "level": "3"
        },
        {
          "name": "狂竜症【蝕】",
          "level": "1"
        },
        {
          "name": "狂化",
          "level": "1"
        }
      ],
      "slots": "300"
    },
    {
      "part": "腰",
      "name": "ケイオス/ネフィリムフォールド",
      "skills": [
        {
          "name": "逆恨み",
          "level": "2"
        },
        {
          "name": "見切り",
          "level": "2"
        },
        {
          "name": "奮闘",
          "level": "1"
        }
      ],
      "slots": "311"
    },
    {
      "part": "脚",
      "name": "ケイオス/ネフィリムグリーヴ",
      "skills": [
        {
          "name": "災禍転福",
          "level": "3"
        },
        {
          "name": "狂竜症【蝕】",
          "level": "1"
        },
        {
          "name": "狂化",
          "level": "1"
        }
      ],
      "slots": "300"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ゴールドルナヘルム",
      "skills": [
        {
          "name": "連撃",
          "level": "2"
        },
        {
          "name": "攻勢",
          "level": "1"
        },
        {
          "name": "状態異常確定蓄積",
          "level": "2"
        }
      ],
      "slots": "220"
    },
    {
      "part": "胴",
      "name": "ゴールドルナメイル",
      "skills": [
        {
          "name": "逆襲",
          "level": "2"
        },
        {
          "name": "精霊の加護",
          "level": "3"
        },
        {
          "name": "顕如盤石",
          "level": "2"
        }
      ],
      "slots": "320"
    },
    {
      "part": "腕",
      "name": "ゴールドルナアーム",
      "skills": [
        {
          "name": "フルチャージ",
          "level": "1"
        },
        {
          "name": "超会心",
          "level": "1"
        },
        {
          "name": "連撃",
          "level": "1"
        }
      ],
      "slots": "421"
    },
    {
      "part": "腰",
      "name": "ゴールドルナコイル",
      "skills": [
        {
          "name": "回避性能",
          "level": "2"
        },
        {
          "name": "攻勢",
          "level": "1"
        },
        {
          "name": "状態異常確定蓄積",
          "level": "1"
        }
      ],
      "slots": "320"
    },
    {
      "part": "脚",
      "name": "ゴールドルナグリーヴ",
      "skills": [
        {
          "name": "フルチャージ",
          "level": "2"
        },
        {
          "name": "体力回復量UP",
          "level": "2"
        },
        {
          "name": "顕如盤石",
          "level": "3"
        }
      ],
      "slots": "420"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ゴアヘルム",
      "skills": [
        {
          "name": "挑戦者",
          "level": "1"
        },
        {
          "name": "体術",
          "level": "2"
        }
      ],
      "slots": "220"
    },
    {
      "part": "胴",
      "name": "ゴアメイル",
      "skills": [
        {
          "name": "体術",
          "level": "3"
        },
        {
          "name": "災禍転福",
          "level": "1"
        }
      ],
      "slots": "210"
    },
    {
      "part": "腕",
      "name": "ゴアアーム",
      "skills": [
        {
          "name": "早食い",
          "level": "2"
        },
        {
          "name": "災禍転福",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腰",
      "name": "ゴアコイル",
      "skills": [
        {
          "name": "挑戦者",
          "level": "1"
        },
        {
          "name": "災禍転福",
          "level": "1"
        }
      ],
      "slots": "420"
    },
    {
      "part": "脚",
      "name": "ゴアグリーヴ",
      "skills": [
        {
          "name": "早食い",
          "level": "1"
        },
        {
          "name": "挑戦者",
          "level": "3"
        }
      ],
      "slots": "111"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ゴギョウノゾウメン",
      "skills": [
        {
          "name": "弾導強化",
          "level": "1"
        },
        {
          "name": "鬼火纏",
          "level": "2"
        },
        {
          "name": "心眼",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "胴",
      "name": "ゴギョウノカリギヌ",
      "skills": [
        {
          "name": "属性やられ耐性",
          "level": "1"
        },
        {
          "name": "心眼",
          "level": "2"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腕",
      "name": "ゴギョウノコテ",
      "skills": [
        {
          "name": "弾導強化",
          "level": "2"
        },
        {
          "name": "精霊の加護",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腰",
      "name": "ゴギョウノオビ",
      "skills": [
        {
          "name": "乗り名人",
          "level": "1"
        },
        {
          "name": "属性やられ耐性",
          "level": "2"
        }
      ],
      "slots": "400"
    },
    {
      "part": "脚",
      "name": "ゴギョウノグソク",
      "skills": [
        {
          "name": "鬼火纏",
          "level": "1"
        },
        {
          "name": "精霊の加護",
          "level": "2"
        }
      ],
      "slots": "300"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ゴシャXヘルム",
      "skills": [
        {
          "name": "抜刀術【技】",
          "level": "1"
        },
        {
          "name": "納刀術",
          "level": "1"
        },
        {
          "name": "挑戦者",
          "level": "2"
        }
      ],
      "slots": "210"
    },
    {
      "part": "胴",
      "name": "ゴシャXメイル",
      "skills": [
        {
          "name": "抜刀術【技】",
          "level": "1"
        },
        {
          "name": "逆恨み",
          "level": "3"
        }
      ],
      "slots": "210"
    },
    {
      "part": "腕",
      "name": "ゴシャXアーム",
      "skills": [
        {
          "name": "抜刀術【技】",
          "level": "1"
        },
        {
          "name": "抜刀術【力】",
          "level": "1"
        },
        {
          "name": "納刀術",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腰",
      "name": "ゴシャXコイル",
      "skills": [
        {
          "name": "抜刀術【力】",
          "level": "1"
        },
        {
          "name": "納刀術",
          "level": "1"
        },
        {
          "name": "逆恨み",
          "level": "2"
        }
      ],
      "slots": "211"
    },
    {
      "part": "脚",
      "name": "ゴシャXグリーヴ",
      "skills": [
        {
          "name": "抜刀術【力】",
          "level": "1"
        },
        {
          "name": "挑戦者",
          "level": "3"
        },
        {
          "name": "弾導強化",
          "level": "1"
        }
      ],
      "slots": "300"
    }
  ],
  [
    {
      "part": "胴",
      "name": "コトルXメイル",
      "skills": [
        {
          "name": "特殊射撃強化",
          "level": "2"
        },
        {
          "name": "回避性能",
          "level": "1"
        },
        {
          "name": "ガード強化",
          "level": "2"
        }
      ],
      "slots": "211"
    },
    {
      "part": "腰",
      "name": "コトルXコイル",
      "skills": [
        {
          "name": "特殊射撃強化",
          "level": "1"
        },
        {
          "name": "回避性能",
          "level": "1"
        },
        {
          "name": "ガード強化",
          "level": "1"
        }
      ],
      "slots": "300"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ゴルムヘルム",
      "skills": [
        {
          "name": "耐震",
          "level": "1"
        },
        {
          "name": "渾身",
          "level": "1"
        },
        {
          "name": "チャージマスター",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "胴",
      "name": "ゴルムメイル",
      "skills": [
        {
          "name": "耐震",
          "level": "2"
        },
        {
          "name": "ひるみ軽減",
          "level": "3"
        }
      ],
      "slots": "411"
    },
    {
      "part": "腕",
      "name": "ゴルムアーム",
      "skills": [
        {
          "name": "集中",
          "level": "2"
        },
        {
          "name": "チャージマスター",
          "level": "1"
        }
      ],
      "slots": "221"
    },
    {
      "part": "腰",
      "name": "ゴルムフォールド",
      "skills": [
        {
          "name": "集中",
          "level": "1"
        },
        {
          "name": "渾身",
          "level": "2"
        },
        {
          "name": "供応",
          "level": "1"
        }
      ],
      "slots": "320"
    },
    {
      "part": "脚",
      "name": "ゴルムグリーヴ",
      "skills": [
        {
          "name": "スタミナ奪取",
          "level": "2"
        },
        {
          "name": "KO術",
          "level": "2"
        },
        {
          "name": "チャージマスター",
          "level": "1"
        }
      ],
      "slots": "221"
    }
  ],
  [
    {
      "part": "頭",
      "name": "サージュフート",
      "skills": [
        {
          "name": "広域化",
          "level": "3"
        },
        {
          "name": "捕獲名人",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "胴",
      "name": "サージュスーツ",
      "skills": [
        {
          "name": "満足感",
          "level": "1"
        },
        {
          "name": "属性やられ耐性",
          "level": "3"
        }
      ],
      "slots": "221"
    },
    {
      "part": "腕",
      "name": "サージュアーム",
      "skills": [
        {
          "name": "満足感",
          "level": "1"
        },
        {
          "name": "体力回復量UP",
          "level": "3"
        }
      ],
      "slots": "221"
    },
    {
      "part": "腰",
      "name": "サージュコイル",
      "skills": [
        {
          "name": "満足感",
          "level": "1"
        },
        {
          "name": "納刀術",
          "level": "3"
        }
      ],
      "slots": "311"
    },
    {
      "part": "脚",
      "name": "サージュブーツ",
      "skills": [
        {
          "name": "広域化",
          "level": "2"
        },
        {
          "name": "アイテム使用強化",
          "level": "3"
        }
      ],
      "slots": "200"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ザザミヘルム",
      "skills": [
        {
          "name": "納刀術",
          "level": "2"
        },
        {
          "name": "耐震",
          "level": "2"
        }
      ],
      "slots": "100"
    },
    {
      "part": "胴",
      "name": "ザザミメイル",
      "skills": [
        {
          "name": "砲弾装填",
          "level": "1"
        },
        {
          "name": "通常弾・連射矢強化",
          "level": "1"
        },
        {
          "name": "装填拡張",
          "level": "1"
        },
        {
          "name": "ガード性能",
          "level": "3"
        }
      ],
      "slots": "100"
    },
    {
      "part": "腕",
      "name": "ザザミアーム",
      "skills": [
        {
          "name": "通常弾・連射矢強化",
          "level": "2"
        },
        {
          "name": "ガード性能",
          "level": "2"
        },
        {
          "name": "ガード強化",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "腰",
      "name": "ザザミコイル",
      "skills": [
        {
          "name": "納刀術",
          "level": "1"
        },
        {
          "name": "匠",
          "level": "1"
        },
        {
          "name": "チューンアップ",
          "level": "1"
        }
      ],
      "slots": "220"
    },
    {
      "part": "脚",
      "name": "ザザミグリーヴ",
      "skills": [
        {
          "name": "耐震",
          "level": "1"
        },
        {
          "name": "匠",
          "level": "1"
        },
        {
          "name": "チューンアップ",
          "level": "1"
        }
      ],
      "slots": "400"
    }
  ],
  [
    {
      "part": "頭",
      "name": "シーカーヘッド",
      "skills": [
        {
          "name": "体術",
          "level": "3"
        },
        {
          "name": "回復速度",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "胴",
      "name": "シーカーベスト",
      "skills": [
        {
          "name": "回復速度",
          "level": "1"
        },
        {
          "name": "幸運",
          "level": "2"
        }
      ],
      "slots": "220"
    },
    {
      "part": "腕",
      "name": "シーカーグラブ",
      "skills": [
        {
          "name": "早食い",
          "level": "3"
        },
        {
          "name": "キノコ大好き",
          "level": "1"
        }
      ],
      "slots": "111"
    },
    {
      "part": "腰",
      "name": "シーカーベルト",
      "skills": [
        {
          "name": "キノコ大好き",
          "level": "2"
        },
        {
          "name": "回復速度",
          "level": "1"
        }
      ],
      "slots": "310"
    },
    {
      "part": "脚",
      "name": "シーカーパンツ",
      "skills": [
        {
          "name": "体術",
          "level": "2"
        },
        {
          "name": "幸運",
          "level": "1"
        }
      ],
      "slots": "400"
    }
  ],
  [
    {
      "part": "頭",
      "name": "しまきのこうべ真",
      "skills": [
        {
          "name": "集中",
          "level": "1"
        },
        {
          "name": "回避距離UP",
          "level": "1"
        },
        {
          "name": "風紋の一致",
          "level": "1"
        },
        {
          "name": "風雷の合一",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "胴",
      "name": "しまきのむなさき真",
      "skills": [
        {
          "name": "ガード性能",
          "level": "1"
        },
        {
          "name": "ひるみ軽減",
          "level": "1"
        },
        {
          "name": "風紋の一致",
          "level": "1"
        },
        {
          "name": "風雷の合一",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "腕",
      "name": "しまきのかいな真",
      "skills": [
        {
          "name": "体術",
          "level": "1"
        },
        {
          "name": "スタミナ急速回復",
          "level": "1"
        },
        {
          "name": "風紋の一致",
          "level": "1"
        },
        {
          "name": "風雷の合一",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "腰",
      "name": "しまきのこしもと真",
      "skills": [
        {
          "name": "強化持続",
          "level": "1"
        },
        {
          "name": "回避性能",
          "level": "1"
        },
        {
          "name": "風紋の一致",
          "level": "1"
        },
        {
          "name": "風雷の合一",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "脚",
      "name": "しまきのおみあし真",
      "skills": [
        {
          "name": "KO術",
          "level": "1"
        },
        {
          "name": "ガード強化",
          "level": "1"
        },
        {
          "name": "風紋の一致",
          "level": "1"
        },
        {
          "name": "風雷の合一",
          "level": "1"
        }
      ],
      "slots": "200"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ジャギィXフェイク",
      "skills": [
        {
          "name": "ランナー",
          "level": "2"
        },
        {
          "name": "滑走強化",
          "level": "1"
        }
      ],
      "slots": "310"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ジャナフXヘルム",
      "skills": [
        {
          "name": "集中",
          "level": "1"
        },
        {
          "name": "攻撃",
          "level": "1"
        },
        {
          "name": "KO術",
          "level": "1"
        }
      ],
      "slots": "300"
    },
    {
      "part": "胴",
      "name": "ジャナフXメイル",
      "skills": [
        {
          "name": "ランナー",
          "level": "1"
        },
        {
          "name": "挑戦者",
          "level": "1"
        },
        {
          "name": "集中",
          "level": "2"
        }
      ],
      "slots": "110"
    },
    {
      "part": "腕",
      "name": "ジャナフXアーム",
      "skills": [
        {
          "name": "挑戦者",
          "level": "1"
        },
        {
          "name": "攻撃",
          "level": "2"
        },
        {
          "name": "KO術",
          "level": "2"
        }
      ],
      "slots": "100"
    },
    {
      "part": "腰",
      "name": "ジャナフXコイル",
      "skills": [
        {
          "name": "攻撃",
          "level": "2"
        }
      ],
      "slots": "411"
    },
    {
      "part": "脚",
      "name": "ジャナフXグリーヴ",
      "skills": [
        {
          "name": "ランナー",
          "level": "2"
        },
        {
          "name": "挑戦者",
          "level": "2"
        }
      ],
      "slots": "300"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ジュラXヘルム",
      "skills": [
        {
          "name": "攻めの守勢",
          "level": "1"
        },
        {
          "name": "逆恨み",
          "level": "1"
        },
        {
          "name": "回避距離UP",
          "level": "2"
        }
      ],
      "slots": "210"
    },
    {
      "part": "胴",
      "name": "ジュラXメイル",
      "skills": [
        {
          "name": "逆恨み",
          "level": "1"
        },
        {
          "name": "強化持続",
          "level": "2"
        },
        {
          "name": "回避距離UP",
          "level": "1"
        },
        {
          "name": "チューンアップ",
          "level": "1"
        }
      ],
      "slots": "111"
    },
    {
      "part": "腕",
      "name": "ジュラXアーム",
      "skills": [
        {
          "name": "逆恨み",
          "level": "2"
        }
      ],
      "slots": "321"
    },
    {
      "part": "腰",
      "name": "ジュラXコイル",
      "skills": [
        {
          "name": "攻めの守勢",
          "level": "2"
        },
        {
          "name": "強化持続",
          "level": "1"
        },
        {
          "name": "ガード強化",
          "level": "1"
        }
      ],
      "slots": "110"
    },
    {
      "part": "脚",
      "name": "ジュラXグリーヴ",
      "skills": [
        {
          "name": "逆恨み",
          "level": "1"
        },
        {
          "name": "ガード強化",
          "level": "2"
        }
      ],
      "slots": "411"
    }
  ],
  [
    {
      "part": "頭",
      "name": "シルバーソルヘルム",
      "skills": [
        {
          "name": "風圧耐性",
          "level": "3"
        },
        {
          "name": "会心撃【属性】",
          "level": "1"
        },
        {
          "name": "超会心",
          "level": "2"
        }
      ],
      "slots": "411"
    },
    {
      "part": "胴",
      "name": "シルバーソルメイル",
      "skills": [
        {
          "name": "火属性攻撃強化",
          "level": "3"
        },
        {
          "name": "会心撃【属性】",
          "level": "1"
        },
        {
          "name": "弱点特効【属性】",
          "level": "1"
        }
      ],
      "slots": "431"
    },
    {
      "part": "腕",
      "name": "シルバーソルアーム",
      "skills": [
        {
          "name": "体術",
          "level": "2"
        },
        {
          "name": "会心撃【属性】",
          "level": "1"
        },
        {
          "name": "弱点特効【属性】",
          "level": "1"
        }
      ],
      "slots": "411"
    },
    {
      "part": "腰",
      "name": "シルバーソルコイル",
      "skills": [
        {
          "name": "体術",
          "level": "3"
        },
        {
          "name": "合気",
          "level": "1"
        },
        {
          "name": "弱点特効【属性】",
          "level": "1"
        }
      ],
      "slots": "211"
    },
    {
      "part": "脚",
      "name": "シルバーソルグリーヴ",
      "skills": [
        {
          "name": "渾身",
          "level": "2"
        },
        {
          "name": "超会心",
          "level": "1"
        },
        {
          "name": "合気",
          "level": "1"
        }
      ],
      "slots": "221"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ジンオウXヘルム",
      "skills": [
        {
          "name": "力の解放",
          "level": "1"
        },
        {
          "name": "会心撃【属性】",
          "level": "1"
        },
        {
          "name": "弱点特効",
          "level": "1"
        }
      ],
      "slots": "300"
    },
    {
      "part": "胴",
      "name": "ジンオウXメイル",
      "skills": [
        {
          "name": "力の解放",
          "level": "1"
        },
        {
          "name": "雷属性攻撃強化",
          "level": "2"
        },
        {
          "name": "弱点特効",
          "level": "2"
        }
      ],
      "slots": "111"
    },
    {
      "part": "腕",
      "name": "ジンオウXアーム",
      "skills": [
        {
          "name": "力の解放",
          "level": "1"
        },
        {
          "name": "体術",
          "level": "2"
        },
        {
          "name": "会心撃【属性】",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "腰",
      "name": "ジンオウXコイル",
      "skills": [
        {
          "name": "力の解放",
          "level": "1"
        },
        {
          "name": "雷属性攻撃強化",
          "level": "3"
        },
        {
          "name": "会心撃【属性】",
          "level": "1"
        }
      ],
      "slots": "310"
    },
    {
      "part": "脚",
      "name": "ジンオウXグリーヴ",
      "skills": [
        {
          "name": "力の解放",
          "level": "1"
        },
        {
          "name": "体術",
          "level": "3"
        },
        {
          "name": "翔蟲使い",
          "level": "1"
        }
      ],
      "slots": "100"
    }
  ],
  [
    {
      "part": "頭",
      "name": "スカルXヘッド",
      "skills": [
        {
          "name": "不屈",
          "level": "1"
        },
        {
          "name": "匠",
          "level": "1"
        }
      ],
      "slots": "400"
    }
  ],
  [
    {
      "part": "頭",
      "name": "スカルダX/スパイオXテスタ",
      "skills": [
        {
          "name": "毒属性強化",
          "level": "3"
        },
        {
          "name": "力の解放",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "胴",
      "name": "スカルダX/スパイオXペット",
      "skills": [
        {
          "name": "力の解放",
          "level": "2"
        },
        {
          "name": "心眼",
          "level": "1"
        }
      ],
      "slots": "300"
    },
    {
      "part": "腕",
      "name": "スカルダX/スパイオXマーノ",
      "skills": [
        {
          "name": "毒耐性",
          "level": "1"
        },
        {
          "name": "力の解放",
          "level": "1"
        }
      ],
      "slots": "411"
    },
    {
      "part": "腰",
      "name": "スカルダX/スパイオXアンカ",
      "skills": [
        {
          "name": "毒耐性",
          "level": "1"
        },
        {
          "name": "弱点特効",
          "level": "2"
        }
      ],
      "slots": "100"
    },
    {
      "part": "脚",
      "name": "スカルダX/スパイオXガンバ",
      "skills": [
        {
          "name": "毒耐性",
          "level": "1"
        },
        {
          "name": "力の解放",
          "level": "1"
        },
        {
          "name": "心眼",
          "level": "2"
        }
      ],
      "slots": "200"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ズワロXフード",
      "skills": [
        {
          "name": "陽動",
          "level": "1"
        },
        {
          "name": "満足感",
          "level": "1"
        },
        {
          "name": "早食い",
          "level": "2"
        }
      ],
      "slots": "320"
    },
    {
      "part": "胴",
      "name": "ズワロXマント",
      "skills": [
        {
          "name": "満足感",
          "level": "2"
        },
        {
          "name": "アイテム使用強化",
          "level": "2"
        }
      ],
      "slots": "410"
    }
  ],
  [
    {
      "part": "頭",
      "name": "セイラーフード",
      "skills": [
        {
          "name": "供応",
          "level": "1"
        }
      ],
      "slots": "421"
    },
    {
      "part": "胴",
      "name": "セイラースーツ",
      "skills": [
        {
          "name": "回避性能",
          "level": "4"
        },
        {
          "name": "翔蟲使い",
          "level": "1"
        }
      ],
      "slots": "110"
    },
    {
      "part": "腕",
      "name": "セイラーグラブ",
      "skills": [
        {
          "name": "集中",
          "level": "3"
        },
        {
          "name": "翔蟲使い",
          "level": "1"
        }
      ],
      "slots": "300"
    },
    {
      "part": "腰",
      "name": "セイラーコイル",
      "skills": [
        {
          "name": "弾導強化",
          "level": "3"
        },
        {
          "name": "翔蟲使い",
          "level": "1"
        },
        {
          "name": "剛刃研磨",
          "level": "3"
        }
      ],
      "slots": "300"
    },
    {
      "part": "脚",
      "name": "セイラーフット",
      "skills": [
        {
          "name": "ランナー",
          "level": "3"
        },
        {
          "name": "回避性能",
          "level": "1"
        }
      ],
      "slots": "300"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ゼクスヘルム",
      "skills": [
        {
          "name": "気絶耐性",
          "level": "2"
        },
        {
          "name": "連撃",
          "level": "1"
        }
      ],
      "slots": "421"
    },
    {
      "part": "胴",
      "name": "ゼクスメイル",
      "skills": [
        {
          "name": "スタミナ急速回復",
          "level": "2"
        },
        {
          "name": "連撃",
          "level": "1"
        }
      ],
      "slots": "310"
    },
    {
      "part": "腕",
      "name": "ゼクスアーム",
      "skills": [
        {
          "name": "スタミナ急速回復",
          "level": "1"
        },
        {
          "name": "気絶耐性",
          "level": "1"
        },
        {
          "name": "連撃",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "腰",
      "name": "ゼクスコイル",
      "skills": [
        {
          "name": "砥石使用高速化",
          "level": "2"
        },
        {
          "name": "強化持続",
          "level": "3"
        }
      ],
      "slots": "210"
    },
    {
      "part": "脚",
      "name": "ゼクスグリーヴ",
      "skills": [
        {
          "name": "業物",
          "level": "3"
        },
        {
          "name": "弾丸節約",
          "level": "3"
        },
        {
          "name": "雷属性攻撃強化",
          "level": "3"
        }
      ],
      "slots": "110"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ダマスクXヘルム",
      "skills": [
        {
          "name": "耳栓",
          "level": "2"
        },
        {
          "name": "耐震",
          "level": "2"
        }
      ],
      "slots": "100"
    },
    {
      "part": "胴",
      "name": "ダマスクXメイル",
      "skills": [
        {
          "name": "耐震",
          "level": "1"
        },
        {
          "name": "貫通弾・貫通矢強化",
          "level": "2"
        },
        {
          "name": "匠",
          "level": "2"
        }
      ],
      "slots": "210"
    },
    {
      "part": "腕",
      "name": "ダマスクXアーム",
      "skills": [
        {
          "name": "耳栓",
          "level": "2"
        },
        {
          "name": "属性やられ耐性",
          "level": "1"
        }
      ],
      "slots": "210"
    },
    {
      "part": "腰",
      "name": "ダマスクXコイル",
      "skills": [
        {
          "name": "耳栓",
          "level": "1"
        },
        {
          "name": "属性やられ耐性",
          "level": "1"
        },
        {
          "name": "貫通弾・貫通矢強化",
          "level": "1"
        },
        {
          "name": "匠",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "脚",
      "name": "ダマスクXグリーヴ",
      "skills": [
        {
          "name": "属性やられ耐性",
          "level": "1"
        },
        {
          "name": "装填拡張",
          "level": "2"
        },
        {
          "name": "匠",
          "level": "2"
        }
      ],
      "slots": "300"
    }
  ],
  [
    {
      "part": "頭",
      "name": "タロスヘルム",
      "skills": [
        {
          "name": "体力回復量UP",
          "level": "1"
        },
        {
          "name": "死中に活",
          "level": "2"
        }
      ],
      "slots": "300"
    },
    {
      "part": "胴",
      "name": "タロスメイル",
      "skills": [
        {
          "name": "龍属性攻撃強化",
          "level": "2"
        },
        {
          "name": "体力回復量UP",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腕",
      "name": "タロスアーム",
      "skills": [
        {
          "name": "龍属性攻撃強化",
          "level": "1"
        },
        {
          "name": "ブレ抑制",
          "level": "2"
        }
      ],
      "slots": "420"
    },
    {
      "part": "腰",
      "name": "タロスフォールド",
      "skills": [
        {
          "name": "龍耐性",
          "level": "3"
        },
        {
          "name": "龍属性攻撃強化",
          "level": "2"
        }
      ],
      "slots": "400"
    },
    {
      "part": "脚",
      "name": "タロスグリーヴ",
      "skills": [
        {
          "name": "ブレ抑制",
          "level": "1"
        },
        {
          "name": "体力回復量UP",
          "level": "1"
        },
        {
          "name": "死中に活",
          "level": "1"
        }
      ],
      "slots": "220"
    }
  ],
  [
    {
      "part": "頭",
      "name": "チェーンXヘッド",
      "skills": [
        {
          "name": "防御",
          "level": "2"
        },
        {
          "name": "スタミナ急速回復",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "胴",
      "name": "チェーンXベスト",
      "skills": [
        {
          "name": "防御",
          "level": "1"
        },
        {
          "name": "ガード性能",
          "level": "1"
        },
        {
          "name": "ひるみ軽減",
          "level": "2"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腕",
      "name": "チェーンXグラブ",
      "skills": [
        {
          "name": "防御",
          "level": "2"
        },
        {
          "name": "スタミナ急速回復",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "腰",
      "name": "チェーンXベルト",
      "skills": [
        {
          "name": "防御",
          "level": "2"
        },
        {
          "name": "ガード性能",
          "level": "2"
        },
        {
          "name": "ひるみ軽減",
          "level": "1"
        }
      ],
      "slots": "111"
    },
    {
      "part": "脚",
      "name": "チェーンXパンツ",
      "skills": [
        {
          "name": "スタミナ急速回復",
          "level": "1"
        },
        {
          "name": "ガード性能",
          "level": "2"
        }
      ],
      "slots": "111"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ディアブロXヘルム",
      "skills": [
        {
          "name": "耐震",
          "level": "1"
        },
        {
          "name": "ガード性能",
          "level": "3"
        }
      ],
      "slots": "300"
    },
    {
      "part": "胴",
      "name": "ディアブロXメイル",
      "skills": [
        {
          "name": "攻めの守勢",
          "level": "1"
        },
        {
          "name": "ガード性能",
          "level": "2"
        }
      ],
      "slots": "300"
    },
    {
      "part": "腕",
      "name": "ディアブロXアーム",
      "skills": [
        {
          "name": "攻めの守勢",
          "level": "2"
        },
        {
          "name": "スタミナ急速回復",
          "level": "1"
        },
        {
          "name": "貫通弾・貫通矢強化",
          "level": "2"
        }
      ],
      "slots": "210"
    },
    {
      "part": "腰",
      "name": "ディアブロXコイル",
      "skills": [
        {
          "name": "スタミナ急速回復",
          "level": "2"
        },
        {
          "name": "火事場力",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "脚",
      "name": "ディアブロXグリーヴ",
      "skills": [
        {
          "name": "耐震",
          "level": "2"
        },
        {
          "name": "火事場力",
          "level": "2"
        }
      ],
      "slots": "300"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ディグニイヤリング",
      "skills": [
        {
          "name": "集中",
          "level": "2"
        },
        {
          "name": "強化持続",
          "level": "2"
        },
        {
          "name": "回避距離UP",
          "level": "1"
        }
      ],
      "slots": "100"
    },
    {
      "part": "胴",
      "name": "ディグニジャケット",
      "skills": [
        {
          "name": "高速変形",
          "level": "1"
        },
        {
          "name": "回避性能",
          "level": "1"
        },
        {
          "name": "回避距離UP",
          "level": "2"
        }
      ],
      "slots": "210"
    },
    {
      "part": "腕",
      "name": "ディグニグローブ",
      "skills": [
        {
          "name": "業物",
          "level": "1"
        },
        {
          "name": "高速変形",
          "level": "1"
        },
        {
          "name": "回避性能",
          "level": "2"
        }
      ],
      "slots": "300"
    },
    {
      "part": "腰",
      "name": "ディグニクイス",
      "skills": [
        {
          "name": "業物",
          "level": "1"
        },
        {
          "name": "集中",
          "level": "1"
        },
        {
          "name": "回避性能",
          "level": "2"
        }
      ],
      "slots": "300"
    },
    {
      "part": "脚",
      "name": "ディグニグリーヴ",
      "skills": [
        {
          "name": "業物",
          "level": "1"
        },
        {
          "name": "高速変形",
          "level": "1"
        },
        {
          "name": "強化持続",
          "level": "1"
        }
      ],
      "slots": "400"
    }
  ],
  [
    {
      "part": "頭",
      "name": "デスギアXゲヒル",
      "skills": [
        {
          "name": "砥石使用高速化",
          "level": "2"
        },
        {
          "name": "攻撃",
          "level": "1"
        },
        {
          "name": "剛刃研磨",
          "level": "1"
        }
      ],
      "slots": "300"
    },
    {
      "part": "胴",
      "name": "デスギアXムスケル",
      "skills": [
        {
          "name": "不屈",
          "level": "1"
        },
        {
          "name": "砥石使用高速化",
          "level": "1"
        },
        {
          "name": "高速変形",
          "level": "2"
        }
      ],
      "slots": "200"
    },
    {
      "part": "腕",
      "name": "デスギアXファオスト",
      "skills": [
        {
          "name": "渾身",
          "level": "2"
        },
        {
          "name": "攻撃",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "腰",
      "name": "デスギアXナーベル",
      "skills": [
        {
          "name": "渾身",
          "level": "1"
        },
        {
          "name": "攻撃",
          "level": "1"
        },
        {
          "name": "剛刃研磨",
          "level": "1"
        }
      ],
      "slots": "210"
    },
    {
      "part": "脚",
      "name": "デスギアXフェルゼ",
      "skills": [
        {
          "name": "高速変形",
          "level": "1"
        },
        {
          "name": "攻撃",
          "level": "1"
        },
        {
          "name": "剛刃研磨",
          "level": "1"
        }
      ],
      "slots": "210"
    }
  ],
  [
    {
      "part": "頭",
      "name": "テンゴXヘルム",
      "skills": [
        {
          "name": "広域化",
          "level": "2"
        },
        {
          "name": "気絶耐性",
          "level": "2"
        },
        {
          "name": "アイテム使用強化",
          "level": "1"
        }
      ],
      "slots": "210"
    },
    {
      "part": "胴",
      "name": "テンゴXメイル",
      "skills": [
        {
          "name": "広域化",
          "level": "3"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腕",
      "name": "テンゴXアーム",
      "skills": [
        {
          "name": "早食い",
          "level": "1"
        },
        {
          "name": "気絶耐性",
          "level": "1"
        },
        {
          "name": "アイテム使用強化",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腰",
      "name": "テンゴXコイル",
      "skills": [
        {
          "name": "早食い",
          "level": "1"
        },
        {
          "name": "渾身",
          "level": "2"
        },
        {
          "name": "アイテム使用強化",
          "level": "1"
        }
      ],
      "slots": "110"
    },
    {
      "part": "脚",
      "name": "テンゴXグリーヴ",
      "skills": [
        {
          "name": "早食い",
          "level": "1"
        },
        {
          "name": "弾丸節約",
          "level": "1"
        },
        {
          "name": "渾身",
          "level": "1"
        },
        {
          "name": "達人芸",
          "level": "1"
        }
      ],
      "slots": "211"
    }
  ],
  [
    {
      "part": "頭",
      "name": "テンゴZヘルム",
      "skills": [
        {
          "name": "爆破属性強化",
          "level": "1"
        },
        {
          "name": "力の解放",
          "level": "2"
        }
      ],
      "slots": "320"
    },
    {
      "part": "胴",
      "name": "テンゴZメイル",
      "skills": [
        {
          "name": "火耐性",
          "level": "2"
        },
        {
          "name": "納刀術",
          "level": "1"
        },
        {
          "name": "回復速度",
          "level": "3"
        }
      ],
      "slots": "411"
    },
    {
      "part": "腕",
      "name": "テンゴZアーム",
      "skills": [
        {
          "name": "納刀術",
          "level": "1"
        },
        {
          "name": "力の解放",
          "level": "3"
        }
      ],
      "slots": "210"
    },
    {
      "part": "腰",
      "name": "テンゴZコイル",
      "skills": [
        {
          "name": "爆破属性強化",
          "level": "2"
        },
        {
          "name": "散弾・拡散矢強化",
          "level": "2"
        },
        {
          "name": "匠",
          "level": "2"
        }
      ],
      "slots": "100"
    },
    {
      "part": "脚",
      "name": "テンゴZグリーヴ",
      "skills": [
        {
          "name": "納刀術",
          "level": "1"
        },
        {
          "name": "散弾・拡散矢強化",
          "level": "1"
        },
        {
          "name": "剛刃研磨",
          "level": "2"
        }
      ],
      "slots": "410"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ドーベルXヘルム",
      "skills": [
        {
          "name": "龍属性攻撃強化",
          "level": "1"
        },
        {
          "name": "ランナー",
          "level": "1"
        },
        {
          "name": "攻撃",
          "level": "1"
        },
        {
          "name": "火事場力",
          "level": "1"
        }
      ],
      "slots": "210"
    },
    {
      "part": "胴",
      "name": "ドーベルXメイル",
      "skills": [
        {
          "name": "龍属性攻撃強化",
          "level": "1"
        },
        {
          "name": "集中",
          "level": "1"
        },
        {
          "name": "強化持続",
          "level": "1"
        },
        {
          "name": "火事場力",
          "level": "2"
        }
      ],
      "slots": "100"
    },
    {
      "part": "腕",
      "name": "ドーベルXアーム",
      "skills": [
        {
          "name": "龍属性攻撃強化",
          "level": "1"
        },
        {
          "name": "反動軽減",
          "level": "2"
        },
        {
          "name": "強化持続",
          "level": "2"
        }
      ],
      "slots": "311"
    },
    {
      "part": "腰",
      "name": "ドーベルXコイル",
      "skills": [
        {
          "name": "龍属性攻撃強化",
          "level": "1"
        },
        {
          "name": "ランナー",
          "level": "2"
        },
        {
          "name": "攻撃",
          "level": "2"
        }
      ],
      "slots": "200"
    },
    {
      "part": "脚",
      "name": "ドーベルXグリーヴ",
      "skills": [
        {
          "name": "龍属性攻撃強化",
          "level": "1"
        },
        {
          "name": "集中",
          "level": "2"
        },
        {
          "name": "火事場力",
          "level": "2"
        }
      ],
      "slots": "200"
    }
  ],
  [
    {
      "part": "腕",
      "name": "ドロスXメイル",
      "skills": [
        {
          "name": "水属性攻撃強化",
          "level": "2"
        }
      ],
      "slots": "420"
    },
    {
      "part": "腰",
      "name": "ドロスXコイル",
      "skills": [
        {
          "name": "陽動",
          "level": "1"
        },
        {
          "name": "逆恨み",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "脚",
      "name": "ドロスXグリーヴ",
      "skills": [
        {
          "name": "水属性攻撃強化",
          "level": "3"
        }
      ],
      "slots": "410"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ナルガXヘルム",
      "skills": [
        {
          "name": "体術",
          "level": "2"
        },
        {
          "name": "回避性能",
          "level": "1"
        },
        {
          "name": "ひるみ軽減",
          "level": "1"
        }
      ],
      "slots": "300"
    },
    {
      "part": "胴",
      "name": "ナルガXメイル",
      "skills": [
        {
          "name": "回避性能",
          "level": "1"
        },
        {
          "name": "見切り",
          "level": "2"
        },
        {
          "name": "ひるみ軽減",
          "level": "1"
        }
      ],
      "slots": "310"
    },
    {
      "part": "腕",
      "name": "ナルガXアーム",
      "skills": [
        {
          "name": "体術",
          "level": "2"
        },
        {
          "name": "回避性能",
          "level": "1"
        },
        {
          "name": "回避距離UP",
          "level": "1"
        }
      ],
      "slots": "210"
    },
    {
      "part": "腰",
      "name": "ナルガXコイル",
      "skills": [
        {
          "name": "回避距離UP",
          "level": "2"
        },
        {
          "name": "見切り",
          "level": "2"
        },
        {
          "name": "ひるみ軽減",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "脚",
      "name": "ナルガXグリーヴ",
      "skills": [
        {
          "name": "体術",
          "level": "1"
        },
        {
          "name": "回避性能",
          "level": "2"
        },
        {
          "name": "見切り",
          "level": "2"
        }
      ],
      "slots": "100"
    }
  ],
  [
    {
      "part": "頭",
      "name": "なるかみのこうべ真",
      "skills": [
        {
          "name": "攻めの守勢",
          "level": "1"
        },
        {
          "name": "高速変形",
          "level": "1"
        },
        {
          "name": "雷紋の一致",
          "level": "1"
        },
        {
          "name": "風雷の合一",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "胴",
      "name": "なるかみのむなさき真",
      "skills": [
        {
          "name": "抜刀術【技】",
          "level": "1"
        },
        {
          "name": "体術",
          "level": "1"
        },
        {
          "name": "雷紋の一致",
          "level": "1"
        },
        {
          "name": "風雷の合一",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "腕",
      "name": "なるかみのかいな真",
      "skills": [
        {
          "name": "破壊王",
          "level": "1"
        },
        {
          "name": "ガード性能",
          "level": "1"
        },
        {
          "name": "雷紋の一致",
          "level": "1"
        },
        {
          "name": "風雷の合一",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "腰",
      "name": "なるかみのこしもと真",
      "skills": [
        {
          "name": "砲術",
          "level": "1"
        },
        {
          "name": "ガード性能",
          "level": "1"
        },
        {
          "name": "雷紋の一致",
          "level": "1"
        },
        {
          "name": "風雷の合一",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "脚",
      "name": "なるかみのおみあし真",
      "skills": [
        {
          "name": "ランナー",
          "level": "1"
        },
        {
          "name": "回避性能",
          "level": "1"
        },
        {
          "name": "雷紋の一致",
          "level": "1"
        },
        {
          "name": "風雷の合一",
          "level": "1"
        }
      ],
      "slots": "200"
    }
  ],
  [
    {
      "part": "頭",
      "name": "バギィXヘルム",
      "skills": [
        {
          "name": "睡眠属性強化",
          "level": "1"
        },
        {
          "name": "氷耐性",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "胴",
      "name": "バギィXメイル",
      "skills": [
        {
          "name": "睡眠属性強化",
          "level": "1"
        },
        {
          "name": "攻撃",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腕",
      "name": "バギィXアーム",
      "skills": [
        {
          "name": "睡眠耐性",
          "level": "2"
        },
        {
          "name": "睡眠属性強化",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "腰",
      "name": "バギィXコイル",
      "skills": [
        {
          "name": "睡眠耐性",
          "level": "1"
        },
        {
          "name": "攻撃",
          "level": "2"
        }
      ],
      "slots": "300"
    },
    {
      "part": "脚",
      "name": "バギィXグリーヴ",
      "skills": [
        {
          "name": "攻撃",
          "level": "2"
        },
        {
          "name": "氷耐性",
          "level": "2"
        }
      ],
      "slots": "210"
    }
  ],
  [
    {
      "part": "頭",
      "name": "バサルXヘルム",
      "skills": [
        {
          "name": "砲弾装填",
          "level": "1"
        },
        {
          "name": "砲術",
          "level": "2"
        },
        {
          "name": "防御",
          "level": "2"
        }
      ],
      "slots": "210"
    },
    {
      "part": "胴",
      "name": "バサルXメイル",
      "skills": [
        {
          "name": "砲弾装填",
          "level": "1"
        },
        {
          "name": "力の解放",
          "level": "1"
        },
        {
          "name": "ガード性能",
          "level": "2"
        }
      ],
      "slots": "110"
    },
    {
      "part": "腕",
      "name": "バサルXアーム",
      "skills": [
        {
          "name": "砥石使用高速化",
          "level": "1"
        },
        {
          "name": "ガード性能",
          "level": "3"
        }
      ],
      "slots": "210"
    },
    {
      "part": "腰",
      "name": "バサルXコイル",
      "skills": [
        {
          "name": "防御",
          "level": "3"
        },
        {
          "name": "砥石使用高速化",
          "level": "2"
        },
        {
          "name": "力の解放",
          "level": "1"
        },
        {
          "name": "装填速度",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "脚",
      "name": "バサルXグリーヴ",
      "skills": [
        {
          "name": "砲弾装填",
          "level": "1"
        },
        {
          "name": "防御",
          "level": "2"
        },
        {
          "name": "力の解放",
          "level": "2"
        },
        {
          "name": "装填速度",
          "level": "1"
        }
      ],
      "slots": "300"
    }
  ],
  [
    {
      "part": "頭",
      "name": "バゼルXヘルム",
      "skills": [
        {
          "name": "業物",
          "level": "1"
        },
        {
          "name": "砲術",
          "level": "1"
        },
        {
          "name": "ガード性能",
          "level": "2"
        }
      ],
      "slots": "300"
    },
    {
      "part": "胴",
      "name": "バゼルXメイル",
      "skills": [
        {
          "name": "業物",
          "level": "1"
        },
        {
          "name": "挑戦者",
          "level": "2"
        },
        {
          "name": "ガード強化",
          "level": "2"
        }
      ],
      "slots": "110"
    },
    {
      "part": "腕",
      "name": "バゼルXアーム",
      "skills": [
        {
          "name": "挑戦者",
          "level": "2"
        },
        {
          "name": "ガード性能",
          "level": "1"
        },
        {
          "name": "ガード強化",
          "level": "1"
        }
      ],
      "slots": "220"
    },
    {
      "part": "腰",
      "name": "バゼルXコイル",
      "skills": [
        {
          "name": "業物",
          "level": "1"
        },
        {
          "name": "砲弾装填",
          "level": "2"
        },
        {
          "name": "ガード性能",
          "level": "1"
        }
      ],
      "slots": "220"
    },
    {
      "part": "脚",
      "name": "バゼルXグリーヴ",
      "skills": [
        {
          "name": "砲術",
          "level": "2"
        },
        {
          "name": "挑戦者",
          "level": "1"
        },
        {
          "name": "ガード性能",
          "level": "1"
        }
      ],
      "slots": "300"
    }
  ],
  [
    {
      "part": "頭",
      "name": "バルバニアパッチ",
      "skills": [
        {
          "name": "逆恨み",
          "level": "2"
        },
        {
          "name": "弱点特効",
          "level": "1"
        },
        {
          "name": "捕獲名人",
          "level": "1"
        }
      ],
      "slots": "300"
    },
    {
      "part": "胴",
      "name": "バルバニアベスト",
      "skills": [
        {
          "name": "破壊王",
          "level": "1"
        },
        {
          "name": "逆恨み",
          "level": "1"
        },
        {
          "name": "逆襲",
          "level": "1"
        }
      ],
      "slots": "221"
    },
    {
      "part": "腕",
      "name": "バルバニアグラブ",
      "skills": [
        {
          "name": "破壊王",
          "level": "1"
        },
        {
          "name": "弱点特効",
          "level": "1"
        },
        {
          "name": "幸運",
          "level": "1"
        }
      ],
      "slots": "211"
    },
    {
      "part": "腰",
      "name": "バルバニアベルト",
      "skills": [
        {
          "name": "逆襲",
          "level": "1"
        },
        {
          "name": "弱点特効",
          "level": "1"
        },
        {
          "name": "幸運",
          "level": "1"
        }
      ],
      "slots": "211"
    },
    {
      "part": "脚",
      "name": "バルバニアブーツ",
      "skills": [
        {
          "name": "破壊王",
          "level": "1"
        },
        {
          "name": "逆襲",
          "level": "1"
        },
        {
          "name": "幸運",
          "level": "1"
        }
      ],
      "slots": "300"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ハンターXヘルム",
      "skills": [
        {
          "name": "攻撃",
          "level": "2"
        },
        {
          "name": "アイテム使用強化",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "胴",
      "name": "ハンターXメイル",
      "skills": [
        {
          "name": "攻撃",
          "level": "1"
        },
        {
          "name": "アイテム使用強化",
          "level": "1"
        },
        {
          "name": "匠",
          "level": "1"
        }
      ],
      "slots": "100"
    },
    {
      "part": "腕",
      "name": "ハンターXアーム",
      "skills": [
        {
          "name": "納刀術",
          "level": "1"
        },
        {
          "name": "装填拡張",
          "level": "1"
        },
        {
          "name": "匠",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "腰",
      "name": "ハンターXコイル",
      "skills": [
        {
          "name": "気絶耐性",
          "level": "2"
        },
        {
          "name": "アイテム使用強化",
          "level": "1"
        },
        {
          "name": "匠",
          "level": "1"
        }
      ],
      "slots": "110"
    },
    {
      "part": "脚",
      "name": "ハンターXグリーヴ",
      "skills": [
        {
          "name": "納刀術",
          "level": "1"
        },
        {
          "name": "攻撃",
          "level": "2"
        },
        {
          "name": "気絶耐性",
          "level": "1"
        }
      ],
      "slots": "200"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ファンゴXフェイク",
      "skills": [
        {
          "name": "陽動",
          "level": "1"
        },
        {
          "name": "挑戦者",
          "level": "3"
        }
      ],
      "slots": "300"
    }
  ],
  [
    {
      "part": "頭",
      "name": "プケプケXヘルム",
      "skills": [
        {
          "name": "毒属性強化",
          "level": "1"
        },
        {
          "name": "特殊射撃強化",
          "level": "1"
        },
        {
          "name": "弾丸節約",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "胴",
      "name": "プケプケXメイル",
      "skills": [
        {
          "name": "特殊射撃強化",
          "level": "1"
        },
        {
          "name": "砥石使用高速化",
          "level": "2"
        },
        {
          "name": "体術",
          "level": "3"
        }
      ],
      "slots": "200"
    },
    {
      "part": "腕",
      "name": "プケプケXアーム",
      "skills": [
        {
          "name": "弾導強化",
          "level": "2"
        },
        {
          "name": "弾丸節約",
          "level": "1"
        }
      ],
      "slots": "300"
    },
    {
      "part": "腰",
      "name": "プケプケXコイル",
      "skills": [
        {
          "name": "毒属性強化",
          "level": "2"
        },
        {
          "name": "弾丸節約",
          "level": "1"
        }
      ],
      "slots": "420"
    },
    {
      "part": "脚",
      "name": "プケプケXグリーヴ",
      "skills": [
        {
          "name": "弾導強化",
          "level": "1"
        },
        {
          "name": "体術",
          "level": "2"
        }
      ],
      "slots": "211"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ブナハXハット",
      "skills": [
        {
          "name": "反動軽減",
          "level": "2"
        },
        {
          "name": "毒属性強化",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "胴",
      "name": "ブナハXスーツ",
      "skills": [
        {
          "name": "麻痺属性強化",
          "level": "1"
        },
        {
          "name": "回避性能",
          "level": "2"
        }
      ],
      "slots": "310"
    },
    {
      "part": "腕",
      "name": "ブナハXグローブ",
      "skills": [
        {
          "name": "毒属性強化",
          "level": "2"
        },
        {
          "name": "回避性能",
          "level": "2"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腰",
      "name": "ブナハXコイル",
      "skills": [
        {
          "name": "麻痺属性強化",
          "level": "2"
        },
        {
          "name": "回避性能",
          "level": "1"
        }
      ],
      "slots": "310"
    },
    {
      "part": "脚",
      "name": "ブナハXブーツ",
      "skills": [
        {
          "name": "ブレ抑制",
          "level": "2"
        },
        {
          "name": "反動軽減",
          "level": "1"
        }
      ],
      "slots": "410"
    }
  ],
  [
    {
      "part": "頭",
      "name": "プライドヘルム",
      "skills": [
        {
          "name": "耳栓",
          "level": "1"
        },
        {
          "name": "力の解放",
          "level": "2"
        },
        {
          "name": "攻撃",
          "level": "1"
        }
      ],
      "slots": "320"
    },
    {
      "part": "胴",
      "name": "プライドメイル",
      "skills": [
        {
          "name": "早食い",
          "level": "2"
        },
        {
          "name": "攻撃",
          "level": "1"
        },
        {
          "name": "根性",
          "level": "1"
        }
      ],
      "slots": "300"
    },
    {
      "part": "腕",
      "name": "プライドアーム",
      "skills": [
        {
          "name": "耳栓",
          "level": "1"
        },
        {
          "name": "弱点特効",
          "level": "1"
        },
        {
          "name": "根性",
          "level": "1"
        }
      ],
      "slots": "310"
    },
    {
      "part": "腰",
      "name": "プライドコイル",
      "skills": [
        {
          "name": "耳栓",
          "level": "1"
        },
        {
          "name": "力の解放",
          "level": "3"
        },
        {
          "name": "スタミナ急速回復",
          "level": "1"
        }
      ],
      "slots": "211"
    },
    {
      "part": "脚",
      "name": "プライドグリーヴ",
      "skills": [
        {
          "name": "スタミナ奪取",
          "level": "3"
        },
        {
          "name": "スタミナ急速回復",
          "level": "2"
        },
        {
          "name": "根性",
          "level": "1"
        }
      ],
      "slots": "22"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ブリゲイドXロボス",
      "skills": [
        {
          "name": "植生学",
          "level": "2"
        },
        {
          "name": "精霊の加護",
          "level": "2"
        }
      ],
      "slots": "320"
    },
    {
      "part": "胴",
      "name": "ブリゲイドXスーツ",
      "skills": [
        {
          "name": "ランナー",
          "level": "1"
        },
        {
          "name": "地質学",
          "level": "1"
        },
        {
          "name": "捕獲名人",
          "level": "1"
        }
      ],
      "slots": "320"
    },
    {
      "part": "腕",
      "name": "ブリゲイドXアーム",
      "skills": [
        {
          "name": "地質学",
          "level": "2"
        },
        {
          "name": "精霊の加護",
          "level": "1"
        },
        {
          "name": "供応",
          "level": "1"
        }
      ],
      "slots": "330"
    },
    {
      "part": "腰",
      "name": "ブリゲイドXコイル",
      "skills": [
        {
          "name": "幸運",
          "level": "2"
        }
      ],
      "slots": "310"
    },
    {
      "part": "脚",
      "name": "ブリゲイドXブーツ",
      "skills": [
        {
          "name": "ランナー",
          "level": "2"
        },
        {
          "name": "植生学",
          "level": "2"
        },
        {
          "name": "剥ぎ取り鉄人",
          "level": "1"
        }
      ],
      "slots": "221"
    }
  ],
  [
    {
      "part": "頭",
      "name": "フルフルXヘルム",
      "skills": [
        {
          "name": "体力回復量UP",
          "level": "1"
        },
        {
          "name": "集中",
          "level": "1"
        },
        {
          "name": "雷属性攻撃強化",
          "level": "2"
        }
      ],
      "slots": "400"
    },
    {
      "part": "胴",
      "name": "フルフルXメイル",
      "skills": [
        {
          "name": "体力回復量UP",
          "level": "2"
        },
        {
          "name": "壁面移動",
          "level": "2"
        }
      ],
      "slots": "111"
    },
    {
      "part": "腕",
      "name": "フルフルXアーム",
      "skills": [
        {
          "name": "雷属性攻撃強化",
          "level": "3"
        },
        {
          "name": "回復速度",
          "level": "1"
        },
        {
          "name": "壁面移動",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "腰",
      "name": "フルフルXコイル",
      "skills": [
        {
          "name": "集中",
          "level": "1"
        },
        {
          "name": "KO術",
          "level": "1"
        }
      ],
      "slots": "411"
    },
    {
      "part": "脚",
      "name": "フルフルXグリーヴ",
      "skills": [
        {
          "name": "集中",
          "level": "1"
        },
        {
          "name": "KO術",
          "level": "2"
        },
        {
          "name": "回復速度",
          "level": "2"
        }
      ],
      "slots": "210"
    }
  ],
  [
    {
      "part": "頭",
      "name": "フロギィXヘルム",
      "skills": [
        {
          "name": "回避距離UP",
          "level": "1"
        },
        {
          "name": "速射強化",
          "level": "2"
        }
      ],
      "slots": "100"
    },
    {
      "part": "胴",
      "name": "フロギィXメイル",
      "skills": [
        {
          "name": "毒耐性",
          "level": "1"
        },
        {
          "name": "毒属性強化",
          "level": "1"
        },
        {
          "name": "速射強化",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腕",
      "name": "フロギィXアーム",
      "skills": [
        {
          "name": "毒耐性",
          "level": "2"
        },
        {
          "name": "装填拡張",
          "level": "1"
        },
        {
          "name": "心眼",
          "level": "2"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腰",
      "name": "フロギィXコイル",
      "skills": [
        {
          "name": "毒属性強化",
          "level": "2"
        },
        {
          "name": "装填拡張",
          "level": "2"
        }
      ],
      "slots": "100"
    },
    {
      "part": "脚",
      "name": "フロギィXグリーヴ",
      "skills": [
        {
          "name": "回避距離UP",
          "level": "2"
        }
      ],
      "slots": "410"
    }
  ],
  [
    {
      "part": "頭",
      "name": "プロフゴーグル/シャリテバレッタ",
      "skills": [
        {
          "name": "耳栓",
          "level": "2"
        },
        {
          "name": "回復速度",
          "level": "3"
        }
      ],
      "slots": "111"
    },
    {
      "part": "胴",
      "name": "プロフジャケット/シャリテジャケット",
      "skills": [
        {
          "name": "耳栓",
          "level": "3"
        },
        {
          "name": "腹減り耐性",
          "level": "1"
        }
      ],
      "slots": "110"
    },
    {
      "part": "腕",
      "name": "プロフミトン/シャリテグローブ",
      "skills": [
        {
          "name": "腹減り耐性",
          "level": "1"
        },
        {
          "name": "精霊の加護",
          "level": "3"
        }
      ],
      "slots": "221"
    },
    {
      "part": "腰",
      "name": "プロフベルト/シャリテスカート",
      "skills": [
        {
          "name": "耐震",
          "level": "3"
        },
        {
          "name": "ひるみ軽減",
          "level": "2"
        }
      ],
      "slots": "221"
    },
    {
      "part": "脚",
      "name": "プロフブーツ/シャリテブーツ",
      "skills": [
        {
          "name": "ランナー",
          "level": "3"
        },
        {
          "name": "腹減り耐性",
          "level": "1"
        }
      ],
      "slots": "410"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ベリオXヘルム",
      "skills": [
        {
          "name": "破壊王",
          "level": "1"
        },
        {
          "name": "納刀術",
          "level": "2"
        },
        {
          "name": "氷属性攻撃強化",
          "level": "2"
        }
      ],
      "slots": "110"
    },
    {
      "part": "胴",
      "name": "ベリオXメイル",
      "skills": [
        {
          "name": "納刀術",
          "level": "1"
        },
        {
          "name": "渾身",
          "level": "2"
        }
      ],
      "slots": "221"
    },
    {
      "part": "腕",
      "name": "ベリオXアーム",
      "skills": [
        {
          "name": "納刀術",
          "level": "1"
        },
        {
          "name": "渾身",
          "level": "1"
        },
        {
          "name": "見切り",
          "level": "2"
        }
      ],
      "slots": "200"
    },
    {
      "part": "腰",
      "name": "ベリオXコイル",
      "skills": [
        {
          "name": "抜刀術【技】",
          "level": "1"
        },
        {
          "name": "破壊王",
          "level": "1"
        },
        {
          "name": "見切り",
          "level": "3"
        }
      ],
      "slots": "100"
    },
    {
      "part": "脚",
      "name": "ベリオXグリーヴ",
      "skills": [
        {
          "name": "破壊王",
          "level": "1"
        },
        {
          "name": "納刀術",
          "level": "1"
        },
        {
          "name": "氷属性攻撃強化",
          "level": "2"
        }
      ],
      "slots": "410"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ホーク/エコールフード",
      "skills": [
        {
          "name": "体術",
          "level": "2"
        },
        {
          "name": "弱点特効",
          "level": "1"
        },
        {
          "name": "幸運",
          "level": "1"
        }
      ],
      "slots": "100"
    },
    {
      "part": "胴",
      "name": "ホーク/エコールスーツ",
      "skills": [
        {
          "name": "納刀術",
          "level": "1"
        },
        {
          "name": "体術",
          "level": "1"
        },
        {
          "name": "幸運",
          "level": "1"
        }
      ],
      "slots": "210"
    },
    {
      "part": "腕",
      "name": "ホーク/エコールグラブ",
      "skills": [
        {
          "name": "早食い",
          "level": "1"
        },
        {
          "name": "納刀術",
          "level": "2"
        },
        {
          "name": "弱点特効",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "腰",
      "name": "ホーク/エコールスカート",
      "skills": [
        {
          "name": "早食い",
          "level": "2"
        },
        {
          "name": "体術",
          "level": "2"
        }
      ],
      "slots": "111"
    },
    {
      "part": "脚",
      "name": "ホーク/エコールブーツ",
      "skills": [
        {
          "name": "弱点特効",
          "level": "1"
        },
        {
          "name": "捕獲名人",
          "level": "1"
        },
        {
          "name": "幸運",
          "level": "1"
        }
      ],
      "slots": "210"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ボーンXヘルム",
      "skills": [
        {
          "name": "破壊王",
          "level": "1"
        },
        {
          "name": "スタミナ奪取",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "胴",
      "name": "ボーンXメイル",
      "skills": [
        {
          "name": "ランナー",
          "level": "2"
        },
        {
          "name": "スタミナ奪取",
          "level": "1"
        }
      ],
      "slots": "300"
    },
    {
      "part": "腕",
      "name": "ボーンXアーム",
      "skills": [
        {
          "name": "ランナー",
          "level": "1"
        },
        {
          "name": "抜刀術【力】",
          "level": "2"
        },
        {
          "name": "スタミナ奪取",
          "level": "1"
        }
      ],
      "slots": "110"
    },
    {
      "part": "腰",
      "name": "ボーンXコイル",
      "skills": [
        {
          "name": "破壊王",
          "level": "2"
        },
        {
          "name": "集中",
          "level": "1"
        }
      ],
      "slots": "210"
    },
    {
      "part": "脚",
      "name": "ボーンXグリーヴ",
      "skills": [
        {
          "name": "抜刀術【力】",
          "level": "1"
        },
        {
          "name": "泥雪耐性",
          "level": "2"
        },
        {
          "name": "集中",
          "level": "1"
        }
      ],
      "slots": "200"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ボロスXヘルム",
      "skills": [
        {
          "name": "防御",
          "level": "1"
        },
        {
          "name": "攻めの守勢",
          "level": "1"
        },
        {
          "name": "散弾・拡散矢強化",
          "level": "1"
        },
        {
          "name": "攻撃",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "胴",
      "name": "ボロスXメイル",
      "skills": [
        {
          "name": "防御",
          "level": "2"
        },
        {
          "name": "泥雪耐性",
          "level": "2"
        },
        {
          "name": "攻撃",
          "level": "2"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腕",
      "name": "ボロスXアーム",
      "skills": [
        {
          "name": "攻めの守勢",
          "level": "1"
        },
        {
          "name": "散弾・拡散矢強化",
          "level": "1"
        },
        {
          "name": "攻撃",
          "level": "2"
        },
        {
          "name": "滑走強化",
          "level": "1"
        }
      ],
      "slots": "210"
    },
    {
      "part": "腰",
      "name": "ボロスXコイル",
      "skills": [
        {
          "name": "防御",
          "level": "1"
        },
        {
          "name": "ガード性能",
          "level": "3"
        }
      ],
      "slots": "300"
    },
    {
      "part": "脚",
      "name": "ボロスXグリーヴ",
      "skills": [
        {
          "name": "防御",
          "level": "1"
        },
        {
          "name": "攻めの守勢",
          "level": "1"
        },
        {
          "name": "ガード性能",
          "level": "2"
        }
      ],
      "slots": "210"
    }
  ],
  [
    {
      "part": "頭",
      "name": "マカルパXフード",
      "skills": [
        {
          "name": "早食い",
          "level": "1"
        },
        {
          "name": "スタミナ急速回復",
          "level": "1"
        },
        {
          "name": "睡眠耐性",
          "level": "2"
        }
      ],
      "slots": "220"
    },
    {
      "part": "胴",
      "name": "マカルパXペプラム",
      "skills": [
        {
          "name": "水属性攻撃強化",
          "level": "3"
        },
        {
          "name": "早食い",
          "level": "1"
        },
        {
          "name": "スタミナ急速回復",
          "level": "1"
        }
      ],
      "slots": "210"
    },
    {
      "part": "腕",
      "name": "マカルパXスリーブ",
      "skills": [
        {
          "name": "泡沫の舞",
          "level": "1"
        },
        {
          "name": "飛び込み",
          "level": "1"
        },
        {
          "name": "死中に活",
          "level": "1"
        }
      ],
      "slots": "220"
    },
    {
      "part": "腰",
      "name": "マカルパXコイル",
      "skills": [
        {
          "name": "水属性攻撃強化",
          "level": "2"
        },
        {
          "name": "睡眠耐性",
          "level": "1"
        },
        {
          "name": "死中に活",
          "level": "1"
        }
      ],
      "slots": "320"
    },
    {
      "part": "脚",
      "name": "マカルパXパンツ",
      "skills": [
        {
          "name": "泡沫の舞",
          "level": "2"
        },
        {
          "name": "早食い",
          "level": "1"
        },
        {
          "name": "死中に活",
          "level": "1"
        }
      ],
      "slots": "110"
    }
  ],
  [
    {
      "part": "頭",
      "name": "マギュルXフロール",
      "skills": [
        {
          "name": "火属性攻撃強化",
          "level": "2"
        },
        {
          "name": "爆破やられ耐性",
          "level": "2"
        },
        {
          "name": "会心撃【属性】",
          "level": "1"
        }
      ],
      "slots": "320"
    },
    {
      "part": "胴",
      "name": "マギュルXトロンコ",
      "skills": [
        {
          "name": "ブレ抑制",
          "level": "1"
        },
        {
          "name": "チューンアップ",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "腕",
      "name": "マギュルXラーマ",
      "skills": [
        {
          "name": "爆破やられ耐性",
          "level": "1"
        },
        {
          "name": "会心撃【属性】",
          "level": "1"
        },
        {
          "name": "ひるみ軽減",
          "level": "2"
        }
      ],
      "slots": "411"
    },
    {
      "part": "腰",
      "name": "マギュルXオッハ",
      "skills": [
        {
          "name": "火属性攻撃強化",
          "level": "3"
        },
        {
          "name": "会心撃【属性】",
          "level": "1"
        },
        {
          "name": "ひるみ軽減",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "脚",
      "name": "マギュルXライース",
      "skills": [
        {
          "name": "ブレ抑制",
          "level": "2"
        },
        {
          "name": "チューンアップ",
          "level": "1"
        }
      ],
      "slots": "110"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ミツネXヘルム",
      "skills": [
        {
          "name": "体術",
          "level": "1"
        },
        {
          "name": "回避性能",
          "level": "2"
        },
        {
          "name": "死中に活",
          "level": "1"
        }
      ],
      "slots": "210"
    },
    {
      "part": "胴",
      "name": "ミツネXメイル",
      "skills": [
        {
          "name": "泡沫の舞",
          "level": "1"
        },
        {
          "name": "体術",
          "level": "2"
        },
        {
          "name": "死中に活",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "腕",
      "name": "ミツネXアーム",
      "skills": [
        {
          "name": "満足感",
          "level": "2"
        },
        {
          "name": "死中に活",
          "level": "1"
        }
      ],
      "slots": "411"
    },
    {
      "part": "腰",
      "name": "ミツネXコイル",
      "skills": [
        {
          "name": "満足感",
          "level": "1"
        },
        {
          "name": "泡沫の舞",
          "level": "1"
        },
        {
          "name": "体術",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "脚",
      "name": "ミツネXグリーヴ",
      "skills": [
        {
          "name": "泡沫の舞",
          "level": "1"
        },
        {
          "name": "体術",
          "level": "1"
        },
        {
          "name": "回避性能",
          "level": "1"
        }
      ],
      "slots": "311"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ミヅハ真【頬面】",
      "skills": [
        {
          "name": "弾導強化",
          "level": "2"
        },
        {
          "name": "心眼",
          "level": "2"
        },
        {
          "name": "攻勢",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "胴",
      "name": "ミヅハ真【胸当て】",
      "skills": [
        {
          "name": "弾導強化",
          "level": "1"
        },
        {
          "name": "回避性能",
          "level": "3"
        },
        {
          "name": "心眼",
          "level": "1"
        }
      ],
      "slots": "211"
    },
    {
      "part": "腕",
      "name": "ミヅハ真【大袖】",
      "skills": [
        {
          "name": "毒属性強化",
          "level": "2"
        },
        {
          "name": "回避性能",
          "level": "2"
        },
        {
          "name": "霞皮の恩恵",
          "level": "1"
        }
      ],
      "slots": "220"
    },
    {
      "part": "腰",
      "name": "ミヅハ真【丸帯】",
      "skills": [
        {
          "name": "フルチャージ",
          "level": "2"
        },
        {
          "name": "霞皮の恩恵",
          "level": "1"
        },
        {
          "name": "攻勢",
          "level": "1"
        }
      ],
      "slots": "111"
    },
    {
      "part": "脚",
      "name": "ミヅハ真【具足】",
      "skills": [
        {
          "name": "フルチャージ",
          "level": "1"
        },
        {
          "name": "毒属性強化",
          "level": "1"
        },
        {
          "name": "霞皮の恩恵",
          "level": "2"
        }
      ],
      "slots": "200"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ミヅハ醒【額飾り】",
      "skills": [
        {
          "name": "フルチャージ",
          "level": "3"
        },
        {
          "name": "回避性能",
          "level": "1"
        }
      ],
      "slots": "420"
    },
    {
      "part": "胴",
      "name": "ミヅハ醒【宿り衣】",
      "skills": [
        {
          "name": "翔蟲使い",
          "level": "1"
        },
        {
          "name": "霞皮の恩恵",
          "level": "2"
        },
        {
          "name": "蓄積時攻撃強化",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腕",
      "name": "ミヅハ醒【大袖】",
      "skills": [
        {
          "name": "霞皮の恩恵",
          "level": "1"
        },
        {
          "name": "攻勢",
          "level": "1"
        },
        {
          "name": "蓄積時攻撃強化",
          "level": "1"
        }
      ],
      "slots": "421"
    },
    {
      "part": "腰",
      "name": "ミヅハ醒【丸帯】",
      "skills": [
        {
          "name": "翔蟲使い",
          "level": "2"
        },
        {
          "name": "攻勢",
          "level": "1"
        }
      ],
      "slots": "440"
    },
    {
      "part": "脚",
      "name": "ミヅハ醒【具足】",
      "skills": [
        {
          "name": "回避性能",
          "level": "2"
        },
        {
          "name": "霞皮の恩恵",
          "level": "1"
        },
        {
          "name": "蓄積時攻撃強化",
          "level": "1"
        }
      ],
      "slots": "411"
    }
  ],
  [
    {
      "part": "頭",
      "name": "メデュレトXハット",
      "skills": [
        {
          "name": "破壊王",
          "level": "1"
        },
        {
          "name": "集中",
          "level": "1"
        },
        {
          "name": "精霊の加護",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "胴",
      "name": "メデュレトXベスト",
      "skills": [
        {
          "name": "爆破属性強化",
          "level": "2"
        },
        {
          "name": "集中",
          "level": "1"
        },
        {
          "name": "KO術",
          "level": "1"
        }
      ],
      "slots": "220"
    },
    {
      "part": "腕",
      "name": "メデュレトXグラブ",
      "skills": [
        {
          "name": "集中",
          "level": "1"
        },
        {
          "name": "KO術",
          "level": "1"
        },
        {
          "name": "精霊の加護",
          "level": "2"
        }
      ],
      "slots": "310"
    },
    {
      "part": "腰",
      "name": "メデュレトXコイル",
      "skills": [
        {
          "name": "破壊王",
          "level": "2"
        },
        {
          "name": "チャージマスター",
          "level": "2"
        }
      ],
      "slots": "310"
    },
    {
      "part": "脚",
      "name": "メデュレトXブーツ",
      "skills": [
        {
          "name": "爆破属性強化",
          "level": "1"
        },
        {
          "name": "KO術",
          "level": "1"
        },
        {
          "name": "チャージマスター",
          "level": "1"
        }
      ],
      "slots": "410"
    }
  ],
  [
    {
      "part": "頭",
      "name": "メルゼヘルム",
      "skills": [
        {
          "name": "翔蟲使い",
          "level": "2"
        },
        {
          "name": "弱点特効",
          "level": "1"
        }
      ],
      "slots": "220"
    },
    {
      "part": "胴",
      "name": "メルゼメイル",
      "skills": [
        {
          "name": "破壊王",
          "level": "1"
        },
        {
          "name": "弱点特効",
          "level": "1"
        },
        {
          "name": "血氣",
          "level": "1"
        }
      ],
      "slots": "210"
    },
    {
      "part": "腕",
      "name": "メルゼアーム",
      "skills": [
        {
          "name": "属性やられ耐性",
          "level": "1"
        },
        {
          "name": "攻撃",
          "level": "2"
        },
        {
          "name": "翔蟲使い",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腰",
      "name": "メルゼコイル",
      "skills": [
        {
          "name": "破壊王",
          "level": "1"
        },
        {
          "name": "攻撃",
          "level": "1"
        },
        {
          "name": "血氣",
          "level": "2"
        }
      ],
      "slots": "110"
    },
    {
      "part": "脚",
      "name": "メルゼグリーヴ",
      "skills": [
        {
          "name": "属性やられ耐性",
          "level": "2"
        },
        {
          "name": "攻撃",
          "level": "1"
        },
        {
          "name": "弱点特効",
          "level": "1"
        }
      ],
      "slots": "411"
    }
  ],
  [
    {
      "part": "頭",
      "name": "メルホアXフロール",
      "skills": [
        {
          "name": "麻痺耐性",
          "level": "2"
        },
        {
          "name": "精霊の加護",
          "level": "2"
        }
      ],
      "slots": "420"
    },
    {
      "part": "胴",
      "name": "メルホアXトロンコ",
      "skills": [
        {
          "name": "体力回復量UP",
          "level": "1"
        },
        {
          "name": "植生学",
          "level": "2"
        },
        {
          "name": "精霊の加護",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "腕",
      "name": "メルホアXラーマ",
      "skills": [
        {
          "name": "麻痺耐性",
          "level": "1"
        },
        {
          "name": "体力回復量UP",
          "level": "1"
        },
        {
          "name": "植生学",
          "level": "1"
        }
      ],
      "slots": "420"
    },
    {
      "part": "腰",
      "name": "メルホアXオッハ",
      "skills": [
        {
          "name": "スタミナ急速回復",
          "level": "1"
        },
        {
          "name": "植生学",
          "level": "1"
        },
        {
          "name": "回復速度",
          "level": "1"
        }
      ],
      "slots": "420"
    },
    {
      "part": "脚",
      "name": "メルホアXライース",
      "skills": [
        {
          "name": "体力回復量UP",
          "level": "1"
        },
        {
          "name": "スタミナ急速回復",
          "level": "1"
        },
        {
          "name": "回復速度",
          "level": "2"
        }
      ],
      "slots": "410"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ヤツカダXヘルム",
      "skills": [
        {
          "name": "装填速度",
          "level": "1"
        },
        {
          "name": "散弾・拡散矢強化",
          "level": "1"
        },
        {
          "name": "チューンアップ",
          "level": "1"
        }
      ],
      "slots": "310"
    },
    {
      "part": "胴",
      "name": "ヤツカダXメイル",
      "skills": [
        {
          "name": "弾丸節約",
          "level": "1"
        },
        {
          "name": "装填速度",
          "level": "2"
        },
        {
          "name": "散弾・拡散矢強化",
          "level": "1"
        }
      ],
      "slots": "310"
    },
    {
      "part": "腕",
      "name": "ヤツカダXアーム",
      "skills": [
        {
          "name": "体術",
          "level": "2"
        },
        {
          "name": "スタミナ急速回復",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腰",
      "name": "ヤツカダXコイル",
      "skills": [
        {
          "name": "弾丸節約",
          "level": "1"
        },
        {
          "name": "散弾・拡散矢強化",
          "level": "1"
        },
        {
          "name": "チューンアップ",
          "level": "1"
        }
      ],
      "slots": "220"
    },
    {
      "part": "脚",
      "name": "ヤツカダXグリーヴ",
      "skills": [
        {
          "name": "体術",
          "level": "3"
        },
        {
          "name": "スタミナ急速回復",
          "level": "2"
        }
      ],
      "slots": "110"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ヤツカダZヘルム",
      "skills": [
        {
          "name": "爆破属性強化",
          "level": "1"
        },
        {
          "name": "渾身",
          "level": "1"
        },
        {
          "name": "翔蟲使い",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "胴",
      "name": "ヤツカダZメイル",
      "skills": [
        {
          "name": "渾身",
          "level": "1"
        },
        {
          "name": "翔蟲使い",
          "level": "2"
        }
      ],
      "slots": "221"
    },
    {
      "part": "腕",
      "name": "ヤツカダZアーム",
      "skills": [
        {
          "name": "爆破やられ耐性",
          "level": "1"
        },
        {
          "name": "渾身",
          "level": "1"
        },
        {
          "name": "高速変形",
          "level": "2"
        },
        {
          "name": "チューンアップ",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腰",
      "name": "ヤツカダZコイル",
      "skills": [
        {
          "name": "フルチャージ",
          "level": "2"
        },
        {
          "name": "爆破属性強化",
          "level": "2"
        }
      ],
      "slots": "300"
    },
    {
      "part": "脚",
      "name": "ヤツカダZグリーヴ",
      "skills": [
        {
          "name": "フルチャージ",
          "level": "1"
        },
        {
          "name": "爆破やられ耐性",
          "level": "2"
        }
      ],
      "slots": "421"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ユクモノカサ",
      "skills": [
        {
          "name": "体力回復量UP",
          "level": "1"
        },
        {
          "name": "回避性能",
          "level": "1"
        },
        {
          "name": "見切り",
          "level": "2"
        }
      ],
      "slots": "200"
    },
    {
      "part": "胴",
      "name": "ユクモノドウギ",
      "skills": [
        {
          "name": "耳栓",
          "level": "2"
        },
        {
          "name": "見切り",
          "level": "1"
        }
      ],
      "slots": "100"
    },
    {
      "part": "腕",
      "name": "ユクモノコテ",
      "skills": [
        {
          "name": "回避性能",
          "level": "2"
        },
        {
          "name": "見切り",
          "level": "2"
        }
      ],
      "slots": "111"
    },
    {
      "part": "腰",
      "name": "ユクモノオビ",
      "skills": [
        {
          "name": "耳栓",
          "level": "1"
        },
        {
          "name": "回避性能",
          "level": "1"
        },
        {
          "name": "見切り",
          "level": "1"
        }
      ],
      "slots": "210"
    },
    {
      "part": "脚",
      "name": "ユクモノハカマ",
      "skills": [
        {
          "name": "体力回復量UP",
          "level": "2"
        },
        {
          "name": "回避性能",
          "level": "1"
        },
        {
          "name": "見切り",
          "level": "1"
        }
      ],
      "slots": "200"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ヨツミXヘルム",
      "skills": [
        {
          "name": "早食い",
          "level": "1"
        },
        {
          "name": "通常弾・連射矢強化",
          "level": "2"
        }
      ],
      "slots": "100"
    },
    {
      "part": "胴",
      "name": "ヨツミXメイル",
      "skills": [
        {
          "name": "早食い",
          "level": "1"
        },
        {
          "name": "通常弾・連射矢強化",
          "level": "1"
        },
        {
          "name": "回避距離UP",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "腕",
      "name": "ヨツミXアーム",
      "skills": [
        {
          "name": "腹減り耐性",
          "level": "1"
        },
        {
          "name": "特殊射撃強化",
          "level": "2"
        },
        {
          "name": "火事場力",
          "level": "2"
        }
      ],
      "slots": "110"
    },
    {
      "part": "腰",
      "name": "ヨツミXコイル",
      "skills": [
        {
          "name": "回避距離UP",
          "level": "2"
        },
        {
          "name": "火事場力",
          "level": "2"
        }
      ],
      "slots": "200"
    },
    {
      "part": "脚",
      "name": "ヨツミXグリーヴ",
      "skills": [
        {
          "name": "腹減り耐性",
          "level": "2"
        },
        {
          "name": "早食い",
          "level": "1"
        },
        {
          "name": "火事場力",
          "level": "1"
        }
      ],
      "slots": "400"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ラングロXヘルム",
      "skills": [
        {
          "name": "耳栓",
          "level": "1"
        },
        {
          "name": "麻痺属性強化",
          "level": "2"
        }
      ],
      "slots": "111"
    },
    {
      "part": "胴",
      "name": "ラングロXメイル",
      "skills": [
        {
          "name": "耳栓",
          "level": "1"
        },
        {
          "name": "ジャンプ鉄人",
          "level": "1"
        },
        {
          "name": "高速変形",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "腕",
      "name": "ラングロXアーム",
      "skills": [
        {
          "name": "耳栓",
          "level": "1"
        },
        {
          "name": "麻痺属性強化",
          "level": "1"
        },
        {
          "name": "回避距離UP",
          "level": "1"
        }
      ],
      "slots": "111"
    },
    {
      "part": "腰",
      "name": "ラングロXコイル",
      "skills": [
        {
          "name": "耳栓",
          "level": "2"
        }
      ],
      "slots": "200"
    },
    {
      "part": "脚",
      "name": "ラングロXグリーヴ",
      "skills": [
        {
          "name": "高速変形",
          "level": "2"
        },
        {
          "name": "回避距離UP",
          "level": "2"
        }
      ],
      "slots": "100"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ランゴヘルム",
      "skills": [
        {
          "name": "麻痺属性強化",
          "level": "1"
        },
        {
          "name": "翔蟲使い",
          "level": "2"
        }
      ],
      "slots": "400"
    },
    {
      "part": "胴",
      "name": "ランゴメイル",
      "skills": [
        {
          "name": "麻痺耐性",
          "level": "2"
        },
        {
          "name": "納刀術",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "腕",
      "name": "ランゴアーム",
      "skills": [
        {
          "name": "麻痺属性強化",
          "level": "2"
        },
        {
          "name": "乗り名人",
          "level": "1"
        }
      ],
      "slots": "300"
    },
    {
      "part": "腰",
      "name": "ランゴフォールド",
      "skills": [
        {
          "name": "麻痺耐性",
          "level": "1"
        },
        {
          "name": "納刀術",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "脚",
      "name": "ランゴグリーヴ",
      "skills": [
        {
          "name": "納刀術",
          "level": "1"
        },
        {
          "name": "翔蟲使い",
          "level": "1"
        }
      ],
      "slots": "400"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ランポスヘルム",
      "skills": [
        {
          "name": "攻撃",
          "level": "1"
        },
        {
          "name": "気絶耐性",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "胴",
      "name": "ランポスメイル",
      "skills": [
        {
          "name": "風圧耐性",
          "level": "1"
        },
        {
          "name": "攻撃",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "腕",
      "name": "ランポスアーム",
      "skills": [
        {
          "name": "攻撃",
          "level": "2"
        }
      ],
      "slots": "310"
    },
    {
      "part": "腰",
      "name": "ランポスフォールド",
      "skills": [
        {
          "name": "攻撃",
          "level": "1"
        },
        {
          "name": "捕獲名人",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "脚",
      "name": "ランポスグリーヴ",
      "skills": [
        {
          "name": "風圧耐性",
          "level": "2"
        },
        {
          "name": "気絶耐性",
          "level": "2"
        }
      ],
      "slots": "320"
    }
  ],
  [
    {
      "part": "頭",
      "name": "リノプロXヘルム",
      "skills": [
        {
          "name": "泥雪耐性",
          "level": "1"
        },
        {
          "name": "気絶耐性",
          "level": "1"
        },
        {
          "name": "貫通弾・貫通矢強化",
          "level": "2"
        }
      ],
      "slots": "200"
    },
    {
      "part": "胴",
      "name": "リノプロXメイル",
      "skills": [
        {
          "name": "砲術",
          "level": "1"
        },
        {
          "name": "気絶耐性",
          "level": "2"
        }
      ],
      "slots": "410"
    },
    {
      "part": "腕",
      "name": "リノプロXアーム",
      "skills": [
        {
          "name": "砲弾装填",
          "level": "1"
        },
        {
          "name": "砲術",
          "level": "2"
        },
        {
          "name": "特殊射撃強化",
          "level": "1"
        }
      ],
      "slots": "220"
    },
    {
      "part": "腰",
      "name": "リノプロXコイル",
      "skills": [
        {
          "name": "砲弾装填",
          "level": "1"
        },
        {
          "name": "特殊射撃強化",
          "level": "1"
        },
        {
          "name": "耐震",
          "level": "2"
        }
      ],
      "slots": "400"
    },
    {
      "part": "脚",
      "name": "リノプロXグリーヴ",
      "skills": [
        {
          "name": "耐震",
          "level": "1"
        },
        {
          "name": "貫通弾・貫通矢強化",
          "level": "1"
        }
      ],
      "slots": "400"
    }
  ],
  [
    {
      "part": "頭",
      "name": "リバルカイザーホーン",
      "skills": [
        {
          "name": "見切り",
          "level": "2"
        },
        {
          "name": "弱点特効",
          "level": "1"
        },
        {
          "name": "粉塵纏",
          "level": "1"
        }
      ],
      "slots": "320"
    },
    {
      "part": "胴",
      "name": "リバルカイザーメイル",
      "skills": [
        {
          "name": "見切り",
          "level": "3"
        },
        {
          "name": "弱点特効",
          "level": "1"
        },
        {
          "name": "粉塵纏",
          "level": "1"
        }
      ],
      "slots": "220"
    },
    {
      "part": "腕",
      "name": "リバルカイザーアーム",
      "skills": [
        {
          "name": "弾導強化",
          "level": "1"
        },
        {
          "name": "見切り",
          "level": "1"
        },
        {
          "name": "炎鱗の恩恵",
          "level": "2"
        },
        {
          "name": "達人芸",
          "level": "1"
        }
      ],
      "slots": "440"
    },
    {
      "part": "腰",
      "name": "リバルカイザーコイル",
      "skills": [
        {
          "name": "弾導強化",
          "level": "2"
        },
        {
          "name": "達人芸",
          "level": "2"
        },
        {
          "name": "粉塵纏",
          "level": "1"
        }
      ],
      "slots": "430"
    },
    {
      "part": "脚",
      "name": "リバルカイザークイス",
      "skills": [
        {
          "name": "火属性攻撃強化",
          "level": "2"
        },
        {
          "name": "会心撃【属性】",
          "level": "2"
        },
        {
          "name": "弱点特効",
          "level": "1"
        },
        {
          "name": "炎鱗の恩恵",
          "level": "2"
        }
      ],
      "slots": "411"
    }
  ],
  [
    {
      "part": "頭",
      "name": "リバルクシャナアンク",
      "skills": [
        {
          "name": "翔蟲使い",
          "level": "3"
        },
        {
          "name": "風纏",
          "level": "1"
        }
      ],
      "slots": "321"
    },
    {
      "part": "胴",
      "name": "リバルクシャナイラム",
      "skills": [
        {
          "name": "業物",
          "level": "2"
        },
        {
          "name": "弾丸節約",
          "level": "2"
        },
        {
          "name": "攻撃",
          "level": "2"
        },
        {
          "name": "鋼殻の恩恵",
          "level": "2"
        }
      ],
      "slots": "321"
    },
    {
      "part": "腕",
      "name": "リバルクシャナグラン",
      "skills": [
        {
          "name": "連撃",
          "level": "2"
        },
        {
          "name": "風纏",
          "level": "1"
        }
      ],
      "slots": "420"
    },
    {
      "part": "腰",
      "name": "リバルクシャナアンダ",
      "skills": [
        {
          "name": "体力回復量UP",
          "level": "3"
        },
        {
          "name": "攻撃",
          "level": "2"
        },
        {
          "name": "鋼殻の恩恵",
          "level": "2"
        }
      ],
      "slots": "310"
    },
    {
      "part": "脚",
      "name": "リバルクシャナベイル",
      "skills": [
        {
          "name": "連撃",
          "level": "1"
        },
        {
          "name": "風纏",
          "level": "1"
        }
      ],
      "slots": "440"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ルドロスXヘルム",
      "skills": [
        {
          "name": "ランナー",
          "level": "1"
        },
        {
          "name": "フルチャージ",
          "level": "1"
        },
        {
          "name": "集中",
          "level": "1"
        }
      ],
      "slots": "210"
    },
    {
      "part": "胴",
      "name": "ルドロスXメイル",
      "skills": [
        {
          "name": "スタミナ急速回復",
          "level": "2"
        },
        {
          "name": "集中",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腕",
      "name": "ルドロスXアーム",
      "skills": [
        {
          "name": "ランナー",
          "level": "1"
        },
        {
          "name": "弾丸節約",
          "level": "1"
        },
        {
          "name": "強化持続",
          "level": "1"
        }
      ],
      "slots": "221"
    },
    {
      "part": "腰",
      "name": "ルドロスXコイル",
      "skills": [
        {
          "name": "ランナー",
          "level": "1"
        },
        {
          "name": "フルチャージ",
          "level": "2"
        }
      ],
      "slots": "200"
    },
    {
      "part": "脚",
      "name": "ルドロスXグリーヴ",
      "skills": [
        {
          "name": "集中",
          "level": "1"
        },
        {
          "name": "強化持続",
          "level": "2"
        }
      ],
      "slots": "300"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ルナガロヘルム",
      "skills": [
        {
          "name": "見切り",
          "level": "2"
        },
        {
          "name": "翔蟲使い",
          "level": "1"
        }
      ],
      "slots": "220"
    },
    {
      "part": "胴",
      "name": "ルナガロメイル",
      "skills": [
        {
          "name": "挑戦者",
          "level": "2"
        },
        {
          "name": "合気",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腕",
      "name": "ルナガロアーム",
      "skills": [
        {
          "name": "挑戦者",
          "level": "3"
        },
        {
          "name": "翔蟲使い",
          "level": "1"
        }
      ],
      "slots": "210"
    },
    {
      "part": "腰",
      "name": "ルナガロコイル",
      "skills": [
        {
          "name": "力の解放",
          "level": "2"
        },
        {
          "name": "翔蟲使い",
          "level": "1"
        }
      ],
      "slots": "210"
    },
    {
      "part": "脚",
      "name": "ルナガログリーヴ",
      "skills": [
        {
          "name": "力の解放",
          "level": "3"
        },
        {
          "name": "合気",
          "level": "1"
        }
      ],
      "slots": "211"
    }
  ],
  [
    {
      "part": "頭",
      "name": "レイアXヘルム",
      "skills": [
        {
          "name": "毒耐性",
          "level": "1"
        },
        {
          "name": "挑戦者",
          "level": "1"
        },
        {
          "name": "属性やられ耐性",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "胴",
      "name": "レイアXメイル",
      "skills": [
        {
          "name": "満足感",
          "level": "1"
        },
        {
          "name": "毒耐性",
          "level": "2"
        },
        {
          "name": "体力回復量UP",
          "level": "1"
        }
      ],
      "slots": "411"
    },
    {
      "part": "腕",
      "name": "レイアXアーム",
      "skills": [
        {
          "name": "満足感",
          "level": "1"
        },
        {
          "name": "属性やられ耐性",
          "level": "1"
        },
        {
          "name": "広域化",
          "level": "2"
        }
      ],
      "slots": "210"
    },
    {
      "part": "腰",
      "name": "レイアXコイル",
      "skills": [
        {
          "name": "挑戦者",
          "level": "1"
        },
        {
          "name": "体力回復量UP",
          "level": "2"
        },
        {
          "name": "広域化",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "脚",
      "name": "レイアXグリーヴ",
      "skills": [
        {
          "name": "満足感",
          "level": "1"
        },
        {
          "name": "挑戦者",
          "level": "1"
        },
        {
          "name": "属性やられ耐性",
          "level": "1"
        }
      ],
      "slots": "400"
    }
  ],
  [
    {
      "part": "頭",
      "name": "レウスXヘルム",
      "skills": [
        {
          "name": "破壊王",
          "level": "1"
        },
        {
          "name": "攻撃",
          "level": "1"
        },
        {
          "name": "超会心",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "胴",
      "name": "レウスXメイル",
      "skills": [
        {
          "name": "耳栓",
          "level": "1"
        },
        {
          "name": "破壊王",
          "level": "1"
        },
        {
          "name": "攻撃",
          "level": "1"
        }
      ],
      "slots": "300"
    },
    {
      "part": "腕",
      "name": "レウスXアーム",
      "skills": [
        {
          "name": "耳栓",
          "level": "2"
        },
        {
          "name": "攻撃",
          "level": "2"
        }
      ],
      "slots": "200"
    },
    {
      "part": "腰",
      "name": "レウスXコイル",
      "skills": [
        {
          "name": "風圧耐性",
          "level": "3"
        },
        {
          "name": "攻撃",
          "level": "2"
        },
        {
          "name": "超会心",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "脚",
      "name": "レウスXグリーヴ",
      "skills": [
        {
          "name": "耳栓",
          "level": "2"
        },
        {
          "name": "破壊王",
          "level": "1"
        },
        {
          "name": "攻撃",
          "level": "1"
        }
      ],
      "slots": "110"
    }
  ],
  [
    {
      "part": "頭",
      "name": "レギオスヘルム",
      "skills": [
        {
          "name": "体術",
          "level": "3"
        },
        {
          "name": "刃鱗磨き",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "胴",
      "name": "レギオスメイル",
      "skills": [
        {
          "name": "回避性能",
          "level": "3"
        },
        {
          "name": "刃鱗磨き",
          "level": "1"
        }
      ],
      "slots": "300"
    },
    {
      "part": "腕",
      "name": "レギオスアーム",
      "skills": [
        {
          "name": "匠",
          "level": "3"
        }
      ],
      "slots": "000"
    },
    {
      "part": "腰",
      "name": "レギオスコイル",
      "skills": [
        {
          "name": "壁面移動",
          "level": "2"
        },
        {
          "name": "壁面移動【翔】",
          "level": "1"
        }
      ],
      "slots": "411"
    },
    {
      "part": "脚",
      "name": "レギオスグリーヴ",
      "skills": [
        {
          "name": "回避距離UP",
          "level": "2"
        },
        {
          "name": "刃鱗磨き",
          "level": "1"
        }
      ],
      "slots": "400"
    }
  ],
  [
    {
      "part": "頭",
      "name": "レザーXヘッド",
      "skills": [
        {
          "name": "腹減り耐性",
          "level": "1"
        },
        {
          "name": "地質学",
          "level": "1"
        },
        {
          "name": "剥ぎ取り鉄人",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "胴",
      "name": "レザーXベスト",
      "skills": [
        {
          "name": "体力回復量UP",
          "level": "1"
        },
        {
          "name": "植生学",
          "level": "2"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腕",
      "name": "レザーXグラブ",
      "skills": [
        {
          "name": "特殊射撃強化",
          "level": "1"
        },
        {
          "name": "地質学",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "腰",
      "name": "レザーXベルト",
      "skills": [
        {
          "name": "腹減り耐性",
          "level": "2"
        },
        {
          "name": "体力回復量UP",
          "level": "2"
        }
      ],
      "slots": "210"
    },
    {
      "part": "脚",
      "name": "レザーXパンツ",
      "skills": [
        {
          "name": "地質学",
          "level": "1"
        },
        {
          "name": "植生学",
          "level": "2"
        }
      ],
      "slots": "410"
    }
  ],
  [
    {
      "part": "頭",
      "name": "レックスXヘルム",
      "skills": [
        {
          "name": "耳栓",
          "level": "1"
        },
        {
          "name": "早食い",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "胴",
      "name": "レックスXメイル",
      "skills": [
        {
          "name": "耳栓",
          "level": "2"
        },
        {
          "name": "フルチャージ",
          "level": "1"
        }
      ],
      "slots": "210"
    },
    {
      "part": "腕",
      "name": "レックスXアーム",
      "skills": [
        {
          "name": "フルチャージ",
          "level": "1"
        },
        {
          "name": "通常弾・連射矢強化",
          "level": "1"
        },
        {
          "name": "気絶耐性",
          "level": "3"
        },
        {
          "name": "心眼",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腰",
      "name": "レックスXコイル",
      "skills": [
        {
          "name": "耳栓",
          "level": "2"
        },
        {
          "name": "フルチャージ",
          "level": "1"
        }
      ],
      "slots": "210"
    },
    {
      "part": "脚",
      "name": "レックスXグリーヴ",
      "skills": [
        {
          "name": "早食い",
          "level": "2"
        },
        {
          "name": "通常弾・連射矢強化",
          "level": "1"
        },
        {
          "name": "心眼",
          "level": "2"
        }
      ],
      "slots": "300"
    }
  ],
  [
    {
      "part": "頭",
      "name": "ロワーガX/ファルメルXテスタ",
      "skills": [
        {
          "name": "回避性能",
          "level": "2"
        },
        {
          "name": "会心撃【属性】",
          "level": "2"
        }
      ],
      "slots": "200"
    },
    {
      "part": "胴",
      "name": "ロワーガX/ファルメルXペット",
      "skills": [
        {
          "name": "龍属性攻撃強化",
          "level": "1"
        },
        {
          "name": "会心撃【属性】",
          "level": "1"
        },
        {
          "name": "見切り",
          "level": "3"
        }
      ],
      "slots": "110"
    },
    {
      "part": "腕",
      "name": "ロワーガX/ファルメルXマーノ",
      "skills": [
        {
          "name": "回避性能",
          "level": "2"
        },
        {
          "name": "見切り",
          "level": "1"
        }
      ],
      "slots": "300"
    },
    {
      "part": "腰",
      "name": "ロワーガX/ファルメルXアンカ",
      "skills": [
        {
          "name": "龍属性攻撃強化",
          "level": "3"
        },
        {
          "name": "見切り",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "脚",
      "name": "ロワーガX/ファルメルXガンバ",
      "skills": [
        {
          "name": "龍属性攻撃強化",
          "level": "1"
        },
        {
          "name": "回避性能",
          "level": "1"
        },
        {
          "name": "見切り",
          "level": "2"
        }
      ],
      "slots": "210"
    }
  ],
  [
    {
      "part": "頭",
      "name": "冥淵纏鎧イレケラト",
      "skills": [
        {
          "name": "逆恨み",
          "level": "2"
        },
        {
          "name": "弱点特効",
          "level": "1"
        }
      ],
      "slots": "420"
    },
    {
      "part": "胴",
      "name": "冥淵纏鎧イレバウロ",
      "skills": [
        {
          "name": "逆恨み",
          "level": "1"
        },
        {
          "name": "弱点特効",
          "level": "1"
        },
        {
          "name": "連撃",
          "level": "1"
        }
      ],
      "slots": "320"
    },
    {
      "part": "腕",
      "name": "冥淵纏鎧イレエピヌ",
      "skills": [
        {
          "name": "逆恨み",
          "level": "1"
        },
        {
          "name": "伏魔響命",
          "level": "2"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腰",
      "name": "冥淵纏鎧イレウーラ",
      "skills": [
        {
          "name": "弱点特効",
          "level": "1"
        },
        {
          "name": "連撃",
          "level": "2"
        }
      ],
      "slots": "400"
    },
    {
      "part": "脚",
      "name": "冥淵纏鎧イレスケロス",
      "skills": [
        {
          "name": "逆恨み",
          "level": "1"
        },
        {
          "name": "伏魔響命",
          "level": "1"
        }
      ],
      "slots": "322"
    }
  ],
  [
    {
      "part": "頭",
      "name": "怒天ノ添髪",
      "skills": [
        {
          "name": "業物",
          "level": "2"
        },
        {
          "name": "弾丸節約",
          "level": "2"
        },
        {
          "name": "見切り",
          "level": "1"
        },
        {
          "name": "激昂",
          "level": "1"
        }
      ],
      "slots": "111"
    },
    {
      "part": "胴",
      "name": "怒天ノ羽織",
      "skills": [
        {
          "name": "渾身",
          "level": "2"
        },
        {
          "name": "回避距離UP",
          "level": "1"
        },
        {
          "name": "連撃",
          "level": "1"
        }
      ],
      "slots": "300"
    },
    {
      "part": "腕",
      "name": "怒天ノ篭手",
      "skills": [
        {
          "name": "見切り",
          "level": "2"
        },
        {
          "name": "激昂",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腰",
      "name": "怒天ノ帯",
      "skills": [
        {
          "name": "業物",
          "level": "1"
        },
        {
          "name": "弾丸節約",
          "level": "1"
        },
        {
          "name": "会心撃【属性】",
          "level": "2"
        },
        {
          "name": "連撃",
          "level": "1"
        }
      ],
      "slots": "300"
    },
    {
      "part": "脚",
      "name": "怒天ノ袴",
      "skills": [
        {
          "name": "回避距離UP",
          "level": "2"
        },
        {
          "name": "激昂",
          "level": "1"
        }
      ],
      "slots": "400"
    }
  ],
  [
    {
      "part": "頭",
      "name": "斉天ノ添髪・真",
      "skills": [
        {
          "name": "渾身",
          "level": "1"
        },
        {
          "name": "火事場力",
          "level": "2"
        }
      ],
      "slots": "410"
    },
    {
      "part": "胴",
      "name": "斉天ノ衣・真",
      "skills": [
        {
          "name": "力の解放",
          "level": "2"
        },
        {
          "name": "渾身",
          "level": "1"
        },
        {
          "name": "火事場力",
          "level": "1"
        }
      ],
      "slots": "300"
    },
    {
      "part": "腕",
      "name": "斉天ノ篭手・真",
      "skills": [
        {
          "name": "力の解放",
          "level": "2"
        },
        {
          "name": "火事場力",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "腰",
      "name": "斉天ノ帯・真",
      "skills": [
        {
          "name": "渾身",
          "level": "1"
        },
        {
          "name": "火事場力",
          "level": "1"
        },
        {
          "name": "超会心",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "脚",
      "name": "斉天ノ具足・真",
      "skills": [
        {
          "name": "力の解放",
          "level": "1"
        },
        {
          "name": "ひるみ軽減",
          "level": "2"
        },
        {
          "name": "超会心",
          "level": "2"
        }
      ],
      "slots": "111"
    }
  ],
  [
    {
      "part": "頭",
      "name": "月光【額当】",
      "skills": [
        {
          "name": "挑戦者",
          "level": "3"
        },
        {
          "name": "装填拡張",
          "level": "1"
        },
        {
          "name": "匠",
          "level": "1"
        }
      ],
      "slots": "311"
    },
    {
      "part": "胴",
      "name": "月光【帷子】",
      "skills": [
        {
          "name": "挑戦者",
          "level": "2"
        },
        {
          "name": "超会心",
          "level": "1"
        },
        {
          "name": "闇討ち",
          "level": "1"
        }
      ],
      "slots": "310"
    },
    {
      "part": "腕",
      "name": "月光【手甲】",
      "skills": [
        {
          "name": "回避性能",
          "level": "3"
        },
        {
          "name": "巧撃",
          "level": "2"
        }
      ],
      "slots": "220"
    },
    {
      "part": "腰",
      "name": "月光【帯】",
      "skills": [
        {
          "name": "散弾・拡散矢強化",
          "level": "2"
        },
        {
          "name": "匠",
          "level": "2"
        },
        {
          "name": "闇討ち",
          "level": "1"
        }
      ],
      "slots": "311"
    },
    {
      "part": "脚",
      "name": "月光【具足】",
      "skills": [
        {
          "name": "装填拡張",
          "level": "2"
        },
        {
          "name": "匠",
          "level": "2"
        },
        {
          "name": "闇討ち",
          "level": "1"
        },
        {
          "name": "巧撃",
          "level": "1"
        }
      ],
      "slots": "300"
    }
  ],
  [
    {
      "part": "頭",
      "name": "混沌のパオ・真",
      "skills": [
        {
          "name": "早食い",
          "level": "1"
        },
        {
          "name": "キノコ大好き",
          "level": "1"
        }
      ],
      "slots": "311"
    },
    {
      "part": "胴",
      "name": "混沌のカイ・真",
      "skills": [
        {
          "name": "笛吹き名人",
          "level": "1"
        },
        {
          "name": "キノコ大好き",
          "level": "2"
        }
      ],
      "slots": "210"
    }
  ],
  [
    {
      "part": "腕",
      "name": "狗竜の革篭手X",
      "skills": [
        {
          "name": "攻撃",
          "level": "3"
        }
      ],
      "slots": "110"
    },
    {
      "part": "脚",
      "name": "狗竜の革臑当X",
      "skills": [
        {
          "name": "乗り名人",
          "level": "1"
        },
        {
          "name": "壁面移動",
          "level": "2"
        }
      ],
      "slots": "210"
    }
  ],
  [
    {
      "part": "頭",
      "name": "拠点司令【耳飾】",
      "skills": [
        {
          "name": "集中",
          "level": "3"
        },
        {
          "name": "広域化",
          "level": "3"
        }
      ],
      "slots": "200"
    },
    {
      "part": "胴",
      "name": "拠点司令【鎧】",
      "skills": [
        {
          "name": "抜刀術【技】",
          "level": "1"
        },
        {
          "name": "チャージマスター",
          "level": "1"
        }
      ],
      "slots": "330"
    },
    {
      "part": "腕",
      "name": "拠点司令【手甲】",
      "skills": [
        {
          "name": "納刀術",
          "level": "1"
        },
        {
          "name": "チャージマスター",
          "level": "2"
        }
      ],
      "slots": "410"
    },
    {
      "part": "腰",
      "name": "拠点司令【帯甲】",
      "skills": [
        {
          "name": "抜刀術【力】",
          "level": "3"
        },
        {
          "name": "納刀術",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "脚",
      "name": "拠点司令【脚甲】",
      "skills": [
        {
          "name": "抜刀術【技】",
          "level": "2"
        },
        {
          "name": "納刀術",
          "level": "1"
        }
      ],
      "slots": "220"
    }
  ],
  [
    {
      "part": "頭",
      "name": "砲術隊【兜】",
      "skills": [
        {
          "name": "ブレ抑制",
          "level": "2"
        },
        {
          "name": "反動軽減",
          "level": "1"
        },
        {
          "name": "回避距離UP",
          "level": "2"
        }
      ],
      "slots": "300"
    },
    {
      "part": "胴",
      "name": "砲術隊【胴】",
      "skills": [
        {
          "name": "反動軽減",
          "level": "1"
        },
        {
          "name": "弾導強化",
          "level": "3"
        },
        {
          "name": "回避距離UP",
          "level": "1"
        }
      ],
      "slots": "000"
    },
    {
      "part": "腕",
      "name": "砲術隊【篭手】",
      "skills": [
        {
          "name": "砲術",
          "level": "2"
        },
        {
          "name": "装填速度",
          "level": "1"
        },
        {
          "name": "装填拡張",
          "level": "1"
        }
      ],
      "slots": "100"
    },
    {
      "part": "腰",
      "name": "砲術隊【腰】",
      "skills": [
        {
          "name": "装填速度",
          "level": "1"
        },
        {
          "name": "装填拡張",
          "level": "2"
        }
      ],
      "slots": "200"
    },
    {
      "part": "脚",
      "name": "砲術隊【脛当て】",
      "skills": [
        {
          "name": "砲術",
          "level": "1"
        },
        {
          "name": "特殊射撃強化",
          "level": "1"
        },
        {
          "name": "弾丸節約",
          "level": "3"
        }
      ],
      "slots": "000"
    }
  ],
  [
    {
      "part": "頭",
      "name": "軽装騎士【耳飾り】",
      "skills": [
        {
          "name": "早食い",
          "level": "3"
        },
        {
          "name": "攻撃",
          "level": "2"
        }
      ],
      "slots": "100"
    },
    {
      "part": "胴",
      "name": "軽装騎士【胸当て】",
      "skills": [
        {
          "name": "業物",
          "level": "1"
        },
        {
          "name": "攻めの守勢",
          "level": "2"
        },
        {
          "name": "ひるみ軽減",
          "level": "1"
        }
      ],
      "slots": "110"
    },
    {
      "part": "腕",
      "name": "軽装騎士【手甲】",
      "skills": [
        {
          "name": "ひるみ軽減",
          "level": "2"
        },
        {
          "name": "ガード強化",
          "level": "3"
        }
      ],
      "slots": "210"
    },
    {
      "part": "腰",
      "name": "軽装騎士【帯甲】",
      "skills": [
        {
          "name": "攻めの守勢",
          "level": "1"
        },
        {
          "name": "弱点特効",
          "level": "1"
        },
        {
          "name": "超会心",
          "level": "1"
        }
      ],
      "slots": "300"
    },
    {
      "part": "脚",
      "name": "軽装騎士【脚甲】",
      "skills": [
        {
          "name": "業物",
          "level": "2"
        },
        {
          "name": "超会心",
          "level": "1"
        }
      ],
      "slots": "310"
    }
  ],
  [
    {
      "part": "頭",
      "name": "重装騎士【兜】",
      "skills": [
        {
          "name": "砲弾装填",
          "level": "2"
        },
        {
          "name": "砲術",
          "level": "1"
        },
        {
          "name": "ガード強化",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "胴",
      "name": "重装騎士【鎧】",
      "skills": [
        {
          "name": "砲術",
          "level": "2"
        },
        {
          "name": "攻めの守勢",
          "level": "1"
        },
        {
          "name": "ガード性能",
          "level": "1"
        }
      ],
      "slots": "110"
    },
    {
      "part": "腕",
      "name": "重装騎士【手甲】",
      "skills": [
        {
          "name": "業物",
          "level": "1"
        },
        {
          "name": "ガード性能",
          "level": "2"
        },
        {
          "name": "ガード強化",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "腰",
      "name": "重装騎士【帯甲】",
      "skills": [
        {
          "name": "納刀術",
          "level": "1"
        },
        {
          "name": "攻めの守勢",
          "level": "2"
        },
        {
          "name": "ガード性能",
          "level": "1"
        }
      ],
      "slots": "000"
    },
    {
      "part": "脚",
      "name": "重装騎士【脚甲】",
      "skills": [
        {
          "name": "業物",
          "level": "2"
        },
        {
          "name": "納刀術",
          "level": "2"
        },
        {
          "name": "ガード強化",
          "level": "1"
        }
      ],
      "slots": "100"
    }
  ],
  [
    {
      "part": "頭",
      "name": "祝福の羽飾り",
      "skills": [
        {
          "name": "幸運",
          "level": "3"
        }
      ],
      "slots": "200"
    }
  ],
  [
    {
      "part": "頭",
      "name": "禍鎧・怨【兜】",
      "skills": [
        {
          "name": "鬼火纏",
          "level": "2"
        },
        {
          "name": "災禍転福",
          "level": "2"
        },
        {
          "name": "合気",
          "level": "1"
        }
      ],
      "slots": "300"
    },
    {
      "part": "胴",
      "name": "禍鎧・怨【胸当て】",
      "skills": [
        {
          "name": "翔蟲使い",
          "level": "2"
        },
        {
          "name": "業鎧【修羅】",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "腕",
      "name": "禍鎧・怨【篭手】",
      "skills": [
        {
          "name": "逆襲",
          "level": "1"
        },
        {
          "name": "合気",
          "level": "1"
        },
        {
          "name": "業鎧【修羅】",
          "level": "1"
        }
      ],
      "slots": "320"
    },
    {
      "part": "腰",
      "name": "禍鎧・怨【腰当て】",
      "skills": [
        {
          "name": "災禍転福",
          "level": "1"
        },
        {
          "name": "業鎧【修羅】",
          "level": "1"
        }
      ],
      "slots": "421"
    },
    {
      "part": "脚",
      "name": "禍鎧・怨【具足】",
      "skills": [
        {
          "name": "逆襲",
          "level": "2"
        },
        {
          "name": "鬼火纏",
          "level": "2"
        },
        {
          "name": "翔蟲使い",
          "level": "1"
        }
      ],
      "slots": "400"
    }
  ],
  [
    {
      "part": "頭",
      "name": "禍鎧・真【兜】",
      "skills": [
        {
          "name": "逆恨み",
          "level": "2"
        },
        {
          "name": "ひるみ軽減",
          "level": "2"
        },
        {
          "name": "匠",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "胴",
      "name": "禍鎧・真【胸当て】",
      "skills": [
        {
          "name": "耳栓",
          "level": "1"
        },
        {
          "name": "逆恨み",
          "level": "1"
        },
        {
          "name": "鬼火纏",
          "level": "1"
        }
      ],
      "slots": "200"
    },
    {
      "part": "腕",
      "name": "禍鎧・真【篭手】",
      "skills": [
        {
          "name": "装填拡張",
          "level": "2"
        },
        {
          "name": "鬼火纏",
          "level": "1"
        },
        {
          "name": "匠",
          "level": "2"
        }
      ],
      "slots": "200"
    },
    {
      "part": "腰",
      "name": "禍鎧・真【腰当て】",
      "skills": [
        {
          "name": "耳栓",
          "level": "1"
        },
        {
          "name": "鬼火纏",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "脚",
      "name": "禍鎧・真【具足】",
      "skills": [
        {
          "name": "逆恨み",
          "level": "2"
        },
        {
          "name": "鬼火纏",
          "level": "1"
        },
        {
          "name": "ひるみ軽減",
          "level": "1"
        }
      ],
      "slots": "210"
    }
  ],
  [
    {
      "part": "頭",
      "name": "翔駆の羽飾り",
      "skills": [
        {
          "name": "翔蟲使い",
          "level": "3"
        },
        {
          "name": "壁面移動【翔】",
          "level": "1"
        }
      ],
      "slots": "400"
    }
  ],
  [
    {
      "part": "頭",
      "name": "赫耀ノヘルム・真",
      "skills": [
        {
          "name": "弱点特効",
          "level": "1"
        },
        {
          "name": "龍気活性",
          "level": "1"
        }
      ],
      "slots": "411"
    },
    {
      "part": "胴",
      "name": "赫耀ノメイル・真",
      "skills": [
        {
          "name": "死中に活",
          "level": "2"
        },
        {
          "name": "龍気活性",
          "level": "1"
        }
      ],
      "slots": "410"
    },
    {
      "part": "腕",
      "name": "赫耀ノアーム・真",
      "skills": [
        {
          "name": "弱点特効",
          "level": "2"
        },
        {
          "name": "龍気活性",
          "level": "1"
        }
      ],
      "slots": "400"
    },
    {
      "part": "腰",
      "name": "赫耀ノコイル・真",
      "skills": [
        {
          "name": "逆恨み",
          "level": "2"
        },
        {
          "name": "死中に活",
          "level": "1"
        },
        {
          "name": "龍気活性",
          "level": "1"
        }
      ],
      "slots": "210"
    },
    {
      "part": "脚",
      "name": "赫耀ノグリーヴ・真",
      "skills": [
        {
          "name": "逆恨み",
          "level": "3"
        },
        {
          "name": "龍気活性",
          "level": "1"
        }
      ],
      "slots": "310"
    }
  ],
  [
    {
      "part": "頭",
      "name": "陰陽ノ者【頭冠】",
      "skills": [
        {
          "name": "回避距離UP",
          "level": "3"
        },
        {
          "name": "巧撃",
          "level": "1"
        }
      ],
      "slots": "411"
    },
    {
      "part": "胴",
      "name": "陰陽ノ者【狩衣】",
      "skills": [
        {
          "name": "スタミナ急速回復",
          "level": "2"
        },
        {
          "name": "弱点特効",
          "level": "1"
        },
        {
          "name": "煽衛",
          "level": "1"
        }
      ],
      "slots": "321"
    },
    {
      "part": "腕",
      "name": "陰陽ノ者【手甲】",
      "skills": [
        {
          "name": "挑戦者",
          "level": "2"
        },
        {
          "name": "スタミナ急速回復",
          "level": "1"
        },
        {
          "name": "煽衛",
          "level": "1"
        }
      ],
      "slots": "222"
    },
    {
      "part": "腰",
      "name": "陰陽ノ者【当帯】",
      "skills": [
        {
          "name": "挑戦者",
          "level": "3"
        },
        {
          "name": "巧撃",
          "level": "1"
        },
        {
          "name": "煽衛",
          "level": "1"
        }
      ],
      "slots": "221"
    },
    {
      "part": "脚",
      "name": "陰陽ノ者【差袴】",
      "skills": [
        {
          "name": "攻めの守勢",
          "level": "2"
        },
        {
          "name": "ひるみ軽減",
          "level": "3"
        },
        {
          "name": "弱点特効",
          "level": "2"
        }
      ],
      "slots": "400"
    }
  ]
])
export default ARMORS
