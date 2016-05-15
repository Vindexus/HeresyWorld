var fs = require("fs");

//Dungeon World Tags
var tags = {
  dangerous: {
    name: 'Dangerous',
    description: 'It\'s easy to get in trouble with it. If you interact with it without proper precautions the GM may freely invoke the consequences of your foolish actions.'
  },
  weight: {
    name: 'Weight',
    description: 'Count the listed amount against your load. Something with no listed weight isn’t designed to be carried. 100 thrones in standard denominations is 1 weight. The same value in gems or fine art may be lighter or heavier.'
  },
  worn: {
    name: 'Worn',
    description: 'To use it, you have to be wearing it.'
  },
  uses: {
    name: 'Uses',
    description: 'It can only be used <em>n</em> times.'
  },
  piercing: {
    name: 'Piercing',
    description: 'Items with <em>n</em> Piercine ignore <em>n</em> armor of their target when dealing damage.'
  },
  forceful: {
    name: 'Forceful',
    description: 'It can knock someone back a pace, maybe even off their feet.'
  },
  hand: {
    name: 'Hand',
    description: 'It’s useful for attacking something within your reach, no further.'
  },
  close: {
    name: 'Close',
    description: 'It’s useful for attacking something at arm’s reach plus a foot or two.'
  },
  reach: {
    name: 'Reach',
    description: 'It’s useful for attacking something that’s several feet away—maybe as far as ten.'
  },
  near: {
    name: 'Near',
    description: 'It’s useful for attacking if you can see the whites of their eyes.'
  },
  far: {
    name: 'Far',
    description: 'It’s useful for attacking something in shouting distance.'
  },
  //New tags
  scatter: {
    name: 'Scatter',
    description: 'Ranged only. Roll two damage die when at <em>close</em> range.'
  },
  'long': {
    name: 'Long',
    description: 'Ranged only. It is useful for attacking something beyond shouting distance. When attempting a shot at Long distance you take -1 on your roll.'
  },
  clip: {
    name: 'Clip',
    description: 'Items with <em>n</em> Clip can be used <em>n</em> times before you must take a moment to reload.'
  },  
  'power': {
    name: 'Power',
    description: 'Melee only. This item has a power field that can be activated. While active, you take the better of two rolls for damage and this item gains <tag k="messy"></tag>.'
  },
  'rare': {
    name: 'Rare',
    description: 'This item is rare and hard to locate. You might be able to find one in a city.'
  },
  'very_rare': {
    name: 'Very Rare',
    description: 'This item is exceedingly hard to find. There is a small chance to find one of these in a large city.'
  }
};

for(var i in tags) {
  tags[i].key = i;
}

module.exports = tags;
/*
Hand: It’s useful for attacking something within your reach, no further.
Close: It’s useful for attacking something at arm’s reach plus a foot or two.
Reach: It’s useful for attacking something that’s several feet away—maybe as far as ten.
Near: It’s useful for attacking if you can see the whites of their eyes.
Far: It’s useful for attacking something in shouting distance.
  - *Long*: Ranged only. It is useful for attacking something beyond shouting distance. When attempting a shot at *Long* distance you take -1 on your roll.
  - *Power*: Melee only. This item has a power field that can be activated. While active, you take the better of two rolls for damage and this item gains *Messy*.
  - *Flame*: Ranged only. While in range, a roll of 7-9 will incur no penalty. A 10+ sets the target on fire. Flame weapons are very destructive to the setting used.
  - *Xenos*: This item comes from alien technology, and is very dangerous to own in the Imperium.
  - *Silenced*: Ranged only. This item's shot is difficult to hear, if at all. People in the vicinity might not know where the shot came from, if they hear it at all.
  - *Scoped*: Ranged only. While using this item's scope, gain +1 to *Volley* and *Called Shot*.
  - *Overheats*: This weapon can overheat and become very hot. If it does roll+Con. *On a 10+ you take 1d4 damage. *On a 7-9 you take 1d6 damage. *On a 6- you take 1d6 damage and drop the weapon.
  - *Unstable*: Weapons  with  this  quality  use  ammunition  that  is  both volatile  and  unstable  and  can  react  unpredictably  when detonated.  When  an  Unstable  weapon  scores  a  hit,  roll 1d10. On a score of 1 it inflicts only half Damage, on a score of 2–9 it deals normal Damage, and on a score of 10 it inflicts twice the normal Damage.
  - *Melee Armor/+n Melee Armor*: This armor only affects damage taken from melee attacks.
  - *Ballistics Armor/+n Ballistics Armor*: This armor only affects damage taken from ranged attacks.
  - *Clip n*: Amount of ammo this weapon can use before its user must take a moment to reload it.
  - *Scatter*: Ranged only. Roll two damage die when at *close* range.
  - *Slow Reload*: This weapon takes considerably longer to reload its *Clip*
*/