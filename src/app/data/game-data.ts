import { IRecipe } from '@models/recipe.model';

export const Locations: any = {
  "cusp_of_adventure": {
    name: "Cusp of Adventure",
    description: "You are standing before the first step of a great adventure.",
    actions: [
      {
        items: ["travelers_boots"],
        description: "Buckling your boots you set off towards adventure. After walking for many leagues you happen upon a deserted frontier town.",
        unlockLocations: ["deserted_frontier_town"],
        moveToLocation: "deserted_frontier_town"
      },
      {
        items: ["spyglass"],
        description: "You cannot see much from this vantage point. You must dust off and take  your first steps."
      }
    ],
  },
  "deserted_frontier_town": {
    name: "A Deserted Frontier Town",
    description: "Your first steps have led you to the broken gates of a deserted frontier town.",
    actions: [
      {
        items: ["travelers_boots"],
        description: "You have discovered some abandoned buildings.",
        unlockLocations: ["deserted_well","deserted_blacksmith","deserted_mill","deserted_tavern","deserted_farm"]
      }
    ]
  },
  "deserted_farm": {
    name: "Deserted Farm",
    description: "A dusty, dirty and disused farm.",
  },
  "deserted_blacksmith": {
    name: "Deserted Blacksmith",
    description: "A dusty, dirty and disused blacksmith.",
  },
  "deserted_tavern": {
    name: "Deserted Tavern",
    description: "A dusty, dirty and disused tavern",
    actions: [
      {
        items: ["spyglass"],
        description: "Your search through the tavern has revealed some common household items.",
        rewards: ["broom","bucket","glass_bottle"]
      },
      {
        items: ["broom"],
        description: "Using the broom and a lot of elbow greese you have transformed a dusty and disused tavern into something of your own.",
        removeLocations: ["deserted_tavern"],
        unlockLocations: ["empty_tavern"],
        moveToLocation: "empty_tavern"
      }
    ]
  },
  "empty_tavern": {
    name: "Empty Tavern",
    descritpion: "An empty tavern that you have started to make your own.",
    actions: [

    ]
  },
  "deserted_well": {
    name: "Deserted Well",
    description: "A deserted well located in the center of the city.",
    actions: [
      {
        items: ["bucket"],
        description: "You are able to use the bucket to pull water from the well",
        rewards: ["water"]
      }
    ]
  },
  "deserted_mill": {
    name: "Deserted Lumber Mill",
    description: "A deserted lumber mill.",
    actions: [
      {
        items: ["broom"],
        description: "Basic cleaning of the mill has revealed basic forestry and woodworking tools.",
        rewards: ["saw","wood_chisel","basic_lumber_axe"],
        removeLocations: ["deserted_mill"],
        unlockLocations: ["empty_mill"],
        moveToLocaton: "empty_mill"
      },
    ]
  },
  "empty_mill": {
    name: "Empty Lumber Mill",
    description: "An empty lumber mill, starting to look fit for use.",
    actions: [
      {
        items: ["travelers_boots"],
        description: "Walking from the lumber mill you have encountered a forested area with trees suitable for harvest.",
        unlockLocations: ["forest"]
      }
    ]
  },
  "forest": {
    name: "Forest",
    description: "A forest with fir trees suitable for harvest.",
    actions: [
      {
        items: ["basic_lumber_axe"],
        description: "You are able to cut down a fir tree.",
        rewards: ["felled_fir"]
      },
      {
        items: ["oak_seeds"],
        description: "Your planting of oak seeds results in the growth of much hardier wood.",
        unlockLocations: ["oak_forest"],
        removeLocations: ["forest"],
        moveToLocation: ["oak_forest"]
      }
    ]
  },
  "oak_forest": {
    name: "Oak Forest",
    description: "A forest with regular fir trees and oak trees suitable for harvest.",
    actions: [
      {
        items: ["basic_lumber_axe"],
        description: "You are able to cut down a fir tree.",
        rewards: ["felled_fir"]
      },
      {
        items: ["fine_lumber_axe"],
        description: "You are able to cut down a towering oak.",
        rewards: ["felled_oak"]
      }
    ]
  }
};

export const Recipes: IRecipe[] = [
  {
    items: ["travelers_boots", "spyglass"],
    rewards: ["travelers_cloak"],
    description: "As if out of nowhere you have found a warm cloak which to throw over your shoulders to keep warm."
  },
  {
    items: ["felled_fir", "lumber_axe"],
    rewards: ["log", "thick branch"],
    description: "You have chopped the felled fir into logs."
  },
  {
    items: ["log", "saw"],
    rewards: ["wooden_planks"],
    description: "Cutting the wooden logs has resulted in some wooden planks."
  },
  {
    items: ["glass_bottle", "water"],
    rewards: ["water_bottle"],
    description: "Water and a bottle is a bottle of water."
  }
]

export const Items: any = {
  "travelers_boots": {
    name: "Travelers Boots",
    description: "Boots that carry a sense of destiny and adventure."
  },
  "spyglass": {
    name: "Trusty Spyglass",
    description: "Collapsible yet study allowing the weilder to spot things at a distance."
  },
  "broom": {
    name: "Broom",
    description: "A basic broom useful for clearning."
  },
  "bucket": {
    name: "Bucket",
    description: "A plain wooden bucket."
  },
  "water": {
    name: "Water",
    description: "Just H2O."
  },
  "glass_bottle": {
    name: "Glass Bottle",
    description: "An empty bottle made of glass."
  },
  "saw": {
    name: "Saw",
    description: "A simple hand saw."
  },
  "wood_chisel": {
    name: "Wood Chisel",
    description: "A chisel for shaping wood"
  },
  "basic_lumber_axe": {
    name: "Basic Lumber Axe",
    description: "A simple lumber axe for cutting soft wood."
  },
  "fine_lumber_axe": {
    name: "Fine Lumber Axe",
    description: "A really nice lumber axe"
  },
  "felled_fir": {
    name: "Felled Fir",
    description: "A fir tree, chopped down."
  },
  "felled_oak": {
    name: "Felled Oak",
    description: "An oak tree, chopped down."
  },
  "log": {
    name: "Log",
    description: "Once a tree now a log."
  },
  "oak_log": {
    name: "Oak Log",
    description: "Once a tree now a superiour quality log."
  },
  "travelers_cloak": {
    name: "Traveler's Cloak",
    description: "A trusty and warm cloak for best suited for travelling."
  }
};
