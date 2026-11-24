import { CountUp } from "@/components/ui/count-up"
import { LiveDot } from "@/components/ui/live-dot"
import { getLatestVersion, getMonthlyDownloads } from "@/lib/npm"
import type { Locale } from "@/types/i18n"

/** Live npm figures. Renders nothing when npm cannot be reached. */
export async function NpmStats({ locale, downloadsLabel, versionLabel }: { locale: Locale; downloadsLabel: string; versionLabel: string }) {
  const [downloads, version] = await Promise.all([getMonthlyDownloads(), getLatestVersion()])
  if (downloads === null && version === null) return null
  return (
    <dl className="flex flex-wrap items-end gap-x-12 gap-y-6">
      {downloads !== null ? (
        <div className="flex flex-col-reverse">
          <dt className="mt-3 eyebrow flex items-center gap-2 text-invert-muted">
            <LiveDot />
            {downloadsLabel}
          </dt>
          <dd className="display text-[clamp(3rem,6vw,5.5rem)] tabular-nums">
            <CountUp to={downloads} locale={locale} />
          </dd>
        </div>
      ) : null}
      {version ? (
        <div className="flex flex-col-reverse">
          <dt className="mt-3 eyebrow text-invert-muted">{versionLabel}</dt>
          <dd className="display text-[clamp(3rem,6vw,5.5rem)]">v{version}</dd>
        </div>
      ) : null}
    </dl>
  )
}
