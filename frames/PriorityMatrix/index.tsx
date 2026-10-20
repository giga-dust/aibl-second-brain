import { FrameRoot } from "@dust/frame";
import { useFile } from "@dust/react-hooks";
import { AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { theme } from "./theme";

type Item = {
  id: number | string;
  item: string;
  lens: string;
  horizon: "1Q" | "2Q" | "4Q" | string;
  impact: number;
  effort: number;
  confidence?: number;
  urgency?: number;
  score?: number;
  quadrant?: string;
  owner?: string;
  nextStep?: string;
};
type Matrix = { generatedAt?: string; owner?: string; direction?: string; items?: Item[]; note?: string };

const NAVY = "#081b2b";
const TURQUOISE = "#18dccc";
const SOFT = "#e8f9f7";
const MUTED = "#526170";
const LINE = "#d9e2e8";
const DARK_TEAL = "#1f9d92";
const LIGHT = "#8feae2";

const HORIZON_COLOR: Record<string, string> = { "1Q": NAVY, "2Q": DARK_TEAL, "4Q": LIGHT };
const QUADRANTS = [
  { key: "Quick win", label: "Quick wins", hint: "do this quarter", col: 1, row: 1 },
  { key: "Big bet", label: "Big bets", hint: "plan over two quarters", col: 2, row: 1 },
  { key: "Fill-in", label: "Fill-ins", hint: "delegate, automate, agent", col: 1, row: 2 },
  { key: "Time sink", label: "Time sinks", hint: "drop or park", col: 2, row: 2 },
];

function quadrantOf(it: Item): string {
  if (it.quadrant) return it.quadrant;
  const high = it.impact >= 4;
  const low = it.effort <= 2;
  if (high && low) return "Quick win";
  if (high) return "Big bet";
  if (low) return "Fill-in";
  return "Time sink";
}

export default function App() {
  const file = useFile("./matrix.json");
  const [matrix, setMatrix] = useState<Matrix | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [active, setActive] = useState<Item | null>(null);

  useEffect(() => {
    if (!file) return;
    let cancelled = false;
    file.text().then((raw) => {
      try {
        const parsed = JSON.parse(raw) as Matrix;
        if (!cancelled) setMatrix(parsed);
      } catch {
        if (!cancelled) setError("matrix.json is not valid JSON.");
      }
    }).catch(() => { if (!cancelled) setError("Could not read matrix.json."); });
    return () => { cancelled = true; };
  }, [file]);

  const items = matrix?.items ?? [];
  const generated = matrix?.generatedAt ? new Date(matrix.generatedAt) : null;
  const top = [...items].sort((a, b) => (b.score ?? 0) - (a.score ?? 0)).slice(0, 5);

  return (
    <FrameRoot theme={theme} className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-5xl space-y-6 px-6 py-8">
        <header className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: MUTED }}>Second Brain · prioritization matrix</p>
          <h1 className="text-3xl font-semibold">{matrix?.owner ? `${matrix.owner}` : "Prioritization matrix"}</h1>
          {matrix?.direction && <p className="text-sm">{matrix.direction}</p>}
          <p className="text-sm" style={{ color: MUTED }}>
            {generated && !Number.isNaN(generated.getTime()) ? `Scored ${generated.toLocaleDateString()}. ` : ""}
            Impact up, effort right. Color is the horizon. Hover or tap a dot.
          </p>
        </header>

        {error && (
          <div className="flex items-center gap-2 rounded-xl border px-4 py-3 text-sm" style={{ borderColor: LINE }}>
            <AlertCircle size={16} /> {error}
          </div>
        )}
        {!matrix && !error && <p className="text-sm" style={{ color: MUTED }}>Loading matrix.json…</p>}

        {items.length > 0 && (
          <div className="grid gap-4" style={{ gridTemplateColumns: "minmax(0, 3fr) minmax(240px, 2fr)" }}>
            <section className="rounded-2xl border p-5" style={{ borderColor: LINE }}>
              <div className="relative" style={{ paddingLeft: 28, paddingBottom: 24 }}>
                <span className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-semibold uppercase tracking-wide" style={{ color: MUTED }}>Impact</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase tracking-wide" style={{ color: MUTED }}>Effort</span>
                <div className="relative grid aspect-square grid-cols-2 grid-rows-2 gap-1">
                  {QUADRANTS.map((q) => (
                    <div key={q.key} className="relative rounded-xl p-3" style={{ backgroundColor: q.key === "Quick win" ? SOFT : "#f7fafb", border: `1px solid ${LINE}`, gridColumn: q.col, gridRow: q.row }}>
                      <p className="text-sm font-semibold" style={{ color: NAVY }}>{q.label}</p>
                      <p className="text-xs" style={{ color: MUTED }}>{q.hint}</p>
                    </div>
                  ))}
                  {items.map((it) => {
                    const x = ((it.effort - 0.5) / 5) * 100;
                    const y = 100 - ((it.impact - 0.5) / 5) * 100;
                    const color = HORIZON_COLOR[it.horizon] ?? MUTED;
                    const isActive = active?.id === it.id;
                    return (
                      <button
                        key={String(it.id)}
                        type="button"
                        aria-label={`${it.item}, impact ${it.impact}, effort ${it.effort}`}
                        onMouseEnter={() => setActive(it)}
                        onFocus={() => setActive(it)}
                        onClick={() => setActive(it)}
                        className="absolute flex items-center justify-center rounded-full font-semibold" 
                        style={{
                          left: `calc(${x}% - 11px)`,
                          top: `calc(${y}% - 11px)`,
                          width: 22,
                          height: 22,
                          backgroundColor: color,
                          color: it.horizon === "4Q" ? NAVY : "#ffffff",
                          outline: isActive ? `3px solid ${TURQUOISE}` : "none",
                          cursor: "pointer",
                        }}
                      >
                        {it.id}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-3 text-xs" style={{ color: MUTED }}>
                {(["1Q", "2Q", "4Q"] as const).map((h) => (
                  <span key={h} className="flex items-center gap-1">
                    <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: HORIZON_COLOR[h] }} />
                    {h === "1Q" ? "1 quarter · commit" : h === "2Q" ? "2 quarters · bet" : "4 quarters · direction"}
                  </span>
                ))}
              </div>
            </section>

            <aside className="space-y-4">
              <section className="rounded-2xl border p-5" style={{ borderColor: LINE, minHeight: 150 }}>
                {active ? (
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: DARK_TEAL }}>#{active.id} · {quadrantOf(active)}</p>
                    <p className="font-semibold">{active.item}</p>
                    <p className="text-sm" style={{ color: MUTED }}>
                      {active.lens} · {active.horizon} · impact {active.impact} · effort {active.effort}
                      {typeof active.confidence === "number" ? ` · confidence ${active.confidence}` : ""}
                      {typeof active.urgency === "number" ? ` · urgency ${active.urgency}` : ""}
                      {typeof active.score === "number" ? ` · score ${active.score}` : ""}
                    </p>
                    {active.nextStep && <p className="text-sm">Next: {active.nextStep}{active.owner ? ` (${active.owner})` : ""}</p>}
                  </div>
                ) : (
                  <p className="text-sm" style={{ color: MUTED }}>Hover or tap a dot to see the item.</p>
                )}
              </section>
              <section className="rounded-2xl border p-5" style={{ borderColor: LINE }}>
                <h2 className="text-base font-semibold">Top five by score</h2>
                <ol className="mt-2 space-y-2 text-sm">
                  {top.map((it) => (
                    <li key={String(it.id)} className="flex items-start gap-2">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-semibold"  style={{ backgroundColor: HORIZON_COLOR[it.horizon] ?? MUTED, color: it.horizon === "4Q" ? NAVY : "#fff" }}>{it.id}</span>
                      <span>{it.item} <span style={{ color: MUTED }}>· {it.lens} · {typeof it.score === "number" ? it.score : ""}</span></span>
                    </li>
                  ))}
                </ol>
              </section>
            </aside>
          </div>
        )}

        {matrix?.note && <p className="text-xs" style={{ color: MUTED }}>{matrix.note}</p>}
      </main>
    </FrameRoot>
  );
}
