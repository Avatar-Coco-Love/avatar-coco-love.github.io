# Game Ideas

Written 17 Oct 2026. Live copy: https://claude.ai/artifact/H18FVYZJSa1L5C7yLDjgvb

Twenty-three ideas for a new standalone web game, a deep dive on Sandglass Alchemy, and six top-down adventure ideas (Minute Hero next). Kept in `_ideas/` so GitHub Pages leaves it off the live site.

## Ground rules

Every idea here is a standalone web game built the way Foldwork is, so any of them can start from the same toolkit.

- **No asset files:** everything is drawn in code (Canvas 2D) and every sound is synthesized (Web Audio).
- **Phones and PCs:** touch, mouse and keyboard all work; layouts fit portrait and landscape.
- **Seeded:** all randomness comes from a seed, so runs replay exactly, bots can test balance, and a shared Daily is possible.
- **Offline and private:** saves stay on the device; play data only if the player opts in.
- **Not covered here:** Nexus Drift (a PC game built in GameMaker Studio 2, worked on separately) and the 20 Emergent Arcade games, which none of these repeat.

The main problem right now is too few players (68 across the arcade as of this date), so the column "How it spreads" below matters as much as how fun an idea sounds.

## At a glance

The status column is yours to change; Shortlisted marks the picks so far, which bring in players by design. Size is relative to Foldwork (L = about Foldwork's size).

| # | Idea | Genre | Audience | Session | How it spreads | Size | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Cartographer's Day | calm map building | everyone, classrooms | 10 min | Daily + map picture | M | Shortlisted |
| 2 | Lanternfall | stealth roguelike | Foldwork fans | 20+ min | low | L | Idea |
| 3 | Sigil Stack | grid deckbuilder | strategy fans | 30+ min | daily seed | L | Idea |
| 4 | Comet Shepherd | one-thumb action | casual, phones | 3–6 min | scores, clips | S–M | Idea |
| 5 | Dig Site | word game | word fans, classrooms | 5–10 min | Daily result card | M | Idea |
| 6 | Bridgewright | physics builder | builders, classrooms | 5–20 min | clever solutions | M–L | Idea |
| 7 | Night Market | cozy management | cozy players | 15 min | moderate | M–L | Idea |
| 8 | Casebook | daily mystery | puzzle fans, classrooms | 10 min | Daily result card | M | Shortlisted |
| 9 | Postcard Siege | two-player by link | friends | over days | every move is an invite | M | Shortlisted |
| 10 | Tidepool Keeper | living habitat | daily visitors, classrooms | 3 min a day | moderate | M | Idea |
| 11 | Loopkeeper | time-loop puzzle | puzzle fans | 10–20 min | loop replay clips | M | Idea |
| 12 | Sandglass Alchemy | falling-sand sandbox + puzzles | children, tinkerers | open-ended | shared creations | M | Deep dive |
| 13 | Clockwork Crew | robot programming | logic fans, classrooms | 15+ min | solution graphs | M | Idea |
| 14 | Hedge Witch | swarm survival | action fans | 15 min | moderate | M | Idea |
| 15 | Pocket Links | mini golf | everyone, families | 5–10 min | Daily strokes card | S–M | Parked |
| 16 | Rootguard | tower defense | strategy fans | 15–20 min | moderate | M | Idea |
| 17 | Who Took the Pie? | party game, one phone | groups, classrooms | 10–20 min | 4–8 players a game | S | Shortlisted |
| 18 | Songbird Garden | music puzzle | children, music teachers | open-ended | shared songs | S–M | Idea |
| 19 | Deepline | fishing | children, calm players | 10+ min | catches | M | Idea |
| 20 | Lastlight Outpost | colony sim | sim fans | 30–60 min | stories | L+ | Idea |
| 21 | Fortune's Hand | solitaire roguelike | card fans | 20 min | daily deck, scores | M | Idea |
| 22 | The Ferryman's Ledger | document-checking story | story fans, classrooms | 10–20 min | endings | M | Idea |
| 23 | Belfry | sound and logic puzzle (change ringing) | puzzle fans, classrooms, bell ringers | 5–20 min | Daily Touch card, links that play a composition | M | Parked |

## Ideas 1–10

### 1. Cartographer's Day

A calm map-building game: draw an unexplored valley one tile at a time before winter closes the passes.

- **How it plays:** each turn, draw two terrain tiles (forest, river, field, village, mountain) and place one. Rivers flow downhill, villages score for what they reach, forests for their size. Three daily customers (a miller, a hunter, a bishop) each want something different.
- **Tension:** fog creeps in from the edges every few turns and swallows tiles unless a watchtower covers them, so every placement is expand versus protect.
- **Depth:** 8–12 minute maps; unlockable tiles (bridges, mines, ruins) and customers; an endless expedition mode joining maps into a world.
- **Controls:** drag or tap to place, tap again to rotate; arrow keys and R on PC.
- **Why it could bring players:** calm, family and classroom friendly; the finished map is a picture worth sharing, and a shared daily seed makes maps comparable.
- **Hard part:** keeping calm interesting; fog and customers must force real choices.

### 2. Lanternfall

A turn-based stealth roguelike where your lantern sets both how far you see and how far you're seen.

- **How it plays:** each turn, move, dim or brighten, or throw the lantern (lights a room, draws guards, leaves you dark). Guards follow readable rules: Watchers turn, Hounds follow light, Moths fly at your lantern.
- **Key idea:** one number drives everything: bright lets you plan but gets you caught; dim keeps you hidden but blind.
- **Depth:** 8–10 floors, items (mirrors, shutters, oil), characters who change rules (one sees in the dark but can't carry light).
- **Controls:** tap or swipe to move, brightness slider; WASD and mouse wheel.
- **Why it could bring players:** Foldwork's audience, and a one-sentence pitch.
- **Hard part:** stealth AI that is readable but not exploitable; Foldwork's solver approach can test levels.

### 3. Sigil Stack

A deckbuilder where where you play a card matters as much as which card.

- **How it plays:** play cards onto a 3×3 grid; cards trigger neighbors (Spark fires all four, Echo copies its left neighbor). Enemies telegraph attacks at a row or column, hitting the cards there.
- **Key idea:** deckbuilding as spatial combo planning: a small puzzle each turn inside a whole-run strategy.
- **Depth:** 3 acts, relics, upgrades, bosses that block or rotate grid cells.
- **Controls:** drag a card onto a cell; keys 1–5 then a cell key on PC.
- **Why it could bring players:** big, loyal genre audience; seeded daily run with a leaderboard.
- **Hard part:** balance; needs bots playing thousands of runs.

### 4. Comet Shepherd

A one-thumb action game: you are a gravity well that bends comets into enemies; you never shoot.

- **How it plays:** hold to move the well; comets curve around it. Big comets hit harder but steer worse. Holding still strengthens the well while enemies close in.
- **Depth:** 3–6 minute escalating runs, upgrades between waves (two wells, repulsor, burning trails).
- **Controls:** one finger or the mouse; ideal on phones.
- **Why it could bring players:** understood at a glance, beatable scores, good short clips.
- **Hard part:** smooth 60fps physics on older phones (the small field helps). Quickest idea to get playable.

### 5. Dig Site

A word game where spelling words digs you down through rock layers.

- **How it plays:** swipe through neighboring letters to spell a word; its tiles break. Longer words break deeper tiles, rare letters hide fossils, hard rock needs 5+ letters, air runs out with depth.
- **Depth:** a shared daily dig, an endless mode, a fossil museum to fill.
- **Controls:** swipe letters, or type on PC.
- **Why it could bring players:** word games spread like Wordle; teacher friendly; easy daily result card.
- **Hard part:** a word list (a few hundred KB of data) checked for children; English only at first.

### 6. Bridgewright

Build a bridge from planks and rope, then send a cart across and watch it hold or fail.

- **How it plays:** a material budget and two cliffs; joints bend, pieces break, stress shows as color. Later: wind, moving loads, swinging spans.
- **Depth:** about 40 gaps, three goals each (cross, under budget, under par).
- **Controls:** drag between points to place pieces.
- **Why it could bring players:** funny failures, clever solutions to share, classroom engineering.
- **Hard part:** a stable, repeatable physics engine written from scratch; the riskiest technical idea in the first batch.

### 7. Night Market

Run a food stall for 7 nights and become the best stall at the night market.

- **How it plays:** before each night buy ingredients, pick 3 dishes, set prices. During the night, customers with visible tastes and budgets arrive; tap to cook while queues grow and the stall next door undercuts you.
- **Key idea:** a small economy that moves on its own: rivals copy your best dish, word of mouth spreads, weather shifts demand.
- **Depth:** about 15 minutes a run; unlockable stalls (noodles, sweets, tea) with their own rules.
- **Why it could bring players:** cozy management has a huge, all-ages audience.
- **Hard part:** an economy with no single best strategy; bots help.

### 8. Casebook

A mystery generated from the seed, a new case every day.

- **How it plays:** 4–6 suspects, a timeline, rooms and clues. Each suspect follows a rule ("always lies about where they were", "truthful except to cover for their sibling"). Ask a limited number of questions, place clues on the timeline, accuse. The generator guarantees exactly one answer.
- **Depth:** easy-to-hard daily cases, case files with recurring characters, rewards for fewer questions.
- **Controls:** taps, drag clues; all real text, so screen readers work.
- **Why it could bring players:** "solved today's case in 4 questions" shares well; natural for teaching logic.
- **Hard part:** the generator and its one-answer proof: the same kind of work as Foldwork's solver.

### 9. Postcard Siege

A two-player strategy game where each move is a link you send.

- **How it plays:** two small castles; each turn place or move one unit or wall. The whole game state lives in the link, sent by text message. No server, no accounts.
- **Depth:** chess-like 15–25 turn games, rock-paper-scissors unit types, an AI opponent for solo practice.
- **Why it could bring players:** every move is an invitation; each player brings in the next.
- **Hard part:** needs a good AI for players without a friend handy. A faked link only spoils a friendly game.

### 10. Tidepool Keeper

Look after a rock pool that keeps living while you're away.

- **How it plays:** shape tide channels, rocks and shade; creatures (anemones, crabs, snails, fish) arrive by simple rules and form a food web. The pool advances between visits using only the device clock.
- **Depth:** played over weeks; a field guide of 40+ species.
- **Controls:** drag to reshape, tap to inspect.
- **Why it could bring players:** daily return visits, classroom ecology.
- **Hard part:** doesn't fit "10 minutes in one sitting"; themed near the arcade's Island Census, though it plays differently.

## Ideas 11–23

### 11. Loopkeeper

A puzzle game where you team up with your past selves: 30 seconds to escape a room you can't escape alone.

- **How it plays:** play the 30 seconds, then the loop restarts and a ghost repeats exactly what you did. One loop holds the door, the next hits the switch, the third escapes. Up to 5 loops per room.
- **Depth:** about 40 rooms; guards that react to ghosts, items only one loop can carry, paradoxes when loops collide. Scores for fewer loops and less time.
- **Controls:** on-screen joystick and one button; WASD and Space.
- **Why it could bring players:** easy to explain; the all-loops replay is great to share.
- **Hard part:** frame-exact replays: the same seeded, rule-based logic Foldwork uses.

### 12. Sandglass Alchemy

A falling-sand sandbox with puzzles: pour sand, water, fire, acid, seeds and lava and watch them react. Full deep dive below.

### 13. Clockwork Crew

Program three wind-up robots to run a toy workshop.

- **How it plays:** each robot loops up to 8 instruction tiles (move, grab, turn, wait, "if holding"). Press play; they run together, parts arrive on conveyors, the toy gets built, robots must not collide.
- **Depth:** about 30 workshops; afterwards a graph compares your speed, tile count and robot count with everyone else's.
- **Why it could bring players:** friendly competition over solutions; a way into programming for teachers.
- **Hard part:** a very gentle difficulty curve, or these games scare people off.

### 14. Hedge Witch

A swarm-survival game (the Vampire Survivors genre) where your attacks are brewed.

- **How it plays:** you only move; attacks fire on their own. Monsters drop herbs, and the cauldron following you combines the last three you picked up (nettle + ember + nettle = ring of fire; moss + moss + frost = slowing fog).
- **Depth:** 15-minute runs, a recipe book to complete, witches with different cauldrons. Storybook look, not neon.
- **Controls:** one thumb or WASD.
- **Hard part:** hundreds of enemies on phones, and not feeling like a copy of the genre leaders.

### 15. Pocket Links

Mini golf with a new generated 9-hole course every day.

- **How it plays:** drag back and release to putt. Holes are built from slopes, fans, magnets, conveyors, teleporters, sticky sand and windmills, each with a par.
- **Depth:** the daily course, a tougher season, putters that change physics (heavy, bouncy, spin); up to 4 players on one phone.
- **Why it could bring players:** a strokes card shares like a Wordle result; families play together.
- **Hard part:** no impossible or trivial holes; a bot putts each hole thousands of times.

Status: parked (17 Oct 2026): too many golf games already. The write-up is kept for later.

Full write-up: [Pocket Links concept page](https://claude.ai/artifact/BsSeidycTkCCtfzCvHRVM9) (source: `_ideas/pocket-links.html`): course pieces, the week of grounds, modes, putters, ghost links, how holes are made, a build plan and mockups.

### 16. Rootguard

Tower defense underground: grow roots, and pests tunnel through the gaps.

- **How it plays:** roots are walls and weapons at once: thorn roots hurt, sap roots slow, long roots feed the tree water. Beetles and moles dig the easiest path to the heart, so you shape their path by growing.
- **Depth:** 4 seasons per run, strange soils (rock, clay, streams), several tree species.
- **Hard part:** fast pathfinding as roots grow; balancing one resource with three uses.

### 17. Who Took the Pie?

A social-deduction party game for 4–8 people passing one phone.

- **How it plays:** each player secretly sees a role (thief, partial witness, guest). The phone runs short prompt rounds ("everyone point to who was in the kitchen"), then everyone votes.
- **Depth:** generated scenarios (stolen cake, missing class hamster, broken vase), special roles later.
- **Why it could bring players:** one game reaches 4–8 people and gets replayed at the next party; an audience none of the current games targets.
- **Hard part:** needs a group to playtest (family or a class).

### 18. Songbird Garden

Compose music by placing birds on a tree's branches.

- **How it plays:** branches are beats, height is pitch, species is sound. Puzzle mode plays a short tune to rebuild by ear; free mode is for composing. All sound synthesized.
- **Depth:** puzzles from 3 notes to harmonies; species unlock (owl bass, crow percussion); songs shared as links.
- **Hard part:** players who can't hear need a visual mode where every note has a shape and position.

### 19. Deepline

Fishing with line tension in a lake where each fish fights its own way.

- **How it plays:** cast, pick a depth, then hold to reel (tension rises) and release to give line. Fish pull, dive and rest in learnable patterns; too much tension snaps the line, too little loses the fish.
- **Depth:** a log of 30+ species, time of day and weather, better rods, a legend fish per lake. The lake lives: big fish eat small ones, overfishing shifts species.
- **Hard part:** fish that feel different, not just harder.

### 20. Lastlight Outpost

A tiny colony sim: six settlers, one winter, a radio signal from somewhere.

- **How it plays:** settlers have traits (brave, lazy, cook, afraid of the dark), needs and friendships. Assign jobs; the simulation runs; stories happen that nobody wrote.
- **Depth:** 30–60 minute runs, seeded events, new traits and endings.
- **Hard part:** the largest idea on the list; emergent stories take heavy tuning.

### 21. Fortune's Hand

A solitaire roguelike: classic solitaire plus fortune cards that bend the rules (the formula Balatro made huge).

- **How it plays:** play short solitaire hands to a target score. Between hands buy fortunes ("red on black counts double", "The Moon: play one card twice"). Targets climb.
- **Depth:** 8 rounds per run, 60+ fortunes, decks with their own twist.
- **Why it could bring players:** everyone knows cards; seeded daily deck; wild scores to share.
- **Hard part:** feeling like its own game; starting from solitaire rather than poker helps.

### 22. The Ferryman's Ledger

You run the river ferry; travelers show papers and you decide who crosses (Papers, Please, gentler and all-ages).

- **How it plays:** new rules each day ("no goods from the north"); generated papers with deliberate mistakes; favors, bribes, a sick child, a smuggler who once saved you.
- **Depth:** about 20 story days with several endings, plus an endless daily mode.
- **Why it could bring players:** "which ending did you get?"; classroom use for careful reading and ethics.
- **Hard part:** lots of short, sharp writing, and fair generated papers.

### 23. Belfry

A puzzle game you can hear, built on English change ringing: ring a set of church bells through every order they can make, one swap at a time, and come home without repeating a row. Chosen as the least crowded idea: searches in October 2026 found practice simulators for ringers but no game built on these rules.

- **How it plays:** three rules. Every row, each bell rings once; between rows a bell moves one place at most; no row twice, and finish on rounds (`1234`).
- **Three modes:** Compose (the puzzle), Ring (rhythm: ring one bell yourself, judged on striking), Conduct (call bobs and singles live to bring the band home).
- **Depth:** eight towers from 3 to 8 bells (6 to 40,320 rows), tower rules (cracked rows, tired ringers, music rows), peal boards as the long-term collection.
- **Why it could bring players:** a Daily Touch with a spoiler-free result card, links that play a composition (a whole touch fits in a short string like `x14x14x14x12`), maths and music classrooms, and a ringing community with no game of its own.
- **Hard part:** an obscure theme; the pitch leads with the puzzle and the sound.

Status: parked (17 Oct 2026). The write-up is kept for later.

Full write-up with a playable four-bell demo: [Belfry concept page](https://claude.ai/artifact/Wg1Kwq3jbUS2ewdcCCWFUy) (source: `_ideas/belfry.html`): rules and terms, modes, tower rules, progression, scoring, the Daily, puzzle checking, standalone versus arcade, an 11-PR build plan, risks and open questions.

## Sandglass Alchemy: the pitch and the simulation

Sandglass Alchemy is a pocket chemistry set: a box of living matter where every grain follows a few simple rules, and puzzles, discoveries and a daily recipe give that sandbox a purpose.

### The pitch

You are an alchemist's apprentice with a glass workbench. You pour sand, water, fire, seeds and stranger things into it, and they fall, flow, burn, melt, grow and react on their own. Some reactions make something new: fire on sand makes glass, ash in wet sand makes soil, salt water left to dry grows crystals. Each new substance goes into your notebook and becomes something you can pour.

The game has three ways to play: **Trials** (puzzles with a goal and a limited supply), **Workbench** (a free sandbox with everything you've discovered) and the **Daily Recipe** (make today's substance from today's ingredients, using as little as you can).

### Three player verbs, one shared state

The arcade's design rule fits it well: few verbs, all reading and writing the same state.

- **Pour:** draw a material into the box with your finger or the mouse (brush size adjustable).
- **Heat and chill:** a temperature brush. Warm a spot to melt, boil or ignite it; chill it to freeze or condense.
- **Scrape:** remove matter, to dig a channel or open a dam.

All three act on one grid. Each cell holds a material, a temperature and a small "age" value (how long a fire has burned, how far a plant has grown). The simulation reads the same values: heat spreads, matter moves, reactions fire.

### How a tick works

The box is a grid of cells, about 160 × 280 in portrait on a phone (about 45,000 cells). Sixty times a second:

1. **Move:** cells update from the bottom row up, alternating left-to-right and right-to-left each row so piles don't lean one way. Powders fall straight down, then slide diagonally (making natural slopes). Liquids fall, then spread sideways. Gases rise and drift. Solids stay put.
2. **Density:** a heavier material swaps with a lighter one below it, so sand sinks through water and oil floats on it.
3. **Heat:** temperature spreads to neighbors, faster through metal and water, slower through stone and air. Crossing a threshold changes phase: water boils at 100, freezes at 0; sand turns to glass when very hot; lava cools to stone.
4. **React:** touching pairs react with a set chance per tick (acid eats stone, fire spreads to wood). Chances use the seeded random generator, so the same inputs always give the same result.

That last point is what makes puzzles, the Daily and shared creations work: a level plus a list of the player's strokes replays identically on any device.

## Sandglass Alchemy: materials and reactions

The game starts with 6 materials in the palette; 20 more are discovered by making them (Acid, Metal and Gunpowder are earned in Trials instead), which turns the reaction list into a collection to complete.

| Material | Kind | Start or discovered | How it behaves | Key reactions |
| --- | --- | --- | --- | --- |
| Sand | powder | start | falls, piles in slopes | very hot → Glass; + Water → Wet sand |
| Water | liquid | start | flows, fills | ≤ 0 → Ice; ≥ 100 → Steam; puts out Fire; + Lava → Stone + Steam |
| Fire | energy | start | rises, burns out quickly | ignites Wood, Seed, Plant, Oil; heats neighbors |
| Stone | solid | start | stays put | slowly eaten by Acid |
| Wood | solid | start | stays put | burns → Ash + Smoke |
| Seed | powder | start | falls | on Wet sand or Soil → grows Plant |
| Glass | solid | discovered | stays put, see-through | resists Acid |
| Wet sand | powder | discovered | holds steep slopes | dries back to Sand when hot |
| Ice | solid | discovered | chills neighbors | melts above 0; Salt melts it |
| Steam | gas | discovered | rises | cools → Water (rain from a cold ceiling) |
| Ash | powder | discovered | light, drifts | + Wet sand → Soil |
| Smoke | gas | discovered | rises, fades | none |
| Soil | powder | discovered | holds water | Seeds grow twice as fast |
| Plant | life | discovered | grows upward toward light, drinks Water | burns |
| Lava | liquid | discovered (from Stone + lots of heat) | heavy, very hot, slow | melts Sand to Glass; + Water → Stone |
| Obsidian | solid | discovered (Lava + Ice) | stays put | resists heat and Acid |
| Oil | liquid | discovered (pressed from Plant) | floats on Water | burns long and hot |
| Acid | liquid | discovered | flows | dissolves Sand, Stone, Wood, Metal, Plant → Fumes; used up as it eats |
| Salt | powder | discovered (Salt water dried) | falls | melts Ice; + Water → Salt water |
| Salt water | liquid | discovered | flows | freezes lower; slow drying grows Crystal |
| Crystal | solid | discovered | grows slowly in still Salt water | shatters into Salt when hit by heat |
| Metal | solid | discovered | conducts heat fast | + Water over time → Rust |
| Rust | powder | discovered | falls | none |
| Gunpowder | powder | discovered | falls | + Fire → blast that throws grains outward |
| Clay | powder | discovered (Wet sand + Ash + heat) | molds, holds shape | very hot → Brick |
| Brick | solid | discovered | stays put | resists heat |

Open to tune: exact temperatures, reaction chances and which recipes are too obscure to find without a hint (the notebook can show a blurred clue for each undiscovered material).

## Sandglass Alchemy: modes, puzzles and progression

Trials carry the first hours, the notebook carries the long tail, and the Workbench and Daily Recipe give players something to share.

### Trials (the puzzles)

Six chapters of 8 puzzles (48 in all), each chapter built around one or two new materials. Every puzzle is a hand-made box with fixed walls, a goal and a limited supply of each material, poured only inside marked pour zones so there's no brute-force answer.

Goal types:

- **Fill:** get 200 grains of Water into the gold cup and keep it there for 2 seconds.
- **Protect:** keep the flower alive while lava flows toward it.
- **Burn through:** burn a wooden rope so a weight drops onto a switch.
- **Melt the key:** free a key frozen in ice without flooding the lock.
- **Grow:** grow a plant until it reaches the sunlight window.
- **Make:** produce 100 grains of a new material (glass, soil, crystal) inside a jar.

Stars come from thrift: 1 star for solving, 2 for using under a target amount, 3 for matching the best known solution. A pause and single-step button lets players watch a reaction happen slowly, which is also how they learn the rules.

Example, chapter 1, puzzle 5, "Glass Bridge": a flower sits across a pit of acid. You have 150 Sand and 3 seconds of heat. Pour a sand bridge, then heat it into glass before the acid eats through, because acid dissolves sand but not glass.

### The notebook (the long tail)

Every material made for the first time is recorded with the recipe that made it, then joins the Workbench palette. Undiscovered entries show a blurred clue ("born where fire meets the sea"). Completing a notebook page (for example all of the Earth materials) unlocks a tool: a funnel, a bellows, a sealed jar.

### Workbench (the sandbox)

Free play with everything discovered, unlimited amounts, undo, pause and speed control. Any creation can be shared as a link: the box is compressed into the URL (usually under 2 KB), so no server is needed and nothing about the player is stored. Opening a link shows the creation, ready to play with.

### Daily Recipe

Each day, the seed picks a target material and a few allowed ingredients, for example "make 100 Soil from Sand, Water, Wood and Fire in 90 seconds". The generator only picks targets the reaction list proves are reachable from those ingredients. Score is the total material poured (lower is better), and the result card shares like a Wordle result: "Sandglass Daily #12: Soil in 340 grains, 3 tries".

### Will it hold someone 10+ minutes?

One chapter takes about 10–15 minutes, and stars bring players back. The notebook adds a reason to experiment in the Workbench, and the Daily adds a reason to return the next day. Children may skip the puzzles entirely and play in the Workbench, which is fine: that is the hook for them.

## Sandglass Alchemy: tech, phones and accessibility

It fits the Foldwork stack exactly (vanilla JS modules, Canvas 2D, Web Audio, no build step); the one real risk is speed on older phones, and there are known fixes for it.

### Data and drawing

- The grid is a few typed arrays (material, temperature, age, a moved-this-tick flag): about 180 KB for 45,000 cells, allocated once.
- Drawing writes one pixel per cell into an image buffer, scaled up with smoothing off. Each material has a texture pattern (dotted sand, wavy water, bubbly acid), so color is never the only cue.
- The simulation is pure logic with no page access, so it runs in headless tests like Foldwork's core.

### Speed on phones

- The grid is split into 16 × 16 chunks, and chunks where nothing moved last tick are skipped. Most of a settled box sleeps.
- Worst case (everything moving at once) is about 2.7 million cell updates a second, which mid-range phones manage in plain JS.
- If a phone falls behind, the game runs fewer ticks per second rather than skipping ticks, so results stay identical and only slow down.
- Foldwork's performance audit tool (`?fps=1`) carries over.

### Determinism and checks

- One seeded random number generator, a fixed tick and integer temperatures, so a recorded list of strokes always replays the same.
- Each Trial ships with a recorded reference solution. CI replays every one and fails if any puzzle stops being solvable after a rule change; this replaces a solver, which physics makes impractical.
- A balance script runs a random-pour bot on each Daily Recipe candidate to confirm it is reachable and not trivial.

### Sound

All synthesized: a soft hiss for pouring sand, bubbling for liquids, crackle for fire, a glassy chime when something new is discovered. A volume control and a mute.

### Accessibility

- Texture patterns plus names: long-press (or hover) any spot to see its material and temperature.
- Reduced motion: no screen shake from blasts, gentler fire flicker.
- Pause and single-step for anyone who needs time to read a reaction.
- Large palette buttons (44 px or more), and keyboard play on PC: number keys pick a material, square brackets change brush size, Space pauses, Z undoes.

### Privacy

Shared links contain only the box. There is no free text, no names and no chat, so children can play and share safely. Play data follows Foldwork's opt-in setting.

## Arcade game or standalone?

Recommendation: **build Sandglass Alchemy as a standalone game, like Foldwork**, and list it on the projects page. The arcade's format fits a single puzzle chapter, not the whole idea.

|  | Emergent Arcade game | Standalone game |
| --- | --- | --- |
| Format | one self-contained HTML file in a sandboxed frame inside the gallery | its own site, modules, offline install, its own saves |
| Scope that fits | one Trials chapter, 3 verbs, a score | Trials, notebook, Workbench, Daily Recipe, shared links |
| Audience on day one | the arcade's 68 players | starts from zero; needs the projects page and sharing |
| Overlap | Bubble Glass is already a sand-and-glass game in the arcade | none |
| Arcade rules | needs every arcade feature (achievements, pause messages, results, leaderboard epoch) | free to design its own |
| Shared links | awkward from inside the gallery's sandboxed frame | natural: a link opens the creation |

Why standalone wins:

- **The sandbox, notebook and shared links are the heart of it**, and they are what the arcade's single-file, single-round format handles worst.
- **Bubble Glass overlap:** the arcade already has a game where sand falls and you melt it into glass. A second sand game there would compete with the arcade's best-tested game (its v2 was the one revision proven by a real player).
- **Arcade roadmap:** it favors depth over new games while player counts are low, and a standalone game doesn't add to the arcade's queue.
- **Shareable on its own:** a link to a creation or a Daily result brings people straight to the game.

What the arcade would offer is its 68 players on day one. One way to get some of that later: a small arcade game that is one Trials chapter (pour, heat, scrape; a score; achievements), built only once the standalone game is proven. That is optional and not part of the first plan.

## Risks, open questions and a first build plan

A phone-playable prototype is 3 PRs away; the full game is roughly 10–12 PRs, about a quarter of Foldwork's 50.

### Risks

- **Speed on low-end Android:** the chunk-sleeping plan should cover it, but it gets tested on a real phone right after the prototype.
- **A crowded genre:** falling-sand toys exist (The Powder Toy, Sandspiel). The difference here is Trials, the notebook and the Daily Recipe; the toy alone is not enough.
- **Puzzles that break:** a rule change can quietly break a puzzle; replaying every reference solution in CI catches it.
- **Obscure recipes:** some discoveries could be too hard to find; the notebook clues and playtests decide.

### Open questions for you

- [ ] Is the name Sandglass Alchemy right, and should the repository be `sandglass-alchemy`?
- [ ] Look: a warm alchemist's workshop (parchment and brass frame) or a dark backdrop that makes glowing materials pop?
- [ ] Portrait first (phones) with landscape support, as with Foldwork?
- [ ] Is the overlap with Bubble Glass fine?
- [ ] Same opt-in play data as Foldwork, or none at first?

### First build plan (one PR each)

1. **Scaffolding:** repository, page, test runner, CI, `CLAUDE.md` and docs written from this spec.
2. **Simulation core:** grid, Sand, Water, Stone; powders and liquids; seeded tick; headless tests.
3. **Drawing and input:** canvas, brush, palette, pause and step, touch, mouse and keyboard. **Playable prototype: test it on your phone here.**
4. **Heat and phases:** temperature, Fire, Wood, Ash, Smoke, Ice, Steam, Glass, Lava.
5. **Reactions and notebook:** Acid, Seeds and Plants, Soil, Salt, Oil, discovery tracking.
6. **Trials engine:** goals, supplies, pour zones, stars, reference-solution replay in CI; chapter 1.
7. **Workbench and shared links.**
8. **Daily Recipe** with its result card.
9. **Chapters 2–6** (a PR per chapter or two).
10. **Offline install, sound pass, settings, privacy page, projects page card.**

## Top-down adventure RPG ideas

Six takes on a top-down action adventure in the spirit of A Link to the Past (added 17 Oct 2026): explore an overworld, clear dungeons, earn tools that open new paths. Each runs in a browser on phones and PCs, with crisp, simple graphics.

### A. Tidebound: two worlds, one tide

An island kingdom where the sea rises and falls. At low tide you walk the seabed between islands; at high tide those paths are underwater and the rooftops become docks. A conch you earn early lets you turn the tide at shrines, the way A Link to the Past swaps between Light and Dark Worlds.

- **Dungeons:** 8 sunken temples, each half-flooded, solved by flipping the tide inside them. Each gives a tool: grappling hook, diving bell, wind jar, ice charm.
- **Why it works:** every screen exists twice, so content goes twice as far, and the tide is one easy-to-grasp idea.
- **Hard part:** designing every map in two states that both make sense.

### B. Thimble Knight: tiny hero, giant house

A hero the size of a mouse in an old house and its garden. The garden is the overworld; the kitchen, attic, cellar and clock tower are dungeons. Gear is household things: a needle sword, a thimble helmet, a button shield, a fishing-line grapple, a sugar-cube bomb.

- **Why it works:** instantly charming for all ages, and familiar places become strange at this scale.
- **Hard part:** keeping the scale readable on a small phone screen.

### C. Wayfarer: a new kingdom every game

Hand-made dungeon rooms and overworld pieces arranged by the seed into a different kingdom each new game. Item placement is shuffled, with a checker that guarantees every seed can be finished, like the fan-made Zelda randomizers. A Daily seed lets everyone race the same kingdom.

- **Why it works:** endless replay from a fixed amount of content; the Daily seed brings people back.
- **Hard part:** generated worlds can feel generic without strong hand-made pieces.

### D. Minute Hero: one-minute lives

A curse gives you 60 seconds per life (as in the indie game Minit). Each life you get a little further, and keys, tools and shortcuts carry over. The world is small but dense with secrets.

- **Why it works:** perfect for short phone sessions, and every minute ends with progress.
- **Hard part:** the timer can feel stressful; it needs a calm hub with no clock.

Status: parked (17 Oct 2026), the concept is kept for later.

Concept in depth: [Minute Hero concept page](https://claude.ai/artifact/JxBgUx9yHYF38ty1jKLNV5) (source: `_ideas/minute-hero.html`): the world, the 60-second rule, the minute's schedule, 8 tools, a sample session, and mockups drawn in code.

### E. Bramble & Beast: switch between two heroes

A child and a huge, gentle forest beast travel together. The child fits through gaps, reads signs and uses tools; the beast pushes boulders, carries the child across water and frightens enemies. Swap between them with one button.

- **Why it works:** puzzles come from the pair; a warm story about friendship.
- **Hard part:** the AI for the partner you're not controlling.

### F. Inkbound: draw your tools

A hero inside a sketchbook world who draws a few kinds of strokes: a line becomes a bridge, a circle a shield, a zigzag a lightning bolt. Ink is limited and refills at fountains; dungeons teach new strokes.

- **Why it works:** drawing is natural on a touch screen and feels unique.
- **Hard part:** stroke recognition must be very reliable, including with a mouse.

## Adventure RPG: start small, built to grow

The first release should be one small region and one dungeon. What lets it grow into a large world is the engine underneath, built from the first PR to run on data rather than hard-coded maps.

### Foundations that make a large world possible

- **The world is data:** maps, enemies, items, dialogue and events live in data files, not code. New areas are added without touching the engine.
- **A built-in map editor:** a hidden page in the game for painting tiles and placing things, usable on a phone or a PC, which saves straight to those data files.
- **Story flags:** one list of flags ("has grapple", "bridge repaired") drives doors, dialogue and events, so quests can be added anywhere later.
- **A reachability check:** a test walks the world with the player's tools and fails if any required area or item becomes unreachable. It is what keeps a large world from breaking, and it makes the Wayfarer-style shuffled mode possible later.
- **Versioned saves:** saves carry a version and get upgraded, so a player's game survives every update.
- **Regions load as needed:** the world is split into regions loaded when you enter them, so its size isn't limited by memory.

### Look, controls and devices

- **Graphics:** 16 × 16 pixel-art tiles and characters with a limited palette. The sprites can be stored as text inside the code, which keeps Foldwork's no-image-files rule if you want it, or as small images. Your call.
- **Phone:** a floating joystick under the left thumb, sword and item buttons under the right, tap the item icon to swap.
- **PC and browser:** keyboard, mouse or a game controller.
- **Offline:** installable to the home screen and playable without a connection, like Foldwork.

### A first slice to build (about 5–6 PRs)

1. Engine: tile maps, camera, walking, collisions, screen transitions, saves.
2. Combat: sword, health, two enemy types, knockback, drops.
3. A small overworld region (about 12 screens) with a village, a few people to talk to and one secret.
4. One dungeon: keys, locked doors, a map, one new tool, and a boss.
5. Map editor and the reachability check.
6. Sound, settings, offline install, playtesting on your phone.

At the end there is about 30–45 minutes of play, and everything after that is mostly new data.
