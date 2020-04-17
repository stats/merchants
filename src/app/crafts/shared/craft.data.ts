import { Craft } from './craft.model';

export const CRAFTS: Craft[] = [
  {
    name: 'Horse Shoes',
    description: 'Create enough shoes to outfit a horse',
    key: 'horse_shoe',
    unlocked: 'false',
    requiredGold: 0,
    requiredItems: {
      {
        key: 'smith_hammer',
        quantity: 1
      }
    },
    consumesItems: {
      {
        key: 'iron_lump',
        quantity: 1
      }
    },
    rewardsItems: [
      {
        key: 'horse_shoe',
        quantity: 4
      }
    ]
  },
  {
    name: 'Small Healing Potion',
    description: 'Create a small healing potion',
    key: 'healing_potion_small',
    unlocked: 'false',
    requiredGold: 0,
    requiredItems: {
      {
        key: 'mortar_pestel',
        quantity: 1
      }
    },
    consumesItems: [
      {
        key: 'redcap_mushroom_smal',
        quantity: 2
      },
      {
        key: 'water_bucket',
        quantity: 1
      },
      {
        key: 'glass_vial',
        quanity: 1
      }
    ],
    rewardsItems: [
      {
        key: 'healing_potion_small',
        quantity: 1
      }
    ],
  }
]
