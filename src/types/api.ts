type AppError = {
  httpResponseCode: number | null;
  code: number | string | null;
  message: string;
  detailMessage?: string;
  name?: string;
}

type ResItemMainCategory = {
  id: number;
  categoryNo: number;
  name: string;
}

type ResItemSubCategory = {
  id: number;
  mainCategoryNo: number;
  subCategoryNo: number;
  name: string;
  description: string | null;
}

type ResWeaponWithSubCategory = ResItemSubCategory & {
  weapons: ResItemWeapon[];
}

type ResItemWeapon = {
  itemId: number;
  itemName: string;
  detail: ResItemWeaponDetail | null;
}

type ResItemWeaponDetail = {
  detailId: number;
  detailItemId: number;
  upgradeType: string | null;
  imageUrl: string | null;
  damageType: string | null;
  weight: number | null;
  defaultSkill: string | null;
  damagePhysical: number | null;
  damageMagic: number | null;
  damageFire: number | null;
  damageLightning: number | null;
  damageHoly: number | null;
  critical: number | null;
  defensePhysical: number | null;
  defenseMagic: number | null;
  defenseFire: number | null;
  defenseLightning: number | null;
  defenseHoly: number | null;
  defenseStrength: number | null;
  effectScarletRot: number | null;
  effectFrostbite: number | null;
  effectBleeding: number | null;
  effectPoison: number | null;
  reqStrength: number | null;
  reqDexterity: number | null;
  reqIntelligence: number | null;
  reqFaith: number | null;
  reqArcane: number | null;
  description: string | null;
}

type ReqUpdateSubCategory = {
  subCategoryNo: number;
  description: string | null;
}

export type {
  AppError,
  ResItemMainCategory,
  ResItemSubCategory,
  ResWeaponWithSubCategory,
  ResItemWeapon,
  ResItemWeaponDetail,
  ReqUpdateSubCategory,
}