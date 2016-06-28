module.exports = {
  starting_hp: '10',
  damage: 'd10',
  load: '9+STR',
  looks: ['Blank eyes, fiery eyes, kind eyes', 'Military cut, messy hair, headband, helmet', 'Worn uniform, utilitarian clothes, rags', 'Lean body, hulking body, lithe body'],
  starting_moves: ['tactical_advantage', 'lifting_the_fog', 'tome_of_war', 'armored'],
  advanced_moves_1: ['charge', 'battle_senses', 'shield_of_the_imperium', 'deadly_cover', 'baptised_by_bullets'].sort(),
  description: 'The Warrior is a fighter, either from birth, by choice, or through dangerous circumstances. They are at home on the battlefield.',
  drives: {
    good: {
      name: 'Destructive',
      description: 'Blow something up or dismember a foe.'
    },
    superious_position: {
      name: 'Superior Position',
      description: 'Gain an advantage due to better choice of terrain or surroundings.'
    },
    weapon_master: {
      name: 'Weapon Master',
      description: 'Use a new weapon in combat or begin training with one.'
    },
    honor_killer: {
      name: 'Honor Killer',
      description: 'Challenge a foe to 1v1 combat and defeat them.'
    }
  },
  resource: 'Insight',
  resources: 'Insight',
  bonds: ['<blank></blank> would make a good soldier. I should show them I respect them.', '<blank></blank> has trouble keeping focused in tense situations. Perhaps I can help them with that.', '<blank></blank> has saved me from myself in combat, I owe them.'],
  starting_gear: '<p>You start with {{{item "field_rations"}}} and {{{item "stub_revolver"}}}. Choose your melee weapon:</p>'
};