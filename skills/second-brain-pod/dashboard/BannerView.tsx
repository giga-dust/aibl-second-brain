import { useEffect, useState, type CSSProperties, type ReactNode } from "react";

export const NAVY = "#081b2b";
export const INK = "#f3f6f7";
export const MUTED = "#9db1be";
export const FAINT = "#5f7889";
export const TURQ = "#18dccc";
export const AMBER = "#f2b84b";
export const WELL = "#0d2538";

export type Viewport = { w: number; h: number };

// Measures the banner's own box (not the window): the Pod column caps width below the browser viewport.
export function useViewport(rootEl: HTMLElement | null, heightOverride?: number): Viewport {
  const [vp, setVp] = useState<Viewport>({
    w: typeof window === "undefined" ? 896 : window.innerWidth,
    h: heightOverride ?? (typeof window === "undefined" ? 280 : window.innerHeight),
  });
  useEffect(() => {
    if (!rootEl) return;
    const read = () => {
      const r = rootEl.getBoundingClientRect();
      setVp({ w: Math.round(r.width), h: heightOverride ?? Math.round(r.height) });
    };
    read();
    const ro = new ResizeObserver(read);
    ro.observe(rootEl);
    return () => ro.disconnect();
  }, [rootEl, heightOverride]);
  return vp;
}

export type Tier = "phone" | "mid" | "wide";
export function tierOf(w: number): Tier {
  if (w < 560) return "phone";
  if (w < 860) return "mid";
  return "wide";
}

export const ellipsis: CSSProperties = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  minWidth: 0,
};

export const LOGO_TOKEN = "pk_BwsxwmCiTI-b4w27PQzL1g";
export function logoUrl(domain: string): string {
  return `https://img.logo.dev/${domain}?token=${LOGO_TOKEN}&size=64&format=png`;
}

const WM = "https://upload.wikimedia.org/wikipedia/commons/thumb";
// Marks for the tools people connect most. Product icons come from Wikimedia Commons (960 px is an allowed thumbnail size), company marks from logo.dev.
export const KNOWN_LOGOS: Record<string, string> = {
  hubspot: logoUrl("hubspot.com"),
  salesforce: logoUrl("salesforce.com"),
  attio: logoUrl("attio.com"),
  pipedrive: logoUrl("pipedrive.com"),
  slack: logoUrl("slack.com"),
  notion: logoUrl("notion.so"),
  linear: logoUrl("linear.app"),
  jira: logoUrl("atlassian.com"),
  asana: logoUrl("asana.com"),
  monday: logoUrl("monday.com"),
  github: logoUrl("github.com"),
  snowflake: logoUrl("snowflake.com"),
  gmail: `${WM}/7/7e/Gmail_icon_%282020%29.svg/960px-Gmail_icon_%282020%29.svg.png`,
  "google calendar": `${WM}/a/a5/Google_Calendar_icon_%282020%29.svg/960px-Google_Calendar_icon_%282020%29.svg.png`,
  outlook: `${WM}/c/cc/Microsoft_Outlook_Icon_%282025%E2%80%93present%29.svg/960px-Microsoft_Outlook_Icon_%282025%E2%80%93present%29.svg.png`,
  "outlook calendar": `${WM}/c/cc/Microsoft_Outlook_Icon_%282025%E2%80%93present%29.svg/960px-Microsoft_Outlook_Icon_%282025%E2%80%93present%29.svg.png`,
  teams: `${WM}/0/07/Microsoft_Office_Teams_%282025%E2%80%93present%29.svg/960px-Microsoft_Office_Teams_%282025%E2%80%93present%29.svg.png`,
  "microsoft teams": `${WM}/0/07/Microsoft_Office_Teams_%282025%E2%80%93present%29.svg/960px-Microsoft_Office_Teams_%282025%E2%80%93present%29.svg.png`,
};

// Bare brand mark, never boxed, never tinted. Falls back to the plain name if the image does not load.
export function SourceMark({ name, domain, logo, size = 16 }: { name: string; domain?: string; logo?: string; size?: number }) {
  const [failed, setFailed] = useState(false);
  const src = logo ?? (domain ? logoUrl(domain) : KNOWN_LOGOS[name.trim().toLowerCase()]);
  if (!src || failed) {
    return <span style={{ fontSize: 12, color: INK, ...ellipsis }}>{name}</span>;
  }
  return (
    <img
      src={src}
      alt={name}
      title={name}
      width={size}
      height={size}
      onError={() => setFailed(true)}
      style={{ width: size, height: size, objectFit: "contain", display: "block", flex: "none" }}
    />
  );
}

export function fmtDate(iso: string | undefined): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(undefined, { weekday: "short", day: "numeric", month: "short" });
}

// The three kit glyphs, same geometry as the workshop deck: flow, direction, network.
export function KitGlyph({ kind, size = 18 }: { kind: "flow" | "direction" | "network"; size?: number }) {
  const s = size;
  if (kind === "flow") {
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" aria-hidden="true" style={{ display: "block", flex: "none" }}>
        <path d="M2 12h5l3-6 4 12 3-6h5" fill="none" stroke={TURQ} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (kind === "direction") {
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" aria-hidden="true" style={{ display: "block", flex: "none" }}>
        <path d="M4 20L20 4M20 4h-8M20 4v8" fill="none" stroke={TURQ} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" aria-hidden="true" style={{ display: "block", flex: "none" }}>
      <circle cx="12" cy="12" r="2.6" fill={TURQ} />
      <circle cx="4" cy="6" r="1.8" fill={TURQ} />
      <circle cx="20" cy="7" r="1.8" fill={TURQ} />
      <circle cx="6" cy="19" r="1.8" fill={TURQ} />
      <circle cx="19" cy="18" r="1.8" fill={TURQ} />
      <path d="M12 12L4 6M12 12l8-5M12 12l-6 7M12 12l7 6" stroke={TURQ} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

// Header row: keeps the top-right corner empty for the host's hide / expand / unpin controls.
export function Header({
  kind,
  title,
  meta,
  dense,
}: {
  kind: "flow" | "direction" | "network";
  title: string;
  meta: string;
  dense: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        height: dense ? 30 : 34,
        paddingRight: 112,
        minWidth: 0,
      }}
    >
      <KitGlyph kind={kind} size={dense ? 16 : 18} />
      <span style={{ fontSize: dense ? 14 : 15, fontWeight: 600, color: INK, letterSpacing: "-0.01em", whiteSpace: "nowrap", flex: "none" }}>{title}</span>
      <span style={{ fontSize: 12, color: MUTED, flex: "1 1 auto", ...ellipsis }}>{meta}</span>
    </div>
  );
}

export function Label({ children }: { children: ReactNode }) {
  return <div style={{ fontSize: 11.5, color: MUTED, fontWeight: 500, marginBottom: 6, ...ellipsis }}>{children}</div>;
}

export function StateNote({ kind, text }: { kind: "loading" | "error" | "empty"; text: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 2px", color: kind === "error" ? AMBER : MUTED, fontSize: 13 }}>
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: 999,
          background: kind === "error" ? AMBER : TURQ,
          opacity: kind === "loading" ? 0.6 : 1,
          flex: "none",
        }}
      />
      <span style={ellipsis}>{text}</span>
    </div>
  );
}

// ---------- Second Brain ----------

export type SbItem = { item: string; lens: string; horizon: string; score: number; movement?: string };
export type SbTouch = { name: string; why?: string; drafted?: boolean };
export type SecondBrainData = {
  generatedAt?: string;
  owner?: string;
  label?: string;
  direction: string;
  topFive: SbItem[];
  horizons: { lenses: string[]; horizons: string[]; filled: boolean[][]; nextToFill?: string };
  touches: SbTouch[];
};

export function BannerView({
  data,
  height,
  status = "ok",
  message,
}: {
  data: SecondBrainData | null;
  height?: number;
  status?: "ok" | "loading" | "error" | "empty";
  message?: string;
}) {
  const [rootEl, setRootEl] = useState<HTMLElement | null>(null);
  const vp = useViewport(rootEl, height);
  const tier = tierOf(vp.w);
  const dense = vp.h < 265;
  const roomy = vp.h >= 420;
  const pad = tier === "phone" ? 14 : roomy ? 28 : 20;

  const top = (data?.topFive ?? []).slice(0, dense && tier !== "phone" ? 4 : 5);
  const touches = (data?.touches ?? []).slice(0, 3);
  const grid = data?.horizons;
  const filledCount = grid ? grid.filled.flat().filter(Boolean).length : 0;
  const cellCount = grid ? grid.filled.flat().length : 0;
  const meta =
    tier === "phone"
      ? [fmtDate(data?.generatedAt), data?.label ?? ""].filter(Boolean).join(" · ")
      : [fmtDate(data?.generatedAt), data?.owner ? `for ${data.owner}` : "", data?.label ?? ""].filter(Boolean).join(" · ");

  const columns =
    tier === "wide" ? "minmax(0, 1fr) minmax(0, 1.5fr) minmax(0, 0.85fr)" : tier === "mid" ? "minmax(0, 1.5fr) minmax(0, 0.9fr)" : "minmax(0, 1fr)";

  return (
    <div
      ref={setRootEl}
      style={{
        width: "100%",
        height: height ?? "100vh",
        overflow: "hidden",
        position: "relative",
        background: NAVY,
        color: INK,
        padding: `${dense ? 10 : 12}px ${pad}px ${dense ? 8 : 12}px`,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: dense ? 6 : 10,
      }}
    >
      <Header kind="direction" title="Second Brain" meta={meta} dense={dense} />

      {status !== "ok" || !data ? (
        <StateNote
          kind={status === "ok" ? "empty" : status}
          text={message ?? (status === "loading" ? "Reading data.json" : "No review yet. Run the weekly-review skill to fill this view.")}
        />
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: columns, gap: tier === "phone" ? 8 : 22, flex: 1, minHeight: 0 }}>
          {tier === "wide" && (
            <div style={{ minWidth: 0, overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ minWidth: 0 }}>
                <Label>Direction · four quarters out</Label>
                <div
                  style={{
                    fontSize: roomy ? 17 : 14,
                    lineHeight: 1.35,
                    color: INK,
                    display: "-webkit-box",
                    WebkitLineClamp: roomy ? 6 : dense ? 3 : 4,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {data.direction}
                </div>
              </div>
              {touches.length > 0 && (
                <div style={{ minWidth: 0 }}>
                  <Label>This week's three touches · drafted, not sent</Label>
                  <div style={{ fontSize: 12.5, ...ellipsis }}>{touches.map((t) => t.name).join(" · ")}</div>
                </div>
              )}
            </div>
          )}

          <div style={{ minWidth: 0, overflow: "hidden" }}>
            <Label>Top five · impact × confidence ÷ effort</Label>
            <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: dense ? 3 : 5 }}>
              {top.map((t, i) => (
                <li key={i} style={{ display: "grid", gridTemplateColumns: "20px minmax(0, 1fr) auto", alignItems: "baseline", gap: 8, minWidth: 0 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: TURQ, fontVariantNumeric: "tabular-nums" }}>{i + 1}</span>
                  <span style={{ fontSize: 13, lineHeight: 1.3, ...ellipsis }}>{t.item}</span>
                  <span style={{ fontSize: 11.5, color: MUTED, whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}>
                    {tier === "phone" ? t.score : `${t.lens} · ${t.horizon} · ${t.score}`}
                  </span>
                </li>
              ))}
            </ol>
            {tier === "phone" && (
              <div style={{ fontSize: 12, color: MUTED, marginTop: 8, ...ellipsis }}>
                {grid ? `Horizons ${filledCount}/${cellCount} filled` : ""}
                {touches.length ? ` · touches: ${touches.map((t) => t.name).join(", ")}` : ""}
              </div>
            )}
            {tier === "mid" && touches.length > 0 && (
              <div style={{ fontSize: 12, color: MUTED, marginTop: 10, ...ellipsis }}>
                This week's touches, drafted not sent: <span style={{ color: INK }}>{touches.map((t) => t.name).join(" · ")}</span>
              </div>
            )}
          </div>

          {tier !== "phone" && grid && (
            <div style={{ minWidth: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <Label>
                Horizons · {filledCount} of {cellCount} filled
              </Label>
              <HorizonGrid grid={grid} dense={dense} roomy={roomy} />
              {grid.nextToFill && !dense && <div style={{ fontSize: 11.5, color: MUTED, marginTop: 6, ...ellipsis }}>Next to fill: {grid.nextToFill}</div>}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// 3 lenses × 3 horizons. Filled cells are turquoise, empty cells are outlined with the same color at low opacity.
function HorizonGrid({ grid, dense, roomy }: { grid: SecondBrainData["horizons"]; dense: boolean; roomy: boolean }) {
  const cell = roomy ? 30 : dense ? 18 : 22;
  const gap = 4;
  const labelW = 58;
  return (
    <div style={{ display: "grid", gridTemplateColumns: `${labelW}px repeat(${grid.horizons.length}, ${cell}px)`, gap, alignItems: "center", minWidth: 0 }}>
      <span />
      {grid.horizons.map((h, i) => (
        <span key={i} style={{ fontSize: 10.5, color: MUTED, textAlign: "center", fontVariantNumeric: "tabular-nums" }}>
          {h}
        </span>
      ))}
      {grid.lenses.map((lens, r) => (
        <Row key={lens} lens={lens} filled={grid.filled[r] ?? []} cell={cell} />
      ))}
    </div>
  );
}

function Row({ lens, filled, cell }: { lens: string; filled: boolean[]; cell: number }) {
  return (
    <>
      <span style={{ fontSize: 11, color: MUTED, ...ellipsis }}>{lens}</span>
      {filled.map((f, c) => (
        <span
          key={c}
          aria-label={`${lens}: ${f ? "filled" : "empty"}`}
          style={{
            width: cell,
            height: cell,
            borderRadius: 3,
            background: f ? TURQ : "transparent",
            boxShadow: f ? "none" : `inset 0 0 0 1.5px ${TURQ}55`,
            display: "inline-block",
          }}
        />
      ))}
    </>
  );
}
