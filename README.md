# ChronoForge · Liturgia
### Catholic Liturgical Calendar Engine

ChronoForge · Liturgia is a **mathematically accurate** digital implementation of the Catholic liturgical calendar (1970–2100). It preserves the full complexity of the system — Proper of Saints, moveable feasts, liturgical seasons, colors, and rubrics — while presenting a clean, bilingual interface.

Built with **pure HTML, CSS, and Vanilla JavaScript**. No frameworks. No dependencies.

This is not a calendar app.  
This is a **liturgical engine**.

---

## What It Does

For any date between 1970–2100, ChronoForge · Liturgia calculates:

| Element | Description |
|---------|-------------|
| **Liturgical Season** | Advent, Christmas, Lent, Easter, Ordinary Time with proper colors |
| **Proper of Saints** | 200+ feasts with proper ranks (Solemnity, Feast, Memorial, Optional) |
| **Moveable Feasts** | Easter, Ascension, Pentecost, Trinity Sunday, Corpus Christi |
| **Vigils & Octaves** | Complete implementation for major solemnities |
| **Fast & Abstinence** | Ash Wednesday, Good Friday, Lenten Fridays |
| **Liturgical Colors** | White, Red, Green, Purple, Rose, Gold |
| **Bilingual Display** | Latin / English with slash ( / ) separator |
| **Rubrical Accuracy** | Gloria, Alleluia, precedence rules |

---

## Core Structure

### Liturgical Seasons
| Season | Color | Period |
|--------|-------|--------|
| Advent | Purple | 4 Sundays before Christmas |
| Christmas | White | Dec 25 – Baptism of Lord |
| Lent | Purple | Ash Wednesday – Holy Thursday |
| Easter | White | Easter Sunday – Pentecost |
| Ordinary Time | Green | Remaining weeks |

### Special Sundays
| Sunday | Color | Date |
|--------|-------|------|
| Gaudete (Advent III) | Rose | 3rd Sunday of Advent |
| Laetare (Lent IV) | Rose | 4th Sunday of Lent |
| Palm Sunday | Red | Sunday before Easter |
| Pentecost | Red | 7th Sunday after Easter |

### Feast Ranks
| Rank | Icon | Precedence |
|------|------|------------|
| Solemnity | ✠ | Highest |
| Feast | † | High |
| Memorial | 🕊️ | Medium |
| Optional | ☆ | Low |
| Commemoration | ○ | Lowest |

### Observances
| Observance | Icon | Position |
|------------|------|----------|
| Holy Day of Obligation | ⛪ | Top-right |
| Vigil | 🕯️ | Bottom-left |
| Octave | ⌛ | Bottom-left |
| Fast/Abstinence | ✝ | Bottom-left |

---

## Features

### Calendar Grid
- Today highlighted with subtle gold tint
- Active day selection with gold border
- Liturgical color borders on each cell
- Festival icons on relevant days
- Mobile: Icons limited (3→2→1) based on screen size
- Empty cells invisible but maintain grid structure

### Information Panel
- **Gregorian Date** with weekday
- **Liturgical Date** with feast and rank
- **Season** with week and year (A/B/C)
- **Observances** with fast/abstinence status
- **Vigils** for upcoming solemnities
- **Octaves** for current octave days

### Navigation
- Month/year arrows
- One-click return to today
- Keyboard arrows (← → ↑ ↓)
- Settings menu with localStorage persistence

### Settings

| Option | Description |
|--------|-------------|
| Detail Level | Basic / Standard / Complete |
| Language | Latin / English / Bilingual |
| Show Holy Days | Toggle obligation icons |
| Show Rank Icons | Toggle feast rank symbols |
| Show Vigils | Toggle vigil display |
| Show Octaves | Toggle octave display |
| Show Fast | Toggle fast/abstinence icons |
| Compact Mode | Tighter spacing |

---

## Data Sources & Accuracy

| Component | Source | Accuracy |
|-----------|--------|----------|
| Fixed Feasts | *Missale Romanum* (200+ entries) | Exact |
| Easter Date | Meeus/Jones/Butcher algorithm | Exact |
| Moveable Feasts | Computed from Easter | Exact |
| Liturgical Seasons | Roman Calendar rules | Exact |
| Fast/Abstinence | Code of Canon Law | Exact |
| Transfer Rules | General Roman Calendar | Exact |

**Date range:** 1970–2100 (post-conciliar calendar)

---

## Architecture

```

project/
├── index.html          # Calendar UI
├── style.css           # Premium liturgical styling
└── script.js           # Complete engine

```

### Core Algorithms

**Easter computus (Meeus/Jones/Butcher):**
```javascript
function getEasterDate(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}
```

Advent start:

```javascript
function getAdventStart(year) {
  const christmas = new Date(year, 11, 25);
  const dayOfWeek = christmas.getDay();
  const daysToSubtract = 28 + (dayOfWeek === 0 ? 0 : 7 - dayOfWeek);
  const adventStart = new Date(christmas);
  adventStart.setDate(christmas.getDate() - daysToSubtract);
  return adventStart;
}
```

Liturgical year (A/B/C):

```javascript
function getLiturgicalYear(date) {
  const year = date.getFullYear();
  const adventStart = getAdventStart(year);
  const liturgicalYear = date < adventStart ? year - 1 : year;
  const cycle = (liturgicalYear + 1) % 3;
  return cycle === 0 ? "C" : cycle === 1 ? "A" : "B";
}
```

---

## Bilingual System

Every text element supports three modes:
- **Latin** — Full Latin (e.g., "Quadragesima")
- **English** — Full English translation (e.g., "Lent")
- **Bilingual** — Latin / English with slash separator

The translation layer updates all labels, tooltips, and UI text dynamically.

---

## Philosophy

ChronoForge is not a calendar app.  
It is a **liturgical engine** — preserving and transmitting the mathematical and rubrical precision of the Roman Rite.

The liturgical calendar is not arbitrary. It follows centuries of tradition, astronomical calculation, and canonical law. This implementation respects that heritage while making it computable and accessible.

---

## Roadmap

- ✅ Proper of Saints (200+ feasts)
- ✅ Easter computus with year boundary fix
- ✅ Moveable feasts (Palm Sunday to Corpus Christi)
- ✅ Liturgical seasons with proper colors
- ✅ Vigils for all solemnities
- ✅ Octaves for major feasts
- ✅ Fast/abstinence rules
- ✅ Bilingual display (Latin/English)
- ✅ Detail level settings
- ✅ LocalStorage persistence
- ⬜ Local feasts by region (Ireland, Mexico, etc.)
- ⬜ 2033 problem documentation
- ⬜ PWA support

---
## About the Creator

Built by **Virxee** — a systems-focused software engineer who models complex rule-based structures into precise, executable software.

ChronoForge began as a personal exploration of alternative time systems — from the 13 Moon Dreamspell to the Chinese Lunisolar and Japanese calendars. Each version pushed the boundaries of what a calendar engine could be: mathematically rigorous, culturally faithful, and visually distinct.

**Liturgia** is the culmination of that journey. It handles the full depth of the Roman Rite — precedence rules, transfer mechanics, and centuries of liturgical tradition — all within clean, dependency-free code.

- 📧 ngangmi.virxee@gmail.com
- 🐦 [@NgangmiR](https://x.com/NgangmiR)
- 💼 [GitHub Sponsors](https://github.com/sponsors/V-XY)

---

## License

MIT License © 2026 Virxee

*Built with precision and purpose.*
