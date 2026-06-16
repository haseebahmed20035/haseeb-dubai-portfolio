import { useEffect, useState, useRef, lazy, Suspense } from 'react'
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring
} from 'framer-motion'
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowDown,
  FiDownload
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { profile } from '../data/portfolio.js'

// 3D scene is heavy (three.js) — load it lazily and ONLY on desktop.
const Hero3D = lazy(() => import('./Hero3D.jsx'))

// Staggered entrance animation for the hero contents.
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

// -------------------------------------------------------------------------
// Magnetic — wraps a button/link so it is gently "pulled" toward the cursor
// when hovered, then springs back. Pure Framer Motion, no extra deps.
// -------------------------------------------------------------------------
function Magnetic ({ children, strength = 0.35 }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.2 })
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.2 })

  function onMove (e) {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  function onLeave () {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className='inline-block'
    >
      {children}
    </motion.div>
  )
}

export default function Hero () {
  // Cycle through the rotating job titles.
  const [titleIndex, setTitleIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(
      () => setTitleIndex(i => (i + 1) % profile.titles.length),
      2600
    )
    return () => clearInterval(id)
  }, [])

  // Only mount the WebGL scene on desktop + when motion is allowed.
  const [show3D, setShow3D] = useState(false)
  useEffect(() => {
    const wide = window.matchMedia('(min-width: 1024px)').matches
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    setShow3D(wide && !reduced)
  }, [])

  // Mouse-parallax for the glow orbs — the background subtly "looks at"
  // the cursor, giving the whole hero a sense of depth.
  const ox = useMotionValue(0)
  const oy = useMotionValue(0)
  const orbX = useSpring(ox, { stiffness: 60, damping: 20 })
  const orbY = useSpring(oy, { stiffness: 60, damping: 20 })
  function handleParallax (e) {
    const { innerWidth, innerHeight } = window
    ox.set((e.clientX / innerWidth - 0.5) * 50)
    oy.set((e.clientY / innerHeight - 0.5) * 50)
  }

  // Pre-built links
  const mailto = `mailto:${profile.email}`
  const whatsappLink = `https://wa.me/${
    profile.whatsapp
  }?text=${encodeURIComponent(
    'Hi Haseeb, I saw your portfolio and would like to connect.'
  )}`

  const socials = [
    { icon: <FiGithub />, href: profile.github, label: 'GitHub' },
    { icon: <FiLinkedin />, href: profile.linkedin, label: 'LinkedIn' },
    { icon: <FiMail />, href: mailto, label: 'Email' },
    { icon: <FaWhatsapp />, href: whatsappLink, label: 'WhatsApp' }
  ]

  return (
    <section
      id='home'
      onMouseMove={handleParallax}
      className='relative flex items-center justify-center min-h-screen px-6 overflow-hidden'
    >
      {/* Real 3D WebGL scene (desktop only) */}
      {show3D && (
        <Suspense fallback={null}>
          <Hero3D />
        </Suspense>
      )}

      {/* Atmospheric glows with mouse parallax */}
      <motion.div
        style={{ x: orbX, y: orbY }}
        className='pointer-events-none absolute left-1/4 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]'
      />
      <motion.div
        style={{ x: orbY, y: orbX }}
        className='pointer-events-none absolute bottom-1/4 right-1/4 h-72 w-72 translate-x-1/2 rounded-full bg-accent/15 blur-[120px]'
      />

      <motion.div
        variants={container}
        initial='hidden'
        animate='show'
        className='relative z-10 max-w-4xl mx-auto text-center'
      >
        {/* Location + Visa Info */}
        <motion.div
          variants={item}
          className='flex flex-col items-center gap-3 mx-auto mt-12 mb-7'
        >
          <div className='inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-black rounded-full glass text-muted'>
            <span className='relative flex w-2 h-2'>
              <span className='absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-accent' />
              <span className='relative inline-flex w-2 h-2 rounded-full bg-accent' />
            </span>
            {profile.location}
          </div>

          <div className='inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-muted'>
            <span className='mr-1 text-text'>Visa Status:</span>
            {profile.visaStatus}
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className='text-5xl font-extrabold leading-tight font-display sm:text-7xl'
        >
          Hi, I&apos;m <span className='text-gradient'>{profile.name}</span>
        </motion.h1>

        {/* Rotating title */}
        <motion.div
          variants={item}
          className='flex items-center justify-center mt-5 font-mono text-lg h-9 text-primary sm:text-2xl'
        >
          <span className='text-muted'>&lt;</span>
          <AnimatePresence mode='wait'>
            <motion.span
              key={titleIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className='mx-2'
            >
              {profile.titles[titleIndex]}
            </motion.span>
          </AnimatePresence>
          <span className='text-muted'>/&gt;</span>
        </motion.div>

        {/* Intro */}
        <motion.p
          variants={item}
          className='max-w-2xl mx-auto text-base mt-7 text-muted sm:text-lg'
        >
          {profile.intro}
        </motion.p>

        {/* CTA buttons — now magnetic */}
        <motion.div
          variants={item}
          className='flex flex-wrap items-center justify-center gap-4 mt-9'
        >
          <Magnetic>
            <a
              href='#projects'
              className='inline-block py-3 font-medium transition-transform rounded-full bg-gradient-to-r from-primary to-accent px-7 text-bg hover:scale-105'
            >
              View Projects
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href='#contact'
              className='inline-block py-3 font-medium transition-colors rounded-full glass px-7 text-text hover:text-primary'
            >
              Get in Touch
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={profile.resumeUrl}
              download
              className='inline-flex items-center gap-2 py-3 font-medium transition-colors rounded-full glass px-7 text-text hover:text-accent'
            >
              <FiDownload /> Download Resume
            </a>
          </Magnetic>
        </motion.div>

        {/* Social icons */}
        <motion.div
          variants={item}
          className='flex items-center justify-center gap-4 mt-9'
        >
          {socials.map(s => (
            <a
              key={s.label}
              href={s.href}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={s.label}
              className='grid text-lg transition-all rounded-full h-11 w-11 place-items-center glass text-muted hover:-translate-y-1 hover:text-primary'
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll-down indicator */}
      <motion.a
        href='#about'
        aria-label='Scroll down'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className='absolute -translate-x-1/2 bottom-8 left-1/2 text-muted'
      >
        <FiArrowDown className='animate-bounce' size={22} />
      </motion.a>
    </section>
  )
}
