import { IRecipe } from '@models/recipe.model';

export const Locations: any = {
  "cusp_of_adventure": {
    name: "Cusp of Adventure",
    description: "You are standing before the first step of a great adventure.",
    items: ['dusty_path'],
  },
  "mud_pit": {
    name: "Mud Pit",
    description: "You have found yourself the end of the path. It is hot, mud, dead trees, and pools of water as far as they eyes can see. You first task is to get a fire and start a basic camp.",
    items: ['mud', 'water', 'branch']
  },
  "camp": {
    name: "Basic Camp",
    description: "Having created fire you have move on from the mud pits and found a wooded area next to a stream. You have made yourself a basic camp.",
    items: ['fire', 'trees', 'stream']
  }
};

export const Recipes: IRecipe[] = [
  { 
    items: ["dusty_path"],
    unlockLocations: ["mud_pit"],
    removeLocations: ["cusp_of_adventure"],
    moveToLocation: "mud_pit",
    description: "You start off towards adventure and find yourself at the mud pit."
  },
  {
    items: ["mud", "water"],
    rewards: ["clay"],
  },
  {
    items: ["mud", "shovel"],
    rewards: ["rock"]
  },
  {
    items: ["flint", "kindling"],
    unlockLocations: ["camp"],
    moveToLocation: "camp",
    description: "Congratulations! You have made fire."
  },
  {
    items: ["branch", "clay"],
    rewards: ["shovel"]
  },
  {
    items: ["shovel", "mud"],
    rewards: ["rock"]
  },
  {
    items: ["axe", "rock"],
    rewards: ["flint"]
  },
  {
    items: ["branch", "rock"],
    rewards: ["axe"]
  },
  { 
    items: ["axe", "branch"],
    rewards: ["sticks"]
  },
  {
    items: ["sticks", "axe"],
    rewards: ["kindling"]
  },
];

export const Items: any = {
  "dusty_path": {
    name: "A Dusty Path",
    description: "Take the path to begin your adventure."
  },
  "mud": {
    name: "Mud",
    description: "The earth mixed with the standing pools of water has resulted in large areas of mud."
  },
  "water": {
    name: "Water",
    description: "Brackish water sits in pools.",
  },
  "branch": {
    name: "Branch",
    description: "Dead trees jot the landscape. Branches are brittle and can be easily pulled off."
  }, 
  "axe": {
    name: "Primitive Axe",
    description: "A primitive axe forged by wedging a rock into a broken branch."
  },
  "shovel": {
    name: "Crude Shovel",
    description: "A crude shovel has been formed by drying clay around a branch."
  },
  "rock": {
    name: "Rock",
    description: "A rock. Nothing much to say about it."
  },
  "clay": {
    name: "Clay",
    description: "Some workable clay."
  },
  "sticks": {
    name: "Sticks",
    description: "Whittled branches"
  },
  "kindling": {
    name: "Kindling",
    description: "Very small pieces of wood"
  },
  "flint": {
    name: "Flint",
    description: "A main ingredient required to start a fire."
  },
  "fire": {
    name: "Small Camp Fire",
    description: "A low burning camp fire which provides a little heat."
  },
  "trees": {
    name: "Copse of Fir Trees",
    description: "A small growth of fir trees."
  },
  "stream": {
    name: "Clear Stream",
    description: "A clear slow moving stream sits next to your camp."
  }
};
