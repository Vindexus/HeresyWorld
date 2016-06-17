module.exports = {
  starting_hp: '10',
  damage: 'd8',
  load: '9+STR',
  looks: ['Blank eyes, fiery eyes, kind eyes', 'Military cut, messy hair, headband, helmet', 'Worn uniform, utilitarian clothes, rags', 'Lean body, hulking body, lithe body'],
  starting_moves: ['grab_grenade', 'explosives_expert', 'first_hand_experience'],
  advanced_moves_1: ['charge'],
  description: 'TODO: Warrior description',
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
  starting_gear: '<p>You start with {{equipment.field_rations.name}} {{ptags equipment.field_rations.tags}} and {{equipment.stub_revolver.name}} {{ptags equipment.stub_revolver.tags}}. Choose your melee weapon:</p>'
};