export enum Color {
  GOLD = "GOLD",
  SILVER = "SILVER",
  RED = "RED",
  BLUE = "BLUE",
  GREEN = "GREEN",
  PURPLE = "PURPLE",
}

export enum Type {
  SKILL = "SKILL",
  ATTACK = "ATTACK",
  MOVEMENT = "MOVEMENT",
  DEFENSE = "DEFENSE",
  DEFENSE_SKILL = "DEFENSE_SKILL",
}

export enum ValueSign {
  NONE = "NONE",
  PLUS = "PLUS",
  MINUS = "MINUS",
  EXCLAMATION = "EXCLAMATION",
}

export enum Modifier {
  NONE = "NONE",
  RANGE = "RANGE",
  AREA = "AREA",
}

export enum Item {
  ATTACK = "ATTACK",
  DEFENSE = "DEFENSE",
  INITIATIVE = "INITIATIVE",
  RANGE = "RANGE",
  AREA = "AREA",
  MOVEMENT = "MOVEMENT",
}

export enum Stat {
  ATTACK = "ATTACK",
  DEFENSE = "DEFENSE",
  INITIATIVE = "INITIATIVE",
  MOVEMENT = "MOVEMENT",
}

export class Hero {
  name: string
  stats: Array<number>
  title: string
  stars: number

  constructor(
    name: string,
    stats: Array<number>,
    title: string,
    stars: number,
  ) {
    this.name = name
    this.stats = stats
    this.title = title
    this.stars = stars
  }
}

export const heroes = {
  "arien": new Hero("Arien", [8, 5, 4, 4, 2, 6, 5, 5], "the Tidemaster", 1),
  "bain": new Hero("Bain", [6, 4, 4, 4, 7, 3, 3, 6], "the Bounty Hunter", 2),
  "brogan": new Hero("Brogan", [6, 8, 2, 2, 1, 7, 6, 6], "the Destroyer", 1),
  "cutter": new Hero("Cutter", [5, 3, 6, 4, 5, 4, 3, 2], "the Skycaptain", 2),
  "dodger": new Hero("Dodger", [4, 2, 7, 6, 6, 4, 8, 1], "the Warlock", 1),
  "garrus": new Hero("Garrus", [7, 7, 3, 4, 4, 7, 1, 3], "the Gladiator", 2),
  "hanu": new Hero("Hanu", [1, 1, 8, 8, 7, 2, 4, 8], "the Trickster", 3),
  "ignatia": new Hero("Ignatia", [5, 6, 2, 2, 3, 3, 6, 4], "the Mad", 3),
  "min": new Hero("Min", [1, 3, 8, 4, 6, 3, 2, 4], "the Dragonmonk", 2),
  "misa": new Hero("Misa", [8, 5, 7, 7, 4, 5, 6, 5], "the Sky Ronin", 2),
  "nebkher": new Hero("NebKher", [3, 8, 1, 1, 2, 4, 4, 3], "the Harbinger", 3),
  "sabina": new Hero("Sabina", [5, 3, 5, 4, 5, 4, 7, 3], "the Gunslinger", 1),
  "silverarrow": new Hero("Silverarrow", [2, 1, 7, 7, 7, 1, 5, 6], "the Pathfinder", 2),
  "swift": new Hero("Swift", [7, 3, 4, 6, 4, 2, 5, 1], "the Sharpshooter", 3),
  "tali": new Hero("Tali", [3, 4, 5, 4, 5, 6, 7, 7], "the Spiritcaller", 3),
  "tigerclaw": new Hero("Tigerclaw", [2, 2, 8, 8, 6, 3, 3, 2], "the Cutpurse", 1),
  "trinkets": new Hero("Trinkets", [4, 2, 6, 8, 5, 1, 4, 4], "the Scavenger", 3),
  "ursafar": new Hero("Ursafar", [8, 6, 5, 1, 4, 8, 2, 1], "the Savage", 2),
  "wasp": new Hero("Wasp", [4, 4, 5, 4, 3, 5, 4, 5], "the Warmaiden", 1),
  "whisper": new Hero("Whisper", [4, 4, 7, 2, 8, 5, 2, 2], "the Outcast", 2),
  "wuk": new Hero("Wuk", [7, 7, 1, 2, 1, 7, 6, 7], "the Grovekeeper", 3),
  "xargatha": new Hero("Xargatha", [4, 6, 3, 6, 3, 6, 5, 4], "the Changed", 1),
}

export const cardStats = new Map<Color, Map<Stat, Map<string, number[]>>>([
  [Color.RED, new Map<Stat, Map<string, number[]>>([
    [Stat.MOVEMENT, new Map<string, number[]>([
      ["i", [3, 4, 4, 4, 5, 5, 5, 5]],
      ["ii", [3, 4, 4, 4, 5, 5, 5, 5]],
      ["iii", [3, 4, 4, 4, 5, 5, 5, 5]],
    ])],
    [Stat.INITIATIVE, new Map<string, number[]>([
      ["i", [7, 7, 7, 8, 8, 8, 9, 9]],
      ["ii", [7, 7, 8, 8, 9, 9, 9, 9]],
      ["iii", [8, 8, 8, 9, 9, 9, 10, 10]],
    ])],
    [Stat.ATTACK, new Map<string, number[]>([
      ["i", [4, 4, 5, 5, 5, 6, 6, 6]],
      ["ii", [4, 5, 5, 5, 6, 6, 6, 7]],
      ["iii", [5, 5, 6, 6, 6, 7, 7, 7]],
    ])],
    [Stat.DEFENSE, new Map<string, number[]>([
      ["i", [5, 5, 6, 6, 6, 7, 7, 7]],
      ["ii", [5, 6, 6, 6, 7, 7, 7, 8]],
      ["iii", [6, 6, 7, 7, 7, 8, 8, 8]],
    ])],
  ])],
  [Color.GOLD, new Map<Stat, Map<string, number[]>>([
    [Stat.MOVEMENT, new Map<string, number[]>([
      ["i", [1, 1, 1, 1, 1, 1, 2, 2]],
    ])],
    [Stat.INITIATIVE, new Map<string, number[]>([
      ["i", [11, 11, 11, 11, 12, 12, 12, 13]],
    ])],
    [Stat.ATTACK, new Map<string, number[]>([
      ["i", [1, 2, 2, 3, 3, 3, 4, 4]],
    ])],
    [Stat.DEFENSE, new Map<string, number[]>([
      ["i", [1, 1, 2, 2, 2, 2, 3, 3]],
    ])],
  ])],
  [Color.SILVER, new Map<Stat, Map<string, number[]>>([
    [Stat.DEFENSE, new Map<string, number[]>([
      ["i", [1, 2, 2, 2, 3, 3, 3, 4]],
    ])],
  ])],
  [Color.BLUE, new Map<Stat, Map<string, number[]>>([
    [Stat.MOVEMENT, new Map<string, number[]>([
      ["i", [2, 2, 3, 3, 3, 3, 3, 3]],
      ["ii", [2, 2, 3, 3, 3, 3, 3, 3]],
      ["iii", [2, 2, 3, 3, 3, 3, 3, 3]],
    ])],
    [Stat.INITIATIVE, new Map<string, number[]>([
      ["i", [8, 9, 9, 9, 9, 10, 10, 10]],
      ["ii", [9, 9, 10, 10, 10, 10, 10, 11]],
      ["iii", [9, 10, 10, 10, 10, 11, 11, 11]],
    ])],
    [Stat.DEFENSE, new Map<string, number[]>([
      ["i", [4, 4, 4, 5, 5, 5, 6, 6]],
      ["ii", [4, 5, 5, 5, 6, 6, 6, 7]],
      ["iii", [5, 5, 5, 6, 6, 6, 7, 7]],
    ])],
  ])],
  [Color.GREEN, new Map<Stat, Map<string, number[]>>([
    [Stat.MOVEMENT, new Map<string, number[]>([
      ["i", [2, 2, 2, 2, 2, 2, 2, 3]],
      ["ii", [2, 2, 2, 2, 2, 2, 2, 3]],
      ["iii", [2, 2, 2, 2, 2, 2, 2, 3]],
    ])],
    [Stat.INITIATIVE, new Map<string, number[]>([
      ["i", [6, 5, 5, 4, 4, 3, 3, 2]],
      ["ii", [5, 5, 4, 4, 3, 3, 2, 2]],
      ["iii", [5, 4, 4, 3, 3, 2, 2, 1]],
    ])],
    [Stat.DEFENSE, new Map<string, number[]>([
      ["i", [1, 2, 2, 3, 3, 3, 3, 4]],
      ["ii", [2, 2, 3, 3, 3, 4, 4, 4]],
      ["iii", [2, 3, 3, 4, 4, 4, 4, 5]],
    ])],
  ])],
])

export const stats: Array<string> = [
  "attack",
  "defense",
  "initiative",
  "movement",
  "initiator",
  "brawler",
  "pusher",
  "support",
]

export const defaultEmoji = [
  "area_blue",
  "area_gold",
  "area_green",
  "area_purple",
  "area_red",
  "area_silver",
  "attack_blue",
  "attack_gold",
  "attack_green",
  "attack_red",
  "attack_silver",
  "defense_blue",
  "defense_gold",
  "defense_green",
  "defense_red",
  "defense_silver",
  "defense_skill_blue",
  "defense_skill_gold",
  "defense_skill_green",
  "defense_skill_red",
  "defense_skill_silver",
  "initiative",
  "life_counters",
  "movement_blue",
  "movement_gold",
  "movement_green",
  "movement_red",
  "movement_silver",
  "range_blue",
  "range_gold",
  "range_green",
  "range_purple",
  "range_red",
  "range_silver",
  "skill_blue",
  "skill_gold",
  "skill_green",
  "skill_red",
  "skill_silver",
  "tiebreaker_blue",
  "tiebreaker_orange",
]

export const imageNames = [
  "area_blue",
  "area_gold",
  "area_green",
  "area_purple",
  "area_red",
  "area_silver",
  "attack_blue",
  "attack_gold",
  "attack_green",
  "attack_red",
  "attack_silver",
  "banner_blue_bottom",
  "banner_blue_top",
  "banner_gold_bottom",
  "banner_gold_top",
  "banner_green_bottom",
  "banner_green_top",
  "banner_red_bottom",
  "banner_red_top",
  "banner_silver_bottom",
  "banner_silver_top",
  "bottom_long",
  "bottom_short",
  "colorblind_blue",
  "colorblind_gold",
  "colorblind_green",
  "colorblind_purple",
  "colorblind_red",
  "colorblind_silver",
  "defense",
  "defense_blue",
  "defense_gold",
  "defense_green",
  "defense_red",
  "defense_silver",
  "defense_skill_blue",
  "defense_skill_gold",
  "defense_skill_green",
  "defense_skill_red",
  "defense_skill_silver",
  "frame_blue_bottom",
  "frame_blue_middle",
  "frame_blue_top",
  "frame_gold_bottom",
  "frame_gold_middle",
  "frame_gold_top",
  "frame_green_bottom",
  "frame_green_middle",
  "frame_green_top",
  "frame_purple_bottom",
  "frame_purple_middle",
  "frame_purple_top",
  "frame_red_bottom",
  "frame_red_middle",
  "frame_red_top",
  "frame_silver_bottom",
  "frame_silver_middle",
  "frame_silver_top",
  "initiative",
  "item_area",
  "item_attack",
  "item_defense",
  "item_initiative",
  "item_movement",
  "item_range",
  "level_i",
  "level_ii",
  "level_iii",
  "level_iv",
  "level_h",
  "life_counters",
  "movement",
  "movement_blue",
  "movement_gold",
  "movement_green",
  "movement_red",
  "movement_silver",
  "range_blue",
  "range_gold",
  "range_green",
  "range_purple",
  "range_red",
  "range_silver",
  "skill_blue",
  "skill_gold",
  "skill_green",
  "skill_red",
  "skill_silver",
  "tiebreaker_blue",
  "tiebreaker_orange",
  "title",
  "title_ultimate",
]

export const cardImageNames = [
  "BlueIA",
  "BlueIIA",
  "BlueIIB",
  "BlueIIIA",
  "BlueIIIB",
  "Gold",
  "GreenIA",
  "GreenIIA",
  "GreenIIB",
  "GreenIIIA",
  "GreenIIIB",
  "Handicap",
  "RedIA",
  "RedIIA",
  "RedIIB",
  "RedIIIA",
  "RedIIIB",
  "Silver",
  "Ultimate",
]
