import { Quest } from './quest.model'

export const QUESTS: Quest[] = [
  {
    name: 'Explore Pittmedden',
    description: 'After entering Pitmedden the first task is to start exploring and learning what exists in the town',
    complete: 'You have discovered the Pitmedden General Store',
    key: 'pittmedden_explore_001',
    parentLocationKey: 'pittmedden_town',
    repeatable: false,
    unlocked: true,
    requiredGold: 0,
    requiredItems: [],
    consumedItems: [],
    rewardsItems: [],
    unlockQuestKeys: [
      'pitmedden_explore_002',
    ],
    unlockLocationKeys: [
      'pitmedden_generalstore'
    ],
    unlockCraftKeys: [ ],
    rewardGold: 0
  },
  {
    name: 'Explore Pitmedden',
    description: 'Continue to explore pitmedden.',
    complete: 'You have discovered the Pitmedden Blacksmith',
    key: 'pittmedden_explore_002',
    parentLocationKey: 'pitmedden_town',
    repeatable: false,
    unlocked: false,
    requiredGold: 0,
    requiredItems: [],
    consumedItems: [],
    rewardsItems: [],
    unlockQuestKeys: [
      'pittmedden_explore_002',
      'pittmedden_blacksmith_introduction',
      'pittmedden_forest_001'
    ],
    unlockLocationKeys: [
      'pittmedden_blacksmith'
    ],
    unlockCraftKeys: [],
    rewardGold: 0
  },
  {
    name: 'Introduction to the Blacksmith',
    description: 'Introduce yourself in a friendly manner to the town blacksmith',
    complete: 'The blacksmith seems to like you and has need for assitance in his shop. He has offered to teach you some basic crafting recipes, for a small fee of course.',
    key: 'pittmedden_blacksmith_001',
    parentLocationKey: 'pittmedden_blacksmith',
    repeatable: false,
    unlocked: false,
    requiredGold: 50,
    requiredItems: [],
    consumedItems: [],
    rewardsItems: [],
    rewardGold: 0,
    unlockQuestKeys: [],
    unlockLocationKeys: [],
    unlockCraftKeys: [
      'dagger_basic',
      'short_sword_basic',
      'shield_round_basic',
      'horse_shoe',
    ]
  }
]
