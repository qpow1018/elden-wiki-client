'use client';

import { EnumMainCategory } from '@/define';

import EssentialDataError from '@/components/EssentialDataError';
import Weapon from './Weapon';

export default function ItemByCategory(
  props: {
    categoryNo: number;
  }
) {
  function getComponentByCategory(categoryNo: number) {
    switch (categoryNo) {
      case EnumMainCategory.Weapon: {
        return <Weapon />;
      }
      // case EnumMainCategory.SubWeapon: {
      //   return <SubWeapon />;
      // }
      // case EnumMainCategory.Skill: {
      //   return <Skill />;
      // }
      // case EnumMainCategory.Spell: {
      //   return <Spell />;
      // }
      // case EnumMainCategory.Armor: {
      //   return <Armor />;
      // }
      // case EnumMainCategory.Talisman: {
      //   return <Talisman />;
      // }
      // case EnumMainCategory.SpiritAshes: {
      //   return <SpiritAshes />;
      // }
      // case EnumMainCategory.GeneralItem: {
      //   return <GeneralItem />;
      // }
      // case EnumMainCategory.Npc: {
      //   return <Npc />;
      // }
      default: {
        return <EssentialDataError isLoading={false} isError={true} />
      }
    }
  }

  return (
    <>
      { getComponentByCategory(props.categoryNo) }
    </>
  );
}