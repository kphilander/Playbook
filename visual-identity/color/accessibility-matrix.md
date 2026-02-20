# Playbook Color Accessibility Contrast Matrix

> WCAG 2.1 contrast ratio analysis for the Playbook brand palette.
> All ratios calculated using the relative luminance formula with linearized sRGB values.
>
> **Formula:**
> - Linearize each channel: if C <= 0.04045 then C/12.92, else ((C + 0.055) / 1.055) ^ 2.4
> - Relative luminance: L = 0.2126 * R + 0.7152 * G + 0.0722 * B
> - Contrast ratio: (L1 + 0.05) / (L2 + 0.05) where L1 >= L2

---

## 1. Color Reference and Relative Luminance

| Color             | Hex       | Relative Luminance | Category   |
|-------------------|-----------|--------------------|------------|
| White             | `#FFFFFF` | 1.0000             | Light      |
| Neutral 50        | `#F5F5FA` | 0.9162             | Light      |
| Neutral 100       | `#E8E8F0` | 0.8116             | Light      |
| Secondary Light   | `#33DDBB` | 0.5600             | Mid-light  |
| Warning           | `#FFB300` | 0.5350             | Mid-light  |
| Secondary         | `#00D4AA` | 0.4999             | Mid-light  |
| Success           | `#00C853` | 0.4193             | Mid-light  |
| Neutral 300       | `#A8A8C0` | 0.4014             | Mid-light  |
| Accent Light      | `#FF8A5C` | 0.4021             | Mid-light  |
| Accent            | `#FF6B35` | 0.3203             | Mid        |
| Secondary Dark    | `#00A888` | 0.2978             | Mid        |
| Danger            | `#FF3D00` | 0.2460             | Mid        |
| Accent Dark       | `#E55A2B` | 0.2414             | Mid        |
| Info              | `#2979FF` | 0.2137             | Mid        |
| Neutral 500       | `#6B6B8A` | 0.1548             | Mid-dark   |
| Neutral 700       | `#3D3D5C` | 0.0510             | Dark       |
| Primary Light     | `#2A3F56` | 0.0472             | Dark       |
| Primary           | `#1B2838` | 0.0204             | Dark       |
| Neutral 900       | `#1A1A2E` | 0.0116             | Dark       |
| Primary Dark      | `#0F1923` | 0.0092             | Dark       |
| Black             | `#111111` | 0.0056             | Dark       |

---

## 2. WCAG Compliance Thresholds

| Level              | Ratio   | Applies To                               |
|--------------------|---------|------------------------------------------|
| **AA Large Text**  | 3.0:1   | Text >= 18pt, or bold >= 14pt; UI components |
| **AA Normal Text** | 4.5:1   | Body text, captions, labels              |
| **AAA Normal Text**| 7.0:1   | Enhanced accessibility for body text     |

---

## 3. Full Contrast Matrix -- Light Backgrounds

### On White (`#FFFFFF`)

| Foreground            | Hex       | Ratio   | AA Normal | AA Large | AAA   |
|-----------------------|-----------|---------|-----------|----------|-------|
| Black                 | `#111111` | 18.88:1 | ✓         | ✓        | ✓     |
| Primary Dark          | `#0F1923` | 17.74:1 | ✓         | ✓        | ✓     |
| Neutral 900           | `#1A1A2E` | 17.06:1 | ✓         | ✓        | ✓     |
| Primary               | `#1B2838` | 14.92:1 | ✓         | ✓        | ✓     |
| Primary Light         | `#2A3F56` | 10.80:1 | ✓         | ✓        | ✓     |
| Neutral 700           | `#3D3D5C` | 10.39:1 | ✓         | ✓        | ✓     |
| Neutral 500           | `#6B6B8A` |  5.13:1 | ✓         | ✓        | ✗     |
| Info                  | `#2979FF` |  3.98:1 | ✗         | ✓        | ✗     |
| Accent Dark           | `#E55A2B` |  3.60:1 | ✗         | ✓        | ✗     |
| Danger                | `#FF3D00` |  3.55:1 | ✗         | ✓        | ✗     |
| Secondary Dark        | `#00A888` |  3.02:1 | ✗         | ✓        | ✗     |
| Accent                | `#FF6B35` |  2.84:1 | ✗         | ✗        | ✗     |
| Neutral 300           | `#A8A8C0` |  2.33:1 | ✗         | ✗        | ✗     |
| Accent Light          | `#FF8A5C` |  2.32:1 | ✗         | ✗        | ✗     |
| Success               | `#00C853` |  2.24:1 | ✗         | ✗        | ✗     |
| Secondary             | `#00D4AA` |  1.91:1 | ✗         | ✗        | ✗     |
| Warning               | `#FFB300` |  1.79:1 | ✗         | ✗        | ✗     |
| Secondary Light       | `#33DDBB` |  1.72:1 | ✗         | ✗        | ✗     |

### On Neutral 50 (`#F5F5FA`)

| Foreground            | Hex       | Ratio   | AA Normal | AA Large | AAA   |
|-----------------------|-----------|---------|-----------|----------|-------|
| Black                 | `#111111` | 17.38:1 | ✓         | ✓        | ✓     |
| Primary Dark          | `#0F1923` | 16.33:1 | ✓         | ✓        | ✓     |
| Neutral 900           | `#1A1A2E` | 15.70:1 | ✓         | ✓        | ✓     |
| Primary               | `#1B2838` | 13.73:1 | ✓         | ✓        | ✓     |
| Primary Light         | `#2A3F56` |  9.94:1 | ✓         | ✓        | ✓     |
| Neutral 700           | `#3D3D5C` |  9.56:1 | ✓         | ✓        | ✓     |
| Neutral 500           | `#6B6B8A` |  4.72:1 | ✓         | ✓        | ✗     |
| Info                  | `#2979FF` |  3.66:1 | ✗         | ✓        | ✗     |
| Accent Dark           | `#E55A2B` |  3.32:1 | ✗         | ✓        | ✗     |
| Danger                | `#FF3D00` |  3.26:1 | ✗         | ✓        | ✗     |
| Secondary Dark        | `#00A888` |  2.78:1 | ✗         | ✗        | ✗     |
| Accent                | `#FF6B35` |  2.61:1 | ✗         | ✗        | ✗     |
| Neutral 300           | `#A8A8C0` |  2.14:1 | ✗         | ✗        | ✗     |
| Accent Light          | `#FF8A5C` |  2.14:1 | ✗         | ✗        | ✗     |
| Success               | `#00C853` |  2.06:1 | ✗         | ✗        | ✗     |
| Secondary             | `#00D4AA` |  1.76:1 | ✗         | ✗        | ✗     |
| Warning               | `#FFB300` |  1.65:1 | ✗         | ✗        | ✗     |
| Secondary Light       | `#33DDBB` |  1.58:1 | ✗         | ✗        | ✗     |

### On Neutral 100 (`#E8E8F0`)

| Foreground            | Hex       | Ratio   | AA Normal | AA Large | AAA   |
|-----------------------|-----------|---------|-----------|----------|-------|
| Black                 | `#111111` | 15.49:1 | ✓         | ✓        | ✓     |
| Primary Dark          | `#0F1923` | 14.56:1 | ✓         | ✓        | ✓     |
| Neutral 900           | `#1A1A2E` | 14.00:1 | ✓         | ✓        | ✓     |
| Primary               | `#1B2838` | 12.25:1 | ✓         | ✓        | ✓     |
| Primary Light         | `#2A3F56` |  8.87:1 | ✓         | ✓        | ✓     |
| Neutral 700           | `#3D3D5C` |  8.53:1 | ✓         | ✓        | ✓     |
| Neutral 500           | `#6B6B8A` |  4.21:1 | ✗         | ✓        | ✗     |
| Info                  | `#2979FF` |  3.27:1 | ✗         | ✓        | ✗     |
| Accent Dark           | `#E55A2B` |  2.96:1 | ✗         | ✗        | ✗     |
| Danger                | `#FF3D00` |  2.91:1 | ✗         | ✗        | ✗     |
| Secondary Dark        | `#00A888` |  2.48:1 | ✗         | ✗        | ✗     |
| Accent                | `#FF6B35` |  2.33:1 | ✗         | ✗        | ✗     |

---

## 4. Full Contrast Matrix -- Dark Backgrounds

### On Primary (`#1B2838`)

| Foreground            | Hex       | Ratio   | AA Normal | AA Large | AAA   |
|-----------------------|-----------|---------|-----------|----------|-------|
| White                 | `#FFFFFF` | 14.92:1 | ✓         | ✓        | ✓     |
| Neutral 50            | `#F5F5FA` | 13.73:1 | ✓         | ✓        | ✓     |
| Neutral 100           | `#E8E8F0` | 12.25:1 | ✓         | ✓        | ✓     |
| Secondary Light       | `#33DDBB` |  8.67:1 | ✓         | ✓        | ✓     |
| Warning               | `#FFB300` |  8.31:1 | ✓         | ✓        | ✓     |
| Secondary             | `#00D4AA` |  7.82:1 | ✓         | ✓        | ✓     |
| Success               | `#00C853` |  6.67:1 | ✓         | ✓        | ✗     |
| Accent Light          | `#FF8A5C` |  6.43:1 | ✓         | ✓        | ✗     |
| Neutral 300           | `#A8A8C0` |  6.41:1 | ✓         | ✓        | ✗     |
| Accent                | `#FF6B35` |  5.26:1 | ✓         | ✓        | ✗     |
| Secondary Dark        | `#00A888` |  4.94:1 | ✓         | ✓        | ✗     |
| Danger                | `#FF3D00` |  4.21:1 | ✗         | ✓        | ✗     |
| Accent Dark           | `#E55A2B` |  4.14:1 | ✗         | ✓        | ✗     |
| Info                  | `#2979FF` |  3.75:1 | ✗         | ✓        | ✗     |
| Neutral 500           | `#6B6B8A` |  2.91:1 | ✗         | ✗        | ✗     |

### On Primary Dark (`#0F1923`)

| Foreground            | Hex       | Ratio   | AA Normal | AA Large | AAA   |
|-----------------------|-----------|---------|-----------|----------|-------|
| White                 | `#FFFFFF` | 17.74:1 | ✓         | ✓        | ✓     |
| Neutral 50            | `#F5F5FA` | 16.33:1 | ✓         | ✓        | ✓     |
| Neutral 100           | `#E8E8F0` | 14.56:1 | ✓         | ✓        | ✓     |
| Secondary Light       | `#33DDBB` | 10.31:1 | ✓         | ✓        | ✓     |
| Warning               | `#FFB300` |  9.88:1 | ✓         | ✓        | ✓     |
| Secondary             | `#00D4AA` |  9.29:1 | ✓         | ✓        | ✓     |
| Success               | `#00C853` |  7.93:1 | ✓         | ✓        | ✓     |
| Accent Light          | `#FF8A5C` |  7.64:1 | ✓         | ✓        | ✓     |
| Neutral 300           | `#A8A8C0` |  7.63:1 | ✓         | ✓        | ✓     |
| Accent                | `#FF6B35` |  6.26:1 | ✓         | ✓        | ✗     |
| Secondary Dark        | `#00A888` |  5.88:1 | ✓         | ✓        | ✗     |
| Danger                | `#FF3D00` |  5.00:1 | ✓         | ✓        | ✗     |
| Accent Dark           | `#E55A2B` |  4.92:1 | ✓         | ✓        | ✗     |
| Info                  | `#2979FF` |  4.46:1 | ✗         | ✓        | ✗     |
| Neutral 500           | `#6B6B8A` |  3.46:1 | ✗         | ✓        | ✗     |

### On Primary Light (`#2A3F56`)

| Foreground            | Hex       | Ratio   | AA Normal | AA Large | AAA   |
|-----------------------|-----------|---------|-----------|----------|-------|
| White                 | `#FFFFFF` | 10.80:1 | ✓         | ✓        | ✓     |
| Neutral 50            | `#F5F5FA` |  9.94:1 | ✓         | ✓        | ✓     |
| Neutral 100           | `#E8E8F0` |  8.87:1 | ✓         | ✓        | ✓     |
| Secondary Light       | `#33DDBB` |  6.28:1 | ✓         | ✓        | ✗     |
| Warning               | `#FFB300` |  6.02:1 | ✓         | ✓        | ✗     |
| Secondary             | `#00D4AA` |  5.66:1 | ✓         | ✓        | ✗     |
| Success               | `#00C853` |  4.83:1 | ✓         | ✓        | ✗     |
| Accent Light          | `#FF8A5C` |  4.65:1 | ✓         | ✓        | ✗     |
| Neutral 300           | `#A8A8C0` |  4.64:1 | ✓         | ✓        | ✗     |
| Accent                | `#FF6B35` |  3.81:1 | ✗         | ✓        | ✗     |
| Secondary Dark        | `#00A888` |  3.58:1 | ✗         | ✓        | ✗     |
| Danger                | `#FF3D00` |  3.05:1 | ✗         | ✓        | ✗     |
| Accent Dark           | `#E55A2B` |  3.00:1 | ✗         | ✗        | ✗     |
| Info                  | `#2979FF` |  2.71:1 | ✗         | ✗        | ✗     |

### On Neutral 900 (`#1A1A2E`)

| Foreground            | Hex       | Ratio   | AA Normal | AA Large | AAA   |
|-----------------------|-----------|---------|-----------|----------|-------|
| White                 | `#FFFFFF` | 17.06:1 | ✓         | ✓        | ✓     |
| Neutral 50            | `#F5F5FA` | 15.70:1 | ✓         | ✓        | ✓     |
| Neutral 100           | `#E8E8F0` | 14.00:1 | ✓         | ✓        | ✓     |
| Secondary Light       | `#33DDBB` |  9.91:1 | ✓         | ✓        | ✓     |
| Warning               | `#FFB300` |  9.50:1 | ✓         | ✓        | ✓     |
| Secondary             | `#00D4AA` |  8.93:1 | ✓         | ✓        | ✓     |
| Success               | `#00C853` |  7.62:1 | ✓         | ✓        | ✓     |
| Accent Light          | `#FF8A5C` |  7.34:1 | ✓         | ✓        | ✓     |
| Neutral 300           | `#A8A8C0` |  7.33:1 | ✓         | ✓        | ✓     |
| Accent                | `#FF6B35` |  6.02:1 | ✓         | ✓        | ✗     |
| Secondary Dark        | `#00A888` |  5.65:1 | ✓         | ✓        | ✗     |
| Danger                | `#FF3D00` |  4.81:1 | ✓         | ✓        | ✗     |
| Accent Dark           | `#E55A2B` |  4.73:1 | ✓         | ✓        | ✗     |
| Info                  | `#2979FF` |  4.28:1 | ✗         | ✓        | ✗     |
| Neutral 500           | `#6B6B8A` |  3.33:1 | ✗         | ✓        | ✗     |

### On Black (`#111111`)

| Foreground            | Hex       | Ratio   | AA Normal | AA Large | AAA   |
|-----------------------|-----------|---------|-----------|----------|-------|
| White                 | `#FFFFFF` | 18.88:1 | ✓         | ✓        | ✓     |
| Secondary Light       | `#33DDBB` | 10.97:1 | ✓         | ✓        | ✓     |
| Warning               | `#FFB300` | 10.52:1 | ✓         | ✓        | ✓     |
| Secondary             | `#00D4AA` |  9.89:1 | ✓         | ✓        | ✓     |
| Success               | `#00C853` |  8.44:1 | ✓         | ✓        | ✓     |
| Accent Light          | `#FF8A5C` |  8.13:1 | ✓         | ✓        | ✓     |
| Neutral 300           | `#A8A8C0` |  8.12:1 | ✓         | ✓        | ✓     |
| Accent                | `#FF6B35` |  6.66:1 | ✓         | ✓        | ✗     |
| Secondary Dark        | `#00A888` |  6.26:1 | ✓         | ✓        | ✗     |
| Danger                | `#FF3D00` |  5.32:1 | ✓         | ✓        | ✗     |
| Accent Dark           | `#E55A2B` |  5.24:1 | ✓         | ✓        | ✗     |
| Info                  | `#2979FF` |  4.74:1 | ✓         | ✓        | ✗     |
| Neutral 500           | `#6B6B8A` |  3.68:1 | ✗         | ✓        | ✗     |

### On Neutral 700 (`#3D3D5C`)

| Foreground            | Hex       | Ratio   | AA Normal | AA Large | AAA   |
|-----------------------|-----------|---------|-----------|----------|-------|
| White                 | `#FFFFFF` | 10.39:1 | ✓         | ✓        | ✓     |
| Secondary Light       | `#33DDBB` |  6.04:1 | ✓         | ✓        | ✗     |
| Warning               | `#FFB300` |  5.79:1 | ✓         | ✓        | ✗     |
| Secondary             | `#00D4AA` |  5.44:1 | ✓         | ✓        | ✗     |
| Success               | `#00C853` |  4.65:1 | ✓         | ✓        | ✗     |
| Accent Light          | `#FF8A5C` |  4.48:1 | ✗         | ✓        | ✗     |
| Neutral 300           | `#A8A8C0` |  4.47:1 | ✗         | ✓        | ✗     |
| Accent                | `#FF6B35` |  3.67:1 | ✗         | ✓        | ✗     |
| Secondary Dark        | `#00A888` |  3.44:1 | ✗         | ✓        | ✗     |

---

## 5. Full Contrast Matrix -- Chromatic Backgrounds

### On Accent (`#FF6B35`)

| Foreground            | Hex       | Ratio   | AA Normal | AA Large | AAA   |
|-----------------------|-----------|---------|-----------|----------|-------|
| Black                 | `#111111` |  6.66:1 | ✓         | ✓        | ✗     |
| Primary Dark          | `#0F1923` |  6.26:1 | ✓         | ✓        | ✗     |
| Neutral 900           | `#1A1A2E` |  6.02:1 | ✓         | ✓        | ✗     |
| Primary               | `#1B2838` |  5.26:1 | ✓         | ✓        | ✗     |
| Primary Light         | `#2A3F56` |  3.81:1 | ✗         | ✓        | ✗     |
| Neutral 700           | `#3D3D5C` |  3.67:1 | ✗         | ✓        | ✗     |
| White                 | `#FFFFFF` |  2.84:1 | ✗         | ✗        | ✗     |

### On Accent Dark (`#E55A2B`)

| Foreground            | Hex       | Ratio   | AA Normal | AA Large | AAA   |
|-----------------------|-----------|---------|-----------|----------|-------|
| Black                 | `#111111` |  5.24:1 | ✓         | ✓        | ✗     |
| Primary Dark          | `#0F1923` |  4.92:1 | ✓         | ✓        | ✗     |
| Neutral 900           | `#1A1A2E` |  4.73:1 | ✓         | ✓        | ✗     |
| Primary               | `#1B2838` |  4.14:1 | ✗         | ✓        | ✗     |
| White                 | `#FFFFFF` |  3.60:1 | ✗         | ✓        | ✗     |

### On Secondary (`#00D4AA`)

| Foreground            | Hex       | Ratio   | AA Normal | AA Large | AAA   |
|-----------------------|-----------|---------|-----------|----------|-------|
| Black                 | `#111111` |  9.89:1 | ✓         | ✓        | ✓     |
| Primary Dark          | `#0F1923` |  9.29:1 | ✓         | ✓        | ✓     |
| Neutral 900           | `#1A1A2E` |  8.93:1 | ✓         | ✓        | ✓     |
| Primary               | `#1B2838` |  7.82:1 | ✓         | ✓        | ✓     |
| Primary Light         | `#2A3F56` |  5.66:1 | ✓         | ✓        | ✗     |
| Neutral 700           | `#3D3D5C` |  5.44:1 | ✓         | ✓        | ✗     |
| White                 | `#FFFFFF` |  1.91:1 | ✗         | ✗        | ✗     |

### On Secondary Dark (`#00A888`)

| Foreground            | Hex       | Ratio   | AA Normal | AA Large | AAA   |
|-----------------------|-----------|---------|-----------|----------|-------|
| Black                 | `#111111` |  6.26:1 | ✓         | ✓        | ✗     |
| Primary Dark          | `#0F1923` |  5.88:1 | ✓         | ✓        | ✗     |
| Neutral 900           | `#1A1A2E` |  5.65:1 | ✓         | ✓        | ✗     |
| Primary               | `#1B2838` |  4.94:1 | ✓         | ✓        | ✗     |
| Primary Light         | `#2A3F56` |  3.58:1 | ✗         | ✓        | ✗     |
| Neutral 700           | `#3D3D5C` |  3.44:1 | ✗         | ✓        | ✗     |
| White                 | `#FFFFFF` |  3.02:1 | ✗         | ✓        | ✗     |

### On Info (`#2979FF`)

| Foreground            | Hex       | Ratio   | AA Normal | AA Large | AAA   |
|-----------------------|-----------|---------|-----------|----------|-------|
| Black                 | `#111111` |  4.74:1 | ✓         | ✓        | ✗     |
| Primary Dark          | `#0F1923` |  4.46:1 | ✗         | ✓        | ✗     |
| Neutral 900           | `#1A1A2E` |  4.28:1 | ✗         | ✓        | ✗     |
| White                 | `#FFFFFF` |  3.98:1 | ✗         | ✓        | ✗     |
| Primary               | `#1B2838` |  3.75:1 | ✗         | ✓        | ✗     |

### On Success (`#00C853`)

| Foreground            | Hex       | Ratio   | AA Normal | AA Large | AAA   |
|-----------------------|-----------|---------|-----------|----------|-------|
| Black                 | `#111111` |  8.44:1 | ✓         | ✓        | ✓     |
| Primary Dark          | `#0F1923` |  7.93:1 | ✓         | ✓        | ✓     |
| Neutral 900           | `#1A1A2E` |  7.62:1 | ✓         | ✓        | ✓     |
| Primary               | `#1B2838` |  6.67:1 | ✓         | ✓        | ✗     |
| Primary Light         | `#2A3F56` |  4.83:1 | ✓         | ✓        | ✗     |
| Neutral 700           | `#3D3D5C` |  4.65:1 | ✓         | ✓        | ✗     |
| White                 | `#FFFFFF` |  2.24:1 | ✗         | ✗        | ✗     |

### On Warning (`#FFB300`)

| Foreground            | Hex       | Ratio   | AA Normal | AA Large | AAA   |
|-----------------------|-----------|---------|-----------|----------|-------|
| Black                 | `#111111` | 10.52:1 | ✓         | ✓        | ✓     |
| Primary Dark          | `#0F1923` |  9.88:1 | ✓         | ✓        | ✓     |
| Neutral 900           | `#1A1A2E` |  9.50:1 | ✓         | ✓        | ✓     |
| Primary               | `#1B2838` |  8.31:1 | ✓         | ✓        | ✓     |
| Primary Light         | `#2A3F56` |  6.02:1 | ✓         | ✓        | ✗     |
| Neutral 700           | `#3D3D5C` |  5.79:1 | ✓         | ✓        | ✗     |
| White                 | `#FFFFFF` |  1.79:1 | ✗         | ✗        | ✗     |

### On Danger (`#FF3D00`)

| Foreground            | Hex       | Ratio   | AA Normal | AA Large | AAA   |
|-----------------------|-----------|---------|-----------|----------|-------|
| Black                 | `#111111` |  5.32:1 | ✓         | ✓        | ✗     |
| Primary Dark          | `#0F1923` |  5.00:1 | ✓         | ✓        | ✗     |
| Neutral 900           | `#1A1A2E` |  4.81:1 | ✓         | ✓        | ✗     |
| Primary               | `#1B2838` |  4.21:1 | ✗         | ✓        | ✗     |
| White                 | `#FFFFFF` |  3.55:1 | ✗         | ✓        | ✗     |
| Primary Light         | `#2A3F56` |  3.05:1 | ✗         | ✓        | ✗     |

---

## 6. Semantic Mapping Audit

These pairings correspond to the `color.semantic` mappings in `_brand.yml`.

| Semantic Role             | Foreground       | Background    | Ratio   | AA Normal | AA Large | AAA   | Status     |
|---------------------------|------------------|---------------|---------|-----------|----------|-------|------------|
| `text_primary` on `background`   | Neutral 900      | Neutral 50    | 15.70:1 | ✓         | ✓        | ✓     | Excellent  |
| `text_primary` on `surface`      | Neutral 900      | White         | 17.06:1 | ✓         | ✓        | ✓     | Excellent  |
| `text_secondary` on `background` | Neutral 700      | Neutral 50    |  9.56:1 | ✓         | ✓        | ✓     | Excellent  |
| `text_secondary` on `surface`    | Neutral 700      | White         | 10.39:1 | ✓         | ✓        | ✓     | Excellent  |
| `text_muted` on `background`     | Neutral 500      | Neutral 50    |  4.72:1 | ✓         | ✓        | ✗     | Good       |
| `text_muted` on `surface`        | Neutral 500      | White         |  5.13:1 | ✓         | ✓        | ✗     | Good       |
| `link` on `background`           | Secondary        | Neutral 50    |  1.76:1 | ✗         | ✗        | ✗     | **FAIL**   |
| `link` on `surface`              | Secondary        | White         |  1.91:1 | ✗         | ✗        | ✗     | **FAIL**   |
| `link_hover` on `background`     | Secondary Dark   | Neutral 50    |  2.78:1 | ✗         | ✗        | ✗     | **FAIL**   |
| `link_hover` on `surface`        | Secondary Dark   | White         |  3.02:1 | ✗         | ✓        | ✗     | **FAIL** (normal text) |
| `cta_primary` text on bg         | White            | Accent        |  2.84:1 | ✗         | ✗        | ✗     | **FAIL**   |
| `cta_secondary` text on bg       | White            | Secondary     |  1.91:1 | ✗         | ✗        | ✗     | **FAIL**   |
| `helpline_banner` text           | White            | Primary       | 14.92:1 | ✓         | ✓        | ✓     | Excellent  |
| `border` on `surface`            | Neutral 300      | White         |  2.33:1 | --        | --       | --    | OK (non-text, 3:1 for UI elements not met) |

---

## 7. Approved Combinations (Pass WCAG AA for Normal Text >= 4.5:1)

### Light background pairings

| Background       | Approved Foregrounds                                                     | Notes                        |
|------------------|--------------------------------------------------------------------------|------------------------------|
| White `#FFFFFF`  | Black, Primary Dark, Neutral 900, Primary, Primary Light, Neutral 700, Neutral 500 | Full text hierarchy available |
| Neutral 50 `#F5F5FA` | Black, Primary Dark, Neutral 900, Primary, Primary Light, Neutral 700, Neutral 500 | Full text hierarchy available |
| Neutral 100 `#E8E8F0` | Black, Primary Dark, Neutral 900, Primary, Primary Light, Neutral 700 | Neutral 500 drops to 4.21 -- large text only |

### Dark background pairings

| Background            | Approved Foregrounds                                                                                       | Notes                                |
|-----------------------|------------------------------------------------------------------------------------------------------------|--------------------------------------|
| Primary `#1B2838`     | White, Neutral 50, Neutral 100, Secondary Light, Warning, Secondary, Success, Accent Light, Neutral 300, Accent, Secondary Dark | Rich set of accessible foregrounds   |
| Primary Dark `#0F1923`| White, Neutral 50, Neutral 100, Secondary Light, Warning, Secondary, Success, Accent Light, Neutral 300, Accent, Secondary Dark, Danger, Accent Dark | Nearly all mid+ luminance colors work |
| Primary Light `#2A3F56`| White, Neutral 50, Neutral 100, Secondary Light, Warning, Secondary, Success, Accent Light, Neutral 300    | Accent (3.81) is large-text only     |
| Neutral 900 `#1A1A2E` | White, Neutral 50, Neutral 100, Secondary Light, Warning, Secondary, Success, Accent Light, Neutral 300, Accent, Secondary Dark, Danger, Accent Dark | Nearly identical to Primary Dark     |
| Black `#111111`       | White, Secondary Light, Warning, Secondary, Success, Accent Light, Neutral 300, Accent, Secondary Dark, Danger, Accent Dark, Info | Broadest range of foregrounds        |
| Neutral 700 `#3D3D5C` | White, Secondary Light, Warning, Secondary, Success                                                        | Accent Light and Neutral 300 are large-text only (4.48, 4.47) |

### Chromatic background pairings

| Background             | Approved Foregrounds                                           | Notes                         |
|------------------------|----------------------------------------------------------------|-------------------------------|
| Secondary `#00D4AA`    | Black, Primary Dark, Neutral 900, Primary, Primary Light, Neutral 700 | Use dark text, never white   |
| Secondary Dark `#00A888`| Black, Primary Dark, Neutral 900, Primary                     | Limited; use dark text        |
| Accent `#FF6B35`       | Black, Primary Dark, Neutral 900, Primary                      | Use dark text, never white   |
| Accent Dark `#E55A2B`  | Black, Primary Dark, Neutral 900                               | Very limited foreground set   |
| Success `#00C853`      | Black, Primary Dark, Neutral 900, Primary, Primary Light, Neutral 700 | Use dark text, never white   |
| Warning `#FFB300`      | Black, Primary Dark, Neutral 900, Primary, Primary Light, Neutral 700 | Use dark text, never white   |
| Danger `#FF3D00`       | Black, Primary Dark, Neutral 900                               | Limited; Primary is large-text only (4.21) |
| Info `#2979FF`         | Black                                                          | Only Black passes AA normal (4.74) |

---

## 8. Combinations to Avoid

These pairings fail WCAG AA for both normal and large text (ratio < 3.0:1) and must never be used.

### Critical failures in current `_brand.yml` semantic mappings

| Pairing                              | Ratio  | Issue                                              |
|--------------------------------------|--------|-----------------------------------------------------|
| Secondary `#00D4AA` on White         | 1.91:1 | **Link text is invisible to low-vision users**       |
| Secondary `#00D4AA` on Neutral 50    | 1.76:1 | **Link text on default background fails entirely**   |
| Secondary Dark `#00A888` on Neutral 50| 2.78:1 | **Link hover state still fails**                    |
| White on Accent `#FF6B35`            | 2.84:1 | **Primary CTA button text is unreadable**            |
| White on Secondary `#00D4AA`         | 1.91:1 | **Secondary CTA button text is unreadable**          |

### Other dangerous pairings to never use

| Pairing                              | Ratio  | Why                                                  |
|--------------------------------------|--------|------------------------------------------------------|
| White on Success `#00C853`           | 2.24:1 | White text on green badges/alerts fails              |
| White on Warning `#FFB300`           | 1.79:1 | White text on yellow is nearly invisible             |
| White on Danger `#FF3D00`            | 3.55:1 | Passes large text only; do not use for body text     |
| White on Info `#2979FF`              | 3.98:1 | Passes large text only; do not use for body text     |
| Accent `#FF6B35` on White            | 2.84:1 | Orange text on white fails entirely                  |
| Secondary Light `#33DDBB` on White   | 1.72:1 | Too low contrast for any purpose                     |
| Neutral 300 `#A8A8C0` on White       | 2.33:1 | Borders may be acceptable; never for text            |
| Neutral 500 `#6B6B8A` on Neutral 100 | 4.21:1 | Fails AA normal by a slim margin; large text only    |
| Info `#2979FF` on Neutral 900        | 4.28:1 | Falls short of 4.5:1; large text only               |
| Any dark color on Neutral 700        |  < 2.0 | Dark-on-dark combinations have no contrast           |
| Any light color on Neutral 100       |  < 2.0 | Light-on-light combinations have no contrast         |

---

## 9. Recommendations for Semantic Color Mappings

The current `_brand.yml` semantic mappings have **five critical accessibility failures**. Below are recommended fixes.

### 9.1 Links: `link` and `link_hover`

**Problem:** Secondary (`#00D4AA`) as link color on light backgrounds produces ratios of 1.76-1.91:1 -- far below even the 3.0:1 large-text threshold.

**Recommended fix:**
- Change `link` from `secondary` to `neutral_700` or `primary_light` for body text links on light backgrounds (ratios of 9.56-10.80:1).
- Alternatively, if teal links are desired for brand identity, use `secondary_dark` (`#00A888`) **only on dark backgrounds** (e.g., Primary), where it achieves 4.94:1.
- For light backgrounds, consider adding a new darker teal token (approximately `#007A63` or darker, luminance <= 0.12) to pass 4.5:1 on white.

```yaml
# Option A: Use dark neutrals for links (most accessible)
link: "primary_light"        # 10.80:1 on white
link_hover: "primary"        # 14.92:1 on white

# Option B: Add a darker teal (requires new color)
# link: "secondary_darker"   # e.g., #007A63 or similar, ~5.0:1 on white
# link_hover: "primary"

# Option C: Keep teal links on dark backgrounds only
# In dark-mode contexts, secondary_dark on Primary = 4.94:1 (passes AA)
```

### 9.2 Primary CTA Button: `cta_primary_bg` / `cta_primary_text`

**Problem:** White text on Accent (`#FF6B35`) = 2.84:1. Fails all WCAG thresholds.

**Recommended fix:**
- Swap to **dark text on Accent background**:
  - Primary (`#1B2838`) on Accent = 5.26:1 (AA pass)
  - Neutral 900 (`#1A1A2E`) on Accent = 6.02:1 (AA pass)
  - Black (`#111111`) on Accent = 6.66:1 (AA pass)

```yaml
cta_primary_bg: "accent"
cta_primary_text: "primary"  # 5.26:1 -- passes AA
# Or for maximum contrast:
# cta_primary_text: "neutral_900"  # 6.02:1
```

### 9.3 Secondary CTA Button: `cta_secondary_bg` / `cta_secondary_text`

**Problem:** White text on Secondary (`#00D4AA`) = 1.91:1. Fails all WCAG thresholds.

**Recommended fix:**
- Swap to **dark text on Secondary background**:
  - Primary (`#1B2838`) on Secondary = 7.82:1 (AAA pass)
  - Neutral 900 (`#1A1A2E`) on Secondary = 8.93:1 (AAA pass)

```yaml
cta_secondary_bg: "secondary"
cta_secondary_text: "primary"  # 7.82:1 -- passes AAA
```

### 9.4 Semantic Status Colors (Success, Warning, Danger, Info)

**Problem:** The `_brand.yml` maps `quiz_correct: success` and `quiz_incorrect: danger`. If these are used as background colors with white text, they fail:
- White on Success = 2.24:1
- White on Danger = 3.55:1 (large text only)
- White on Warning = 1.79:1
- White on Info = 3.98:1 (large text only)

**Recommended pairings for status badges, alerts, and quiz feedback:**

| Status    | Background    | Text Color        | Ratio   | Level  |
|-----------|---------------|-------------------|---------|--------|
| Success   | `#00C853`     | Primary `#1B2838` |  6.67:1 | AA     |
| Success   | `#00C853`     | Black `#111111`   |  8.44:1 | AAA    |
| Warning   | `#FFB300`     | Primary `#1B2838` |  8.31:1 | AAA    |
| Warning   | `#FFB300`     | Black `#111111`   | 10.52:1 | AAA    |
| Danger    | `#FF3D00`     | Black `#111111`   |  5.32:1 | AA     |
| Danger    | `#FF3D00`     | Neutral 900 `#1A1A2E` | 4.81:1 | AA |
| Info      | `#2979FF`     | Black `#111111`   |  4.74:1 | AA     |

**Rule of thumb:** Always use dark text (Primary, Neutral 900, or Black) on these chromatic status backgrounds. Never use white.

### 9.5 Border Token

**Problem:** Neutral 300 (`#A8A8C0`) as `border` on White = 2.33:1. For non-text UI elements (form inputs, cards), WCAG 2.1 Success Criterion 1.4.11 requires 3.0:1 for "non-text contrast."

**Recommended fix:**
- Use Neutral 500 (`#6B6B8A`) for borders requiring WCAG compliance (form fields, focus indicators): 5.13:1 on White.
- Neutral 300 may be used for purely decorative dividers where contrast is not required.

```yaml
border: "neutral_500"        # 5.13:1 on white -- passes SC 1.4.11
divider: "neutral_100"       # Decorative only, no contrast requirement
```

### 9.6 Helpline Banner

**Status: PASSES.** White on Primary = 14.92:1. No changes needed. This is an excellent, high-contrast combination appropriate for critical safety content.

---

## 10. Quick-Reference: Recommended Pairings by Use Case

| Use Case                    | Background       | Foreground         | Ratio   | Level |
|-----------------------------|------------------|--------------------|---------|-------|
| Body text (light mode)      | White / N-50     | Neutral 900        | 17.06:1 | AAA   |
| Secondary text (light mode) | White / N-50     | Neutral 700        | 10.39:1 | AAA   |
| Muted / caption text        | White / N-50     | Neutral 500        |  5.13:1 | AA    |
| Body text (dark mode)       | Primary          | White              | 14.92:1 | AAA   |
| Secondary text (dark mode)  | Primary          | Neutral 300        |  6.41:1 | AA    |
| Muted text (dark mode)      | Primary          | Neutral 500        |  2.91:1 | Avoid |
| Primary CTA button          | Accent           | Primary            |  5.26:1 | AA    |
| Secondary CTA button        | Secondary        | Primary            |  7.82:1 | AAA   |
| Teal accent (dark mode)     | Primary          | Secondary          |  7.82:1 | AAA   |
| Teal accent (dark mode)     | Primary Dark     | Secondary          |  9.29:1 | AAA   |
| Helpline banner             | Primary          | White              | 14.92:1 | AAA   |
| Success feedback            | Success          | Primary            |  6.67:1 | AA    |
| Warning alert               | Warning          | Primary            |  8.31:1 | AAA   |
| Danger / error              | Danger           | Black              |  5.32:1 | AA    |
| Info notice                 | Info             | Black              |  4.74:1 | AA    |
| Card border (form fields)   | White            | Neutral 500        |  5.13:1 | AA    |
| Interactive highlight       | Primary Dark     | Accent Light       |  7.64:1 | AAA   |
| Hero overlay text           | Primary Dark     | White              | 17.74:1 | AAA   |

---

## 11. Summary of Required `_brand.yml` Changes

| Semantic Token       | Current Value      | Issue                | Recommended Value     | New Ratio |
|----------------------|--------------------|----------------------|-----------------------|-----------|
| `link`               | `secondary`        | 1.91:1 on white      | `primary_light`       | 10.80:1   |
| `link_hover`         | `secondary_dark`   | 3.02:1 on white      | `primary`             | 14.92:1   |
| `cta_primary_text`   | `white`            | 2.84:1 on accent     | `primary`             |  5.26:1   |
| `cta_secondary_text` | `white`            | 1.91:1 on secondary  | `primary`             |  7.82:1   |
| `border`             | `neutral_300`      | 2.33:1 on white      | `neutral_500`         |  5.13:1   |

> **Note:** If preserving teal-colored links is a brand priority, a new darker teal
> color token (~`#007A63` or darker) should be added to the palette that achieves
> at least 4.5:1 on both White and Neutral 50.

---

*Generated from `_brand.yml` palette. Ratios computed per WCAG 2.1 relative luminance specification (linearized sRGB). Last updated: 2026-02-20.*
