'use client'

import { useEffect, useRef, useState } from 'react'

// Scroll-scrubbed hero (method from the scroll-world skill). Six clips link seven scenes;
// each clip starts on one still and ends on the next, so seams match. The timeline T runs
// in "clip units": T=0 is scene 1 ... T=6 is scene 7, then a short end hold.
const CLIP_COUNT = 6
const TOTAL_T = 6.8
const VIEWPORTS_PER_UNIT = 1.1
const PHONE_HREF = 'tel:9185535746'
const PHONE_LABEL = '(918) 553-5746'

const POSTERS = [1, 2, 3, 4, 5, 6, 7].map((n) => `/scroll-harbor/s${n}.webp`)
const CLIPS = [1, 2, 3, 4, 5, 6].map((n) => `/scroll-harbor/c${n}.mp4`)

const POSTER_ALTS = [
  'A family in a small boat under gathering storm clouds at dusk',
  'The family in the boat crossing dark waves in heavy rain',
  'The family huddled in the boat in thick fog, the lantern burning low',
  'A lighthouse beam breaks through the fog as the family turns toward it',
  'The boat glides into a calm harbor at blue hour with warm dock lights',
  'The family steps onto the dock together at golden hour',
  'The whole family smiling together on the dock at sunset',
]

type Line = { text: string; from: number; to: number }

// Approved script (tasks/scroll-harbor-script.md). Each line fades in, holds, fades out.
const LINES: Line[] = [
  { text: "It doesn't start as a storm.", from: 0, to: 0.5 },
  { text: "The worry that won't stop.", from: 0.62, to: 0.88 },
  { text: 'The arguments every night.', from: 0.88, to: 1.14 },
  { text: 'Coping the only way you know how.', from: 1.14, to: 1.42 },
  { text: 'Calls that go unanswered.', from: 1.62, to: 1.88 },
  { text: 'Weeks on a waitlist.', from: 1.88, to: 2.14 },
  { text: 'Forms that go nowhere.', from: 2.14, to: 2.42 },
  { text: 'Then, one call.', from: 2.62, to: 2.88 },
  { text: 'In within 48 hours of finished paperwork.', from: 2.88, to: 3.14 },
  { text: 'Medicaid, Blue Cross Blue Shield, Aetna, United Healthcare.', from: 3.14, to: 3.44 },
  { text: 'The same counselor, every visit.', from: 3.62, to: 3.88 },
  { text: 'Children, teens, and adults.', from: 3.88, to: 4.14 },
  { text: 'Recovery support, without judgment.', from: 4.14, to: 4.44 },
]

const TAGLINE_FROM = 5.75
const CALL_FROM = 6.15
const BUTTON_FROM = 6.3

const clamp = (x: number, a = 0, b = 1) => Math.min(b, Math.max(a, x))
const smooth = (x: number) => {
  const c = clamp(x)
  return c * c * (3 - 2 * c)
}
// Fade in over the first FADE units, fade out over the last FADE units.
const windowOpacity = (t: number, from: number, to: number) => {
  const FADE = 0.07
  const fadeIn = from <= 0 ? 1 : (t - from) / FADE // the opening line is already there at the start
  return smooth(Math.min(fadeIn, (to - t) / FADE))
}

export default function ScrollHarborHero() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const videoLayerRef = useRef<HTMLDivElement>(null)
  const posterRefs = useRef<(HTMLImageElement | null)[]>([])
  const lineRefs = useRef<(HTMLParagraphElement | null)[]>([])
  const taglineRef = useRef<HTMLHeadingElement>(null)
  const callRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const brandRef = useRef<HTMLParagraphElement>(null)
  const hintRef = useRef<HTMLDivElement>(null)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setReducedMotion(true)
      return
    }
    const coarse = window.matchMedia('(hover: none) and (pointer: coarse)').matches
    const smallScreen = window.matchMedia('(max-width: 860px)')
    const canPlayVideo = () => !coarse && !smallScreen.matches

    // The site header is fixed on top of the page; start the hero just below it so nothing in the picture is hidden.
    function fitBelowHeader() {
      const header = document.querySelector('header')
      const sticky = stickyRef.current
      if (!header || !sticky) return
      const offset = Math.round(header.getBoundingClientRect().height)
      if (Math.abs(parseFloat(getComputedStyle(sticky).top) - offset) < 2) return
      sticky.style.top = `${offset}px`
      sticky.style.height = `calc(100vh - ${offset}px)`
    }
    fitBelowHeader()

    type ClipState = { video: HTMLVideoElement | null; loading: boolean; ready: boolean; painted: boolean; cur: number }
    const clips: ClipState[] = CLIPS.map(() => ({ video: null, loading: false, ready: false, painted: false, cur: 0 }))
    let timeline = 0
    let clipIndex = 0
    let clipLocal = 0
    let ticking = false
    let rafId = 0

    function loadClip(i: number) {
      const state = clips[i]
      if (!state || state.loading || !videoLayerRef.current || !canPlayVideo()) return
      state.loading = true
      fetch(CLIPS[i])
        .then((r) => (r.ok ? r.blob() : Promise.reject(new Error('clip missing'))))
        .then((blob) => {
          const v = document.createElement('video')
          v.muted = true
          v.playsInline = true
          v.preload = 'auto'
          v.setAttribute('muted', '')
          v.setAttribute('playsinline', '')
          v.setAttribute('aria-hidden', 'true')
          v.className = 'absolute inset-0 h-full w-full object-cover'
          v.style.opacity = '0'
          v.style.zIndex = String(10 + i)
          v.src = URL.createObjectURL(blob)
          v.addEventListener('loadedmetadata', () => {
            state.ready = true
            update()
          })
          v.addEventListener('seeked', () => {
            state.painted = true
            update()
          })
          videoLayerRef.current?.appendChild(v)
          state.video = v
        })
        .catch(() => {
          state.loading = false
        })
    }

    function update() {
      const wrap = wrapRef.current
      if (!wrap) return
      const vh = window.innerHeight
      const scrollable = wrap.offsetHeight - vh
      const progress = scrollable > 0 ? clamp(-wrap.getBoundingClientRect().top / scrollable) : 0
      timeline = progress * TOTAL_T
      const videoT = Math.min(timeline, CLIP_COUNT)
      clipIndex = Math.min(Math.floor(videoT), CLIP_COUNT - 1)
      clipLocal = videoT - clipIndex

      // Load the current clip and its neighbors ahead of the visitor.
      loadClip(clipIndex)
      if (clipLocal > 0.35) loadClip(clipIndex + 1)
      if (clipIndex > 0) loadClip(clipIndex - 1)

      // Posters cross-dissolve (the only visuals on phones; a fallback under the video on desktop).
      posterRefs.current.forEach((img, k) => {
        if (!img) return
        img.style.opacity = String(k === 0 && timeline === 0 ? 1 : smooth(1 - Math.abs(videoT - k)))
      })

      // Clips at or before the current one are shown; later ones are on top, so the current is visible.
      clips.forEach((state, i) => {
        if (!state.video) return
        state.video.style.opacity = state.painted && i <= clipIndex ? '1' : '0'
      })

      LINES.forEach((line, i) => {
        const node = lineRefs.current[i]
        if (!node) return
        const o = windowOpacity(timeline, line.from, line.to)
        node.style.opacity = String(o)
        node.style.transform = `translateY(${((1 - o) * 14).toFixed(1)}px)`
      })

      const fadeIn = (from: number) => smooth((timeline - from) / 0.2)
      const setFade = (node: HTMLElement | null, from: number) => {
        if (!node) return
        const o = fadeIn(from)
        node.style.opacity = String(o)
        node.style.transform = `translateY(${((1 - o) * 14).toFixed(1)}px)`
        node.style.pointerEvents = o > 0.5 ? 'auto' : 'none'
      }
      setFade(taglineRef.current, TAGLINE_FROM)
      setFade(callRef.current, CALL_FROM)
      setFade(buttonRef.current, BUTTON_FROM)
      setFade(brandRef.current, BUTTON_FROM + 0.1)
      if (hintRef.current) hintRef.current.style.opacity = String(clamp(1 - progress * 40))
      ticking = false
    }

    function loop() {
      const coarseStep = 0.008
      for (let i = Math.max(0, clipIndex - 1); i <= Math.min(CLIP_COUNT - 1, clipIndex + 1); i++) {
        const state = clips[i]
        const v = state.video
        if (!v || !state.ready || v.seeking) continue
        const target = i < clipIndex ? 1 : i > clipIndex ? 0 : clipLocal
        state.cur += (target - state.cur) * 0.18
        const t = clamp(state.cur, 0, 0.999) * (v.duration || 1)
        if (Math.abs(v.currentTime - t) > coarseStep) {
          try {
            v.currentTime = t
          } catch {
            /* seek rejected, try again next frame */
          }
        }
      }
      rafId = requestAnimationFrame(loop)
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    window.addEventListener('resize', fitBelowHeader)
    update()
    rafId = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('resize', fitBelowHeader)
      cancelAnimationFrame(rafId)
      clips.forEach((state) => {
        if (state.video) {
          URL.revokeObjectURL(state.video.src)
          state.video.remove()
        }
      })
    }
  }, [])

  if (reducedMotion) {
    return (
      <section className="relative flex min-h-[85vh] items-end bg-navy-900">
        <img src={POSTERS[6]} alt={POSTER_ALTS[6]} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/30 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-20 text-center md:text-left">
          <h1 className="font-serif text-5xl text-[#f0f0f0] md:text-7xl">Every storm has a safe harbor.</h1>
          <p className="mt-6 font-serif text-2xl text-[#f0f0f0]">Give us a call.</p>
          <a
            href={PHONE_HREF}
            className="mt-6 inline-block rounded-full bg-teal-500 px-8 py-4 text-lg font-bold text-white hover:bg-teal-600"
          >
            {PHONE_LABEL}
          </a>
        </div>
      </section>
    )
  }

  const wrapperHeight = `${Math.round((TOTAL_T * VIEWPORTS_PER_UNIT + 1) * 100)}vh`

  return (
    <section ref={wrapRef} style={{ height: wrapperHeight }} className="relative bg-navy-900" aria-label="Safe Harbor story">
      <div
        ref={stickyRef}
        className="sticky top-[124px] h-[calc(100vh-124px)] overflow-hidden md:top-[132px] md:h-[calc(100vh-132px)] xl:top-[164px] xl:h-[calc(100vh-164px)]"
      >
        {/* scene stills (first paint, phone visuals, fallback under the video) */}
        <div className="absolute inset-0">
          {POSTERS.map((src, k) => (
            <img
              key={src}
              ref={(node) => {
                posterRefs.current[k] = node
              }}
              src={src}
              srcSet={`${src.replace('.webp', '-m.webp')} 1000w, ${src} 1920w`}
              sizes="100vw"
              alt={POSTER_ALTS[k]}
              {...(k === 0 ? { fetchPriority: 'high' as const } : { loading: 'lazy' as const })}
              decoding="async"
              style={{ opacity: k === 0 ? 1 : 0 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ))}
        </div>
        {/* desktop video clips are added here by the effect */}
        <div ref={videoLayerRef} className="absolute inset-0" />

        {/* readability gradient */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/70 via-black/20 to-black/20" />

        {/* story lines, one at a time */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 px-6 pb-28 md:px-16 md:pb-32">
          <div className="relative mx-auto h-24 max-w-5xl md:h-32">
            {LINES.map((line, i) => (
              <p
                key={line.text}
                ref={(node) => {
                  lineRefs.current[i] = node
                }}
                style={{ opacity: i === 0 ? 1 : 0 }}
                className="absolute inset-x-0 bottom-0 font-serif text-3xl leading-tight text-[#f0f0f0] drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] md:text-5xl"
              >
                {line.text}
              </p>
            ))}
          </div>
        </div>

        {/* the ending: tagline (the page's only H1), a simple invitation, the call button */}
        <div className="absolute inset-x-0 bottom-0 z-40 px-6 pb-16 md:px-16 md:pb-20">
          <div className="mx-auto max-w-5xl text-center md:text-left">
            <h1
              ref={taglineRef}
              style={{ opacity: 0 }}
              className="font-serif text-4xl leading-tight text-[#f0f0f0] drop-shadow-[0_2px_16px_rgba(0,0,0,0.65)] md:text-7xl"
            >
              Every storm has a safe harbor.
            </h1>
            <p
              ref={callRef}
              style={{ opacity: 0 }}
              className="mt-4 font-serif text-2xl text-[#f0f0f0] drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] md:text-3xl"
            >
              Give us a call.
            </p>
            <a
              ref={buttonRef}
              href={PHONE_HREF}
              style={{ opacity: 0, pointerEvents: 'none' }}
              className="mt-5 inline-block rounded-full bg-teal-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-teal-600"
            >
              {PHONE_LABEL}
            </a>
            <p ref={brandRef} style={{ opacity: 0 }} className="mt-4 text-sm tracking-wide text-[#f0f0f0]/80">
              Safe Harbor Behavioral Health, Tulsa
            </p>
          </div>
        </div>

        <div
          ref={hintRef}
          className="pointer-events-none absolute inset-x-0 bottom-6 z-40 text-center text-xs uppercase tracking-[0.3em] text-[#f0f0f0]/80"
        >
          Scroll
        </div>
      </div>
    </section>
  )
}
