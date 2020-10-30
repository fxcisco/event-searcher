const kamazonData = [
  {
    title: 'Agatha Closing her Shop (Affects Agatha Return Event)',
    answers: [
      { name: 'Help her packing', text: "Nothing happened"},
      { name: 'Steal one of her item', text: "Steal a random Mid- OR High-grade Artifact"},
      { name: 'Pass her by', text: 'Nothing happened' },
    ],
  },
  {
    title: "Agatha Return - After Helping",
    answers: [
      {name:"Take the gift", text: "Acquire the High-grade Artifact: [Agatha's Kitchen Knife : +30% Atk & Def]"},
      { name: "Do not take the gift"	, text: "Nothing happened" }
    ],
  },
  {
    title: "Raging Return - After Stealing",
    answers: [
      { name: "Agatha's Rage",	text: "Lose a random Artifact and All Heroes take damage by 30% of their own max HP" }
    ],
  },
  {
    title: "Archeaologist of the Ruins",
    answers: [
      {name: "Ask him about the World Tree", text: "Bottle Cap +30"},
      {name: "Ask him about the artifacts", text: "Acquire 1 random Low- OR Mid- OR High-grade Artifact"},
      {name: "Ignore him and walk away", text: "Nothing happened"}
    ],
  },
  {
    title: "Cecil's Special Performance",
    answers: [
      { name: "Hard Rock", text: "Elite Battle: Choose from 3 Artifacts",},
      { name: "Swing Jazz", text: "All Heroes recover 30% of their own max HP"},
      {name: "Hip-hop",	text: "Silver Coin +50"},
      {name: "Kanterbury Folk Song", text: "Revive 1 random Hero"}
    ],
  },
  {
    title: "Clothes Shop",
    answers: [
      { name: "Let him do as he want Silver Coin -50", text: "Acquire 1 random Low- OR Mid- OR High-grade Artifact"},
      { name: "Run away from him", text: "Nothing happened" }
    ],
  },
  {
    title: "Customer Service Center",
    answers: [
      { name: "File a complaint", text: "Silver Coin +50	Lose a random Artifact"},
      { name: "Upgrade your membership to VIP", text:"Silver Coin -50	[Artifact: 30% Discount at Artifact store]"},
      { name: "Ignore the android", text: "Nothing happened"}
    ],
  },
  {
    title: "Earthquake",
    answers: [
      { name: "Start running", text: "Lose a random Artifact"},
      { name: "Grab your bag", text: "All Heroes take damage by 20% of their own max HP"},
    ],
  },
  {
    title: "Food Stand",
    answers: [
      { name: "Only one eats", text: "A random Hero is healed"},
      { name: "Everyone eats" , text: "Silver Coin -20	All Heroes recover 20% of their own max HP"}
    ],
  },
  {
    title: "Giant Spirit",
    answers: [
      { name: "Defeat the spirit", text: "Silver Coin +50	All Heroes take damage by 10% of their own max HP"},
      { name: "Ignore the spirit", text: "Nothing happened"}
    ],
  },
  {
    title: "Goblin Chef",
    answers: [
      { name: "Take the box", text: "Swaps a random Artifact for Cursed Artifact [Pie from Hell: -50% Skill Attack]"},
      { name: "Do not take the box", text: "A random Hero takes damage"},
    ],
  },
  {
    title:  "Junk Dealer" ,
    answers: [
      { name: "Make a deal with him", text: "Silver Coin +40	Lose a random Artifact"},
      { name: "Ignore him", text: "Nothing happened"}
    ],
  },
  {
    title:  "Lost Kid",
    answers: [
      { name: "Comfort him", text: "A random Hero take damage"},
      { name: "Buy a candy for him", text: "Silver Coin -10, Silver Coin -40"},
      { name: "Make fun of him", text: "All Heroes take damage by 10% of their own max HP"}
    ],
  },
  {
    title:  "Luxury Boutique" ,
    answers: [
      { name: "Say you're just looking around", text: "All Heroes take damage by 30% of their own max HP"},
      { name: "Pick up anything and pay", text: "Silver Coin -10 Nothing happened"}
    ],
  },
  {
    title:   "Monkey of Kama-ZONE" ,
    answers: [
      { name: "Get mad at him", text: "Nothing happened"},
      { name: "Play along with him", text: "Swaps a random Artifact for a new one"},
      { name: "Ignore", text: "Lose a random Artifact"}
    ],
  },
  {
    title:  "Moving Stairs" ,
    answers: [
      { name: "Jump up the stairs", text: "All Heroes take damage by 10% of their own max HP"},
      { name: "Go on with the stairs' flow", text: "All Heroes recover 20% of their own max HP and triggers a Normal Battle"}
    ],
  },
  {
    title:    "Pirate Graybeard",
    answers: [
      { name: "Attack him", text: "Silver Coin +60	A random Hero take damage"},
      { name: "Electric shock!", text: "Silver Coin +60"},
      { name: "Ignore him", text: "Nothing happened"},
    ],
  },
  {
    title:    "Practice of a Master",
    answers: [
      { name: "Practice of Reviving", text: "Silver Coin -50	Revives your dead hero"},
      { name: "Practice of Healing", text: "Silver Coin -30	All Heroes recover 30% of their own max HP"}
    ],
  },
  {
    title:    "Rich Goblin",
    answers: [
      { name: "Guard the rich goblin", text: "Silver Coin +20	All Heroes take damage by 20% of their own max HP"},
      { name: "Steal from the rich goblin", text: "Silver Coin +40	Elite Battle: Choose from 3 Artifacts"},
      { name: "Ignore the goblin", text: "Nothing happened"}
    ],
  },
  {
    title:   "Ruri's Surprise Live Stream" ,
    answers: [
      { name: "Wave", text: "Swaps an Artifact for a random Cursed Artifact"},
      { name: "Sing", text: "Swaps an Artifact for a random Cursed Artifact"},
      { name: "Dance", text: "Swaps an Artifact for a random Cursed Artifact"}
    ],
  },
  {
    title:   "Scared Citizen" ,
    answers: [
      { name: "Camp with her", text: "Lose a random Artifact and heals all heroes for 30% of their max HP"},
      { name: "Give her a self defense item", text: "Silver Coin +50	Lose the [Free Man's Steel Talon] Artifact"},
      { name: "Shake her off", text:"Swaps a random Artifact for Cursed Artifact: [Wailing Box : -20% Def]"}
    ],
  },
  {
    title:   "Secret of Kama-ZONE" ,
    answers: [
      { name: "Ask a question to the android", text: "Bottle Cap +30"}
    ],
  },
  {
    title:   "Security Guard" ,
    answers: [
      { name: "Pick a fight", text: "Start either a Normal Battle"},
      { name: "Bribe him", text: "Silver Coin -30	Nothing happened"},
      { name: "Show him the badge", text: "Elite Battle: Choose from 3 Artifacts"}
    ],
  },
  {
    title:    "Silver Coin Loving Drone",
    answers: [
      { name: "Throw a few Silver Coins	Silver Coin -10", text: "Acquire 1 random Low-grade Artifact"},
      { name: "Throw lots of Silver Coins	Silver Coin -30", text: "Acquire 1 random Low- OR Mid-grade Artifact"},
      { name: "Throw tons of Silver Coins	Silver Coin -50", text: "Acquire 1 random Low- OR Mid- OR High-grade Artifact"}
    ],
  },
  {
    title:    "Special Offer",
    answers: [
      { name: "Growing Tablet", text: "Silver Coin -80	High-grade Artifact: [Growing Tablet : +100% Ranged Attack]",},
      { name: "Steam Engine Shield", text: "Silver Coin -50	Mid-grade Artifact: [Steam Engine Shield : +50% Melee Def]"},
      { name: "Hot Transmitter", text: "Silver Coin -30	Low-grade Artifact: [Hot Transmitter : +15% Fire Attack]"},
      { name: "Do not buy anything", text: "Nothing happened"}
    ],
  },
  {
    title:  "Stratagem of Kama-ZONE" ,
    answers: [
      { name: "Demand explanation", text: "Bottle Cap +10"}
    ],
  },
  {
    title:  "Stray Cat"  ,
    answers: [
      { name: "Give her bread", text: "Swaps the [Unfinished Bread] Artifact for a [Ragged Mouse Doll] Artifact"},
      { name: "Give her a pat", text: "A random Hero take damage"},
      { name: "Ignore her", text: "Nothing happened"}
    ],
  },
  {
    title:   "Tyranny of Kama-ZONE" ,
    answers: [
      { name: "Tell him how to do it", text: "Bottle Cap +50"},
      { name: "Don't tell him how to do it", text: "Nothing happened"}
    ],
  },
  {
    title:   "Vending Machine" ,
    answers: [
      { name: "Insert coins", text: "Silver Coin -20	All Heroes recover 20% of their own max HP"},
      { name: "Bang on the vending machine", text: "Nothing happened"},
      { name: "Destroy Vending Machine", text: "Elite Battle: Choose from 3 Artifacts"}
    ],
  },
  {
    title:   "Yeti Meat",
    answers: [
      { name: "Join her training", text: "All Heroes recover 30% of their own max HP but a random Hero takes damage"},
      { name: "Offer to buy the meat she's cooking", text: "Silver Coin -20	All Heroes recover 15% of their own max HP"},
      { name: "Ignore her", text: "Nothing happened"}
    ],
  },
];
