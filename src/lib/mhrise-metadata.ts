export type EquipmentType = '武器' | '防具'
export type ArmorType     = '頭' | '胴' | '腕' | '腰' | '脚'
export type WeaponType    = '大剣' | '太刀' | '片手剣' | '双剣' | 'ハンマー' | '狩猟笛' | 'ランス' | 'ガンランス' | 'スラッシュアックス' | 'チャージアックス' | '操虫棍' | 'ライトボウガン' | 'ヘヒィボウガン' | '弓'

export const ARMOR_TYPES:              ArmorType[]  = ['頭', '胴', '腕', '腰', '脚']
export const WEAPON_TYPES:             WeaponType[] = ['大剣', '太刀', '片手剣', '双剣', 'ハンマー', '狩猟笛', 'ランス', 'ガンランス', 'スラッシュアックス', 'チャージアックス', '操虫棍', 'ライトボウガン', 'ヘヒィボウガン', '弓']
export const BLADEMASTER_WEAPON_TYPES: WeaponType[] = ['大剣', '太刀', '片手剣', '双剣', 'ハンマー', '狩猟笛', 'ランス', 'ガンランス', 'スラッシュアックス', 'チャージアックス', '操虫棍']
export const GUNNER_WEAPON_TYPES:      WeaponType[] = ['ライトボウガン', 'ヘヒィボウガン', '弓']


export function isBlademaster(weaponType: WeaponType) {
  return BLADEMASTER_WEAPON_TYPES.includes(weaponType)
}
