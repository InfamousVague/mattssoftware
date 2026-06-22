# MattsSoftware — Icon & Showcase Prompts

Chibi 3D Pixar/Apple-style soft-vinyl figurine identity for
every app in the suite. Generate via Lovart / Nanobanana 2 /
Midjourney. Each app has:

* **Brand colour** — primary hex + squircle gradient endpoints
* **Character or hero object** — the recurring figure (Alfred
  is a butler, Espresso is a barista cup, Halo is a guardian
  angel, Port is a sailor, etc.)
* **App-icon prompt** (1024 × 1024 squircle)
* **Hero prompt** (1600 × 1200 transparent PNG)

Libre is excluded — it has its own Risograph book-cover style
documented in `Apps/Libre.academy/docs/cover-art-style.md`.

---

## 0. Shared template

Every prompt follows the same seven-section structure. Reuse
this skeleton when adding a new app:

> 1. **Style preamble** — _A cute Pixar-style chibi 3D
>    {profession} character, glossy soft-vinyl figurine
>    aesthetic, plump and friendly._ (Or for faceless objects:
>    _A cute 3D illustrated miniature {object}, premium
>    Pixar/Apple-style render, glossy soft-vinyl finish._)
> 2. **Subject** — wardrobe, accessories, hand props, pose
>    (centred / full body / three-quarter view), emblem letter
>    if any.
> 3. **Materials** — explicit material call-out per surface
>    (brushed chrome, matte cream, glossy `#hex` vinyl,
>    polished glass).
> 4. **Lighting** — soft three-point studio key from
>    upper-left, brand-colour rim along the right edge, gentle
>    bounce from below, subtle contact shadow.
> 5. **Background** — either (a) **app icon**: smooth
>    radial-gradient rounded-square (squircle) from
>    `{topLeftHex}` to `{bottomRightHex}` with subtle
>    inner-gloss highlight along the top edge; OR (b) **hero**:
>    transparent alpha channel, **no** backdrop / border /
>    desk / ground / environment.
> 6. **Exclude** — _any text, letterforms, typography,
>    numbers, logos, watermarks, UI screenshots, flat
>    illustration style, cartoon style, photorealism, opaque
>    backgrounds (hero only), painted backdrop, ground plane,
>    environment props._ Add app-specific exclusions if
>    needed (e.g. religious iconography for Halo).
> 7. **Reference / dimensions** — _Same visual family as the
>    MattsSoftware suite icons (Alfred butler, Espresso
>    barista cup, Worktree sapling, Port sailor, Uninstaller
>    sanitation worker, Halo guardian angel). 1024 × 1024 PNG
>    no border._ For hero: _1600 × 1200 PNG, transparent
>    alpha, centred character ~80% of frame vertically._

**Family rule:** brand colour appears in the character's
materials, the squircle (icon only), and rim lighting — never
as an opaque backdrop wash on heroes. One emblem letter on the
costume for 32 × 32 favicon legibility (Uninstaller `U`,
Halo `H`, etc).

---

## 1. MattsSoftware (the launcher)

**Brand:** `#444444` neutral charcoal-grey housing with
warm-cream highlights. Squircle: `#5C5C5C → #2A2A2A`.

**Character:** the **suite-master assistant** — a chibi
caretaker figure whose job is "shepherd all the other
characters in." Picture a stage manager / concierge: clipboard
in one hand showing tiny lined-up app emblems, a small
walkie-talkie holster on the belt. Cream uniform, charcoal
trim. Single tile-emblem on the chest (a small grid-of-four
squares) for the favicon read.

**App icon (1024 × 1024):**

> A cute Pixar-style chibi 3D concierge / stage-manager
> character, glossy soft-vinyl figurine aesthetic, plump and
> friendly. Snug **cream uniform with charcoal trim**
> (`#444444`), small grid-of-four-squares emblem embroidered
> on the chest. Holds a tiny clipboard in one hand showing
> three little app glyphs lined up (a coffee cup, a sailboat,
> a key — all abstract, no text). A small charcoal
> walkie-talkie holstered on the belt. Big round eyes with a
> slight upward gaze, soft rosy cheeks, confident grin. Soft
> three-point Pixar lighting from upper-left, gentle warm-grey
> bounce from below, subtle contact shadow. Background: smooth
> radial-gradient rounded-square from `#5C5C5C` upper-left to
> `#2A2A2A` lower-right, subtle inner-gloss highlight along
> the top edge. Composition tight, character fills ~70%
> vertically. Same visual family as the suite icons (Alfred
> butler, Espresso barista cup, Halo guardian angel).
> 1024 × 1024 PNG, no border, no text.

**Hero (1600 × 1200, transparent):**

> Same chibi concierge character, full body, three-quarter
> view, standing relaxed on a transparent backdrop. Clipboard
> held forward and slightly downward, with three small app
> figurines hovering above it like AR overlays — a tiny
> coffee cup, a small sailboat, a chibi sapling — each
> glowing softly in its own brand colour, soft glow trails
> underneath. The concierge looks down at the figurines with
> soft pride. 1600 × 1200 PNG, transparent alpha, no
> environment.

---

## 2. Alfred

**Brand:** Pixar fresh green. Squircle: `#7BC585 → #2F8B48`.

**Character:** a **butler / valet** — matte cream tuxedo,
small green bowtie matching brand colour, green sash across
the chest. Holds a polished silver tray balanced on one
gloved hand. Tray carries 3-4 little folder icons stacked
neatly (the "dev cruft" Alfred reclaims).

**App icon (1024 × 1024):**

> A cute Pixar-style chibi 3D butler character, glossy
> soft-vinyl figurine aesthetic, plump and friendly. Wears a
> matte cream tuxedo with a snug fit, a small **green bowtie**
> (`#2F8B48`), and a glossy green sash across the chest. Big
> chunky white gloves, polished black dress shoes. Tiny gold
> "A" emblem stitched on the lapel. One gloved hand balances a
> **mirror-finish silver tray** at shoulder height; the tray
> holds 3-4 small glossy folder icons stacked neatly, the top
> one cracked open slightly to show a tiny gold star inside.
> Big round eyes with a slight upward gaze, rosy cheeks, soft
> servant's smile. Soft three-point Pixar lighting from
> upper-left, green rim along the right edge, warm cream
> bounce from below, subtle contact shadow. Background:
> smooth radial-gradient rounded-square (squircle) from
> `#7BC585` upper-left to `#2F8B48` lower-right, subtle inner
> gloss highlight along the top edge. Composition tight,
> character fills ~70% vertically. Same visual family as the
> rest of the suite icons. 1024 × 1024 PNG, no border, no text
> other than the "A" emblem.

**Hero (1600 × 1200, transparent):**

> Same chibi butler character, full body, three-quarter view,
> presenting the silver tray forward toward the viewer.
> Folders on the tray are floating slightly above the
> surface, gently glowing, one of them with a tiny green
> star-rosette spinning above it. A few specks of dust / file
> fragments waft up from one folder's gap as if cleared.
> Transparent backdrop, no environment. 1600 × 1200 PNG,
> transparent alpha, character ~80% vertically.

---

## 3. Espresso

**Brand:** warm coffee orange. Squircle: `#FFB27A → #E09060`.

**Character:** **demitasse cup / barista cup** (faceless
object family). A glossy ceramic espresso cup with a small
warm-cream face — closed-crescent eyes, a tiny smile, two
rosy cheeks painted on the porcelain. Steaming gently from the
top. Tiny saucer underneath. Behind the cup: a drowsy
chibi-laptop slumping forward, eyes half-closed; the cup
"defends" the laptop from sleep.

**App icon (1024 × 1024):**

> A cute Pixar-style chibi 3D espresso cup character, glossy
> ceramic porcelain finish, plump and friendly. **Warm-cream
> ceramic body** with a glossy gold rim at the lip
> (`#FFB27A` rim picks up the brand), a tiny gold "E" emblem
> painted on the side. Big round closed-crescent kawaii eyes
> with a slight upward arc, soft rosy cheeks painted on the
> porcelain, content little smile. Steam wisps rise gently
> from the top of the cup, drawn as soft glossy white volutes.
> A small matching saucer underneath. Behind and slightly
> below the cup, a chibi-laptop with half-closed eyelids
> slumps forward — its lid almost-closed, drooping; the
> espresso cup tips itself slightly forward like it's nudging
> the laptop awake. Soft three-point Pixar lighting from
> upper-left, warm orange rim along the cup's right side,
> cream bounce from below, subtle drop-shadow. Background:
> smooth radial-gradient rounded-square from `#FFB27A`
> upper-left to `#E09060` lower-right, subtle inner-gloss
> highlight along the top edge. Composition tight, the
> espresso cup fills ~60% of the squircle vertically with the
> drowsy laptop tucked behind. Same visual family as the rest
> of the suite icons. 1024 × 1024 PNG, no border, no text
> other than the "E" emblem.

**Hero (1600 × 1200, transparent):**

> Same chibi espresso cup character, three-quarter view, on a
> transparent backdrop. The drowsy chibi-laptop now sits
> beside the cup on equal footing, eyes opening slightly
> wider as if waking up — a tiny exclamation mark rises
> above its hinge. Steam from the cup wafts toward the
> laptop's lid. Transparent alpha, no desk surface, no
> environment. 1600 × 1200 PNG.

---

## 4. Worktree

**Brand:** mossy chibi-leaf green. Squircle: `#98C97D → #4D8A3E`.

**Character:** a **chibi sapling** — chubby bark-brown trunk
with kawaii face, two stubby root-feet, three leafy branches
fanning out above. Each branch tipped with a small
cream-coloured folder tag; the centre tag carries a tiny gold
star to indicate the "current" branch.

**App icon (1024 × 1024):**

> A 3D Pixar-style app icon, 1024 × 1024, vertical squircle
> frame with rounded corners, a single hero subject filling
> about 70% of the canvas. The hero is a friendly chubby
> chibi sapling: a rounded bark-brown trunk with soft Pixar
> proportions, two stubby root-feet planted at the bottom,
> and a small kawaii face — tiny closed crescent smile-eyes,
> two small rosy-pink cheek circles, gentle little smile. The
> leafy crown above the trunk splits into three soft branches
> arching outward in a fan; each branch is tipped with a
> small glossy cream-coloured folder tag, the front centre
> one stamped with a tiny gold star to read as the "current"
> branch. Leaves are clusters of glossy
> mint-and-forest-green rounded shapes with soft specular
> highlights, like polished gummies. Background: smooth
> vertical gradient from soft sky-cream `#98C97D` at the top
> to warm mossy-mint `#4D8A3E` at the bottom, with a faint
> radial bloom behind the sapling for depth. Three-point
> Pixar/Cars studio lighting, gentle ambient occlusion under
> the roots and tags, soft drop shadow grounding it to the
> squircle. No text anywhere, no labels. Cozy, bright,
> premium, modern app-icon polish. Centred composition,
> aspect 1:1.

**Hero (1600 × 1200, transparent):**

> Same chibi sapling, three-quarter view, on a transparent
> backdrop. Roots peek out as if it's just stepped forward.
> The three branch-folders now lean slightly outward to
> reveal a glowing gold star floating between them at trunk
> height — the "active branch" hovering for the viewer.
> Small leafy seedlings sprout from the soil at the sapling's
> feet, suggesting more branches available. 1600 × 1200 PNG,
> transparent alpha.

---

## 5. Port

**Brand:** sky-blue dock. Squircle: `#5CB8FF → #0099FF`.

**Character:** a **chibi sailor** with a tiny sailboat
companion. Striped navy-and-cream sailor shirt, navy cap with
a small gold anchor pin. One hand on a brass mooring cleat
(the menu-bar icon Port still uses for its status item); the
other holds the rope of a small toy sailboat floating beside
him.

**App icon (1024 × 1024):**

> A cute Pixar-style chibi 3D sailor character, glossy
> soft-vinyl figurine aesthetic, plump and friendly. Wears a
> snug **navy-and-cream horizontally-striped sailor shirt**,
> navy shorts, a navy cap with a small gold anchor pin and a
> tiny gold "P" emblem on the front. Big chunky cream gloves,
> blue rubber boots. One hand rests on a polished **brass
> mooring cleat** beside him (low to the ground, the same
> shape Port uses as its menu-bar icon, rendered as 3D
> brass); the other holds a short rope leading to a small
> floating toy sailboat with a white sail, bobbing in
> mid-air at hip level. Big round eyes with a slight upward
> gaze, rosy cheeks, content little smile. Three-point Pixar
> lighting, sky-blue rim along the right, cream bounce from
> below, subtle drop-shadow. Background: smooth
> radial-gradient rounded-square from `#5CB8FF` upper-left to
> `#0099FF` lower-right, subtle inner-gloss highlight along
> the top edge. Same visual family as the rest of the suite
> icons. 1024 × 1024 PNG, no border, no text other than the
> "P" emblem.

**Hero (1600 × 1200, transparent):**

> Same chibi sailor, full body three-quarter view,
> transparent backdrop. Now three small glossy toy boats
> hover around him at various heights — a tugboat, a cargo
> ship with tiny stacked containers, and the sailboat from
> the icon — each in soft Pixar-painted detail, each tagged
> with a tiny chrome lock charm dangling from its mast (the
> "ports" he manages). Sailor looks gently from one to the
> other, gesturing with an open palm. 1600 × 1200 PNG,
> transparent alpha, no dock, no water.

---

## 6. Peephole

**Brand:** mint teal. Squircle: `#7FDBB6 → #3AA685`.

**Hero object** (faceless): a **chrome webcam-eye and
microphone duo** floating side by side. The webcam has a small
shutter that doubles as an iris; the mic is a polished cardioid
capsule. A faint glowing red dot warns when something's
"watching."

**App icon (1024 × 1024):**

> A cute 3D illustrated miniature **chrome webcam-eye paired
> with a polished cardioid microphone**, premium Pixar/Apple
> render, glossy soft-vinyl finish. The webcam is a round
> chrome capsule with a glass front, the inside showing a
> rotating iris-shutter (mint-teal pupil `#3AA685`, brushed
> chrome ring around it). The microphone stands slightly
> behind it on a small chrome stand. A tiny red "active" LED
> glows on the side of the webcam. Polished mint-teal accents
> on both objects' bases, small "P" emblem etched on the mic
> stand. Three-point Pixar lighting from upper-left,
> mint-teal rim along the right, soft cream bounce from below,
> subtle contact shadow. Background: smooth radial-gradient
> rounded-square from `#7FDBB6` upper-left to `#3AA685`
> lower-right, subtle inner-gloss highlight along the top.
> Composition tight, both objects fill ~70% vertically. Same
> visual family as the rest of the suite. 1024 × 1024 PNG, no
> border, no text other than the small "P" emblem.

**Hero (1600 × 1200, transparent):**

> Same webcam-eye + mic duo, three-quarter view, transparent
> backdrop. The webcam iris is mid-blink. Around them float
> 2-3 tiny ghostly app silhouettes (no faces, just outlines)
> peering in — Peephole catches them in the act. Soft red
> warning glow under the webcam. 1600 × 1200 PNG, transparent
> alpha.

---

## 7. Quarantine

**Brand:** amber-gold. Squircle: `#F7D05C → #C89212`.

**Hero object** (faceless): a **glass isolation pod / bell
jar** with a small wooden crate sealed inside. Amber glow from
within. Two glossy chrome latches on the rim.

**App icon (1024 × 1024):**

> A cute 3D illustrated miniature **bell-jar quarantine pod**,
> premium Pixar/Apple render. Thick glossy curved glass dome
> with a polished brass rim and two chrome latches at the
> base. Inside, a small wooden crate sits centred on a
> matching brass plinth, glowing softly with a warm amber
> inner light (`#F7D05C` core, `#C89212` falloff). A tiny
> brass "Q" emblem stamped on the plinth's front. Three-point
> Pixar lighting from upper-left, amber rim along the
> dome's right curve, gentle warm bounce from below, subtle
> contact shadow. Background: smooth radial-gradient
> rounded-square from `#F7D05C` upper-left to `#C89212`
> lower-right, inner-gloss highlight along the top. Same
> visual family as the rest of the suite. 1024 × 1024 PNG, no
> border, no text other than the "Q" emblem.

**Hero (1600 × 1200, transparent):**

> Same bell-jar quarantine pod, three-quarter view,
> transparent backdrop. The wooden crate inside is partially
> opened — a small downloaded-app-icon shape floats just
> above its lid, suspended in the amber glow, being "held"
> until verified. A few small chrome bolts hover around the
> dome's rim as if mid-fastening. 1600 × 1200 PNG, transparent
> alpha.

---

## 8. Sentry

**Brand:** indigo violet. Squircle: `#9D8BFF → #5B48E6`.

**Hero object** (faceless): a **chrome lantern + scroll** — a
small polished lantern with a glowing violet crystal core,
suspended above an unfurled cream scroll that catches the
crystal's glow.

**App icon (1024 × 1024):**

> A cute 3D illustrated miniature **chrome lantern with a
> glowing violet crystal**, premium Pixar/Apple render.
> Polished chrome housing, slim brass details, a faceted
> violet crystal floating inside the lantern's glass chamber
> (core `#9D8BFF` with `#5B48E6` deep falloff). The lantern
> hovers an inch above an unfurled cream parchment scroll;
> the scroll catches the crystal's glow on its surface, with
> a small violet seal-stamp "S" emblem in the lower corner.
> Three-point Pixar lighting from upper-left, violet rim
> along the right, cream bounce from below, subtle contact
> shadow. Background: smooth radial-gradient rounded-square
> from `#9D8BFF` upper-left to `#5B48E6` lower-right,
> inner-gloss highlight along the top. Same visual family as
> the rest of the suite. 1024 × 1024 PNG, no border, no text
> other than the "S" seal stamp.

**Hero (1600 × 1200, transparent):**

> Same chrome lantern + scroll, three-quarter view,
> transparent backdrop. The scroll now shows three tiny
> hand-drawn watch-icons (footprint, lockpick, ear) along its
> length, each catching the lantern's glow in turn as if
> being "checked off." A few violet sparks drift up from the
> lantern. 1600 × 1200 PNG, transparent alpha.

---

## 9. Stats

**Brand:** hot pink. Squircle: `#FF7EB3 → #FF4D8D`.

**Hero object** (faceless): a **floating gauge cluster** —
analogue dial gauges, a glass thermometer, and a slim
sparkline display arranged in a small bouquet.

**App icon (1024 × 1024):**

> A cute 3D illustrated miniature **floating gauge cluster**,
> premium Pixar/Apple render. Three glossy analogue dial
> gauges (CPU / RAM / disk metaphor) arranged in a tight
> arc, each with brass rims and pearl-white faces, needles
> mid-sweep. A slim glass thermometer rests against the
> right edge, its mercury column glowing hot-pink
> (`#FF4D8D`). A floating sparkline graph hovers behind the
> gauges like a thin holographic strip in `#FF7EB3` glow.
> Tiny pink "S" emblem etched on the centre gauge's base.
> Three-point Pixar lighting from upper-left, pink rim along
> the right, soft cream bounce from below, subtle contact
> shadow. Background: smooth radial-gradient rounded-square
> from `#FF7EB3` upper-left to `#FF4D8D` lower-right,
> inner-gloss highlight along the top. Same visual family as
> the rest of the suite. 1024 × 1024 PNG, no border, no text
> other than the "S" emblem.

**Hero (1600 × 1200, transparent):**

> Same gauge cluster, three-quarter view, transparent
> backdrop. The needles are mid-sweep, sparkline curving
> behind them with a glowing tail. A small chibi MacBook sits
> low-right, its lid open, the gauges hovering above the
> screen like an AR readout. 1600 × 1200 PNG, transparent
> alpha.

---

## 10. StickyKeys

**Brand:** soft lavender. Squircle: `#C0A0FF → #9070E0`.

**Hero object** (faceless): a **chibi keyboard under a
frosted-glass dome**, the dome catching cool lavender light.

**App icon (1024 × 1024):**

> A cute 3D illustrated miniature **chibi keyboard sealed
> under a frosted-glass dome**, premium Pixar/Apple render.
> The keyboard is a stylised Apple Magic Keyboard shape with
> rounded glossy white keys; one cluster of keys in the
> centre is highlighted lavender (`#C0A0FF`) like a "lock"
> indicator. A thick frosted-glass dome covers the keyboard,
> chrome ring at its base, catching cool lavender light on
> its curved surface. Tiny lavender "K" emblem on the dome's
> base ring. Three-point Pixar lighting from upper-left,
> lavender rim along the right, cream bounce from below,
> subtle contact shadow. Background: smooth radial-gradient
> rounded-square from `#C0A0FF` upper-left to `#9070E0`
> lower-right, inner-gloss highlight along the top. Same
> visual family as the rest of the suite. 1024 × 1024 PNG, no
> border, no text other than the "K" emblem.

**Hero (1600 × 1200, transparent):**

> Same dome-and-keyboard, three-quarter view, transparent
> backdrop. A small chibi cleaning cloth floats above the
> dome, drifting harmlessly because the dome blocks it; a
> tiny "no-entry" lavender glow on the dome's surface where
> the cloth touches. 1600 × 1200 PNG, transparent alpha.

---

## 11. Halo

**Brand:** champagne gold. Squircle: `#FFD988 → #DDA84A`.

**Character:** a **chibi guardian angel** cradling a glowing
miniature Dynamic Island in cupped palms. Full spec lives in
`Apps/halo-swift/prompts.md` — reproduce here for site
parity.

**App icon (1024 × 1024):**

> A cute Pixar-style chibi 3D guardian-angel character,
> glossy soft-vinyl figurine aesthetic, plump and friendly.
> Soft cream skin (`#FCEBD0`) with rosy cheeks and a tiny
> gold "H" emblem embroidered on a snug sleeveless
> cream-and-gold tunic. Cream-blond hair in soft waves. A
> glossy champagne-gold halo ring (`#F5BD5C`, polished metal)
> floats an inch above the head, glowing softly from within
> (`#FFE9B0`). Two small fluffy white wing-puffs peek out
> behind the shoulders. Cradled between the angel's cupped
> palms at chest level: a miniature Dynamic Island — a small
> glossy-black pill with a tiny camera-notch cut into its
> top edge — glowing softly with warm gold inner light. The
> angel looks down at the pill in their hands with a soft
> contented smile (closed-crescent kawaii eyes). Centred in
> frame, full body visible from bare feet to halo.
> Three-point Pixar lighting from upper-left, champagne rim
> along the right, cream bounce from below, subtle
> drop-shadow. Background: smooth radial-gradient
> rounded-square from `#FFD988` upper-left to `#DDA84A`
> lower-right, inner-gloss highlight along the top. Same
> visual family as the rest of the suite. 1024 × 1024 PNG,
> no border, no text other than the small "H" emblem.
> **Exclude:** religious iconography (no crosses, no stained
> glass, no stern poses); halo as a flat 2D ring (must read
> as a polished 3D metal torus).

**Hero (1600 × 1200, transparent):**

> Same chibi guardian-angel character, full body
> three-quarter view, transparent backdrop. Holds a
> miniature MacBook Pro at chest level, tilted forward so
> the notch + Dynamic Island pill at the top is the focal
> point. Coming out of the pill, two tiny floating "live
> activity" cards: one espresso-cup, one music-note, hovering
> half a centimetre off the screen with soft glow trails.
> The angel looks down at the laptop's notch with a soft
> proud smile. 1600 × 1200 PNG, transparent alpha, no
> environment.

---

## 12. Seasick

**Brand:** TBD — pick a soft seafoam green / muted teal in
the `#8DCBC4 → #4A8F88` range to evoke gentle ocean colour.

**Character:** a **chibi tugboat** (no human) — chubby
red-and-cream hull, two glossy black smokestacks, kawaii face
on the cabin window with closed-crescent eyes and rosy cheeks
to match the suite mascots. Small puff of steam from the
smokestack.

**App icon (1024 × 1024):**

> A cute Pixar-style chibi 3D tugboat character, glossy
> soft-vinyl figurine aesthetic. Chubby cream-and-red hull
> (`#E54B4B` accent stripe along the waterline), two glossy
> black smokestacks with brass rings, a small steering wheel
> visible through the wheelhouse window. The cabin's front
> window doubles as the boat's face: tiny closed-crescent
> kawaii eyes, two rosy-pink cheek circles, gentle smile.
> Small chrome anchor charm dangling from the bow. A soft
> puff of cream-coloured steam rising from the right
> smokestack. Three-point Pixar lighting from upper-left,
> seafoam rim along the right, gentle cream bounce from
> below, subtle contact shadow. Background: smooth
> radial-gradient rounded-square from `#8DCBC4` upper-left to
> `#4A8F88` lower-right, subtle inner-gloss highlight along
> the top. Composition tight, tugboat fills ~70% vertically.
> Same visual family as the rest of the suite. 1024 × 1024
> PNG, no border, no text.

**Hero (1600 × 1200, transparent):**

> Same chibi tugboat, three-quarter view, transparent
> backdrop. A few tiny seafoam wave-curls foam softly around
> the hull at the waterline; a couple of small cream-coloured
> motion-cue arrows arc gently above the smokestacks
> (Seasick's "motion cues" metaphor). 1600 × 1200 PNG,
> transparent alpha.

---

## 13. Diane

**Brand:** TBD — pick a warm amber-brown evoking vintage
audio gear. Suggest `#D6A674 → #8A5A2C` (warm tan to deep
walnut).

**Character:** a **chibi vintage tape recorder operator**.
Could be the recorder itself (object family) or a chibi
character holding it. Object family — more in line with
Diane's "I'm holding in my hand a small tape recorder" voice:
a tiny boxy hand-held cassette recorder with a kawaii face on
the front grille (closed-crescent eyes, two cheek circles, a
gentle smile shaped from the speaker holes). A single tape
reel turning slowly inside.

**App icon (1024 × 1024):**

> A cute 3D illustrated miniature chibi **vintage hand-held
> cassette recorder**, premium Pixar/Apple render, glossy
> soft-vinyl finish. Boxy warm-tan plastic body with brass
> trim, a single chrome reel-window on the front showing a
> slow-turning cassette reel. The front speaker grille
> doubles as the recorder's face: tiny closed-crescent
> kawaii eyes, two rosy-pink cheek circles, a gentle
> upturned-smile arc of speaker holes. Small chrome
> record-button glowing softly red on the side. A tiny
> brass "D" emblem on the corner. Three-point Pixar lighting
> from upper-left, amber rim along the right, cream bounce
> from below, subtle contact shadow. Background: smooth
> radial-gradient rounded-square from `#D6A674` upper-left
> to `#8A5A2C` lower-right, subtle inner-gloss highlight
> along the top. Same visual family as the rest of the
> suite. 1024 × 1024 PNG, no border, no text other than the
> "D" emblem.

**Hero (1600 × 1200, transparent):**

> Same chibi cassette recorder, three-quarter view,
> transparent backdrop. A tiny dictation microphone on a
> coiled cable hovers near the recorder, mid-air, picking up
> a small soundwave that loops back into the reel-window.
> 1600 × 1200 PNG, transparent alpha.

---

## 14. Uninstaller

**Brand:** tomato red. Squircle: `#F26B6B → #A02828`.

**Character:** a **chibi sanitation worker** — red coverall,
red hardhat with white "U" emblem, chunky white gloves, black
workboots, holding a single chunky white trash bag tied at
the top.

**App icon (1024 × 1024):**

> A cute Pixar-style chibi 3D sanitation worker character,
> glossy soft-vinyl figurine aesthetic, plump and friendly.
> Wears a snug red coverall uniform (warm tomato red,
> matching brand colour `#E54B4B`), red hardhat with a small
> white "U" emblem on the front, big chunky white gloves,
> scuffed black workboots. Big round eyes with a slight
> upward gaze, soft rosy cheeks, small confident grin. Holds
> a single chunky white trash bag tied at the top in one
> hand at hip level; the bag is squeaky-clean glossy white,
> not torn. Centred in frame, full body visible from boots
> to hardhat. Soft global key light from upper-left, gentle
> ambient fill, subtle drop shadow under the figure.
> Background: smooth radial-gradient rounded-square,
> `#F26B6B` upper-left fading to `#A02828` lower-right, very
> subtle inner gloss highlight on the top edge. Composition
> tight — character fills ~70% of the squircle vertically.
> Same visual family as the rest of the suite. 1024 × 1024
> PNG, no border, no text other than the "U" emblem.

**Hero (1600 × 1200, transparent):**

> Same chibi sanitation worker character, full body
> three-quarter view, standing relaxed, looking slightly
> downward at his work. Picking up a small glowing 3D
> macOS-style app icon (squircle, blue gradient, generic)
> between thumb and forefinger like he's plucking a weed,
> holding it over the open mouth of a chunky white trash bag
> at his feet. Around his boots: 2-3 smaller residue files —
> a tiny .plist scroll, a cassette-sized folder, a
> translucent cookie disk — drift on a faint dust trail into
> the trash bag. Bag is slightly open at the top showing the
> residue tumbling in. Soft global lighting like the rest of
> the suite illustrations, subtle warm-cream wash behind the
> figure (transparent OK), gentle drop shadow. Centred
> character on a transparent / off-white backdrop, ~80% of
> frame vertically. 1600 × 1200 PNG.

---

## 15. Blip

**Brand:** pink → purple. Squircle: `#FF4D8D → #A020F0`.

**Hero object** (faceless): a **chibi network-traffic signal**
— a small floating chrome speech-bubble with a tiny waveform
inside, paired with a quick "blip" sparkline trail behind it.

**App icon (1024 × 1024):**

> A cute 3D illustrated miniature **chibi network-traffic
> bubble**, premium Pixar/Apple render, glossy soft-vinyl
> finish. A round chrome speech-bubble with a glass front;
> inside the glass, a glowing pink-to-purple waveform
> (`#FF4D8D → #A020F0`) ripples mid-pulse. Behind and below
> the bubble, a thin glossy sparkline trail in matching
> gradient curves off-frame like the tail of a comet — the
> "blip" caught mid-flight. Small chrome antenna on top with
> a pulsing dot at the tip. Tiny "B" emblem etched in chrome
> on the bubble's side. Three-point Pixar lighting from
> upper-left, magenta rim along the right, cream bounce from
> below, subtle contact shadow. Background: smooth
> radial-gradient rounded-square from `#FF4D8D` upper-left
> to `#A020F0` lower-right, subtle inner-gloss highlight
> along the top. Same visual family as the rest of the
> suite. 1024 × 1024 PNG, no border, no text other than the
> "B" emblem.

**Hero (1600 × 1200, transparent):**

> Same chibi speech-bubble + sparkline, three-quarter view,
> transparent backdrop. Three tiny ghostly silhouette-apps
> orbit around the bubble, each tethered to it by a thin
> magenta thread (the "computer talking behind your back"
> metaphor). The bubble's waveform pulses brighter where the
> threads attach. 1600 × 1200 PNG, transparent alpha.

---

## 16. Tap

**Brand:** TBD — Tap is a watchOS/iOS app shipped via the App
Store rather than the suite launcher. Suggest a fresh sky
cyan `#5BD0F2 → #1B8FB8` to evoke "remote control / signal."

**Character:** a **chibi remote / wristband** — could be a
floating Apple Watch face with a small antenna pulse, or a
small chibi character holding a wristband-remote. For
consistency with the rest of the suite's object-family, use a
**floating watch face**.

**App icon (1024 × 1024):**

> A cute 3D illustrated miniature **chibi smart-watch face**,
> premium Pixar/Apple render. Polished chrome case in
> three-quarter view, glass face glowing soft sky-cyan
> (`#5BD0F2`) with a single tap-target ripple expanding
> outward from its centre. A small kawaii face on the watch's
> bezel reflection: tiny closed-crescent eyes, two rosy
> cheeks. Floating slightly above the watch: a tiny chrome
> antenna pulse — three concentric ripple rings rising up to
> indicate a signal. Tiny "T" emblem etched on the
> watch's strap loop. Three-point Pixar lighting from
> upper-left, cyan rim along the right, cream bounce from
> below, subtle contact shadow. Background: smooth
> radial-gradient rounded-square from `#5BD0F2` upper-left to
> `#1B8FB8` lower-right, subtle inner-gloss highlight along
> the top. Same visual family as the rest of the suite. 1024
> × 1024 PNG, no border, no text other than the "T" emblem.

**Hero (1600 × 1200, transparent):**

> Same chibi watch face, three-quarter view, transparent
> backdrop. Three tiny floating "server" pebble-icons orbit
> the watch at various distances, each lighting up in turn
> as the watch's ripple expands. 1600 × 1200 PNG, transparent
> alpha.

---

## 17. Base

**Brand:** monochrome — pure black `#000000` on cream
`#F7F1E8`, or inverse. Base is the design system, so its
identity is austere by design.

**Hero object** (faceless): a **chibi monochrome cube** — a
matte-black foundation cube with crisp orthogonal edges,
casting a long warm-cream shadow on a transparent backdrop.
Three smaller floating cubes (a button, a card, an input
field) stack lightly off one face.

**App icon (1024 × 1024):**

> A cute 3D illustrated miniature **monochrome
> design-system cube**, premium Pixar/Apple render. Matte
> charcoal-black foundational cube (`#222222`) in
> three-quarter view, crisp orthogonal edges, soft chamfer.
> Floating just off the top face: three smaller geometric
> tiles in matching matte black — a button (rounded
> rectangle), a small card (square with a chevron), an input
> field (thin rectangle with a blinking cursor mark). Tiny
> cream "B" emblem stamped on the cube's front face. Soft
> three-point lighting from upper-left, faint cool rim along
> the right, warm cream bounce from below, subtle contact
> shadow. Background: smooth flat cream squircle
> (`#F7F1E8`) with the cube centred — no gradient, no fanfare,
> Base is the foundation and reads austere. Same chibi-vinyl
> proportions as the rest of the suite but monochrome.
> 1024 × 1024 PNG, no border, no text other than the "B"
> emblem.

**Hero (1600 × 1200, transparent):**

> Same monochrome cube, three-quarter view, transparent
> backdrop. The three floating tile-children now drift higher
> and rotate gently, showing they can be composed in any
> orientation. Long warm cream shadow stretches off to the
> right of the cube. 1600 × 1200 PNG, transparent alpha.

---

## 18. GhostWire

**Brand:** electric wire-teal `#19C3B1`. Squircle: `#34D9C6 → #0C6E66`.
Takes the cool teal end of the suite palette.

**Character:** a normal, classic **ghost** — the universal rounded-top,
wavy-hem silhouette — rendered in clean glossy Pixar 3D (soft-vinyl /
marshmallow surface), **not** chibi and **not** shaped into a person.
Balanced proportions, just a friendly little spirit. Two simple dark
**X-shaped eyes** (each a neat little "X", classic cartoon-ghost style)
and a small soft mouth. Pearl-white body with an electric-teal inner glow
and teal rim — the *Wire* reads through the name + teal energy, no props.
Small teal "G" monogram low on the body for 32 × 32 favicon legibility.

**App icon (1024 × 1024):**

> A clean Pixar/Apple-style 3D ghost character, glossy soft-vinyl
> (marshmallow) finish — a normal, classic ghost, NOT chibi and NOT
> stylized as a person. The universal ghost silhouette: smooth rounded
> dome top, simple body, a gently scalloped wavy hem at the bottom,
> floating upright with balanced (not baby / big-head) proportions.
> Pearl-white body (`#F2F6FA`) with a subtle cool sheen. Face: two simple
> dark-navy (`#1E2C46`) X-shaped eyes — each eye a small neat "X" mark in
> the classic cartoon-ghost style — and a small soft open mouth; friendly
> and a little playful, never scary. A soft electric-teal inner glow
> (`#7DF0E2`) rises from within and fades upward; a faint electric-teal
> rim of light traces the right edge; a few tiny teal energy motes drift
> softly nearby. A small subtly-glowing teal "G" monogram low on the body.
> Soft three-point Pixar studio lighting from the upper-left,
> electric-teal rim along the right, gentle cool bounce from below, subtle
> contact shadow. Background: smooth radial-gradient rounded-square
> (squircle) from `#34D9C6` upper-left to `#0C6E66` lower-right, subtle
> inner-gloss highlight along the top edge. Composition tight and centred,
> the ghost fills ~70% of the squircle vertically. Same glossy soft-vinyl
> render family as the rest of the suite icons, but classic ghost
> proportions (not chibi). 1024 × 1024 PNG, no border, no text other than
> the single "G" monogram.
> **Exclude:** chibi or baby proportions (no giant head, no rosy-cheek
> baby look); any human / person / woman features (no hair, no face shaped
> into a person, no limbs); round or kawaii eyes — eyes MUST be simple "X"
> marks; cables / wires / plugs / cords / electronics; scary / creepy /
> sheet-with-eyeholes styling; any text or letterforms beyond the "G".

**Hero (1600 × 1200, transparent):**

> Same clean 3D ghost character (classic rounded ghost silhouette, glossy
> soft-vinyl, simple dark X-shaped eyes, small mouth — not chibi, not a
> person), full body, three-quarter view, drifting gently on a fully
> transparent backdrop with no ground, shadow plane or environment. The
> wavy hem trails into soft flowing wisps as if mid-float, with a light
> playful air. A soft electric-teal aura glows from within and a faint
> teal rim traces its silhouette; tiny teal energy motes drift around it,
> trailing faint light. No cables, plugs or props of any kind. Soft
> three-point Pixar lighting from the upper-left, electric-teal rim along
> the right, cool bounce from below. Centred character ~80% of frame
> vertically. 1600 × 1200 PNG, transparent alpha, no environment, no text.
> **Exclude:** chibi / baby proportions; any human or person features or
> hair; round / kawaii eyes (must be "X" marks); wires / cables / plugs /
> electronics; opaque or painted background; ground or cast-shadow plane.

**Splash / loading (1024 × 1024, transparent):**

> Same clean 3D ghost character (classic ghost silhouette, glossy
> soft-vinyl, simple dark X-shaped eyes, small mouth — not chibi, not a
> person), centred and front-facing, floating calmly, on a fully
> transparent backdrop. A gentle electric-teal aura blooms softly around
> it (soft volumetric glow, not harsh neon) and its inner teal glow pulses
> faintly; a few teal energy motes hover near the hem. Symmetric and
> balanced for a centred app splash / loading screen. Soft three-point
> Pixar lighting, electric-teal rim, subtle cool bounce. Ghost fills ~70%
> of frame. 1024 × 1024 PNG, transparent alpha, no text, no environment,
> no ground shadow, no wires.

---

## 19. Family-cue checklist

When generating new art, before approving:

- Brand colour mandatory (else the icon drifts to a neighbour
  hue).
- Mascot continuity over specificity — style stays constant
  (chibi vinyl figurine, soft global light, slight rosy
  cheeks). Profession / object changes per app.
- Props that tell the function — Alfred silver tray of
  folders, Diane tape reel, Uninstaller trash bag, Halo notch
  pill in cupped palms.
- One emblem letter on the costume / object for 32 × 32
  favicon legibility.
- No text in image other than the one-letter emblem.
- For screenshots: brand colour appears ONLY in the subject's
  materials, rim lighting, own-glow — never in a backdrop
  wash. Transparent alpha required.

## 20. Where rendered assets land

| Path                                                | Contents                              |
| --------------------------------------------------- | ------------------------------------- |
| `mattssoftware/public/{id}/app-icon.png`            | 1024 × 1024 squircle (§3-§18)        |
| `mattssoftware/public/{id}/hero.png`                | 1600 × 1200 transparent (§3-§18)     |
| `mattssoftware/public/{id}/screenshots/*.png`       | Optional app-specific showcase scenes |
| `mattssoftware-launcher/.../Assets.xcassets/{id}.imageset/{id}.png` | 1024 × 1024 same icon                |
| `Apps/{id}-swift/art/AppIcon-source.png`            | Same 1024 × 1024 (script-converted to `.icns`) |
