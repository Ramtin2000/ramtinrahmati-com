import { cacheHitByTurn } from "@/lib/data";

const WIDTH = 640;
const HEIGHT = 240;
const PAD = { top: 16, right: 16, bottom: 28, left: 36 };
const Y_MIN = 55;
const Y_MAX = 100;

const plotW = WIDTH - PAD.left - PAD.right;
const plotH = HEIGHT - PAD.top - PAD.bottom;

function x(turnIndex: number) {
  return PAD.left + (turnIndex / (cacheHitByTurn.turns.length - 1)) * plotW;
}

function y(value: number) {
  return PAD.top + plotH - ((value - Y_MIN) / (Y_MAX - Y_MIN)) * plotH;
}

const gridValues = [60, 70, 80, 90, 100];

export default function CacheHitChart() {
  return (
    <figure className="w-full">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label="Cache hit rate by turn for three pruning strategies. Exact values are in the table above."
        className="w-full"
      >
        {gridValues.map((v) => (
          <g key={v}>
            <line
              x1={PAD.left}
              x2={WIDTH - PAD.right}
              y1={y(v)}
              y2={y(v)}
              stroke="var(--chart-grid)"
              strokeWidth={1}
            />
            <text
              x={PAD.left - 8}
              y={y(v)}
              textAnchor="end"
              dominantBaseline="middle"
              fontSize={10}
              fill="var(--chart-muted)"
              fontFamily="var(--font-geist-mono)"
            >
              {v}
            </text>
          </g>
        ))}

        {cacheHitByTurn.turns.map((t, i) => (
          <text
            key={t}
            x={x(i)}
            y={HEIGHT - 8}
            textAnchor="middle"
            fontSize={10}
            fill="var(--chart-muted)"
            fontFamily="var(--font-geist-mono)"
          >
            t{t}
          </text>
        ))}

        {cacheHitByTurn.series.map((s) => {
          const points = s.values
            .map((v, i) => `${x(i)},${y(v)}`)
            .join(" ");
          const lastValue = s.values[s.values.length - 1] ?? 0;
          const lastX = x(s.values.length - 1);
          const lastY = y(lastValue);
          return (
            <g key={s.key}>
              <polyline
                points={points}
                fill="none"
                stroke={s.color}
                strokeWidth={2}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              {s.values.map((v, i) => (
                <circle key={i} cx={x(i)} cy={y(v)} r={3} fill={s.color}>
                  <title>{`${s.label} — turn ${cacheHitByTurn.turns[i]}: ${v}%`}</title>
                </circle>
              ))}
              <text
                x={Math.min(lastX + 6, WIDTH - PAD.right)}
                y={lastY}
                dominantBaseline="middle"
                fontSize={10}
                fontFamily="var(--font-geist-mono)"
                fill={s.color}
              >
                {lastValue}%
              </text>
            </g>
          );
        })}
      </svg>

      <figcaption className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
        {cacheHitByTurn.series.map((s) => (
          <span key={s.key} className="flex items-center gap-1.5 text-xs text-neutral-400">
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: s.color }}
              aria-hidden
            />
            {s.label}
          </span>
        ))}
      </figcaption>
    </figure>
  );
}
