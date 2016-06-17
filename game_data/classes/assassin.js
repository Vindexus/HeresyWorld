module.exports = {
  starting_hp: 6,
  load: 7,
  damage: 'd8',
  looks: ['Dead eyes, charming eyes, angry eyes', 'Black bodysuit, plain clothes, dirty rags', 'Buzz cut, elaborate hair, tattooed head', 'Slim body, athletic body, huge body'],
  description: 'Assassin is sneaky and stabby or sneaky and shooty.',
  starting_moves: ['unsuspecting_strike', 'called_shot'],
  alignments: {
    evil: {
      name: 'Evil',
      description: 'Make a brutal show of a kill.'
    },
    good: {
      name: 'Good',
      description: 'Take out a threat before it harms another.'
    },
    neutral: {
      name: 'Neutral',
      description: 'Dispatch of an enemy before they know there\'s a threat.'
    },
  },
  bonds: [
    '<blank></blank> knows some tricks that could be useful to learn.',
    'I have trusted <blank></blank> with a secret about me.'
  ],
  starting_gear: "<p>You start with {{{item 'leather_armor'}}}, {{{item equipment.field_gear}}}, and {{{item equipment.field_rations}}}. For your weapons choose one: </p>" + 
  "\n<ul><li>{{{item 'lasgun'}}} and {{{item 'dagger'}}}</li>" +
  "\n<li>{{{item 'laspistol'}}} and {{{item 'rapier'}}}</li></ul>",
  advanced_moves_1: ['hunt_and_track', 'advanced_training', 'silent_strike', 'sniper_shot', 'vipers_strike', 'cheap_shot', 'callidus_training', 'underdog', 'trap_expert', 'cautious', 'tricks_of_the_trade'],
  advanced_moves_2: ['vindicare_shot', 'dirty_fighter', 'vipers_fangs', 'serious_underdog', 'disguise', 'hunters_eye', 'jack_of_all_trades', 'extremely_cautious']
};