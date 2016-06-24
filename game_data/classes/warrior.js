module.exports = {
  starting_hp: '10',
  damage: 'd8',
  load: '9+STR',
  looks: ['Blank eyes, fiery eyes, kind eyes', 'Military cut, messy hair, headband, helmet', 'Worn uniform, utilitarian clothes, rags', 'Lean body, hulking body, lithe body'],
  starting_moves: ['grab_grenade', 'explosives_expert', 'first_hand_experience'],
  advanced_moves_1: ['charge', 'battle_senses', 'armored', 'shield_of_the_imperium', 'deadly_cover', 'baptised_by_bullets'].sort(),
  description: 'The Warrior is a fighter, either from birth, by choice, or through dangerous circumstances. They are at home on the battlefield.',
  alignments: {
    good: {
      name: 'Good',
      description: 'Show mercy to an enemy.'
    },
    anarchic: {
      name: 'Anarchic',
      description: 'Rush into danger despite the plan.'
    }
  },
  bonds: ['<blank></blank> would make a good soldier. I should show them I respect them.', '<blank></blank> has trouble keeping focused in tense situations. Perhaps I can help them with that.', '<blank></blank> has saved me from myself in combat, I owe them.'],
  starting_gear: '<p>You start with {{{item "field_rations"}}} and {{{item "stub_revolver"}}}. Choose your melee weapon:</p>'
};