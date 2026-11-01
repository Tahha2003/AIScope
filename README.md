# AIScope — AI Analytics Portfolio

Companies are spending millions on AI with no clear view of what's working. I built three analytics dashboards to solve exactly that — tracking the spend, engineering the agent, and measuring how people actually use the output.

Live at: `http://localhost:5173` (run `npm run dev`)

---

## Project #1 — Token Analytics

**Problem:** Most teams had no idea what they were spending on AI or whether it was worth it.

**What I built:** A cost attribution dashboard that tracks token usage and cost across 5 teams, maps every dollar to hours saved and revenue generated, and surfaces a single ROI number per team — like cost per ticket resolved.

Key metrics from the data:
- 5 teams tracked across 6 months (April–September 2026)
- Average ROI: 204%
- Cost per ticket resolved: $10–28 depending on team

What the dashboard covers:
- KPI cards: total AI spend, hours saved, net value, estimated ROI with month-over-month delta
- Trend chart: token usage over time by team (area chart)
- Business impact panel: time value saved, avoided costs, incremental profit breakdown
- Bar chart: AI cost vs estimated value generated per team
- Team table: tokens, cost, hours saved, tickets resolved, cost/ticket, ROI signal

---

## Project #2 — Data Analyst AI Agent

**Problem:** The agent was answering only 41% of questions correctly — not because the model was bad, but because it had no context.

**What I built:** A context grounding system with business rules, table definitions, and data access metadata. Then proved the fix with 170 eval questions with known answers, pushing accuracy from 41% to 84% through 6 iterations of prompt engineering.

Key metrics:
- +43 pts accuracy lift (41% → 84%)
- 170 eval questions across 6 categories
- $0.014 cost per query at 1,840ms avg latency

What the dashboard covers:
- Skills legend: system prompt engineering, context layer orchestration, LLM evals, alignment engineering
- KPI cards: accuracy after, accuracy lift, eval questions, cost per query
- Accuracy chart: before vs after context per question category (horizontal bar)
- Iteration chart: accuracy improvement across 6 prompt engineering iterations
- Context layers: business rules, table definitions, information access, sample queries — each with token count and accuracy impact
- Tool bindings: run_sql, get_schema, semantic_search, create_chart, send_to_slack — call volume and success rate

---

## Project #3 — AI Product Analysis

**Problem:** High usage numbers alone don't tell you if an AI feature is working.

**What I built:** A behavioral analytics dashboard that tracks correction rate, regeneration patterns, and user feedback across 4 product features — surfacing which ones deliver real value and where cost efficiency improved 54% over 6 months.

Key metrics:
- 18% output correction rate
- 72% task success rate
- 54% cost reduction over the tracked period

What the dashboard covers:
- Signals legend: AI spending, AI workflows, AI products
- KPI cards: output correction rate, positive feedback, task success rate, AI usage cost
- Edit/feedback panel: split bars showing edited vs unedited outputs and positive vs negative feedback
- Edit type breakdown: tone/style, added detail, factual correction, shortened output (donut chart)
- Regeneration reasons: top 5 reasons users regenerated output
- Feature table: correction rate, positive feedback, task success, cost per output — per feature
- Cost trend: cost per output over 6 months showing 54% reduction

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build tool | Vite 8 |
| Charts | Recharts 3 |
| Styling | Tailwind CSS 4 + inline styles |
| Linting | oxlint |

## Project Structure

```
src/
├── pages/
│   └── Landing.jsx           # Portfolio overview — problem → solution framing
├── projects/
│   ├── p1/                   # Token Analytics (6 components)
│   ├── p2/                   # Data Analyst AI Agent (5 components)
│   └── p3/                   # AI Product Analysis (5 components)
├── components/
│   ├── Nav.jsx               # Sticky top nav with project tabs
│   └── ui/                   # Shared primitives: StatCard, SectionHeader,
│                             #   Select, ProgressBar, Badge, Card
├── data/
│   ├── mockData.js           # P1 — token usage & team data (Apr–Sep 2026)
│   ├── agentData.js          # P2 — eval benchmark & iteration log (Jun–Sep 2026)
│   └── productData.js        # P3 — product behavior & cost trend (Jun–Sep 2026)
└── App.jsx                   # SPA routing + breadcrumb strip
```

## Getting Started

```bash
npm install
npm run dev        # dev server at http://localhost:5173
npm run build      # production build
npm run preview    # preview production build locally
npm run lint       # run oxlint
```

All data is illustrative mock data. No backend or API required. Single-page React app with client-side navigation (no router dependency).

> Note: All Tailwind utility classes are paired with inline `style` props throughout the codebase to ensure layout correctness under the global CSS reset (`* { margin: 0; padding: 0 }`).

