# Scroll Harbor hero: character sheet, storyboard, spec sheet (approved)

Headline (the page's single H1): **Every storm has a safe harbor.**
Generator: Higgsfield (Wan 3.0 first/last frame). Method: ~/.claude/skills/scroll-world.

## 1. Character sheet (the consistency rules)
Consistency is easiest when the same few things appear in every scene and each has a fixed, easy-to-spot trait. People are small in frame until the last scene.

| Item | Fixed description (copied word for word into every prompt) | Appears in |
|---|---|---|
| **The boat** | Small wooden fishing boat, cream hull, navy stripe, one warm yellow lantern at the bow | Scenes 1–3, seen again moored in 4 |
| **The parent** | Adult in a bright yellow rain coat, short dark hair, standing at the tiller, face never closer than medium-wide | Scenes 1–4 |
| **The child** | About 8 years old, teal rain jacket, sitting at the bow beside the lantern | Scenes 1–4 |
| **The family on shore** | Two figures on the dock with a warm lamp: an adult in a cream knit sweater and a teen in a navy hoodie | Scene 4 only |
| **The lighthouse** | White tower with a navy band, teal door, warm white beam | Scenes 1–4 |

Why this works: the two travelers are recognizable from clothing color even when the face is tiny, and the only scene with faces in view is the last. Video models drift faces over time, so we avoid needing them in scenes 1–3.

How I lock it in (after approval): generate one reference sheet per character plus the boat and lighthouse in Higgsfield, save them as reference elements (`manage_reference_elements`), and attach them to every still prompt. Each clip then starts from the previous clip's real last frame (skill Step 5), which carries the look forward. You approve the reference sheet images before anything else is made.

Rules for the people: generic family, no names, no claims about them being clients or staff, no text on clothing.

## 2. Storyboard (4 scenes, 3 connectors; scroll runs top to bottom)
Camera style: fly-through (dive in, pull up and out, glide to the next). Light moves from cold blue-grey to warm gold as you scroll.

| # | Shot | What we see | Camera | On-screen words (all provable) | Light |
|---|---|---|---|---|---|
| 1 | Dive 1 — "The Storm" | Dark choppy water, the boat small in frame, parent at the tiller, child at the lantern, lighthouse beam far off | Start high and wide, descend to the boat, ease toward the beam | **Every storm has a safe harbor.** (H1) + subline "Counseling and recovery support in Tulsa for children, teens, and adults. Same-week appointments." | Cold blue-grey dusk |
| C1 | Connector 1 | Pull up and out over the waves, glide toward the beam, descend to the harbor mouth | Aerial, forward | none | Blue turning teal |
| 2 | Dive 2 — "The Beam" | The boat follows the beam, rocks, steadies; the child points at the light | Close glide beside the boat | **One call. In within 48 hours of finished paperwork.** | Teal with a warm beam |
| C2 | Connector 2 | Pull up, drift over the breakwater into the harbor | Aerial, forward | none | Teal to amber |
| 3 | Dive 3 — "The Harbor" | Calm water, dock lights, the boat slows, ropes thrown | Slow push-in at water level | **Licensed counselors for children, teens, and adults.** | Warm amber dusk |
| C3 | Connector 3 | Rise over the dock, turn toward the shore | Aerial, forward | none | Amber to gold |
| 4 | Dive 4 — "The Shore" | Golden hour, the family on the dock with a lamp, parent and child step off, the lighthouse behind | Slow descent to a wide, warm hold | **Welcome to Safe Harbor.** Where recovery meets a second chance. Call (918) 553-5746. Medicaid/SoonerCare, Blue Cross Blue Shield, Aetna, United Healthcare. | Golden hour |

Scroll pacing (skill: `scroll`/`linger`): scene 1 and scene 4 get longer dwell (1.6 and 1.8 viewport heights), scenes 2–3 are brisker (1.2). Connectors 0.9. The H1 is shown on landing before any scroll.

## 3. Spec sheet
**Look:** cinematic painterly, soft film grain, no text, no logos, no brand names, no watermarks. Palette: teal `#14b8a6`, navy `#1e293b`, cream `#fef9e8`, warm amber for lamps and beam only. Fonts: the site's existing serif heading and sans body (max 2 fonts).

**Generation (Higgsfield):** checked again for a `KIE_API_KEY` (Windows user/machine/process environment, `~/.claude/settings*.json`, `.env.local` files): none found, so Higgsfield is the generator. It is connected with **518.5 credits (Plus plan)**. Video model: **Wan 3.0** (supports first-frame and last-frame images, 480p/720p/1080p, 16:9 and 9:16, 2–30 s), which is what the skill needs for frame-locked connectors. Fallback if Wan's look is wrong in the test: FLUX 3 Video (start and end frame, 720p/1080p). One video model for the whole chain; audio off. Stills 16:9 at the highest available resolution. Previz at 480p first, final pass only after you approve the previz. Budget: 4 stills + 4 dives + 3 connectors = 11 generations (22 with the phone chain), so with 518.5 credits I quote the real cost from one 480p test clip before any batch and we choose desktop-only vs. phone chain from that number. If you add a `KIE_API_KEY` later I can switch the video leg to Kie.ai.

**Output files**
| Item | Desktop | Phone |
|---|---|---|
| Stills (posters) | 1920x1080 WebP, under 100 KB for scene 1 (this is the LCP image) | 720x1280 WebP |
| Clips | 1080p H.264, crf 20, `-g 8`, no audio, faststart; about 6 MB total | 720 wide portrait, `-g 4`, crf 23; about 3 MB total |
| Duration | dives 5–8 s, connectors 4–5 s | same |
| Poster alt text | written for each scene | same |

**Page behavior:** first paint is the scene 1 still; clips load lazily after, nearby clips prefetch; `prefers-reduced-motion` shows stills only; one H1 on the page; 988 banner and the call button stay visible; engine titles use non-H1 tags; no "scroll-jacking" of the page's normal scroll (the page still scrolls normally, the video is scrubbed by position).

**Performance targets:** homepage Lighthouse performance 90+ (today 76), LCP under 2.5 s (today 6.9 s), layout shift 0, total hero weight about 6 MB desktop / 3 MB phone (today 4 MB with a 2.8 MB video).

**Accessibility:** captions are real HTML text (not baked into video), contrast checked against the darkest frame, focusable call button, alt text on stills.

**Code (after generation is approved):** new `src/components/home/ScrollHarborHero.tsx` + `public/scroll-harbor/` assets + engine file from the skill; edit `src/app/page.tsx` to use it; keep the old `HeroSection` until you sign off. Branch `feat/scroll-harbor-hero` off `fix/audit-critical`. No push to main.

## 4. Checkpoints (I stop at each)
1. You approve this plan = approve the character sheet, storyboard and spec.
2. I generate the reference sheet images (characters, boat, lighthouse) and 4 stills; you approve how they look. Credits start being used here, after I quote the cost.
3. Previz clips at low resolution; you approve the flow.
4. Final render, encode, wire in, QA (seam frames, fast scroll on throttled CPU, phone, reduced motion, Lighthouse before/after), local preview. You decide about pushing.

## Verification
Seam frames compared at each boundary; `videoWidth < videoHeight` for phone clips; Lighthouse run on a local production build against the targets above; truth check that every on-screen line matches the confirmed facts (48 hours after paperwork, same-week, four insurers, all ages); built HTML has one H1.
