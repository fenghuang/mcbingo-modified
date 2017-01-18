// Create two dimensional array
var bingoList=new Array()
for (i=0; i < 4; i++)
{
	bingoList[i]=new Array()
}

// Simple
bingoList[0] = 
[
	{name: "(2-4) Different Fish"},
	{name: "Grow a Tree in the Nether"},
	{name: "(4-9) Colours of Hardened Clay"},
	{name: "(1-5) Mushroom Stew"},
	{name: "Activate a Button with an Arrow"},
	{name: "Book and Quill"},
	{name: "(16-64) Flint"},
	{name: "Cake"},
	{name: "Pumpkin Pie"},
	{name: "Fish a Treasure and Junk item"},
	{name: "(10-30) Andesite", frequency: 3},
	{name: "(10-30) Granite", frequency: 3},
	{name: "(10-30) Diorite", frequency: 3},
	{name: "(16-64) Coarse Dirt"},
	{name: "(2-3) Clocks"},
	{name: "(2-4) Iron Blocks", antisynergy: "IronBlocks"},
	{name: "(1-2) Gold Blocks", antisynergy: "GoldBlocks"},
	{name: "Golden Apple"},
	{name: "(2-4) Bookshelves"},
	{name: "Never wear Chestplates"},
	{name: "Jukebox"},
	{name: "(5-25) Poppies & (5-25) Dandelions"},
	{name: "Build a glass cube and fill the inner with lava"},
	{name: "(10-30) Mossy Cobblestone"},
	{name: "(10-30) Cacti"},
	{name: "(1-3) TNT"},
	{name: "Level (10-20)"},
	{name: "Power a Redstone Lamp"},
	{name: "Create a Snow Golem"},
	{name: "(10-30) Note Blocks"},
	{name: "Build a (2-4)x(2-4)x(2-4) leaf cube", tooltiptext: "You can choose what shall be the width/length/height.", tooltipimg: "Goal Tooltip Images/LeafCube.jpg"},
	{name: "(10-30) Ink Sacks"},
	{name: "(10-30) Bread"},
	{name: "(5-10) colours of Wool"},
	{name: "(5-10) Pistons"},
	{name: "Full Iron Armour"},
	{name: "Full Leather Armour"},
	{name: "Full Gold Armour"},
	{name: "Cauldron with Water"},
	{name: "Complete a Map"},
	{name: "(16-64) Soul Sand"},
	{name: "(10-30) Pumpkins"},
	{name: "(10-30) Vines"},
	{name: "(6-8) Different Slabs"},
	{name: "Every type of Sword"},
	{name: "Every type of Pickaxe"},
	{name: "(16-64) Brick Blocks"},
	{name: "(16-64) Arrows"},
	{name: "Enchanted Golden Sword"},
	{name: "Sleep in the Nether"},
	{name: "Fermented Spider Eye"},
	{name: "(5-7) Different Stairs"},
	{name: "(2-4) Ender Pearls"},
	{name: "16 Chicken Eggs"},
	{name: "Hang up 3 Different 4x4 Paintings"},
	{name: "(5-10) Bone Blocks"},
	{name: "2 Creepers in the same Boat", tooltiptext: "The 2 Creepers must be in the same boat at the same time", tooltipimg: "Goal Tooltip Images/2creepers1boat.jpg"},
	{name: "Trade with a Villager"},
	{name: "(2-3) Different Pattern / Colour Shields"},
	{name: "Dead Bush"},
	{name: "Cyan Dye", frequency: 10},
	{name: "Light Gray Dye and Light Blue Dye", frequency: 10},
	{name: "Magenta Dye", frequency: 10},
	{name: "Rose Red", frequency: 10},
	{name: "Orange Dye", frequency: 10},
	{name: "Dandelion Yellow", frequency: 10},
	{name: "Cactus Green", frequency: 10},
	{name: "Pink Dye", frequency: 10},
	{name: "Purple Dye", frequency: 10},
	{name: "Lime Dye", frequency: 10},
	{name: "Never Sleep"},
	{name: "Grow a Huge Mushroom"},
]
// Medium
bingoList[1] = 
[
	{name: "Wither Skull"},
	{name: "(6-8) Different Edible Items"},
	{name: "Build a Redstone AND Gate"},
	{name: "(3-5) Different Gold Items"},
	{name: "Beetroot Soup"},
	{name: "(2-15) Emeralds"},
	{name: "Water Bucket, Lava Bucket and Milk Bucket"},
	{name: "Tame a Horse"},
	{name: "Place a Cactus in a Flower Pot"},
	{name: "Ignite a TNT-Minecart"},
	{name: "(10-30) Magma Blocks"},
	{name: "Skull and Crossbones Banner"},
	{name: "Cookie"},
	{name: "Very Damaged Anvil"},
	{name: "(16-64) Melons"},
	{name: "Sleep inside a village"},
	{name: "Kill a Skeleton with it's own Arrow"},
	{name: "Never wear any Armour"},
	{name: "Get a Skeleton's Bow", tooltiptext: "Kill Skeletons until you get a rare drop from one, it being their Bow", tooltipimg: "Goal Tooltip Images/Bow.jpg"},
	{name: "Diamond Block"},
	{name: "(2-3) Lapis Lazuli Blocks"},
	{name: "Destroy a Monster Spawner"},
	{name: "(2-5) Different Saplings"},
	{name: "Tame an Ocelot"},
	{name: "Tame a Wolf"},
	{name: "9 Fire Charges"},
	{name: "(1-3) Magma Cream"},
	{name: "Grow a Full Jungle Tree"},
	{name: "Create an Iron Golem"},
	{name: "Eye of Ender"},
	{name: "Rabbit Stew"},
	{name: "Potion of Fire Resistance", frequency: 9},
	{name: "Potion of Healing", frequency: 9},
	{name: "Potion of Poison", frequency: 9},
	{name: "Potion of Harming", frequency: 9},
	{name: "Potion of Regeneration", frequency: 9},
	{name: "Potion of Slowness", frequency: 9},
	{name: "Potion of Strength", frequency: 9},
	{name: "Potion of Swiftness", frequency: 9},
	{name: "Potion of Weakness", frequency: 9},
	{name: "Finish by jumping from top to bottom of the world", tooltiptext: "Dig a hole to bedrock, build up to 256 Y (height limit), and then jump from top to bottom at the end of the game", tooltipimg: "Goal Tooltip Images/FinishTopToBottom.jpg", antisynergy: "Finish"},
	{name: "Never Eat Meat", tooltiptext: "Including Fish", tooltipimg: "Goal Tooltip Images/NoFish.jpg"},
	{name: "Kill yourself with your own arrow"},
	{name: "Get a '... while trying to escape ...' Death message", tooltiptext: "Example: 'PLAYER' drowned while trying to escape a Skeleton", antisynergy: "Death"},
	{name: "Set fire to a Villager's House"},
	{name: "Finish on top of the world", tooltiptext: "Build up to 256 Y (the height limit) and stand on the top at the end of the game", tooltipimg: "Goal Tooltip Images/FinishTop.jpg", antisynergy: "Finish"},
	{name: "Finish where you spawned (Compass)", tooltiptext: "Be stood close enough to spin your compass within a couple blocks at the end of the game", tooltipimg: "Goal Tooltip Images/Compass.jpg", antisynergy: "Finish"},
	{name: "Kill a mob with Gravel/Sand"},
	{name: "Put a Carpet on a Llama"},
	{name: "Activate a (4-6)x(4-6) Nether Portal (not counting corners)", tooltiptext: "Width/height of the obsidian frame, disregarding corners (or in other words, width/height of the - once activated - purple portal area).", tooltipimg: "Goal Tooltip Images/Portal.jpg"},
	{name: "(5-10) Obsidian"},
	{name: "(5-7) Iron Blocks", antisynergy: "IronBlocks"},
	{name: "(3-4) Gold Blocks", antisynergy: "GoldBlocks"},
	{name: "Daylight Sensor"},
]

// Hard
bingoList[2] = 
[
	{name: "Grass Block", tooltiptext: "If you don't have Silk Touch I know a guy who might pick one up for you...",tooltipimg: "Goal Tooltip Images/GrassBlock.jpg"},
	{name: "Create an Enchantment requiring level 10+"},
	{name: "Sea Lantern"},
	{name: "Sponge", tooltiptext: "DRY Sponge, not a wet one", tooltipimg: "Goal Tooltip Images/Sponge.jpg"},
	{name: "Bounce on a Slime Block", tooltiptext: "Get a Slime Block, place it on the ground and give it a good old bouncin' on", tooltipimg: "Goal Tooltip Images/SlimeBlock.jpg"},
	{name: "Listen to a Music Disc"},
	{name: "(11-13) Different Flowers"},
	{name: "Place an Iron, Gold and Diamond block on top of each other"},
	{name: "Get a Zombie Pigman's Sword", tooltiptext: "Kill Pigmen until you get a rare drop from one, it being their Golden Sword", tooltipimg: "Goal Tooltip Images/GoldenSword.jpg"},
	{name: "Finish by launching Fireworks of (5-10) Different Colours", antisynergy: "Finish"},
	{name: "Nametag an Enderman"},
	{name: "Kill yourself with an Ender Pearl", tooltiptext: "Need to die to the small fall damage taken from using a pearl", tooltipimg: "Goal Tooltip Images/EnderPearl.jpg", antisynergy: "Death"},
	{name: "Kill a mob with an Anvil"},
	{name: "Finish on top of a Blaze spawner", tooltiptext: "Be stood on top of a Blaze spawner at the end of the game", tooltipimg: "Goal Tooltip Images/BlazeSpawner.jpg", antisynergy: "Finish"},
	{name: "Never Die", antisynergy: "Death"},
]

// Very Hard
bingoList[3] = 
[
	{name: "(4-6) Different Ores (Silk Touch)", tooltiptext: "Coal, Diamond, Emerald, Gold, Iron, Lapis Lazuli, Nether Quatz and Redstone ores are your choices", tooltipimg: "Goal Tooltip Images/Ores.jpg"},
	{name: "(7-9) Different Potions", tooltiptext: "Splash variants count! Even Lingering if you want to get crazy.", tooltipimg: "Goal Tooltip Images/Potions.jpg"},
	{name: "Cure a Zombie Villager"},
	{name: "Every type of Chestplate", tooltiptext: "Leather, Gold, Iron, Diamond and yes even Chainmail"},
	{name: "Nether Star"},
]
