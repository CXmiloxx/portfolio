"use client"

import { useEffect, useRef } from "react"

import { THEME_EVENT } from "@/lib/theme"

import { hasFinePointer, prefersReducedMotion } from "./gsap"

export function NetworkField() {
  const canvas = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = canvas.current!
    const ctx = c.getContext("2d")!
    let ink = "#edeae3"
    let signal = "#ff5a1f"
    const readColors = () => {
      const css = getComputedStyle(document.documentElement)
      ink = css.getPropertyValue("--ink").trim() || ink
      signal = css.getPropertyValue("--signal").trim() || signal
      if (prefersReducedMotion()) draw(0)
    }
    // Touch screens get a still frame: no pointer to react to, and it saves battery.
    const rm = prefersReducedMotion() || !hasFinePointer()
    let w = 0
    let h = 0
    let dpr = 1
    let nodes: { x: number; y: number; ox: number; oy: number; vx: number; vy: number; hot: number }[] = []
    const mouse = { x: -9999, y: -9999 }
    let raf = 0
    let visible = true

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = c.clientWidth
      h = c.clientHeight
      c.width = w * dpr
      c.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const gap = w < 700 ? 70 : 86
      nodes = []
      for (let y = gap / 2; y < h; y += gap) {
        for (let x = gap / 2; x < w; x += gap) {
          const jx = x + (Math.random() - 0.5) * gap * 0.6
          const jy = y + (Math.random() - 0.5) * gap * 0.6
          nodes.push({ x: jx, y: jy, ox: jx, oy: jy, vx: 0, vy: 0, hot: 0 })
        }
      }
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h)
      const R = 190
      for (const n of nodes) {
        const dx = mouse.x - n.x
        const dy = mouse.y - n.y
        const dist = Math.hypot(dx, dy)
        const target = dist < R ? 1 - dist / R : 0
        n.hot += (target - n.hot) * 0.08
        if (!rm) {
          const drift = Math.sin(t / 1600 + n.ox * 0.02) * 3
          const pull = dist < R ? (1 - dist / R) * 18 : 0
          const tx = n.ox + drift + (dist > 0 ? (dx / dist) * pull : 0)
          const ty = n.oy + Math.cos(t / 1800 + n.oy * 0.02) * 3 + (dist > 0 ? (dy / dist) * pull : 0)
          n.vx += (tx - n.x) * 0.06
          n.vy += (ty - n.y) * 0.06
          n.vx *= 0.78
          n.vy *= 0.78
          n.x += n.vx
          n.y += n.vy
        }
      }
      ctx.lineWidth = 1
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        if (a.hot < 0.02) continue
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          if (b.hot < 0.02) continue
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d > 130) continue
          ctx.globalAlpha = Math.min(a.hot, b.hot) * 0.9
          ctx.strokeStyle = signal
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }
      for (const n of nodes) {
        ctx.globalAlpha = 0.18 + n.hot * 0.82
        ctx.fillStyle = n.hot > 0.15 ? signal : ink
        const s = 1.2 + n.hot * 2.2
        ctx.fillRect(n.x - s / 2, n.y - s / 2, s, s)
      }
      ctx.globalAlpha = 1
    }

    const loop = (t: number) => {
      if (visible) draw(t)
      raf = requestAnimationFrame(loop)
    }

    const onMove = (e: PointerEvent) => {
      const r = c.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting))
    io.observe(c)
    build()
    readColors()
    window.addEventListener(THEME_EVENT, readColors)
    if (rm) draw(0)
    else raf = requestAnimationFrame(loop)
    window.addEventListener("resize", build)
    window.addEventListener("pointermove", onMove, { passive: true })
    document.addEventListener("pointerleave", onLeave)
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener("resize", build)
      window.removeEventListener(THEME_EVENT, readColors)
      window.removeEventListener("pointermove", onMove)
      document.removeEventListener("pointerleave", onLeave)
    }
  }, [])
  return <canvas ref={canvas} className="absolute inset-0 h-full w-full" aria-hidden />
}
