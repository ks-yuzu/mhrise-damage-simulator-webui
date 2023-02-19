export interface Monster {
  name:       string
  parts: {
    partName: string,
    sever:    number,
    blunt:    number,
    ammo:     number,
    fire:     number,
    water:    number,
    thunder:  number,
    ice:      number,
    dragon:   number,
  }[]
}

const MONSTERS = Object.freeze([
  {
    "name": "イソネミクニ亜種",
    "parts": [
      {
        "partName": "頭部",
        "sever": 55,
        "blunt": 65,
        "ammo": 45,
        "fire": 15,
        "water": 0,
        "thunder": 10,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "髪ヒレ",
        "sever": 45,
        "blunt": 45,
        "ammo": 45,
        "fire": 25,
        "water": 0,
        "thunder": 15,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "首",
        "sever": 70,
        "blunt": 70,
        "ammo": 30,
        "fire": 10,
        "water": 0,
        "thunder": 5,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "腹部",
        "sever": 30,
        "blunt": 30,
        "ammo": 15,
        "fire": 10,
        "water": 0,
        "thunder": 0,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "背中",
        "sever": 25,
        "blunt": 25,
        "ammo": 25,
        "fire": 10,
        "water": 0,
        "thunder": 5,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "前脚",
        "sever": 35,
        "blunt": 30,
        "ammo": 20,
        "fire": 20,
        "water": 0,
        "thunder": 10,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "後脚",
        "sever": 25,
        "blunt": 30,
        "ammo": 15,
        "fire": 10,
        "water": 0,
        "thunder": 5,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "尻尾",
        "sever": 38,
        "blunt": 45,
        "ammo": 35,
        "fire": 10,
        "water": 0,
        "thunder": 5,
        "ice": 0,
        "dragon": 0
      }
    ]
  },
  {
    "name": "エスピナス",
    "parts": [
      {
        "partName": "頭部",
        "sever": 30,
        "blunt": 30,
        "ammo": 20,
        "fire": 0,
        "water": 10,
        "thunder": 5,
        "ice": 15,
        "dragon": 10
      },
      {
        "partName": "頭部(怒り)",
        "sever": 65,
        "blunt": 65,
        "ammo": 50,
        "fire": 0,
        "water": 15,
        "thunder": 5,
        "ice": 30,
        "dragon": 20
      },
      {
        "partName": "腹部",
        "sever": 30,
        "blunt": 30,
        "ammo": 25,
        "fire": 0,
        "water": 10,
        "thunder": 5,
        "ice": 15,
        "dragon": 10
      },
      {
        "partName": "腹部(怒り)",
        "sever": 60,
        "blunt": 60,
        "ammo": 40,
        "fire": 0,
        "water": 15,
        "thunder": 5,
        "ice": 25,
        "dragon": 20
      },
      {
        "partName": "背中",
        "sever": 20,
        "blunt": 20,
        "ammo": 15,
        "fire": 0,
        "water": 5,
        "thunder": 0,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "背中(怒り)",
        "sever": 30,
        "blunt": 30,
        "ammo": 20,
        "fire": 0,
        "water": 10,
        "thunder": 5,
        "ice": 15,
        "dragon": 10
      },
      {
        "partName": "翼",
        "sever": 23,
        "blunt": 23,
        "ammo": 20,
        "fire": 0,
        "water": 5,
        "thunder": 0,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "翼(怒り)",
        "sever": 30,
        "blunt": 30,
        "ammo": 40,
        "fire": 0,
        "water": 10,
        "thunder": 5,
        "ice": 20,
        "dragon": 15
      },
      {
        "partName": "脚",
        "sever": 38,
        "blunt": 38,
        "ammo": 40,
        "fire": 0,
        "water": 10,
        "thunder": 5,
        "ice": 15,
        "dragon": 10
      },
      {
        "partName": "脚(怒り)",
        "sever": 34,
        "blunt": 34,
        "ammo": 30,
        "fire": 0,
        "water": 10,
        "thunder": 5,
        "ice": 15,
        "dragon": 10
      },
      {
        "partName": "尻尾",
        "sever": 28,
        "blunt": 25,
        "ammo": 20,
        "fire": 0,
        "water": 5,
        "thunder": 0,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "尻尾(怒り)",
        "sever": 50,
        "blunt": 42,
        "ammo": 45,
        "fire": 0,
        "water": 10,
        "thunder": 5,
        "ice": 20,
        "dragon": 15
      }
    ]
  },
  {
    "name": "エスピナス亜種",
    "parts": [
      {
        "partName": "頭部",
        "sever": 30,
        "blunt": 30,
        "ammo": 20,
        "fire": 0,
        "water": 15,
        "thunder": 10,
        "ice": 5,
        "dragon": 10
      },
      {
        "partName": "腹部",
        "sever": 30,
        "blunt": 30,
        "ammo": 25,
        "fire": 0,
        "water": 15,
        "thunder": 10,
        "ice": 5,
        "dragon": 10
      },
      {
        "partName": "翼",
        "sever": 23,
        "blunt": 23,
        "ammo": 20,
        "fire": 0,
        "water": 10,
        "thunder": 10,
        "ice": 0,
        "dragon": 5
      },
      {
        "partName": "背中",
        "sever": 20,
        "blunt": 20,
        "ammo": 15,
        "fire": 0,
        "water": 10,
        "thunder": 10,
        "ice": 0,
        "dragon": 5
      },
      {
        "partName": "脚",
        "sever": 38,
        "blunt": 38,
        "ammo": 40,
        "fire": 0,
        "water": 15,
        "thunder": 10,
        "ice": 5,
        "dragon": 10
      },
      {
        "partName": "尻尾",
        "sever": 28,
        "blunt": 25,
        "ammo": 20,
        "fire": 0,
        "water": 10,
        "thunder": 5,
        "ice": 0,
        "dragon": 5
      }
    ]
  },
  {
    "name": "オロミドロ亜種",
    "parts": [
      {
        "partName": "頭部",
        "sever": 55,
        "blunt": 60,
        "ammo": 45,
        "fire": 0,
        "water": 20,
        "thunder": 10,
        "ice": 20,
        "dragon": 5
      },
      {
        "partName": "頭部(纏い時)",
        "sever": 60,
        "blunt": 65,
        "ammo": 45,
        "fire": 0,
        "water": 20,
        "thunder": 10,
        "ice": 20,
        "dragon": 5
      },
      {
        "partName": "腹部",
        "sever": 40,
        "blunt": 40,
        "ammo": 25,
        "fire": 0,
        "water": 20,
        "thunder": 5,
        "ice": 15,
        "dragon": 5
      },
      {
        "partName": "背中",
        "sever": 25,
        "blunt": 30,
        "ammo": 20,
        "fire": 0,
        "water": 15,
        "thunder": 5,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "前脚",
        "sever": 40,
        "blunt": 40,
        "ammo": 40,
        "fire": 0,
        "water": 15,
        "thunder": 5,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "前脚(破壊後)",
        "sever": 50,
        "blunt": 50,
        "ammo": 45,
        "fire": 0,
        "water": 20,
        "thunder": 5,
        "ice": 15,
        "dragon": 5
      },
      {
        "partName": "後脚",
        "sever": 21,
        "blunt": 23,
        "ammo": 20,
        "fire": 0,
        "water": 10,
        "thunder": 5,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "尻尾",
        "sever": 24,
        "blunt": 24,
        "ammo": 15,
        "fire": 0,
        "water": 25,
        "thunder": 10,
        "ice": 20,
        "dragon": 5
      },
      {
        "partName": "尻尾先端",
        "sever": 50,
        "blunt": 45,
        "ammo": 25,
        "fire": 0,
        "water": 25,
        "thunder": 15,
        "ice": 20,
        "dragon": 15
      },
      {
        "partName": "尻尾先端(纏い時)",
        "sever": 55,
        "blunt": 50,
        "ammo": 30,
        "fire": 0,
        "water": 25,
        "thunder": 15,
        "ice": 20,
        "dragon": 15
      },
      {
        "partName": "大岩玉",
        "sever": 25,
        "blunt": 30,
        "ammo": 20,
        "fire": 0,
        "water": 0,
        "thunder": 0,
        "ice": 0,
        "dragon": 0
      }
    ]
  },
  {
    "name": "ガイアデルム",
    "parts": [
      {
        "partName": "頭部",
        "sever": 70,
        "blunt": 72,
        "ammo": 45,
        "fire": 10,
        "water": 0,
        "thunder": 20,
        "ice": 0,
        "dragon": 30
      },
      {
        "partName": "首",
        "sever": 40,
        "blunt": 42,
        "ammo": 24,
        "fire": 5,
        "water": 0,
        "thunder": 15,
        "ice": 0,
        "dragon": 25
      },
      {
        "partName": "腹部",
        "sever": 32,
        "blunt": 34,
        "ammo": 16,
        "fire": 5,
        "water": 0,
        "thunder": 15,
        "ice": 0,
        "dragon": 25
      },
      {
        "partName": "背中",
        "sever": 20,
        "blunt": 20,
        "ammo": 14,
        "fire": 5,
        "water": 0,
        "thunder": 5,
        "ice": 0,
        "dragon": 10
      },
      {
        "partName": "前脚",
        "sever": 32,
        "blunt": 32,
        "ammo": 20,
        "fire": 5,
        "water": 0,
        "thunder": 10,
        "ice": 0,
        "dragon": 20
      },
      {
        "partName": "後脚",
        "sever": 26,
        "blunt": 26,
        "ammo": 18,
        "fire": 5,
        "water": 0,
        "thunder": 10,
        "ice": 0,
        "dragon": 15
      },
      {
        "partName": "尻尾",
        "sever": 32,
        "blunt": 30,
        "ammo": 16,
        "fire": 5,
        "water": 0,
        "thunder": 10,
        "ice": 0,
        "dragon": 15
      },
      {
        "partName": "尻尾先端",
        "sever": 45,
        "blunt": 38,
        "ammo": 22,
        "fire": 5,
        "water": 0,
        "thunder": 15,
        "ice": 0,
        "dragon": 25
      },
      {
        "partName": "翼脚",
        "sever": 43,
        "blunt": 43,
        "ammo": 28,
        "fire": 5,
        "water": 0,
        "thunder": 15,
        "ice": 0,
        "dragon": 25
      }
    ]
  },
  {
    "name": "ガランゴルム",
    "parts": [
      {
        "partName": "頭部",
        "sever": 50,
        "blunt": 45,
        "ammo": 35,
        "fire": 8,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "頭部(纏い時)",
        "sever": 60,
        "blunt": 55,
        "ammo": 35,
        "fire": 20,
        "water": 20,
        "thunder": 30,
        "ice": 30,
        "dragon": 0
      },
      {
        "partName": "胴",
        "sever": 35,
        "blunt": 35,
        "ammo": 15,
        "fire": 8,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "腕",
        "sever": 45,
        "blunt": 50,
        "ammo": 45,
        "fire": 8,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "左腕(纏い時)",
        "sever": 55,
        "blunt": 60,
        "ammo": 45,
        "fire": 25,
        "water": 0,
        "thunder": 25,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "右腕(纏い時)",
        "sever": 55,
        "blunt": 60,
        "ammo": 45,
        "fire": 0,
        "water": 25,
        "thunder": 0,
        "ice": 25,
        "dragon": 0
      },
      {
        "partName": "後脚",
        "sever": 25,
        "blunt": 25,
        "ammo": 20,
        "fire": 8,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "尻尾",
        "sever": 40,
        "blunt": 40,
        "ammo": 30,
        "fire": 8,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "尻尾(破壊後)",
        "sever": 25,
        "blunt": 25,
        "ammo": 20,
        "fire": 8,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      }
    ]
  },
  {
    "name": "ゴアマガラ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 65,
        "blunt": 55,
        "ammo": 45,
        "fire": 15,
        "water": 0,
        "thunder": 15,
        "ice": 5,
        "dragon": 15
      },
      {
        "partName": "触角",
        "sever": 75,
        "blunt": 70,
        "ammo": 50,
        "fire": 20,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 25
      },
      {
        "partName": "首",
        "sever": 45,
        "blunt": 45,
        "ammo": 25,
        "fire": 15,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "胴",
        "sever": 25,
        "blunt": 25,
        "ammo": 20,
        "fire": 10,
        "water": 0,
        "thunder": 5,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "翼",
        "sever": 26,
        "blunt": 26,
        "ammo": 15,
        "fire": 15,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "翼脚",
        "sever": 27,
        "blunt": 27,
        "ammo": 20,
        "fire": 20,
        "water": 0,
        "thunder": 15,
        "ice": 5,
        "dragon": 10
      },
      {
        "partName": "前脚",
        "sever": 42,
        "blunt": 42,
        "ammo": 25,
        "fire": 10,
        "water": 0,
        "thunder": 5,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "後脚",
        "sever": 38,
        "blunt": 38,
        "ammo": 35,
        "fire": 10,
        "water": 0,
        "thunder": 5,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "尻尾",
        "sever": 38,
        "blunt": 38,
        "ammo": 25,
        "fire": 10,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 5
      }
    ]
  },
  {
    "name": "シャガルマガラ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 65,
        "blunt": 60,
        "ammo": 45,
        "fire": 20,
        "water": 0,
        "thunder": 15,
        "ice": 5,
        "dragon": 25
      },
      {
        "partName": "首",
        "sever": 45,
        "blunt": 45,
        "ammo": 20,
        "fire": 15,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 20
      },
      {
        "partName": "胴",
        "sever": 25,
        "blunt": 25,
        "ammo": 15,
        "fire": 10,
        "water": 0,
        "thunder": 5,
        "ice": 5,
        "dragon": 10
      },
      {
        "partName": "翼",
        "sever": 26,
        "blunt": 26,
        "ammo": 10,
        "fire": 10,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 15
      },
      {
        "partName": "翼脚(破壊)",
        "sever": 36,
        "blunt": 36,
        "ammo": 25,
        "fire": 15,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 20
      },
      {
        "partName": "前脚",
        "sever": 40,
        "blunt": 40,
        "ammo": 30,
        "fire": 10,
        "water": 0,
        "thunder": 5,
        "ice": 5,
        "dragon": 10
      },
      {
        "partName": "後脚",
        "sever": 36,
        "blunt": 36,
        "ammo": 30,
        "fire": 10,
        "water": 0,
        "thunder": 5,
        "ice": 5,
        "dragon": 10
      },
      {
        "partName": "尻尾",
        "sever": 36,
        "blunt": 36,
        "ammo": 25,
        "fire": 10,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 15
      },
      {
        "partName": "翼脚",
        "sever": 22,
        "blunt": 25,
        "ammo": 20,
        "fire": 25,
        "water": 0,
        "thunder": 15,
        "ice": 5,
        "dragon": 30
      }
    ]
  },
  {
    "name": "ショウグンギザミ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 50,
        "blunt": 45,
        "ammo": 45,
        "fire": 10,
        "water": 10,
        "thunder": 35,
        "ice": 20,
        "dragon": 0
      },
      {
        "partName": "胴",
        "sever": 35,
        "blunt": 35,
        "ammo": 25,
        "fire": 15,
        "water": 5,
        "thunder": 20,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "腕",
        "sever": 25,
        "blunt": 35,
        "ammo": 25,
        "fire": 15,
        "water": 5,
        "thunder": 15,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "爪",
        "sever": 25,
        "blunt": 30,
        "ammo": 15,
        "fire": 35,
        "water": 5,
        "thunder": 20,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "ヤド",
        "sever": 25,
        "blunt": 45,
        "ammo": 25,
        "fire": 20,
        "water": 5,
        "thunder": 25,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "脚",
        "sever": 35,
        "blunt": 30,
        "ammo": 30,
        "fire": 15,
        "water": 5,
        "thunder": 15,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "弱点",
        "sever": 45,
        "blunt": 50,
        "ammo": 35,
        "fire": 10,
        "water": 10,
        "thunder": 20,
        "ice": 15,
        "dragon": 0
      }
    ]
  },
  {
    "name": "セルレギオス",
    "parts": [
      {
        "partName": "頭部",
        "sever": 55,
        "blunt": 60,
        "ammo": 45,
        "fire": 0,
        "water": 10,
        "thunder": 20,
        "ice": 15,
        "dragon": 5
      },
      {
        "partName": "首",
        "sever": 35,
        "blunt": 40,
        "ammo": 30,
        "fire": 0,
        "water": 5,
        "thunder": 15,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "腹部",
        "sever": 35,
        "blunt": 35,
        "ammo": 25,
        "fire": 0,
        "water": 5,
        "thunder": 10,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "翼",
        "sever": 35,
        "blunt": 35,
        "ammo": 25,
        "fire": 0,
        "water": 5,
        "thunder": 20,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "翼腕",
        "sever": 30,
        "blunt": 30,
        "ammo": 20,
        "fire": 0,
        "water": 5,
        "thunder": 25,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "背中",
        "sever": 30,
        "blunt": 30,
        "ammo": 20,
        "fire": 0,
        "water": 5,
        "thunder": 10,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "脚",
        "sever": 50,
        "blunt": 45,
        "ammo": 45,
        "fire": 0,
        "water": 10,
        "thunder": 20,
        "ice": 15,
        "dragon": 5
      },
      {
        "partName": "尻尾",
        "sever": 40,
        "blunt": 35,
        "ammo": 35,
        "fire": 0,
        "water": 5,
        "thunder": 15,
        "ice": 10,
        "dragon": 5
      }
    ]
  },
  {
    "name": "タマミツネ希少種",
    "parts": [
      {
        "partName": "頭部",
        "sever": 63,
        "blunt": 63,
        "ammo": 40,
        "fire": 0,
        "water": 5,
        "thunder": 8,
        "ice": 10,
        "dragon": 3
      },
      {
        "partName": "首",
        "sever": 43,
        "blunt": 43,
        "ammo": 15,
        "fire": 0,
        "water": 5,
        "thunder": 8,
        "ice": 10,
        "dragon": 3
      },
      {
        "partName": "胴",
        "sever": 25,
        "blunt": 25,
        "ammo": 15,
        "fire": 0,
        "water": 5,
        "thunder": 8,
        "ice": 10,
        "dragon": 3
      },
      {
        "partName": "背ビレ",
        "sever": 43,
        "blunt": 43,
        "ammo": 25,
        "fire": 0,
        "water": 8,
        "thunder": 10,
        "ice": 20,
        "dragon": 5
      },
      {
        "partName": "前脚",
        "sever": 28,
        "blunt": 28,
        "ammo": 10,
        "fire": 0,
        "water": 15,
        "thunder": 25,
        "ice": 30,
        "dragon": 5
      },
      {
        "partName": "左爪",
        "sever": 24,
        "blunt": 24,
        "ammo": 10,
        "fire": 0,
        "water": 15,
        "thunder": 28,
        "ice": 30,
        "dragon": 5
      },
      {
        "partName": "右爪",
        "sever": 24,
        "blunt": 24,
        "ammo": 10,
        "fire": 0,
        "water": 15,
        "thunder": 28,
        "ice": 30,
        "dragon": 5
      },
      {
        "partName": "後脚",
        "sever": 38,
        "blunt": 38,
        "ammo": 25,
        "fire": 0,
        "water": 5,
        "thunder": 8,
        "ice": 15,
        "dragon": 3
      },
      {
        "partName": "尻尾",
        "sever": 43,
        "blunt": 43,
        "ammo": 45,
        "fire": 0,
        "water": 8,
        "thunder": 10,
        "ice": 15,
        "dragon": 5
      }
    ]
  },
  {
    "name": "ダイミョウザザミ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 50,
        "blunt": 60,
        "ammo": 45,
        "fire": 30,
        "water": 10,
        "thunder": 35,
        "ice": 20,
        "dragon": 0
      },
      {
        "partName": "胴",
        "sever": 40,
        "blunt": 50,
        "ammo": 30,
        "fire": 15,
        "water": 5,
        "thunder": 20,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "腕",
        "sever": 40,
        "blunt": 45,
        "ammo": 30,
        "fire": 15,
        "water": 5,
        "thunder": 15,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "左爪",
        "sever": 25,
        "blunt": 30,
        "ammo": 15,
        "fire": 35,
        "water": 5,
        "thunder": 20,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "左爪(破壊)",
        "sever": 30,
        "blunt": 40,
        "ammo": 25,
        "fire": 35,
        "water": 5,
        "thunder": 25,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "右爪",
        "sever": 25,
        "blunt": 30,
        "ammo": 15,
        "fire": 35,
        "water": 5,
        "thunder": 20,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "右爪(破壊)",
        "sever": 30,
        "blunt": 40,
        "ammo": 25,
        "fire": 35,
        "water": 5,
        "thunder": 25,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "ヤド",
        "sever": 22,
        "blunt": 40,
        "ammo": 25,
        "fire": 20,
        "water": 5,
        "thunder": 25,
        "ice": 20,
        "dragon": 0
      },
      {
        "partName": "ヤド(破壊)",
        "sever": 30,
        "blunt": 40,
        "ammo": 25,
        "fire": 35,
        "water": 5,
        "thunder": 25,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "右脚",
        "sever": 35,
        "blunt": 40,
        "ammo": 30,
        "fire": 15,
        "water": 5,
        "thunder": 15,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "左脚",
        "sever": 35,
        "blunt": 40,
        "ammo": 30,
        "fire": 15,
        "water": 5,
        "thunder": 15,
        "ice": 10,
        "dragon": 0
      }
    ]
  },
  {
    "name": "ナルガクルガ希少種",
    "parts": [
      {
        "partName": "頭部",
        "sever": 55,
        "blunt": 60,
        "ammo": 45,
        "fire": 0,
        "water": 5,
        "thunder": 0,
        "ice": 20,
        "dragon": 10
      },
      {
        "partName": "首",
        "sever": 30,
        "blunt": 30,
        "ammo": 15,
        "fire": 0,
        "water": 5,
        "thunder": 0,
        "ice": 15,
        "dragon": 10
      },
      {
        "partName": "腹部",
        "sever": 25,
        "blunt": 40,
        "ammo": 30,
        "fire": 0,
        "water": 10,
        "thunder": 0,
        "ice": 20,
        "dragon": 15
      },
      {
        "partName": "刃翼",
        "sever": 21,
        "blunt": 24,
        "ammo": 21,
        "fire": 0,
        "water": 10,
        "thunder": 0,
        "ice": 30,
        "dragon": 15
      },
      {
        "partName": "前脚",
        "sever": 38,
        "blunt": 43,
        "ammo": 30,
        "fire": 0,
        "water": 5,
        "thunder": 0,
        "ice": 20,
        "dragon": 10
      },
      {
        "partName": "後脚",
        "sever": 30,
        "blunt": 30,
        "ammo": 25,
        "fire": 0,
        "water": 5,
        "thunder": 0,
        "ice": 15,
        "dragon": 10
      },
      {
        "partName": "尻尾",
        "sever": 40,
        "blunt": 35,
        "ammo": 45,
        "fire": 0,
        "water": 5,
        "thunder": 0,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "尻尾先端",
        "sever": 40,
        "blunt": 35,
        "ammo": 50,
        "fire": 0,
        "water": 5,
        "thunder": 0,
        "ice": 10,
        "dragon": 5
      }
    ]
  },
  {
    "name": "ビシュテンゴ亜種",
    "parts": [
      {
        "partName": "頭部",
        "sever": 70,
        "blunt": 70,
        "ammo": 60,
        "fire": 0,
        "water": 25,
        "thunder": 20,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "胴",
        "sever": 25,
        "blunt": 25,
        "ammo": 30,
        "fire": 0,
        "water": 15,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "翼",
        "sever": 40,
        "blunt": 30,
        "ammo": 25,
        "fire": 0,
        "water": 10,
        "thunder": 5,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "前脚",
        "sever": 25,
        "blunt": 25,
        "ammo": 30,
        "fire": 0,
        "water": 10,
        "thunder": 5,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "後脚",
        "sever": 25,
        "blunt": 30,
        "ammo": 25,
        "fire": 0,
        "water": 10,
        "thunder": 5,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "尻尾",
        "sever": 60,
        "blunt": 40,
        "ammo": 40,
        "fire": 0,
        "water": 20,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      }
    ]
  },
  {
    "name": "メルゼナ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 46,
        "blunt": 48,
        "ammo": 45,
        "fire": 15,
        "water": 0,
        "thunder": 0,
        "ice": 15,
        "dragon": 25
      },
      {
        "partName": "胴",
        "sever": 32,
        "blunt": 30,
        "ammo": 15,
        "fire": 10,
        "water": 0,
        "thunder": 0,
        "ice": 5,
        "dragon": 15
      },
      {
        "partName": "翼",
        "sever": 28,
        "blunt": 28,
        "ammo": 5,
        "fire": 10,
        "water": 0,
        "thunder": 0,
        "ice": 5,
        "dragon": 15
      },
      {
        "partName": "前脚",
        "sever": 45,
        "blunt": 40,
        "ammo": 30,
        "fire": 10,
        "water": 0,
        "thunder": 0,
        "ice": 5,
        "dragon": 20
      },
      {
        "partName": "後脚",
        "sever": 30,
        "blunt": 28,
        "ammo": 5,
        "fire": 10,
        "water": 0,
        "thunder": 0,
        "ice": 5,
        "dragon": 15
      },
      {
        "partName": "尻尾",
        "sever": 35,
        "blunt": 32,
        "ammo": 10,
        "fire": 10,
        "water": 0,
        "thunder": 0,
        "ice": 5,
        "dragon": 15
      },
      {
        "partName": "尻尾先端",
        "sever": 26,
        "blunt": 22,
        "ammo": 10,
        "fire": 10,
        "water": 0,
        "thunder": 0,
        "ice": 5,
        "dragon": 15
      }
    ]
  },
  {
    "name": "ヤツカダキ亜種",
    "parts": [
      {
        "partName": "頭部",
        "sever": 55,
        "blunt": 65,
        "ammo": 45,
        "fire": 0,
        "water": 25,
        "thunder": 0,
        "ice": 15,
        "dragon": 0
      },
      {
        "partName": "腹部",
        "sever": 38,
        "blunt": 43,
        "ammo": 10,
        "fire": 0,
        "water": 10,
        "thunder": 0,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "腹部(繭化)",
        "sever": 50,
        "blunt": 50,
        "ammo": 45,
        "fire": 0,
        "water": 25,
        "thunder": 0,
        "ice": 15,
        "dragon": 0
      },
      {
        "partName": "胸部",
        "sever": 25,
        "blunt": 25,
        "ammo": 5,
        "fire": 0,
        "water": 10,
        "thunder": 0,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "爪",
        "sever": 20,
        "blunt": 20,
        "ammo": 5,
        "fire": 0,
        "water": 30,
        "thunder": 0,
        "ice": 15,
        "dragon": 0
      },
      {
        "partName": "爪(破壊後)",
        "sever": 30,
        "blunt": 43,
        "ammo": 20,
        "fire": 0,
        "water": 20,
        "thunder": 0,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "脚",
        "sever": 30,
        "blunt": 30,
        "ammo": 10,
        "fire": 0,
        "water": 10,
        "thunder": 0,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "前脚(糸)",
        "sever": 45,
        "blunt": 45,
        "ammo": 45,
        "fire": 0,
        "water": 10,
        "thunder": 0,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "後脚(糸)",
        "sever": 45,
        "blunt": 45,
        "ammo": 30,
        "fire": 0,
        "water": 20,
        "thunder": 0,
        "ice": 10,
        "dragon": 0
      }
    ]
  },
  {
    "name": "ライゼクス",
    "parts": [
      {
        "partName": "頭部",
        "sever": 55,
        "blunt": 55,
        "ammo": 30,
        "fire": 5,
        "water": 5,
        "thunder": 0,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "頭部(破壊)",
        "sever": 57,
        "blunt": 57,
        "ammo": 30,
        "fire": 5,
        "water": 5,
        "thunder": 0,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "首",
        "sever": 55,
        "blunt": 55,
        "ammo": 30,
        "fire": 5,
        "water": 5,
        "thunder": 0,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "腹部",
        "sever": 24,
        "blunt": 24,
        "ammo": 15,
        "fire": 5,
        "water": 5,
        "thunder": 0,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "翼",
        "sever": 25,
        "blunt": 25,
        "ammo": 20,
        "fire": 5,
        "water": 5,
        "thunder": 0,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "翼(破壊)",
        "sever": 35,
        "blunt": 35,
        "ammo": 25,
        "fire": 5,
        "water": 10,
        "thunder": 0,
        "ice": 15,
        "dragon": 5
      },
      {
        "partName": "背中",
        "sever": 25,
        "blunt": 25,
        "ammo": 20,
        "fire": 5,
        "water": 5,
        "thunder": 0,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "背中(破壊)",
        "sever": 26,
        "blunt": 26,
        "ammo": 20,
        "fire": 5,
        "water": 10,
        "thunder": 0,
        "ice": 15,
        "dragon": 5
      },
      {
        "partName": "脚",
        "sever": 25,
        "blunt": 25,
        "ammo": 15,
        "fire": 5,
        "water": 5,
        "thunder": 0,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "尻尾",
        "sever": 35,
        "blunt": 35,
        "ammo": 20,
        "fire": 5,
        "water": 10,
        "thunder": 0,
        "ice": 15,
        "dragon": 5
      },
      {
        "partName": "尻尾先端",
        "sever": 35,
        "blunt": 35,
        "ammo": 20,
        "fire": 5,
        "water": 10,
        "thunder": 0,
        "ice": 15,
        "dragon": 5
      },
      {
        "partName": "尻尾先端(破壊)",
        "sever": 37,
        "blunt": 37,
        "ammo": 22,
        "fire": 5,
        "water": 10,
        "thunder": 0,
        "ice": 15,
        "dragon": 5
      }
    ]
  },
  {
    "name": "リオレイア希少種",
    "parts": [
      {
        "partName": "頭部",
        "sever": 22,
        "blunt": 22,
        "ammo": 22,
        "fire": 0,
        "water": 5,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "頭部(破壊)",
        "sever": 55,
        "blunt": 60,
        "ammo": 45,
        "fire": 0,
        "water": 15,
        "thunder": 20,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "首",
        "sever": 22,
        "blunt": 22,
        "ammo": 22,
        "fire": 0,
        "water": 5,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "首(破壊)",
        "sever": 40,
        "blunt": 40,
        "ammo": 30,
        "fire": 0,
        "water": 15,
        "thunder": 20,
        "ice": 15,
        "dragon": 0
      },
      {
        "partName": "胴",
        "sever": 25,
        "blunt": 30,
        "ammo": 30,
        "fire": 5,
        "water": 10,
        "thunder": 15,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "翼",
        "sever": 35,
        "blunt": 35,
        "ammo": 35,
        "fire": 0,
        "water": 15,
        "thunder": 15,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "背中",
        "sever": 22,
        "blunt": 22,
        "ammo": 15,
        "fire": 0,
        "water": 5,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "脚",
        "sever": 44,
        "blunt": 44,
        "ammo": 45,
        "fire": 0,
        "water": 10,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "尻尾",
        "sever": 20,
        "blunt": 20,
        "ammo": 45,
        "fire": 0,
        "water": 10,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "尻尾先端",
        "sever": 45,
        "blunt": 45,
        "ammo": 45,
        "fire": 0,
        "water": 10,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      }
    ]
  },
  {
    "name": "リオレウス希少種",
    "parts": [
      {
        "partName": "頭部",
        "sever": 22,
        "blunt": 22,
        "ammo": 15,
        "fire": 0,
        "water": 10,
        "thunder": 5,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "頭部(破壊)",
        "sever": 55,
        "blunt": 60,
        "ammo": 45,
        "fire": 0,
        "water": 15,
        "thunder": 15,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "首",
        "sever": 22,
        "blunt": 22,
        "ammo": 15,
        "fire": 0,
        "water": 5,
        "thunder": 5,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "首(破壊)",
        "sever": 40,
        "blunt": 40,
        "ammo": 30,
        "fire": 0,
        "water": 10,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "腹部",
        "sever": 22,
        "blunt": 22,
        "ammo": 20,
        "fire": 0,
        "water": 15,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "翼",
        "sever": 50,
        "blunt": 45,
        "ammo": 40,
        "fire": 0,
        "water": 25,
        "thunder": 15,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "背中",
        "sever": 22,
        "blunt": 22,
        "ammo": 20,
        "fire": 0,
        "water": null,
        "thunder": 15,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "脚",
        "sever": 38,
        "blunt": 38,
        "ammo": 32,
        "fire": 0,
        "water": 10,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "尻尾",
        "sever": 22,
        "blunt": 22,
        "ammo": 45,
        "fire": 0,
        "water": 10,
        "thunder": 5,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "尻尾先端",
        "sever": 55,
        "blunt": 50,
        "ammo": 45,
        "fire": 0,
        "water": 10,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      }
    ]
  },
  {
    "name": "ルナガロン",
    "parts": [
      {
        "partName": "頭部",
        "sever": 45,
        "blunt": 50,
        "ammo": 45,
        "fire": 10,
        "water": 0,
        "thunder": 10,
        "ice": 0,
        "dragon": 10
      },
      {
        "partName": "胴",
        "sever": 30,
        "blunt": 30,
        "ammo": 10,
        "fire": 10,
        "water": 0,
        "thunder": 5,
        "ice": 0,
        "dragon": 5
      },
      {
        "partName": "腹部",
        "sever": 35,
        "blunt": 35,
        "ammo": 15,
        "fire": 20,
        "water": 0,
        "thunder": 10,
        "ice": 0,
        "dragon": 5
      },
      {
        "partName": "背中",
        "sever": 25,
        "blunt": 30,
        "ammo": 15,
        "fire": 15,
        "water": 0,
        "thunder": 10,
        "ice": 0,
        "dragon": 5
      },
      {
        "partName": "前脚",
        "sever": 35,
        "blunt": 35,
        "ammo": 15,
        "fire": 15,
        "water": 0,
        "thunder": 10,
        "ice": 0,
        "dragon": 5
      },
      {
        "partName": "後脚",
        "sever": 30,
        "blunt": 30,
        "ammo": 20,
        "fire": 10,
        "water": 0,
        "thunder": 5,
        "ice": 0,
        "dragon": 5
      },
      {
        "partName": "尻尾",
        "sever": 30,
        "blunt": 30,
        "ammo": 25,
        "fire": 10,
        "water": 0,
        "thunder": 10,
        "ice": 0,
        "dragon": 5
      }
    ]
  },
  {
    "name": "傀異克服オオナズチ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 55,
        "blunt": 50,
        "ammo": 45,
        "fire": 25,
        "water": 0,
        "thunder": 10,
        "ice": 0,
        "dragon": 20
      },
      {
        "partName": "腹部",
        "sever": 25,
        "blunt": 30,
        "ammo": 22,
        "fire": 20,
        "water": 5,
        "thunder": 10,
        "ice": 0,
        "dragon": 10
      },
      {
        "partName": "翼",
        "sever": 22,
        "blunt": 22,
        "ammo": 20,
        "fire": 20,
        "water": 0,
        "thunder": 10,
        "ice": 0,
        "dragon": 15
      },
      {
        "partName": "背中",
        "sever": 25,
        "blunt": 22,
        "ammo": 25,
        "fire": 25,
        "water": 0,
        "thunder": 10,
        "ice": 0,
        "dragon": 20
      },
      {
        "partName": "前脚",
        "sever": 45,
        "blunt": 45,
        "ammo": 20,
        "fire": 20,
        "water": 0,
        "thunder": 10,
        "ice": 0,
        "dragon": 10
      },
      {
        "partName": "後脚",
        "sever": 30,
        "blunt": 25,
        "ammo": 20,
        "fire": 25,
        "water": 0,
        "thunder": 10,
        "ice": 0,
        "dragon": 20
      },
      {
        "partName": "尻尾",
        "sever": 35,
        "blunt": 22,
        "ammo": 45,
        "fire": 10,
        "water": 0,
        "thunder": 10,
        "ice": 0,
        "dragon": 5
      }
    ]
  },
  {
    "name": "傀異克服クシャルダオラ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 60,
        "blunt": 55,
        "ammo": 35,
        "fire": 10,
        "water": 5,
        "thunder": 15,
        "ice": 0,
        "dragon": 10
      },
      {
        "partName": "首",
        "sever": 40,
        "blunt": 35,
        "ammo": 25,
        "fire": 10,
        "water": 5,
        "thunder": 15,
        "ice": 0,
        "dragon": 5
      },
      {
        "partName": "腹部",
        "sever": 35,
        "blunt": 50,
        "ammo": 35,
        "fire": 10,
        "water": 5,
        "thunder": 15,
        "ice": 0,
        "dragon": 10
      },
      {
        "partName": "翼",
        "sever": 23,
        "blunt": 23,
        "ammo": 20,
        "fire": 10,
        "water": 5,
        "thunder": 20,
        "ice": 0,
        "dragon": 15
      },
      {
        "partName": "背中",
        "sever": 23,
        "blunt": 25,
        "ammo": 45,
        "fire": 10,
        "water": 5,
        "thunder": 15,
        "ice": 0,
        "dragon": 10
      },
      {
        "partName": "前脚",
        "sever": 45,
        "blunt": 50,
        "ammo": 45,
        "fire": 10,
        "water": 5,
        "thunder": 20,
        "ice": 0,
        "dragon": 10
      },
      {
        "partName": "後脚",
        "sever": 30,
        "blunt": 30,
        "ammo": 25,
        "fire": 10,
        "water": 5,
        "thunder": 15,
        "ice": 0,
        "dragon": 5
      },
      {
        "partName": "尻尾",
        "sever": 35,
        "blunt": 30,
        "ammo": 35,
        "fire": 10,
        "water": 5,
        "thunder": 20,
        "ice": 0,
        "dragon": 15
      }
    ]
  },
  {
    "name": "傀異克服テオテスカトル",
    "parts": [
      {
        "partName": "頭部",
        "sever": 50,
        "blunt": 55,
        "ammo": 45,
        "fire": 0,
        "water": 20,
        "thunder": 10,
        "ice": 15,
        "dragon": 10
      },
      {
        "partName": "首",
        "sever": 33,
        "blunt": 38,
        "ammo": 5,
        "fire": 0,
        "water": 10,
        "thunder": 5,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "腹部",
        "sever": 24,
        "blunt": 24,
        "ammo": 10,
        "fire": 0,
        "water": 5,
        "thunder": 0,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "翼",
        "sever": 40,
        "blunt": 35,
        "ammo": 15,
        "fire": 0,
        "water": 10,
        "thunder": 0,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "背中",
        "sever": 24,
        "blunt": 24,
        "ammo": 5,
        "fire": 0,
        "water": 5,
        "thunder": 0,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "前脚",
        "sever": 38,
        "blunt": 38,
        "ammo": 15,
        "fire": 0,
        "water": 25,
        "thunder": 10,
        "ice": 20,
        "dragon": 10
      },
      {
        "partName": "後脚",
        "sever": 30,
        "blunt": 25,
        "ammo": 20,
        "fire": 0,
        "water": 15,
        "thunder": 5,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "尻尾",
        "sever": 43,
        "blunt": 33,
        "ammo": 38,
        "fire": 0,
        "water": 20,
        "thunder": 5,
        "ice": 15,
        "dragon": 5
      }
    ]
  },
  {
    "name": "怨嗟響めくマガイマガド",
    "parts": [
      {
        "partName": "頭部",
        "sever": 50,
        "blunt": 55,
        "ammo": 45,
        "fire": 0,
        "water": 15,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "上半身",
        "sever": 35,
        "blunt": 35,
        "ammo": 10,
        "fire": 0,
        "water": 20,
        "thunder": 15,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "前脚",
        "sever": 45,
        "blunt": 45,
        "ammo": 30,
        "fire": 0,
        "water": 20,
        "thunder": 15,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "腕刃",
        "sever": 45,
        "blunt": 45,
        "ammo": 45,
        "fire": 0,
        "water": 10,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "後脚",
        "sever": 38,
        "blunt": 38,
        "ammo": 30,
        "fire": 0,
        "water": 25,
        "thunder": 20,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "尻尾",
        "sever": 43,
        "blunt": 30,
        "ammo": 10,
        "fire": 0,
        "water": 15,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "下半身",
        "sever": 35,
        "blunt": 35,
        "ammo": 10,
        "fire": 0,
        "water": 20,
        "thunder": 15,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "尻尾(一極鬼火状態)",
        "sever": 38,
        "blunt": 25,
        "ammo": 10,
        "fire": 0,
        "water": 10,
        "thunder": 15,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "尻尾(二極鬼火状態)",
        "sever": 75,
        "blunt": 65,
        "ammo": 55,
        "fire": 0,
        "water": 15,
        "thunder": 20,
        "ice": 0,
        "dragon": 0
      }
    ]
  },
  {
    "name": "混沌に呻くゴアマガラ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 70,
        "blunt": 60,
        "ammo": 45,
        "fire": 18,
        "water": 0,
        "thunder": 15,
        "ice": 5,
        "dragon": 20
      },
      {
        "partName": "首",
        "sever": 45,
        "blunt": 50,
        "ammo": 25,
        "fire": 15,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "胴",
        "sever": 25,
        "blunt": 25,
        "ammo": 20,
        "fire": 10,
        "water": 0,
        "thunder": 5,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "前脚",
        "sever": 52,
        "blunt": 52,
        "ammo": 25,
        "fire": 10,
        "water": 0,
        "thunder": 5,
        "ice": 5,
        "dragon": 15
      },
      {
        "partName": "後脚",
        "sever": 38,
        "blunt": 38,
        "ammo": 35,
        "fire": 10,
        "water": 0,
        "thunder": 5,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "尻尾",
        "sever": 38,
        "blunt": 38,
        "ammo": 25,
        "fire": 10,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "左翼脚",
        "sever": 27,
        "blunt": 27,
        "ammo": 20,
        "fire": 20,
        "water": 0,
        "thunder": 15,
        "ice": 5,
        "dragon": 10
      },
      {
        "partName": "右翼脚",
        "sever": 20,
        "blunt": 21,
        "ammo": 10,
        "fire": 25,
        "water": 0,
        "thunder": 0,
        "ice": 0,
        "dragon": 30
      }
    ]
  },
  {
    "name": "激昂ラージャン",
    "parts": [
      {
        "partName": "頭部",
        "sever": 65,
        "blunt": 67,
        "ammo": 55,
        "fire": 0,
        "water": 5,
        "thunder": 0,
        "ice": 30,
        "dragon": 0
      },
      {
        "partName": "胴",
        "sever": 45,
        "blunt": 45,
        "ammo": 35,
        "fire": 0,
        "water": 5,
        "thunder": 0,
        "ice": 15,
        "dragon": 0
      },
      {
        "partName": "前脚",
        "sever": 45,
        "blunt": 45,
        "ammo": 40,
        "fire": 0,
        "water": 5,
        "thunder": 0,
        "ice": 15,
        "dragon": 0
      },
      {
        "partName": "後脚",
        "sever": 35,
        "blunt": 35,
        "ammo": 15,
        "fire": 0,
        "water": 5,
        "thunder": 0,
        "ice": 15,
        "dragon": 0
      },
      {
        "partName": "尻尾",
        "sever": 35,
        "blunt": 32,
        "ammo": 25,
        "fire": 0,
        "water": 5,
        "thunder": 0,
        "ice": 15,
        "dragon": 0
      }
    ]
  },
  {
    "name": "紅蓮滾るバゼルギウス",
    "parts": [
      {
        "partName": "頭部",
        "sever": 64,
        "blunt": 80,
        "ammo": 45,
        "fire": 0,
        "water": 10,
        "thunder": 20,
        "ice": 25,
        "dragon": 15
      },
      {
        "partName": "腹部",
        "sever": 45,
        "blunt": 45,
        "ammo": 25,
        "fire": 0,
        "water": 5,
        "thunder": 10,
        "ice": 15,
        "dragon": 5
      },
      {
        "partName": "翼",
        "sever": 44,
        "blunt": 44,
        "ammo": 35,
        "fire": 0,
        "water": 5,
        "thunder": 10,
        "ice": 15,
        "dragon": 5
      },
      {
        "partName": "背中",
        "sever": 30,
        "blunt": 30,
        "ammo": 15,
        "fire": 0,
        "water": 0,
        "thunder": 5,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "脚",
        "sever": 36,
        "blunt": 34,
        "ammo": 25,
        "fire": 0,
        "water": 5,
        "thunder": 10,
        "ice": 15,
        "dragon": 5
      },
      {
        "partName": "尻尾",
        "sever": 70,
        "blunt": 65,
        "ammo": 55,
        "fire": 0,
        "water": 5,
        "thunder": 15,
        "ice": 25,
        "dragon": 10
      }
    ]
  },
  {
    "name": "アオアシラ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 55,
        "blunt": 55,
        "ammo": 55,
        "fire": 20,
        "water": 5,
        "thunder": 10,
        "ice": 15,
        "dragon": 0
      },
      {
        "partName": "上半身",
        "sever": 50,
        "blunt": 50,
        "ammo": 62,
        "fire": 25,
        "water": 5,
        "thunder": 10,
        "ice": 15,
        "dragon": 0
      },
      {
        "partName": "前脚",
        "sever": 33,
        "blunt": 35,
        "ammo": 28,
        "fire": 30,
        "water": 5,
        "thunder": 30,
        "ice": 20,
        "dragon": 0
      },
      {
        "partName": "腹部後脚",
        "sever": 55,
        "blunt": 55,
        "ammo": 38,
        "fire": 15,
        "water": 5,
        "thunder": 10,
        "ice": 20,
        "dragon": 0
      },
      {
        "partName": "尻",
        "sever": 66,
        "blunt": 66,
        "ammo": 43,
        "fire": 15,
        "water": 5,
        "thunder": 10,
        "ice": 20,
        "dragon": 0
      }
    ]
  },
  {
    "name": "アケノシルム",
    "parts": [
      {
        "partName": "頭部",
        "sever": 63,
        "blunt": 80,
        "ammo": 50,
        "fire": 0,
        "water": 15,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "傘",
        "sever": 63,
        "blunt": 50,
        "ammo": 40,
        "fire": 0,
        "water": 0,
        "thunder": 20,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "首",
        "sever": 43,
        "blunt": 43,
        "ammo": 20,
        "fire": 0,
        "water": 15,
        "thunder": 15,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "胴",
        "sever": 38,
        "blunt": 38,
        "ammo": 20,
        "fire": 0,
        "water": 15,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "翼",
        "sever": 63,
        "blunt": 50,
        "ammo": 40,
        "fire": 0,
        "water": 20,
        "thunder": 20,
        "ice": 15,
        "dragon": 0
      },
      {
        "partName": "脚",
        "sever": 36,
        "blunt": 36,
        "ammo": 10,
        "fire": 0,
        "water": 35,
        "thunder": 30,
        "ice": 25,
        "dragon": 0
      },
      {
        "partName": "尻尾",
        "sever": 43,
        "blunt": 43,
        "ammo": 25,
        "fire": 0,
        "water": 20,
        "thunder": 15,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "尻尾先端",
        "sever": 36,
        "blunt": 36,
        "ammo": 30,
        "fire": 0,
        "water": 30,
        "thunder": 20,
        "ice": 5,
        "dragon": 0
      }
    ]
  },
  {
    "name": "アンジャナフ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 70,
        "blunt": 70,
        "ammo": 60,
        "fire": 0,
        "water": 25,
        "thunder": 10,
        "ice": 15,
        "dragon": 5
      },
      {
        "partName": "鼻",
        "sever": 80,
        "blunt": 75,
        "ammo": 65,
        "fire": 0,
        "water": 20,
        "thunder": 10,
        "ice": 15,
        "dragon": 10
      },
      {
        "partName": "首",
        "sever": 30,
        "blunt": 30,
        "ammo": 15,
        "fire": 0,
        "water": 20,
        "thunder": 5,
        "ice": 15,
        "dragon": 5
      },
      {
        "partName": "胴",
        "sever": 30,
        "blunt": 30,
        "ammo": 45,
        "fire": 0,
        "water": 15,
        "thunder": 5,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "翼",
        "sever": 50,
        "blunt": 45,
        "ammo": 55,
        "fire": 0,
        "water": 25,
        "thunder": 15,
        "ice": 20,
        "dragon": 10
      },
      {
        "partName": "脚",
        "sever": 30,
        "blunt": 30,
        "ammo": 15,
        "fire": 0,
        "water": 15,
        "thunder": 5,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "尻尾",
        "sever": 60,
        "blunt": 60,
        "ammo": 55,
        "fire": 0,
        "water": 20,
        "thunder": 10,
        "ice": 15,
        "dragon": 5
      }
    ]
  },
  {
    "name": "イソネミクニ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 65,
        "blunt": 55,
        "ammo": 45,
        "fire": 15,
        "water": 0,
        "thunder": 25,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "髪ヒレ",
        "sever": 40,
        "blunt": 40,
        "ammo": 20,
        "fire": 0,
        "water": 0,
        "thunder": 15,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "首",
        "sever": 70,
        "blunt": 70,
        "ammo": 60,
        "fire": 15,
        "water": 0,
        "thunder": 25,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "腹部",
        "sever": 30,
        "blunt": 40,
        "ammo": 20,
        "fire": 10,
        "water": 0,
        "thunder": 15,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "背中",
        "sever": 25,
        "blunt": 25,
        "ammo": 15,
        "fire": 10,
        "water": 0,
        "thunder": 15,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "前脚",
        "sever": 45,
        "blunt": 45,
        "ammo": 35,
        "fire": 5,
        "water": 0,
        "thunder": 15,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "後脚",
        "sever": 25,
        "blunt": 30,
        "ammo": 25,
        "fire": 10,
        "water": 0,
        "thunder": 25,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "尻尾",
        "sever": 60,
        "blunt": 55,
        "ammo": 35,
        "fire": 15,
        "water": 0,
        "thunder": 30,
        "ice": 0,
        "dragon": 0
      }
    ]
  },
  {
    "name": "イブシマキヒコ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 65,
        "blunt": 70,
        "ammo": 45,
        "fire": 20,
        "water": 10,
        "thunder": 5,
        "ice": 10,
        "dragon": 25
      },
      {
        "partName": "首",
        "sever": 35,
        "blunt": 30,
        "ammo": 25,
        "fire": 15,
        "water": 5,
        "thunder": 5,
        "ice": 5,
        "dragon": 20
      },
      {
        "partName": "胴",
        "sever": 30,
        "blunt": 30,
        "ammo": 25,
        "fire": 10,
        "water": 5,
        "thunder": 5,
        "ice": 5,
        "dragon": 10
      },
      {
        "partName": "胸部(風袋)",
        "sever": 80,
        "blunt": 80,
        "ammo": 75,
        "fire": 15,
        "water": 15,
        "thunder": 5,
        "ice": 15,
        "dragon": 25
      },
      {
        "partName": "翼腕",
        "sever": 35,
        "blunt": 30,
        "ammo": 35,
        "fire": 5,
        "water": 5,
        "thunder": 0,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "翼腕(風袋)",
        "sever": 65,
        "blunt": 60,
        "ammo": 40,
        "fire": 25,
        "water": 10,
        "thunder": 5,
        "ice": 5,
        "dragon": 25
      },
      {
        "partName": "背中(風袋)",
        "sever": 60,
        "blunt": 55,
        "ammo": 45,
        "fire": 20,
        "water": 10,
        "thunder": 5,
        "ice": 5,
        "dragon": 25
      },
      {
        "partName": "脚ヒレ",
        "sever": 25,
        "blunt": 25,
        "ammo": 15,
        "fire": 10,
        "water": 5,
        "thunder": 5,
        "ice": 5,
        "dragon": 10
      },
      {
        "partName": "尻尾",
        "sever": 30,
        "blunt": 25,
        "ammo": 10,
        "fire": 5,
        "water": 5,
        "thunder": 5,
        "ice": 5,
        "dragon": 10
      },
      {
        "partName": "尻尾先端(風袋)",
        "sever": 50,
        "blunt": 45,
        "ammo": 40,
        "fire": 25,
        "water": 15,
        "thunder": 5,
        "ice": 15,
        "dragon": 35
      }
    ]
  },
  {
    "name": "ウルクスス",
    "parts": [
      {
        "partName": "頭部",
        "sever": 45,
        "blunt": 63,
        "ammo": 50,
        "fire": 30,
        "water": 0,
        "thunder": 20,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "上半身",
        "sever": 44,
        "blunt": 44,
        "ammo": 40,
        "fire": 30,
        "water": 0,
        "thunder": 15,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "腹部",
        "sever": 35,
        "blunt": 35,
        "ammo": 20,
        "fire": 10,
        "water": 0,
        "thunder": 5,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "前脚",
        "sever": 30,
        "blunt": 30,
        "ammo": 20,
        "fire": 10,
        "water": 0,
        "thunder": 5,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "後脚",
        "sever": 35,
        "blunt": 35,
        "ammo": 20,
        "fire": 10,
        "water": 0,
        "thunder": 5,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "尻",
        "sever": 63,
        "blunt": 50,
        "ammo": 35,
        "fire": 20,
        "water": 0,
        "thunder": 10,
        "ice": 0,
        "dragon": 0
      }
    ]
  },
  {
    "name": "オオナズチ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 55,
        "blunt": 50,
        "ammo": 45,
        "fire": 25,
        "water": 0,
        "thunder": 10,
        "ice": 0,
        "dragon": 20
      },
      {
        "partName": "腹部",
        "sever": 25,
        "blunt": 30,
        "ammo": 22,
        "fire": 20,
        "water": 5,
        "thunder": 10,
        "ice": 0,
        "dragon": 10
      },
      {
        "partName": "翼",
        "sever": 22,
        "blunt": 22,
        "ammo": 20,
        "fire": 20,
        "water": 0,
        "thunder": 10,
        "ice": 0,
        "dragon": 15
      },
      {
        "partName": "背中",
        "sever": 25,
        "blunt": 22,
        "ammo": 25,
        "fire": 25,
        "water": 0,
        "thunder": 10,
        "ice": 0,
        "dragon": 20
      },
      {
        "partName": "前脚",
        "sever": 45,
        "blunt": 45,
        "ammo": 20,
        "fire": 20,
        "water": 0,
        "thunder": 10,
        "ice": 0,
        "dragon": 10
      },
      {
        "partName": "後脚",
        "sever": 30,
        "blunt": 25,
        "ammo": 20,
        "fire": 25,
        "water": 0,
        "thunder": 10,
        "ice": 0,
        "dragon": 20
      },
      {
        "partName": "尻尾",
        "sever": 35,
        "blunt": 22,
        "ammo": 45,
        "fire": 10,
        "water": 0,
        "thunder": 10,
        "ice": 0,
        "dragon": 5
      }
    ]
  },
  {
    "name": "オサイズチ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 80,
        "blunt": 80,
        "ammo": 75,
        "fire": 10,
        "water": 20,
        "thunder": 25,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "胴",
        "sever": 45,
        "blunt": 45,
        "ammo": 40,
        "fire": 10,
        "water": 10,
        "thunder": 15,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "前脚",
        "sever": 50,
        "blunt": 50,
        "ammo": 55,
        "fire": 10,
        "water": 10,
        "thunder": 15,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "尻尾",
        "sever": 55,
        "blunt": 50,
        "ammo": 35,
        "fire": 10,
        "water": 15,
        "thunder": 20,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "尻尾先端",
        "sever": 75,
        "blunt": 80,
        "ammo": 75,
        "fire": 15,
        "water": 20,
        "thunder": 25,
        "ice": 15,
        "dragon": 10
      }
    ]
  },
  {
    "name": "オロミドロ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 55,
        "blunt": 64,
        "ammo": 55,
        "fire": 20,
        "water": 0,
        "thunder": 10,
        "ice": 20,
        "dragon": 5
      },
      {
        "partName": "腹部",
        "sever": 40,
        "blunt": 55,
        "ammo": 35,
        "fire": 20,
        "water": 0,
        "thunder": 5,
        "ice": 15,
        "dragon": 5
      },
      {
        "partName": "背中",
        "sever": 25,
        "blunt": 30,
        "ammo": 20,
        "fire": 15,
        "water": 0,
        "thunder": 5,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "前脚",
        "sever": 23,
        "blunt": 24,
        "ammo": 20,
        "fire": 30,
        "water": 0,
        "thunder": 5,
        "ice": 25,
        "dragon": 5
      },
      {
        "partName": "後脚",
        "sever": 25,
        "blunt": 25,
        "ammo": 20,
        "fire": 10,
        "water": 0,
        "thunder": 5,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "尻尾",
        "sever": 55,
        "blunt": 30,
        "ammo": 35,
        "fire": 25,
        "water": 0,
        "thunder": 10,
        "ice": 20,
        "dragon": 5
      },
      {
        "partName": "尻尾先端",
        "sever": 65,
        "blunt": 55,
        "ammo": 40,
        "fire": 25,
        "water": 0,
        "thunder": 15,
        "ice": 20,
        "dragon": 15
      },
      {
        "partName": "大泥玉",
        "sever": 100,
        "blunt": 100,
        "ammo": 100,
        "fire": 0,
        "water": 0,
        "thunder": 0,
        "ice": 0,
        "dragon": 0
      }
    ]
  },
  {
    "name": "クシャルダオラ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 60,
        "blunt": 55,
        "ammo": 35,
        "fire": 10,
        "water": 5,
        "thunder": 15,
        "ice": 0,
        "dragon": 10
      },
      {
        "partName": "首",
        "sever": 40,
        "blunt": 35,
        "ammo": 25,
        "fire": 10,
        "water": 5,
        "thunder": 15,
        "ice": 0,
        "dragon": 5
      },
      {
        "partName": "腹部",
        "sever": 35,
        "blunt": 50,
        "ammo": 35,
        "fire": 10,
        "water": 5,
        "thunder": 15,
        "ice": 0,
        "dragon": 10
      },
      {
        "partName": "翼",
        "sever": 23,
        "blunt": 23,
        "ammo": 20,
        "fire": 10,
        "water": 5,
        "thunder": 20,
        "ice": 0,
        "dragon": 15
      },
      {
        "partName": "背中",
        "sever": 23,
        "blunt": 25,
        "ammo": 30,
        "fire": 10,
        "water": 5,
        "thunder": 15,
        "ice": 0,
        "dragon": 10
      },
      {
        "partName": "前脚",
        "sever": 45,
        "blunt": 50,
        "ammo": 45,
        "fire": 10,
        "water": 5,
        "thunder": 20,
        "ice": 0,
        "dragon": 10
      },
      {
        "partName": "後脚",
        "sever": 30,
        "blunt": 30,
        "ammo": 25,
        "fire": 10,
        "water": 5,
        "thunder": 15,
        "ice": 0,
        "dragon": 5
      },
      {
        "partName": "尻尾",
        "sever": 35,
        "blunt": 30,
        "ammo": 35,
        "fire": 10,
        "water": 5,
        "thunder": 20,
        "ice": 0,
        "dragon": 15
      }
    ]
  },
  {
    "name": "クルルヤック",
    "parts": [
      {
        "partName": "頭部",
        "sever": 68,
        "blunt": 68,
        "ammo": 60,
        "fire": 15,
        "water": 20,
        "thunder": 15,
        "ice": 15,
        "dragon": 15
      },
      {
        "partName": "胴",
        "sever": 45,
        "blunt": 45,
        "ammo": 40,
        "fire": 15,
        "water": 20,
        "thunder": 15,
        "ice": 15,
        "dragon": 15
      },
      {
        "partName": "前脚",
        "sever": 52,
        "blunt": 56,
        "ammo": 45,
        "fire": 15,
        "water": 20,
        "thunder": 15,
        "ice": 15,
        "dragon": 15
      },
      {
        "partName": "尻尾",
        "sever": 55,
        "blunt": 50,
        "ammo": 35,
        "fire": 15,
        "water": 20,
        "thunder": 15,
        "ice": 15,
        "dragon": 15
      },
      {
        "partName": "岩",
        "sever": 5,
        "blunt": 5,
        "ammo": 5,
        "fire": 5,
        "water": 20,
        "thunder": 5,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "壺",
        "sever": 50,
        "blunt": 50,
        "ammo": 50,
        "fire": 15,
        "water": 20,
        "thunder": 15,
        "ice": 15,
        "dragon": 15
      }
    ]
  },
  {
    "name": "ゴシャハギ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 56,
        "blunt": 56,
        "ammo": 50,
        "fire": 20,
        "water": 0,
        "thunder": 15,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "胴",
        "sever": 24,
        "blunt": 24,
        "ammo": 20,
        "fire": 15,
        "water": 0,
        "thunder": 5,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "背中",
        "sever": 30,
        "blunt": 30,
        "ammo": 20,
        "fire": 25,
        "water": 0,
        "thunder": 15,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "前脚",
        "sever": 51,
        "blunt": 51,
        "ammo": 35,
        "fire": 30,
        "water": 0,
        "thunder": 15,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "後脚",
        "sever": 24,
        "blunt": 24,
        "ammo": 15,
        "fire": 30,
        "water": 0,
        "thunder": 5,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "氷塊",
        "sever": 66,
        "blunt": 66,
        "ammo": 45,
        "fire": 30,
        "water": 0,
        "thunder": 10,
        "ice": 0,
        "dragon": 0
      }
    ]
  },
  {
    "name": "ジュラトドス",
    "parts": [
      {
        "partName": "頭部",
        "sever": 63,
        "blunt": 63,
        "ammo": 53,
        "fire": 5,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "首",
        "sever": 43,
        "blunt": 43,
        "ammo": 43,
        "fire": 5,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "胴",
        "sever": 35,
        "blunt": 35,
        "ammo": 35,
        "fire": 10,
        "water": 0,
        "thunder": 25,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "背中",
        "sever": 25,
        "blunt": 25,
        "ammo": 25,
        "fire": 5,
        "water": 0,
        "thunder": 15,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "脚",
        "sever": 45,
        "blunt": 45,
        "ammo": 40,
        "fire": 15,
        "water": 0,
        "thunder": 30,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "尻尾",
        "sever": 55,
        "blunt": 50,
        "ammo": 45,
        "fire": 5,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "ヒレ",
        "sever": 25,
        "blunt": 25,
        "ammo": 25,
        "fire": 10,
        "water": 0,
        "thunder": 20,
        "ice": 5,
        "dragon": 5
      }
    ]
  },
  {
    "name": "ジンオウガ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 65,
        "blunt": 65,
        "ammo": 70,
        "fire": 10,
        "water": 10,
        "thunder": 0,
        "ice": 15,
        "dragon": 5
      },
      {
        "partName": "胴",
        "sever": 25,
        "blunt": 25,
        "ammo": 30,
        "fire": 5,
        "water": 5,
        "thunder": 0,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "背中",
        "sever": 45,
        "blunt": 40,
        "ammo": 35,
        "fire": 10,
        "water": 20,
        "thunder": 0,
        "ice": 25,
        "dragon": 5
      },
      {
        "partName": "前脚",
        "sever": 24,
        "blunt": 30,
        "ammo": 30,
        "fire": 5,
        "water": 5,
        "thunder": 0,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "後脚",
        "sever": 45,
        "blunt": 45,
        "ammo": 35,
        "fire": 5,
        "water": 5,
        "thunder": 0,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "脚根本",
        "sever": 44,
        "blunt": 44,
        "ammo": 30,
        "fire": 5,
        "water": 5,
        "thunder": 0,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "尻尾",
        "sever": 30,
        "blunt": 25,
        "ammo": 25,
        "fire": 5,
        "water": 5,
        "thunder": 0,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "尻尾先端",
        "sever": 21,
        "blunt": 19,
        "ammo": 10,
        "fire": 10,
        "water": 15,
        "thunder": 0,
        "ice": 20,
        "dragon": 5
      }
    ]
  },
  {
    "name": "タマミツネ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 63,
        "blunt": 63,
        "ammo": 45,
        "fire": 5,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 8
      },
      {
        "partName": "頭部(怒り)",
        "sever": 63,
        "blunt": 63,
        "ammo": 45,
        "fire": 10,
        "water": 0,
        "thunder": 15,
        "ice": 5,
        "dragon": 10
      },
      {
        "partName": "首",
        "sever": 43,
        "blunt": 43,
        "ammo": 40,
        "fire": 8,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 8
      },
      {
        "partName": "胴",
        "sever": 25,
        "blunt": 25,
        "ammo": 20,
        "fire": 5,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "胴(怒り)",
        "sever": 25,
        "blunt": 25,
        "ammo": 20,
        "fire": 5,
        "water": 0,
        "thunder": 15,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "背ビレ",
        "sever": 43,
        "blunt": 43,
        "ammo": 45,
        "fire": 8,
        "water": 0,
        "thunder": 15,
        "ice": 5,
        "dragon": 10
      },
      {
        "partName": "背ビレ(怒り)",
        "sever": 43,
        "blunt": 43,
        "ammo": 45,
        "fire": 10,
        "water": 0,
        "thunder": 20,
        "ice": 5,
        "dragon": 15
      },
      {
        "partName": "前脚",
        "sever": 28,
        "blunt": 28,
        "ammo": 10,
        "fire": 5,
        "water": 0,
        "thunder": 25,
        "ice": 15,
        "dragon": 30
      },
      {
        "partName": "爪",
        "sever": 24,
        "blunt": 24,
        "ammo": 10,
        "fire": 5,
        "water": 0,
        "thunder": 30,
        "ice": 15,
        "dragon": 30
      },
      {
        "partName": "後脚",
        "sever": 38,
        "blunt": 38,
        "ammo": 25,
        "fire": 5,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "後脚(怒り)",
        "sever": 38,
        "blunt": 38,
        "ammo": 25,
        "fire": 10,
        "water": 0,
        "thunder": 15,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "尻尾",
        "sever": 43,
        "blunt": 33,
        "ammo": 40,
        "fire": 5,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "尻尾(怒り)",
        "sever": 43,
        "blunt": 33,
        "ammo": 40,
        "fire": 5,
        "water": 0,
        "thunder": 15,
        "ice": 5,
        "dragon": 5
      }
    ]
  },
  {
    "name": "ティガレックス",
    "parts": [
      {
        "partName": "頭部",
        "sever": 65,
        "blunt": 70,
        "ammo": 55,
        "fire": 0,
        "water": 10,
        "thunder": 25,
        "ice": 5,
        "dragon": 15
      },
      {
        "partName": "腹部",
        "sever": 30,
        "blunt": 30,
        "ammo": 20,
        "fire": 10,
        "water": 10,
        "thunder": 15,
        "ice": 5,
        "dragon": 15
      },
      {
        "partName": "背中",
        "sever": 25,
        "blunt": 25,
        "ammo": 20,
        "fire": 0,
        "water": 5,
        "thunder": 15,
        "ice": 5,
        "dragon": 15
      },
      {
        "partName": "前脚",
        "sever": 50,
        "blunt": 45,
        "ammo": 35,
        "fire": 0,
        "water": 15,
        "thunder": 20,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "後脚",
        "sever": 30,
        "blunt": 30,
        "ammo": 25,
        "fire": 0,
        "water": 5,
        "thunder": 15,
        "ice": 0,
        "dragon": 10
      },
      {
        "partName": "尻尾",
        "sever": 45,
        "blunt": 35,
        "ammo": 30,
        "fire": 0,
        "water": 5,
        "thunder": 10,
        "ice": 0,
        "dragon": 15
      },
      {
        "partName": "尻尾根本",
        "sever": 40,
        "blunt": 35,
        "ammo": 30,
        "fire": 0,
        "water": 5,
        "thunder": 10,
        "ice": 0,
        "dragon": 5
      }
    ]
  },
  {
    "name": "テオテスカトル",
    "parts": [
      {
        "partName": "頭部",
        "sever": 50,
        "blunt": 55,
        "ammo": 45,
        "fire": 0,
        "water": null,
        "thunder": 10,
        "ice": 15,
        "dragon": 10
      },
      {
        "partName": "首",
        "sever": 33,
        "blunt": 38,
        "ammo": 5,
        "fire": 0,
        "water": 10,
        "thunder": 5,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "腹部",
        "sever": 24,
        "blunt": 24,
        "ammo": 10,
        "fire": 0,
        "water": 5,
        "thunder": 0,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "翼",
        "sever": 40,
        "blunt": 35,
        "ammo": 15,
        "fire": 0,
        "water": 10,
        "thunder": 0,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "背中",
        "sever": 24,
        "blunt": 24,
        "ammo": 5,
        "fire": 0,
        "water": 5,
        "thunder": 0,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "前脚",
        "sever": 38,
        "blunt": 38,
        "ammo": 15,
        "fire": 0,
        "water": 25,
        "thunder": 10,
        "ice": 20,
        "dragon": 10
      },
      {
        "partName": "後脚",
        "sever": 30,
        "blunt": 25,
        "ammo": 20,
        "fire": 0,
        "water": 15,
        "thunder": 5,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "尻尾",
        "sever": 43,
        "blunt": 33,
        "ammo": 38,
        "fire": 0,
        "water": null,
        "thunder": 5,
        "ice": 15,
        "dragon": 5
      }
    ]
  },
  {
    "name": "ディアブロス",
    "parts": [
      {
        "partName": "頭部",
        "sever": 45,
        "blunt": 60,
        "ammo": 40,
        "fire": 0,
        "water": 15,
        "thunder": 10,
        "ice": 25,
        "dragon": 15
      },
      {
        "partName": "角",
        "sever": 21,
        "blunt": 42,
        "ammo": 20,
        "fire": 0,
        "water": 20,
        "thunder": 10,
        "ice": 25,
        "dragon": 20
      },
      {
        "partName": "首",
        "sever": 40,
        "blunt": 40,
        "ammo": 25,
        "fire": 0,
        "water": 15,
        "thunder": 5,
        "ice": 20,
        "dragon": 15
      },
      {
        "partName": "腹部",
        "sever": 65,
        "blunt": 70,
        "ammo": 40,
        "fire": 0,
        "water": 25,
        "thunder": 10,
        "ice": 30,
        "dragon": 25
      },
      {
        "partName": "翼",
        "sever": 40,
        "blunt": 30,
        "ammo": 60,
        "fire": 0,
        "water": 25,
        "thunder": 10,
        "ice": 30,
        "dragon": 25
      },
      {
        "partName": "背中",
        "sever": 25,
        "blunt": 42,
        "ammo": 35,
        "fire": 0,
        "water": 20,
        "thunder": 10,
        "ice": 25,
        "dragon": 20
      },
      {
        "partName": "脚",
        "sever": 35,
        "blunt": 35,
        "ammo": 35,
        "fire": 0,
        "water": 10,
        "thunder": 5,
        "ice": 15,
        "dragon": 10
      },
      {
        "partName": "尻尾",
        "sever": 50,
        "blunt": 24,
        "ammo": 45,
        "fire": 0,
        "water": 20,
        "thunder": 10,
        "ice": 15,
        "dragon": 20
      },
      {
        "partName": "尻尾先端",
        "sever": 23,
        "blunt": 26,
        "ammo": 10,
        "fire": 0,
        "water": 20,
        "thunder": 10,
        "ice": 25,
        "dragon": 20
      }
    ]
  },
  {
    "name": "トビカガチ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 48,
        "blunt": 48,
        "ammo": 45,
        "fire": 20,
        "water": 30,
        "thunder": 0,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "首",
        "sever": 48,
        "blunt": 48,
        "ammo": 45,
        "fire": 10,
        "water": 20,
        "thunder": 0,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "胴",
        "sever": 45,
        "blunt": 45,
        "ammo": 35,
        "fire": 5,
        "water": 15,
        "thunder": 0,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "背中",
        "sever": 45,
        "blunt": 45,
        "ammo": 48,
        "fire": 5,
        "water": 15,
        "thunder": 0,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "前脚",
        "sever": 35,
        "blunt": 35,
        "ammo": 15,
        "fire": 5,
        "water": 15,
        "thunder": 0,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "後脚",
        "sever": 30,
        "blunt": 30,
        "ammo": 10,
        "fire": 20,
        "water": 30,
        "thunder": 0,
        "ice": 20,
        "dragon": 15
      },
      {
        "partName": "尻尾",
        "sever": 65,
        "blunt": 65,
        "ammo": 55,
        "fire": 15,
        "water": 20,
        "thunder": 0,
        "ice": 15,
        "dragon": 10
      }
    ]
  },
  {
    "name": "ドスバギィ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 75,
        "blunt": 65,
        "ammo": 60,
        "fire": 40,
        "water": 20,
        "thunder": 20,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "体",
        "sever": 50,
        "blunt": 50,
        "ammo": 40,
        "fire": 40,
        "water": 20,
        "thunder": 20,
        "ice": 0,
        "dragon": 0
      }
    ]
  },
  {
    "name": "ドスフロギィ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 75,
        "blunt": 60,
        "ammo": 60,
        "fire": 0,
        "water": 20,
        "thunder": 5,
        "ice": 40,
        "dragon": 0
      },
      {
        "partName": "体",
        "sever": 50,
        "blunt": 50,
        "ammo": 50,
        "fire": 0,
        "water": 20,
        "thunder": 5,
        "ice": 40,
        "dragon": 0
      }
    ]
  },
  {
    "name": "ナルガクルガ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 65,
        "blunt": 70,
        "ammo": 40,
        "fire": 15,
        "water": 0,
        "thunder": 25,
        "ice": 10,
        "dragon": 10
      },
      {
        "partName": "首",
        "sever": 30,
        "blunt": 30,
        "ammo": 35,
        "fire": 10,
        "water": 0,
        "thunder": 15,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "腹部",
        "sever": 40,
        "blunt": 40,
        "ammo": 30,
        "fire": 10,
        "water": 0,
        "thunder": 20,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "刃翼",
        "sever": 21,
        "blunt": 24,
        "ammo": 21,
        "fire": 25,
        "water": 5,
        "thunder": 35,
        "ice": 10,
        "dragon": 15
      },
      {
        "partName": "背中",
        "sever": 30,
        "blunt": 30,
        "ammo": 35,
        "fire": 10,
        "water": 0,
        "thunder": 15,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "前脚",
        "sever": 43,
        "blunt": 43,
        "ammo": 35,
        "fire": 10,
        "water": 0,
        "thunder": 20,
        "ice": 0,
        "dragon": 5
      },
      {
        "partName": "後脚",
        "sever": 30,
        "blunt": 30,
        "ammo": 25,
        "fire": 10,
        "water": 0,
        "thunder": 15,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "尻尾",
        "sever": 46,
        "blunt": 40,
        "ammo": 45,
        "fire": 10,
        "water": 0,
        "thunder": 25,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "尻尾先端",
        "sever": 40,
        "blunt": 35,
        "ammo": 40,
        "fire": 10,
        "water": 0,
        "thunder": 20,
        "ice": 5,
        "dragon": 5
      }
    ]
  },
  {
    "name": "ナルハタタヒメ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 55,
        "blunt": 50,
        "ammo": 5,
        "fire": 5,
        "water": 5,
        "thunder": 0,
        "ice": 10,
        "dragon": 15
      },
      {
        "partName": "首",
        "sever": 35,
        "blunt": 30,
        "ammo": 10,
        "fire": 0,
        "water": 0,
        "thunder": 0,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "胴",
        "sever": 20,
        "blunt": 25,
        "ammo": 5,
        "fire": 0,
        "water": 0,
        "thunder": 0,
        "ice": 0,
        "dragon": 5
      },
      {
        "partName": "胸",
        "sever": 35,
        "blunt": 35,
        "ammo": 15,
        "fire": 0,
        "water": 0,
        "thunder": 0,
        "ice": 5,
        "dragon": 10
      },
      {
        "partName": "腹部",
        "sever": 25,
        "blunt": 25,
        "ammo": 5,
        "fire": 0,
        "water": 0,
        "thunder": 0,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "翼腕",
        "sever": 35,
        "blunt": 30,
        "ammo": 10,
        "fire": 0,
        "water": 5,
        "thunder": 0,
        "ice": 5,
        "dragon": 10
      },
      {
        "partName": "背中",
        "sever": 25,
        "blunt": 30,
        "ammo": 15,
        "fire": 0,
        "water": 5,
        "thunder": 0,
        "ice": 5,
        "dragon": 10
      },
      {
        "partName": "脚ヒレ",
        "sever": 20,
        "blunt": 20,
        "ammo": 5,
        "fire": 0,
        "water": 0,
        "thunder": 0,
        "ice": 0,
        "dragon": 5
      },
      {
        "partName": "尻尾",
        "sever": 30,
        "blunt": 30,
        "ammo": 10,
        "fire": 0,
        "water": 0,
        "thunder": 0,
        "ice": 5,
        "dragon": 10
      },
      {
        "partName": "尻尾先端",
        "sever": 30,
        "blunt": 40,
        "ammo": 15,
        "fire": 0,
        "water": 0,
        "thunder": 0,
        "ice": 5,
        "dragon": 10
      }
    ]
  },
  {
    "name": "ヌシアオアシラ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 55,
        "blunt": 45,
        "ammo": 35,
        "fire": 5,
        "water": 0,
        "thunder": 5,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "上半身",
        "sever": 38,
        "blunt": 38,
        "ammo": 35,
        "fire": 15,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "腹部",
        "sever": 38,
        "blunt": 24,
        "ammo": 26,
        "fire": 5,
        "water": 0,
        "thunder": 5,
        "ice": 16,
        "dragon": 0
      },
      {
        "partName": "前脚",
        "sever": 45,
        "blunt": 45,
        "ammo": 30,
        "fire": 20,
        "water": 0,
        "thunder": 15,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "前脚(破壊)",
        "sever": 50,
        "blunt": 50,
        "ammo": 35,
        "fire": 25,
        "water": 0,
        "thunder": 20,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "後脚",
        "sever": 38,
        "blunt": 24,
        "ammo": 26,
        "fire": 5,
        "water": 0,
        "thunder": 5,
        "ice": 16,
        "dragon": 0
      },
      {
        "partName": "尻",
        "sever": 30,
        "blunt": 40,
        "ammo": 30,
        "fire": 12,
        "water": 0,
        "thunder": 5,
        "ice": 20,
        "dragon": 0
      }
    ]
  },
  {
    "name": "ヌシジンオウガ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 65,
        "blunt": 65,
        "ammo": 45,
        "fire": 10,
        "water": 10,
        "thunder": 0,
        "ice": 15,
        "dragon": 5
      },
      {
        "partName": "頭部(怒り)",
        "sever": 65,
        "blunt": 65,
        "ammo": 50,
        "fire": 10,
        "water": 10,
        "thunder": 0,
        "ice": 15,
        "dragon": 10
      },
      {
        "partName": "胴",
        "sever": 25,
        "blunt": 25,
        "ammo": 25,
        "fire": 5,
        "water": 5,
        "thunder": 0,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "背中",
        "sever": 45,
        "blunt": 40,
        "ammo": 35,
        "fire": 10,
        "water": 20,
        "thunder": 0,
        "ice": 25,
        "dragon": 5
      },
      {
        "partName": "脚根本",
        "sever": 44,
        "blunt": 44,
        "ammo": 20,
        "fire": 5,
        "water": 5,
        "thunder": 0,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "脚根本(怒り)",
        "sever": 40,
        "blunt": 40,
        "ammo": 25,
        "fire": 10,
        "water": 10,
        "thunder": 0,
        "ice": 15,
        "dragon": 5
      },
      {
        "partName": "前脚",
        "sever": 25,
        "blunt": 30,
        "ammo": 15,
        "fire": 5,
        "water": 5,
        "thunder": 0,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "前脚(怒り)",
        "sever": 70,
        "blunt": 70,
        "ammo": 45,
        "fire": 5,
        "water": 5,
        "thunder": 0,
        "ice": 15,
        "dragon": 5
      },
      {
        "partName": "後脚",
        "sever": 45,
        "blunt": 45,
        "ammo": 15,
        "fire": 5,
        "water": 5,
        "thunder": 0,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "後脚(怒り)",
        "sever": 40,
        "blunt": 40,
        "ammo": 20,
        "fire": 10,
        "water": 10,
        "thunder": 0,
        "ice": 15,
        "dragon": 5
      },
      {
        "partName": "尻尾",
        "sever": 30,
        "blunt": 25,
        "ammo": 20,
        "fire": 5,
        "water": 5,
        "thunder": 0,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "尻尾先端",
        "sever": 21,
        "blunt": 19,
        "ammo": 10,
        "fire": 10,
        "water": 15,
        "thunder": 0,
        "ice": 20,
        "dragon": 5
      }
    ]
  },
  {
    "name": "ヌシタマミツネ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 60,
        "blunt": 60,
        "ammo": 25,
        "fire": 5,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 8
      },
      {
        "partName": "頭部(破壊)",
        "sever": 63,
        "blunt": 63,
        "ammo": 25,
        "fire": 5,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 8
      },
      {
        "partName": "首",
        "sever": 43,
        "blunt": 43,
        "ammo": 15,
        "fire": 8,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 8
      },
      {
        "partName": "胴",
        "sever": 25,
        "blunt": 25,
        "ammo": 15,
        "fire": 5,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "背ビレ",
        "sever": 43,
        "blunt": 43,
        "ammo": 45,
        "fire": 8,
        "water": 0,
        "thunder": 15,
        "ice": 5,
        "dragon": 10
      },
      {
        "partName": "前脚",
        "sever": 28,
        "blunt": 28,
        "ammo": 10,
        "fire": 5,
        "water": 0,
        "thunder": 25,
        "ice": 15,
        "dragon": 30
      },
      {
        "partName": "爪",
        "sever": 24,
        "blunt": 24,
        "ammo": 10,
        "fire": 5,
        "water": 0,
        "thunder": 30,
        "ice": 15,
        "dragon": 30
      },
      {
        "partName": "爪(破壊)",
        "sever": 28,
        "blunt": 28,
        "ammo": 10,
        "fire": 5,
        "water": 0,
        "thunder": 30,
        "ice": 15,
        "dragon": 30
      },
      {
        "partName": "後脚",
        "sever": 38,
        "blunt": 38,
        "ammo": 20,
        "fire": 5,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "尻尾",
        "sever": 43,
        "blunt": 33,
        "ammo": 40,
        "fire": 5,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 5
      }
    ]
  },
  {
    "name": "ヌシディアブロス",
    "parts": [
      {
        "partName": "頭部",
        "sever": 45,
        "blunt": 45,
        "ammo": 45,
        "fire": 0,
        "water": 15,
        "thunder": 10,
        "ice": 25,
        "dragon": 15
      },
      {
        "partName": "角",
        "sever": 35,
        "blunt": 45,
        "ammo": 10,
        "fire": 0,
        "water": 15,
        "thunder": 10,
        "ice": 25,
        "dragon": 15
      },
      {
        "partName": "首",
        "sever": 40,
        "blunt": 45,
        "ammo": 20,
        "fire": 0,
        "water": 8,
        "thunder": 5,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "腹部",
        "sever": 38,
        "blunt": 38,
        "ammo": 15,
        "fire": 0,
        "water": 10,
        "thunder": 5,
        "ice": 10,
        "dragon": 10
      },
      {
        "partName": "翼",
        "sever": 30,
        "blunt": 30,
        "ammo": 20,
        "fire": 0,
        "water": 5,
        "thunder": 5,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "背中",
        "sever": 25,
        "blunt": 25,
        "ammo": 10,
        "fire": 0,
        "water": 5,
        "thunder": 5,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "脚",
        "sever": 28,
        "blunt": 28,
        "ammo": 25,
        "fire": 0,
        "water": 10,
        "thunder": 5,
        "ice": 15,
        "dragon": 10
      },
      {
        "partName": "尻尾",
        "sever": 50,
        "blunt": 24,
        "ammo": 20,
        "fire": 0,
        "water": 10,
        "thunder": 10,
        "ice": 15,
        "dragon": 10
      },
      {
        "partName": "尻尾先端",
        "sever": 45,
        "blunt": 24,
        "ammo": 10,
        "fire": 0,
        "water": 25,
        "thunder": 10,
        "ice": 30,
        "dragon": 20
      }
    ]
  },
  {
    "name": "ヌシリオレイア",
    "parts": [
      {
        "partName": "頭部",
        "sever": 60,
        "blunt": 65,
        "ammo": 50,
        "fire": 0,
        "water": 10,
        "thunder": 10,
        "ice": 10,
        "dragon": 20
      },
      {
        "partName": "首",
        "sever": 40,
        "blunt": 40,
        "ammo": 30,
        "fire": 5,
        "water": 10,
        "thunder": 10,
        "ice": 10,
        "dragon": 20
      },
      {
        "partName": "胴",
        "sever": 24,
        "blunt": 24,
        "ammo": 20,
        "fire": 0,
        "water": 5,
        "thunder": 15,
        "ice": 5,
        "dragon": 15
      },
      {
        "partName": "翼",
        "sever": 35,
        "blunt": 35,
        "ammo": 30,
        "fire": 0,
        "water": 10,
        "thunder": 20,
        "ice": 10,
        "dragon": 25
      },
      {
        "partName": "背中",
        "sever": 20,
        "blunt": 20,
        "ammo": 15,
        "fire": 5,
        "water": 10,
        "thunder": 20,
        "ice": 10,
        "dragon": 25
      },
      {
        "partName": "脚",
        "sever": 24,
        "blunt": 24,
        "ammo": 20,
        "fire": 0,
        "water": 5,
        "thunder": 10,
        "ice": 5,
        "dragon": 15
      },
      {
        "partName": "尻尾",
        "sever": 40,
        "blunt": 35,
        "ammo": 30,
        "fire": 5,
        "water": 5,
        "thunder": 10,
        "ice": 5,
        "dragon": 15
      },
      {
        "partName": "尻尾(怒り)",
        "sever": 45,
        "blunt": 40,
        "ammo": 35,
        "fire": 5,
        "water": 5,
        "thunder": 10,
        "ice": 5,
        "dragon": 20
      },
      {
        "partName": "脚",
        "sever": 24,
        "blunt": 24,
        "ammo": 20,
        "fire": 0,
        "water": 5,
        "thunder": 10,
        "ice": 5,
        "dragon": 15
      }
    ]
  },
  {
    "name": "ヌシリオレウス",
    "parts": [
      {
        "partName": "頭部",
        "sever": 55,
        "blunt": 55,
        "ammo": 30,
        "fire": 0,
        "water": 5,
        "thunder": 10,
        "ice": 5,
        "dragon": 20
      },
      {
        "partName": "首",
        "sever": 38,
        "blunt": 38,
        "ammo": 20,
        "fire": 5,
        "water": 10,
        "thunder": 15,
        "ice": 10,
        "dragon": 15
      },
      {
        "partName": "腹部",
        "sever": 24,
        "blunt": 24,
        "ammo": 10,
        "fire": 0,
        "water": 5,
        "thunder": 8,
        "ice": 5,
        "dragon": 10
      },
      {
        "partName": "翼",
        "sever": 30,
        "blunt": 45,
        "ammo": 10,
        "fire": 0,
        "water": 10,
        "thunder": 20,
        "ice": 10,
        "dragon": 25
      },
      {
        "partName": "背中",
        "sever": 21,
        "blunt": 21,
        "ammo": 45,
        "fire": 0,
        "water": 5,
        "thunder": 8,
        "ice": 5,
        "dragon": 10
      },
      {
        "partName": "脚",
        "sever": 30,
        "blunt": 30,
        "ammo": 20,
        "fire": 0,
        "water": 5,
        "thunder": 10,
        "ice": 5,
        "dragon": 15
      },
      {
        "partName": "尻尾",
        "sever": 45,
        "blunt": 35,
        "ammo": 20,
        "fire": 5,
        "water": 5,
        "thunder": 10,
        "ice": 5,
        "dragon": 15
      },
      {
        "partName": "脚",
        "sever": 30,
        "blunt": 30,
        "ammo": 20,
        "fire": 0,
        "water": 5,
        "thunder": 10,
        "ice": 5,
        "dragon": 15
      }
    ]
  },
  {
    "name": "バサルモス",
    "parts": [
      {
        "partName": "頭部",
        "sever": 20,
        "blunt": 20,
        "ammo": 20,
        "fire": 10,
        "water": 15,
        "thunder": 10,
        "ice": 10,
        "dragon": 18
      },
      {
        "partName": "頭部(破壊)",
        "sever": 38,
        "blunt": 43,
        "ammo": 35,
        "fire": 15,
        "water": 20,
        "thunder": 10,
        "ice": 10,
        "dragon": 23
      },
      {
        "partName": "首下",
        "sever": 15,
        "blunt": 20,
        "ammo": 20,
        "fire": 10,
        "water": 15,
        "thunder": 10,
        "ice": 10,
        "dragon": 18
      },
      {
        "partName": "腹部",
        "sever": 24,
        "blunt": 25,
        "ammo": 30,
        "fire": 10,
        "water": 10,
        "thunder": 10,
        "ice": 10,
        "dragon": 15
      },
      {
        "partName": "腹部(破壊)",
        "sever": 48,
        "blunt": 44,
        "ammo": 40,
        "fire": 12,
        "water": 18,
        "thunder": 10,
        "ice": 10,
        "dragon": 20
      },
      {
        "partName": "翼",
        "sever": 20,
        "blunt": 20,
        "ammo": 20,
        "fire": 10,
        "water": 15,
        "thunder": 10,
        "ice": 10,
        "dragon": 18
      },
      {
        "partName": "背中",
        "sever": 15,
        "blunt": 20,
        "ammo": 20,
        "fire": 10,
        "water": 15,
        "thunder": 10,
        "ice": 10,
        "dragon": 18
      },
      {
        "partName": "背中(破壊)",
        "sever": 38,
        "blunt": 35,
        "ammo": 43,
        "fire": 15,
        "water": 20,
        "thunder": 10,
        "ice": 10,
        "dragon": 23
      },
      {
        "partName": "脚",
        "sever": 25,
        "blunt": 26,
        "ammo": 30,
        "fire": 10,
        "water": 10,
        "thunder": 10,
        "ice": 10,
        "dragon": 10
      },
      {
        "partName": "尻尾先端",
        "sever": 28,
        "blunt": 15,
        "ammo": 15,
        "fire": 10,
        "water": 10,
        "thunder": 10,
        "ice": 10,
        "dragon": 15
      },
      {
        "partName": "尻尾下",
        "sever": 15,
        "blunt": 15,
        "ammo": 15,
        "fire": 10,
        "water": 15,
        "thunder": 10,
        "ice": 10,
        "dragon": 18
      }
    ]
  },
  {
    "name": "バゼルギウス",
    "parts": [
      {
        "partName": "頭部",
        "sever": 60,
        "blunt": 65,
        "ammo": 25,
        "fire": 0,
        "water": 5,
        "thunder": 15,
        "ice": 10,
        "dragon": 10
      },
      {
        "partName": "腹部",
        "sever": 45,
        "blunt": 45,
        "ammo": 25,
        "fire": 0,
        "water": 5,
        "thunder": 15,
        "ice": 10,
        "dragon": 10
      },
      {
        "partName": "翼",
        "sever": 25,
        "blunt": 25,
        "ammo": 45,
        "fire": 0,
        "water": 5,
        "thunder": 15,
        "ice": 10,
        "dragon": 10
      },
      {
        "partName": "背中",
        "sever": 30,
        "blunt": 30,
        "ammo": 10,
        "fire": 0,
        "water": 0,
        "thunder": 5,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "脚",
        "sever": 30,
        "blunt": 30,
        "ammo": 20,
        "fire": 0,
        "water": 5,
        "thunder": 15,
        "ice": 10,
        "dragon": 10
      },
      {
        "partName": "尻尾",
        "sever": 60,
        "blunt": 55,
        "ammo": 35,
        "fire": 0,
        "water": 5,
        "thunder": 15,
        "ice": 10,
        "dragon": 10
      }
    ]
  },
  {
    "name": "バルファルク",
    "parts": [
      {
        "partName": "頭部",
        "sever": 55,
        "blunt": 60,
        "ammo": 35,
        "fire": 25,
        "water": 25,
        "thunder": 25,
        "ice": 25,
        "dragon": 0
      },
      {
        "partName": "首",
        "sever": 40,
        "blunt": 30,
        "ammo": 15,
        "fire": 25,
        "water": 25,
        "thunder": 25,
        "ice": 25,
        "dragon": 0
      },
      {
        "partName": "胴",
        "sever": 30,
        "blunt": 25,
        "ammo": 10,
        "fire": 20,
        "water": 20,
        "thunder": 20,
        "ice": 20,
        "dragon": 0
      },
      {
        "partName": "胸",
        "sever": 30,
        "blunt": 25,
        "ammo": 10,
        "fire": 20,
        "water": 20,
        "thunder": 20,
        "ice": 20,
        "dragon": 0
      },
      {
        "partName": "胸(吸引)",
        "sever": 80,
        "blunt": 90,
        "ammo": 50,
        "fire": 15,
        "water": 25,
        "thunder": 20,
        "ice": 25,
        "dragon": 0
      },
      {
        "partName": "翼",
        "sever": 22,
        "blunt": 45,
        "ammo": 10,
        "fire": 25,
        "water": 25,
        "thunder": 25,
        "ice": 25,
        "dragon": 0
      },
      {
        "partName": "翼(龍気解放)",
        "sever": 64,
        "blunt": 70,
        "ammo": 45,
        "fire": 0,
        "water": 0,
        "thunder": 0,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "前脚",
        "sever": 25,
        "blunt": 24,
        "ammo": 25,
        "fire": 25,
        "water": 25,
        "thunder": 25,
        "ice": 25,
        "dragon": 0
      },
      {
        "partName": "後脚",
        "sever": 25,
        "blunt": 24,
        "ammo": 20,
        "fire": 15,
        "water": 15,
        "thunder": 15,
        "ice": 15,
        "dragon": 0
      },
      {
        "partName": "翼脚",
        "sever": 45,
        "blunt": 45,
        "ammo": 45,
        "fire": 15,
        "water": 15,
        "thunder": 15,
        "ice": 15,
        "dragon": 0
      },
      {
        "partName": "尻尾",
        "sever": 45,
        "blunt": 24,
        "ammo": 20,
        "fire": 20,
        "water": 20,
        "thunder": 20,
        "ice": 20,
        "dragon": 0
      }
    ]
  },
  {
    "name": "ビシュテンゴ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 70,
        "blunt": 70,
        "ammo": 60,
        "fire": 20,
        "water": 0,
        "thunder": 10,
        "ice": 25,
        "dragon": 0
      },
      {
        "partName": "胴",
        "sever": 25,
        "blunt": 25,
        "ammo": 30,
        "fire": 10,
        "water": 0,
        "thunder": 5,
        "ice": 15,
        "dragon": 0
      },
      {
        "partName": "翼",
        "sever": 40,
        "blunt": 30,
        "ammo": 40,
        "fire": 5,
        "water": 0,
        "thunder": 5,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "前脚",
        "sever": 25,
        "blunt": 25,
        "ammo": 30,
        "fire": 5,
        "water": 0,
        "thunder": 0,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "後脚",
        "sever": 25,
        "blunt": 30,
        "ammo": 25,
        "fire": 5,
        "water": 0,
        "thunder": 5,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "尻尾",
        "sever": 60,
        "blunt": 40,
        "ammo": 40,
        "fire": 10,
        "water": 0,
        "thunder": 5,
        "ice": 20,
        "dragon": 0
      }
    ]
  },
  {
    "name": "フルフル",
    "parts": [
      {
        "partName": "頭部",
        "sever": 75,
        "blunt": 70,
        "ammo": 80,
        "fire": 30,
        "water": 5,
        "thunder": 0,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "首",
        "sever": 75,
        "blunt": 50,
        "ammo": 50,
        "fire": 25,
        "water": 5,
        "thunder": 0,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "胴",
        "sever": 45,
        "blunt": 45,
        "ammo": 25,
        "fire": 25,
        "water": 5,
        "thunder": 0,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "翼",
        "sever": 25,
        "blunt": 25,
        "ammo": 25,
        "fire": 20,
        "water": 5,
        "thunder": 0,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "脚",
        "sever": 36,
        "blunt": 20,
        "ammo": 35,
        "fire": 15,
        "water": 5,
        "thunder": 0,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "尻尾",
        "sever": 20,
        "blunt": 20,
        "ammo": 30,
        "fire": 20,
        "water": 5,
        "thunder": 0,
        "ice": 5,
        "dragon": 5
      }
    ]
  },
  {
    "name": "プケプケ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 75,
        "blunt": 80,
        "ammo": 70,
        "fire": 15,
        "water": 0,
        "thunder": 30,
        "ice": 20,
        "dragon": 10
      },
      {
        "partName": "舌",
        "sever": 95,
        "blunt": 90,
        "ammo": 85,
        "fire": 15,
        "water": 0,
        "thunder": 30,
        "ice": 20,
        "dragon": 10
      },
      {
        "partName": "首",
        "sever": 40,
        "blunt": 35,
        "ammo": 30,
        "fire": 5,
        "water": 0,
        "thunder": 20,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "胴",
        "sever": 35,
        "blunt": 35,
        "ammo": 30,
        "fire": 0,
        "water": 0,
        "thunder": 15,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "翼",
        "sever": 50,
        "blunt": 45,
        "ammo": 40,
        "fire": 10,
        "water": 0,
        "thunder": 25,
        "ice": 15,
        "dragon": 5
      },
      {
        "partName": "脚",
        "sever": 45,
        "blunt": 45,
        "ammo": 40,
        "fire": 0,
        "water": 0,
        "thunder": 15,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "尻",
        "sever": 55,
        "blunt": 50,
        "ammo": 45,
        "fire": 10,
        "water": 0,
        "thunder": 25,
        "ice": 15,
        "dragon": 5
      },
      {
        "partName": "脚",
        "sever": 45,
        "blunt": 45,
        "ammo": 40,
        "fire": 0,
        "water": 0,
        "thunder": 15,
        "ice": 5,
        "dragon": 0
      }
    ]
  },
  {
    "name": "ベリオロス",
    "parts": [
      {
        "partName": "頭部",
        "sever": 65,
        "blunt": 70,
        "ammo": 55,
        "fire": 20,
        "water": 10,
        "thunder": 15,
        "ice": 0,
        "dragon": 15
      },
      {
        "partName": "首",
        "sever": 30,
        "blunt": 30,
        "ammo": 25,
        "fire": 5,
        "water": 5,
        "thunder": 5,
        "ice": 0,
        "dragon": 5
      },
      {
        "partName": "腹部",
        "sever": 38,
        "blunt": 38,
        "ammo": 25,
        "fire": 10,
        "water": 0,
        "thunder": 5,
        "ice": 0,
        "dragon": 5
      },
      {
        "partName": "翼",
        "sever": 30,
        "blunt": 45,
        "ammo": 20,
        "fire": 10,
        "water": 0,
        "thunder": 5,
        "ice": 0,
        "dragon": 5
      },
      {
        "partName": "背中",
        "sever": 30,
        "blunt": 30,
        "ammo": 25,
        "fire": 5,
        "water": 5,
        "thunder": 5,
        "ice": 0,
        "dragon": 5
      },
      {
        "partName": "前脚",
        "sever": 40,
        "blunt": 45,
        "ammo": 35,
        "fire": 15,
        "water": 0,
        "thunder": 10,
        "ice": 0,
        "dragon": 5
      },
      {
        "partName": "後脚",
        "sever": 30,
        "blunt": 30,
        "ammo": 25,
        "fire": 5,
        "water": 5,
        "thunder": 5,
        "ice": 0,
        "dragon": 5
      },
      {
        "partName": "尻尾",
        "sever": 45,
        "blunt": 23,
        "ammo": 45,
        "fire": 10,
        "water": 0,
        "thunder": 5,
        "ice": 0,
        "dragon": 5
      },
      {
        "partName": "尻尾先端",
        "sever": 60,
        "blunt": 40,
        "ammo": 40,
        "fire": 15,
        "water": 0,
        "thunder": 10,
        "ice": 0,
        "dragon": 5
      },
      {
        "partName": "棘",
        "sever": 25,
        "blunt": 35,
        "ammo": 25,
        "fire": 30,
        "water": 5,
        "thunder": 25,
        "ice": 0,
        "dragon": 10
      }
    ]
  },
  {
    "name": "ボルボロス",
    "parts": [
      {
        "partName": "頭部",
        "sever": 22,
        "blunt": 22,
        "ammo": 15,
        "fire": 40,
        "water": 0,
        "thunder": 0,
        "ice": 20,
        "dragon": 10
      },
      {
        "partName": "胴",
        "sever": 36,
        "blunt": 45,
        "ammo": 35,
        "fire": 25,
        "water": 0,
        "thunder": 0,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "前脚",
        "sever": 50,
        "blunt": 55,
        "ammo": 50,
        "fire": 20,
        "water": 0,
        "thunder": 0,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "後脚",
        "sever": 36,
        "blunt": 30,
        "ammo": 25,
        "fire": 20,
        "water": 0,
        "thunder": 0,
        "ice": 15,
        "dragon": 5
      },
      {
        "partName": "尻尾",
        "sever": 47,
        "blunt": 47,
        "ammo": 50,
        "fire": 25,
        "water": 0,
        "thunder": 0,
        "ice": 20,
        "dragon": 10
      }
    ]
  },
  {
    "name": "マガイマガド",
    "parts": [
      {
        "partName": "頭部",
        "sever": 55,
        "blunt": 55,
        "ammo": 30,
        "fire": 0,
        "water": 15,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "胴",
        "sever": 25,
        "blunt": 25,
        "ammo": 5,
        "fire": 0,
        "water": 20,
        "thunder": 15,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "背中",
        "sever": 30,
        "blunt": 43,
        "ammo": 15,
        "fire": 0,
        "water": 15,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "背中(鬼火)",
        "sever": 63,
        "blunt": 63,
        "ammo": 50,
        "fire": 0,
        "water": 5,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "前脚",
        "sever": 38,
        "blunt": 38,
        "ammo": 20,
        "fire": 0,
        "water": 20,
        "thunder": 15,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "前脚(鬼火)",
        "sever": 48,
        "blunt": 48,
        "ammo": 45,
        "fire": 0,
        "water": 10,
        "thunder": 15,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "腕刃",
        "sever": 45,
        "blunt": 45,
        "ammo": 45,
        "fire": 0,
        "water": 10,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "後脚",
        "sever": 38,
        "blunt": 38,
        "ammo": 20,
        "fire": 0,
        "water": 25,
        "thunder": 20,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "尻尾",
        "sever": 43,
        "blunt": 30,
        "ammo": 10,
        "fire": 0,
        "water": 15,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "尻尾(鬼火)",
        "sever": 48,
        "blunt": 48,
        "ammo": 45,
        "fire": 0,
        "water": 10,
        "thunder": 15,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "尾刃",
        "sever": 43,
        "blunt": 30,
        "ammo": 10,
        "fire": 0,
        "water": 15,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "尾刃(鬼火)",
        "sever": 48,
        "blunt": 48,
        "ammo": 45,
        "fire": 0,
        "water": 10,
        "thunder": 15,
        "ice": 0,
        "dragon": 0
      }
    ]
  },
  {
    "name": "ヤツカダキ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 60,
        "blunt": 70,
        "ammo": 45,
        "fire": 0,
        "water": 10,
        "thunder": 0,
        "ice": 20,
        "dragon": 0
      },
      {
        "partName": "胸",
        "sever": 25,
        "blunt": 25,
        "ammo": 10,
        "fire": 0,
        "water": 5,
        "thunder": 0,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "腹部",
        "sever": 35,
        "blunt": 35,
        "ammo": 15,
        "fire": 0,
        "water": 5,
        "thunder": 0,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "腹部(繭化)",
        "sever": 50,
        "blunt": 50,
        "ammo": 28,
        "fire": 0,
        "water": 0,
        "thunder": 0,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "脚",
        "sever": 25,
        "blunt": 25,
        "ammo": 15,
        "fire": 0,
        "water": 5,
        "thunder": 0,
        "ice": 15,
        "dragon": 0
      },
      {
        "partName": "脚(糸)",
        "sever": 43,
        "blunt": 43,
        "ammo": 35,
        "fire": 0,
        "water": 0,
        "thunder": 0,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "爪",
        "sever": 20,
        "blunt": 20,
        "ammo": 10,
        "fire": 0,
        "water": 15,
        "thunder": 0,
        "ice": 30,
        "dragon": 0
      },
      {
        "partName": "爪(破壊後)",
        "sever": 30,
        "blunt": 43,
        "ammo": 20,
        "fire": 0,
        "water": 5,
        "thunder": 0,
        "ice": 20,
        "dragon": 0
      }
    ]
  },
  {
    "name": "ヨツミワドウ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 65,
        "blunt": 70,
        "ammo": 60,
        "fire": 20,
        "water": 0,
        "thunder": 30,
        "ice": 15,
        "dragon": 10
      },
      {
        "partName": "首",
        "sever": 50,
        "blunt": 55,
        "ammo": 40,
        "fire": 10,
        "water": 0,
        "thunder": 20,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "胴",
        "sever": 40,
        "blunt": 40,
        "ammo": 30,
        "fire": 10,
        "water": 0,
        "thunder": 20,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "背中",
        "sever": 25,
        "blunt": 35,
        "ammo": 25,
        "fire": 5,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "前脚",
        "sever": 50,
        "blunt": 45,
        "ammo": 40,
        "fire": 15,
        "water": 0,
        "thunder": 25,
        "ice": 10,
        "dragon": 5
      },
      {
        "partName": "後脚",
        "sever": 35,
        "blunt": 30,
        "ammo": 25,
        "fire": 5,
        "water": 0,
        "thunder": 15,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "尻尾",
        "sever": 30,
        "blunt": 30,
        "ammo": 25,
        "fire": 5,
        "water": 0,
        "thunder": 15,
        "ice": 0,
        "dragon": 0
      }
    ]
  },
  {
    "name": "ラングロトラ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 55,
        "blunt": 50,
        "ammo": 45,
        "fire": 0,
        "water": 30,
        "thunder": 15,
        "ice": 20,
        "dragon": 0
      },
      {
        "partName": "上半身",
        "sever": 45,
        "blunt": 45,
        "ammo": 35,
        "fire": 0,
        "water": 20,
        "thunder": 10,
        "ice": 15,
        "dragon": 0
      },
      {
        "partName": "腹部",
        "sever": 36,
        "blunt": 36,
        "ammo": 20,
        "fire": 0,
        "water": 10,
        "thunder": 5,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "背中",
        "sever": 45,
        "blunt": 45,
        "ammo": 40,
        "fire": 0,
        "water": 20,
        "thunder": 10,
        "ice": 15,
        "dragon": 0
      },
      {
        "partName": "前脚",
        "sever": 38,
        "blunt": 30,
        "ammo": 30,
        "fire": 0,
        "water": 10,
        "thunder": 5,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "後脚",
        "sever": 36,
        "blunt": 36,
        "ammo": 20,
        "fire": 0,
        "water": 10,
        "thunder": 5,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "尻",
        "sever": 30,
        "blunt": 30,
        "ammo": 25,
        "fire": 0,
        "water": 15,
        "thunder": 10,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "全身(回転中)",
        "sever": 75,
        "blunt": 75,
        "ammo": 10,
        "fire": 0,
        "water": 0,
        "thunder": 0,
        "ice": 0,
        "dragon": 0
      }
    ]
  },
  {
    "name": "ラージャン",
    "parts": [
      {
        "partName": "頭部",
        "sever": 65,
        "blunt": 67,
        "ammo": 55,
        "fire": 0,
        "water": 5,
        "thunder": 0,
        "ice": 30,
        "dragon": 0
      },
      {
        "partName": "胴",
        "sever": 45,
        "blunt": 45,
        "ammo": 35,
        "fire": 0,
        "water": 5,
        "thunder": 0,
        "ice": 15,
        "dragon": 0
      },
      {
        "partName": "前脚",
        "sever": 45,
        "blunt": 45,
        "ammo": 40,
        "fire": 0,
        "water": 5,
        "thunder": 0,
        "ice": 15,
        "dragon": 0
      },
      {
        "partName": "後脚",
        "sever": 35,
        "blunt": 35,
        "ammo": 15,
        "fire": 9,
        "water": 5,
        "thunder": 0,
        "ice": 15,
        "dragon": 0
      },
      {
        "partName": "尻尾",
        "sever": 35,
        "blunt": 32,
        "ammo": 25,
        "fire": 0,
        "water": 5,
        "thunder": 0,
        "ice": 15,
        "dragon": 0
      }
    ]
  },
  {
    "name": "リオレイア",
    "parts": [
      {
        "partName": "頭部",
        "sever": 70,
        "blunt": 75,
        "ammo": 65,
        "fire": 0,
        "water": 15,
        "thunder": 20,
        "ice": 15,
        "dragon": 30
      },
      {
        "partName": "首",
        "sever": 40,
        "blunt": 45,
        "ammo": 35,
        "fire": 0,
        "water": 0,
        "thunder": 5,
        "ice": 0,
        "dragon": 15
      },
      {
        "partName": "胴",
        "sever": 35,
        "blunt": 30,
        "ammo": 25,
        "fire": 0,
        "water": 5,
        "thunder": 10,
        "ice": 5,
        "dragon": 20
      },
      {
        "partName": "翼",
        "sever": 45,
        "blunt": 45,
        "ammo": 35,
        "fire": 0,
        "water": 10,
        "thunder": 15,
        "ice": 10,
        "dragon": 25
      },
      {
        "partName": "背中",
        "sever": 35,
        "blunt": 30,
        "ammo": 25,
        "fire": 0,
        "water": 5,
        "thunder": 10,
        "ice": 5,
        "dragon": 20
      },
      {
        "partName": "脚",
        "sever": 40,
        "blunt": 40,
        "ammo": 35,
        "fire": 0,
        "water": 0,
        "thunder": 5,
        "ice": 0,
        "dragon": 15
      },
      {
        "partName": "尻尾",
        "sever": 45,
        "blunt": 40,
        "ammo": 35,
        "fire": 0,
        "water": 5,
        "thunder": 10,
        "ice": 5,
        "dragon": 20
      }
    ]
  },
  {
    "name": "リオレウス",
    "parts": [
      {
        "partName": "頭部",
        "sever": 65,
        "blunt": 70,
        "ammo": 60,
        "fire": 0,
        "water": 15,
        "thunder": 20,
        "ice": 15,
        "dragon": 30
      },
      {
        "partName": "首",
        "sever": 35,
        "blunt": 40,
        "ammo": 30,
        "fire": 0,
        "water": 5,
        "thunder": 10,
        "ice": 5,
        "dragon": 20
      },
      {
        "partName": "腹部",
        "sever": 25,
        "blunt": 25,
        "ammo": 20,
        "fire": 0,
        "water": 5,
        "thunder": 10,
        "ice": 5,
        "dragon": 20
      },
      {
        "partName": "翼",
        "sever": 50,
        "blunt": 45,
        "ammo": 40,
        "fire": 0,
        "water": 10,
        "thunder": 15,
        "ice": 10,
        "dragon": 25
      },
      {
        "partName": "背中",
        "sever": 25,
        "blunt": 25,
        "ammo": 20,
        "fire": 0,
        "water": 5,
        "thunder": 10,
        "ice": 5,
        "dragon": 20
      },
      {
        "partName": "脚",
        "sever": 35,
        "blunt": 35,
        "ammo": 30,
        "fire": 0,
        "water": 0,
        "thunder": 5,
        "ice": 0,
        "dragon": 15
      },
      {
        "partName": "尻尾",
        "sever": 45,
        "blunt": 40,
        "ammo": 35,
        "fire": 0,
        "water": 5,
        "thunder": 10,
        "ice": 5,
        "dragon": 20
      }
    ]
  },
  {
    "name": "ロアルドロス",
    "parts": [
      {
        "partName": "頭部",
        "sever": 50,
        "blunt": 55,
        "ammo": 65,
        "fire": 30,
        "water": 0,
        "thunder": 5,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "タテガミ",
        "sever": 65,
        "blunt": 50,
        "ammo": 35,
        "fire": 30,
        "water": 0,
        "thunder": 15,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "腹部",
        "sever": 50,
        "blunt": 40,
        "ammo": 35,
        "fire": 30,
        "water": 0,
        "thunder": 10,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "背中",
        "sever": 30,
        "blunt": 45,
        "ammo": 35,
        "fire": 30,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "前脚",
        "sever": 24,
        "blunt": 40,
        "ammo": 25,
        "fire": 20,
        "water": 0,
        "thunder": 10,
        "ice": 10,
        "dragon": 0
      },
      {
        "partName": "後脚",
        "sever": 30,
        "blunt": 24,
        "ammo": 30,
        "fire": 20,
        "water": 0,
        "thunder": 10,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "尻尾",
        "sever": 40,
        "blunt": 30,
        "ammo": 40,
        "fire": 25,
        "water": 0,
        "thunder": 5,
        "ice": 5,
        "dragon": 0
      }
    ]
  },
  {
    "name": "百竜ノ淵源ナルハタタヒメ",
    "parts": [
      {
        "partName": "頭部",
        "sever": 40,
        "blunt": 42,
        "ammo": 5,
        "fire": 5,
        "water": 5,
        "thunder": 0,
        "ice": 5,
        "dragon": 10
      },
      {
        "partName": "首",
        "sever": 40,
        "blunt": 42,
        "ammo": 3,
        "fire": 0,
        "water": 0,
        "thunder": 0,
        "ice": 5,
        "dragon": 0
      },
      {
        "partName": "胴",
        "sever": 40,
        "blunt": 42,
        "ammo": 5,
        "fire": 0,
        "water": 0,
        "thunder": 0,
        "ice": 0,
        "dragon": 5
      },
      {
        "partName": "胸",
        "sever": 35,
        "blunt": 35,
        "ammo": 2,
        "fire": 0,
        "water": 0,
        "thunder": 0,
        "ice": 5,
        "dragon": 10
      },
      {
        "partName": "腹部(帯電器官)",
        "sever": 30,
        "blunt": 30,
        "ammo": 5,
        "fire": 0,
        "water": 0,
        "thunder": 0,
        "ice": 0,
        "dragon": 0
      },
      {
        "partName": "翼腕",
        "sever": 35,
        "blunt": 30,
        "ammo": 5,
        "fire": 0,
        "water": 5,
        "thunder": 0,
        "ice": 5,
        "dragon": 10
      },
      {
        "partName": "翼腕(帯電)",
        "sever": 44,
        "blunt": 40,
        "ammo": 15,
        "fire": 0,
        "water": 0,
        "thunder": 0,
        "ice": 5,
        "dragon": 5
      },
      {
        "partName": "背中",
        "sever": 25,
        "blunt": 30,
        "ammo": 5,
        "fire": 0,
        "water": 5,
        "thunder": 0,
        "ice": 5,
        "dragon": 10
      },
      {
        "partName": "脚ヒレ",
        "sever": 30,
        "blunt": 35,
        "ammo": 1,
        "fire": 0,
        "water": 0,
        "thunder": 0,
        "ice": 0,
        "dragon": 5
      },
      {
        "partName": "尻尾",
        "sever": 40,
        "blunt": 35,
        "ammo": 5,
        "fire": 0,
        "water": 0,
        "thunder": 0,
        "ice": 5,
        "dragon": 10
      },
      {
        "partName": "尻尾先端",
        "sever": 35,
        "blunt": 40,
        "ammo": 15,
        "fire": 0,
        "water": 0,
        "thunder": 0,
        "ice": 5,
        "dragon": 10
      }
    ]
  }
])
export default MONSTERS
