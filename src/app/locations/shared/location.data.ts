import { Location } from './location.model';

export const LOCATIONS: Location[] = [
  {
    name: 'Pittmedded',
    description: 'The Pittmedded Region',
    key: 'pittmedden',
    parentLocationKey: null,
    unlocked: true,
    sellsItemKeys: [],
    buysItemKeys: [],
    sellsMarkup: 1,
    buysMarkup: 1
  },
  {
    name: 'Pittmedden Town',
    descritpion: 'A somewhat thriving frontier town, that boasts basic amenities for the adventering merchant.',
    key: 'pittmedden_town',
    parentLocationKey: 'pittmedden',
    unlocked: true,
    sellsItemKeys: [],
    buysItemKeys: [],
    sellsMarkup: 1,
    buysMarkup: 1
  },
  {
    name: 'Pitmedded Well',
    description: 'A public well at the center of town.',
    key: 'pittmedden_well',
    unlocked: false,
    sellsItemKeys: [],
    buysItemKeys: [],
    sellsMarkup: 1,
    buysMarkup: 1
  },
  {
    name: 'Pittmedded General Store',
    description: 'A general store with basic supplies.',
    key: 'pittmedden_generalstore',
    parentLocationKey: 'pitmedden_town',
    unlocked: false,
    sellsItemKeys: [
      'pelt_small',
      'pelt_medium',
      'sewing_needle',
      'thread'
      'healing_potion_small'
    ],
    buysItemKeys: [
      'redcap_mushroom_small',
      'pelt_small',
      'pelt_medium',
      'sewing_needle',
      'thread'
    ],
    sellsMarkup: 1,
    buysMarkup: 0.5
  },
  {
    name: 'Pittmedden Forest',
    description: 'The dense forest that lies to the south of Pitmedden',
    key: 'pittmedden_forest',
    parentLocationKey: 'pittmedden',
    unlocked: false,
    sellsItemKeys: [],
    buysItemKeys: [],
    sellsMarkup: 1,
    buysMarkup: 1
  },
  {
    name: 'Pitmedded Blacksmith',
    descript: 'A small smithy',
    key: 'pittmedden_blacksmith',
    parentLocationKey: 'pittmedden_town',
    unlocked: false,
    sellsItemKeys: [
      'dagger_basic',
      'short_sword_basic',
      'shield_round_basic',
      'horse_shoe',
    ],
    buysItemKeys: [
      'iron_lump',
      'horse_shoe'
    ],
    sellsMarkup: 1,
    buysMarkup: 0.5
  },
  {
    name: 'Pitmedden Alchemist',
    description: 'Hidden in a copse of trees is a ramshackle hut with the a sign that simply reads \'alchemist\'',
    key: 'pittmedden_alchemist',
    parentLocationKey: 'pittmedden_forest',
    unlocked: false,
    sellsItemKeys: [
      'mortar_pestel',
      'glass_vial',
      'healing_potion_small'
    ],
    buysItemKeys: [
      'redcap_mushroom_smal'
    ],
    sellsMarkup: 1,
    buysMarkup: 0.7

  }
]
