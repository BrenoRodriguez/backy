interface Suggestions {
  genre: string[]
  status: string[]
  expectation: string[]
  length: string[]
  platform: string[]
}

const suggestions: Suggestions = {
  genre: [
    'Action',
    'Adventure',
    'RPG',
    'JRPG',
    'CRPG',
    'Turn-Based',
    'Tactical',
    'Dungeon Crawler',
    'Creature Collector',
    'Deckbuilder',
    'Simulation',
    'Automation',
    'Life Sim',
    'Social Sim',
    'Management Sim',
    'Colony Sim',
    'City Builder',
    'Survival',
    'Strategy',
    '4X',
    'RTS',
    'Platformer',
    'Roguelike',
    'Roguelite',
    'Rhythm',
    'Puzzle',
    'Visual Novel',
    'Shooter',
    'FPS',
    'TPS',
    'Immersive Sim',
    'Tower Defense',
    'Soulslike',
    'Hack & Slash',
    "Beat'em up",
    'Looter Shooter',
  ],
  status: [
    'Not Released',
    'Early Access',
    'Backlog',
    'Playing',
    'Dropped',
    'Completed',
    '100%',
  ],
  expectation: [
    '1 - Must Play',
    '2 - Essential',
    '3 - Really Interested',
    '4 - Interested',
    '5 - Curious',
    '6 - Wort A Shot',
    '7 - Series Legacy/Future',
    '8 - Future Consideration',
    '9 - Completed',
    '10 - 100%',
  ],
  length: ['Unknown'],

  platform: [
    'PC',
    'NES',
    'SNES',
    'N64',
    'GameCube',
    'Wii',
    'Wii U',
    'Switch',
    'Switch 2',
    'GBA',
    'DS',
    '3DS',
    'PS1',
    'PS2',
    'PS3',
    'PS4',
    'PS5',
    'PSP',
    'PSVita',
    'Xbox 360',
    'Sega Saturn',
    'DreamCast',
  ],
}

for (let i = 1; i <= 150; i++) {
  suggestions.length.push(`${i}`)
}

export default suggestions
