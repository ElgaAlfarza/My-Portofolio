---
name: Deep Space Editorial
colors:
  surface: '#121317'
  surface-dim: '#121317'
  surface-bright: '#38393e'
  surface-container-lowest: '#0d0e12'
  surface-container-low: '#1a1b20'
  surface-container: '#1e1f24'
  surface-container-high: '#292a2e'
  surface-container-highest: '#343439'
  on-surface: '#e3e2e8'
  on-surface-variant: '#c3c6d7'
  inverse-surface: '#e3e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#8d90a0'
  outline-variant: '#434654'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a77'
  primary-container: '#2c67ed'
  on-primary-container: '#f6f5ff'
  inverse-primary: '#0153da'
  secondary: '#7bd0ff'
  on-secondary: '#00354a'
  secondary-container: '#00a6e0'
  on-secondary-container: '#00374d'
  tertiary: '#ffb595'
  on-tertiary: '#571e00'
  tertiary-container: '#c04c00'
  on-tertiary-container: '#fff4f0'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea7'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb595'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7c2e00'
  background: '#121317'
  on-background: '#e3e2e8'
  surface-variant: '#343439'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system positions the developer and UI/UX designer as an authoritative, high-craft practitioner. It rejects generic contemporary AI visual tropes ("slop"—excessive floating 3D spheres, aimless gradients, fake metrics, and loud confetti) in favor of deep structural clarity, disciplined typography, and precise spatial architecture.

The style fuses **Technical Brutalism** with **Minimalist High-End Glassmorphism**:
- Ultra-deep, cold cosmic canvas backgrounds anchored by subtle luminescent focal points.
- Restrained, intentional micro-interactions replacing chaotic entrance animations.
- Structural grid lines and whisper-thin glassmorphic partitions that evoke spacecraft flight displays and precision code editors.
- Honest case studies that prioritize real code fragments, architecture diagrams, and concrete product metrics over speculative marketing noise.

## Colors
The palette is built on deep cosmic voids contrasted against focused electric photons. The background utilizes a three-tier depth scale: `#08090d` for the primary void (canvas base), `#0b0f19` for mid-ground cards and surface grouping, and `#0e1320` for elevated interactive elements and dropdown layers.

- **Primary (`#2c67ed`)**: Electric cobalt blue reserved strictly for primary interactive paths, focused states, and prominent structural signals.
- **Secondary (`#38bdf8`)**: Electric cyan deployed as an analytical contrast accent for tags, code syntax highlights, terminal status signals, and critical micro-labels.
- **Neutral (`#08090d`)**: The bedrock void. Neutral text scales from stark optical white (`#f8fafc`) for headlines down to muted slate (`#64748b`) for auxiliary technical context.
- **Surface Borders**: Rigid, razor-thin structural borders rendered in `rgba(255, 255, 255, 0.08)` to define form boundaries without introducing visual clutter.

## Typography
The system enforces a strict hierarchy between structural authority, reading ergonomics, and developer authenticity:

1. **Plus Jakarta Sans** commands headline and title scales, engineered with tight negative letter tracking to create architectural presence.
2. **Inter** handles narrative copy, case study documentation, and process breakdowns with optimal neutral legibility.
3. **JetBrains Mono** surfaces for all technical attributes: terminal blocks, live metrics, status tickers, timestamp watermarks, and category metadata.

All mono labels should default to uppercase or raw lowercase code syntax with intentional letter spacing (`0.06em`) to preserve a modern instrumentation feel.

## Layout & Spacing
The layout adheres to a fixed-max-width 12-column system (capping at 1280px) on desktop, transitioning to a single-column flow on mobile viewports (<768px). 

Section boundaries rely on structural rhythm rather than arbitrary empty space:
- **Canvas Margins**: Set to `3rem` (`48px`) on desktop viewports to anchor content away from screen edges; reduces to `1.25rem` (`20px`) on mobile.
- **Column Gutters**: `1.5rem` (`24px`) across desktop views and `1rem` (`16px`) across mobile viewports.
- **Component Padding Scale**: Internal card paddings use `space-lg` (`1.5rem`), while micro-elements (chips, terminal tags, action bars) operate on tight multiples of `space-xs` and `space-sm`.

Vertical pacing between project studies and architectural sections must be decisive—using a consistent 80px to 120px rhythm to frame each project as an autonomous exhibit.

## Elevation & Depth
Elevation is articulated through **tonal glass layering** and **controlled light diffusion**, avoiding heavy muddy shadows:

- **Surface Floor (`#08090d`)**: Base canvas containing zero elevation artifacts.
- **Level 1 Panels (`#0b0f19` / 70% opacity + `backdrop-filter: blur(12px)`)**: Used for project preview cards and primary sidebars. Finished with a continuous 1px edge stroke of `rgba(255, 255, 255, 0.08)`.
- **Level 2 Floating Surfaces (`#0e1320` / 85% opacity + `backdrop-filter: blur(20px)`)**: Deployed for active dropdowns, modal windows, and contextual code inspect panels. Border changes to `rgba(255, 255, 255, 0.12)`.
- **Luminescent Accent**: When elements gain active focus or hover, they cast a subtle, highly diffused glow: `box-shadow: 0 0 24px -4px rgba(44, 103, 237, 0.25)`. No harsh drop shadows or un-tinted black blurs are permitted.

## Shapes
The system implements a **Soft** geometry scale (`roundedness: 1`), conveying engineering rigor without the hostility of pure zero-radius corners:

- Base interactive items (inputs, tags, standard buttons): `0.25rem` (`4px`).
- Mid-level containers (code snippets, preview windows): `rounded-lg` at `0.5rem` (`8px`).
- Major framing cards and dialog structures: `rounded-xl` at `0.75rem` (`12px`).
- Extreme pill radii are strictly prohibited except for binary operational chips (e.g., live deployment status pills).

## Components

### Buttons
- **Primary**: Solid background in `#2c67ed`, high-contrast text (`#ffffff`), 1px solid `rgba(255, 255, 255, 0.12)`, font family `Inter` 14px weight 600. On hover, transitions to a cyan-tinted edge highlight with `box-shadow: 0 0 16px rgba(44, 103, 237, 0.35)`.
- **Secondary / Ghost**: Background `rgba(255, 255, 255, 0.03)`, text `#f8fafc`, 1px border `rgba(255, 255, 255, 0.08)`. Hover lifts background to `rgba(255, 255, 255, 0.07)` and border to `rgba(56, 189, 248, 0.3)`.

### Cards & Project Showcases
- Structural container with `#0b0f19` backplane, 1px glass edge `rgba(255, 255, 255, 0.08)`, and `0.75rem` corner radius.
- Headers integrate a mono-spaced project index (e.g., `SYS_REF // 01`) in JetBrains Mono (`label-mono`) colored `#38bdf8`.
- Media slots avoid tilted device mockups; use pixel-accurate 1:1 viewport frames or interactive sandboxes.

### Chips & Metadata Tags
- JetBrains Mono 11px uppercase typography.
- Background `rgba(44, 103, 237, 0.08)`, border `1px solid rgba(44, 103, 237, 0.25)`, text `#38bdf8`.
- Minimum padding: `2px 8px` with `0.25rem` radius.

### Input Fields & Terminal Controls
- Background `#08090d`, border `1px solid rgba(255, 255, 255, 0.12)`, text `#f8fafc`.
- Focus state: border activates to `#2c67ed` with a sharp inward halo `box-shadow: inset 0 0 0 1px #2c67ed`.

### Terminal / Code Inspection Blocks
- Surface `#0e1320` paired with top system titlebar containing real directory paths (`~/portfolio/src/...`) in `#64748b`.
- Code lines rendered in JetBrains Mono 14px with minimal, syntax-highlighted accents utilizing `#38bdf8`, `#2c67ed`, and neutral off-white.