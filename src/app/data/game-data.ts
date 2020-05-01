export const Locations = [
  {
    key: "cusp_of_adventure",
    name: "Cusp of Adventure",
    description: "You are standing before the first step of a great adventure.",
    actions: [
      {
        itemKey: "travelers_boots",
        description: "Buckling your boots you set off towards adventure. After walking for many leagues you happen upon a deserted frontier town.",
        unlockLocation: "deserted_frontier_town"
      },
      {
        itemKey: "spyglass",
        description: "You cannot see much from this vantage point. You must dust off and take  your first steps."
      }
    ],
  },
  {
    key: "deserted_frontier_town",
    name: "A Deserted Frontier Town",
    description: "Your first steps have led you to the broken gates of a deserted frontier town.",
    actions: {
      itemKey: "travelers_boots",
    }
  }
]

export const Recipes = [
  {
    items: ["travelers_boots", "spyglass"],
    results: ["travelers_cloak"],
    description: "As if out of nowhere you have found a warm cloak which to throw over your shoulders to keep warm."
  }
]

export const Items = [
  {
    key: "travelers_boots",
    name: "Travelers Boots",
    description: "Boots that carry a sense of destiny and adventure."
  },
  {
    key: "spyglass",
    name: "Trusty Spyglass",
    description: "Collapsible yet study allowing the weilder to spot things at a distance."
  }
]
