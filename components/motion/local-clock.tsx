"use client"

import { useEffect, useState } from "react"


export function LocalClock({ locale }: { locale: string }) {
  const [now, setNow] = useState<string>("--:--:--")
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat(locale === "es" ? "es-CO" : "en-US", {
      timeZone: "America/Bogota",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })
    const tick = () => setNow(fmt.format(new Date()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [locale])
  return <span className="tabular-nums">{now}</span>
}
