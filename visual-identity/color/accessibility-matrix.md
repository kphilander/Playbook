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
| Secondary Light   | `#34D399` | 0.4962             | Mid-light  |
| Warning           | `#FFB300` | 0.5350             | Mid-light  |
| Secondary         | `#10B981` | 0.3639             | Mid-light  |
| Success           | `#00C853` | 0.4193             | Mid-light  |
| Neutral 300       | `#A8A8C0` | 0.4014             | Mid-light  |
| Accent Light      | `#FF8A5C` | 0.4021             | Mid-light  |
| Accent            | `#FF6B35` | 0.3203             | Mid        |
| Secondary Dark    | `#047857` | 0.1415             | Mid        |
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
| Secondary Dark        | `#047857` |  5.48:1 | ✓         | ✓        | ✗     |
| Accent                | `#FF6B35` |  2.84:1 | ✗         | ✗        | ✗     |
| Neutral 300           | `#A8A8C0` |  2.33:1 | ✗         | ✗        | ✗     |
| Accent Light          | `#FF8A5C` |  2.32:1 | ✗         | ✗        | ✗     |
| Success               | `#00C853` |  2.24:1 | ✗         | ✗        | ✗     |
| Secondary             | `#10B981` |  2.54:1 | ✗         | ✗        | ✗     |
| Warning               | `#FFB300` |  1.79:1 | ✗         | ✗        | ✗     |
| Secondary Light       | `#34D399` |  1.92:1 | ✗         | ✗        | ✗     |

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
| Secondary Dark        | `#047857` |  5.05:1 | ✓         | ✓        | ✗     |
| Accent                | `#FF6B35` |  2.61:1 | ✗         | ✗        | ✗     |
| Neutral 300           | `#A8A8C0` |  2.14:1 | ✗         | ✗        | ✗     |
| Accent Light          | `#FF8A5C` |  2.14:1 | ✗         | ✗        | ✗     |
| Success               | `#00C853` |  2.06:1 | ✗         | ✗        | ✗     |
| Secondary             | `#10B981` |  2.33:1 | ✗         | ✗        | ✗     |
| Warning               | `#FFB300` |  1.65:1 | ✗         | ✗        | ✗     |
| Secondary Light       | `#34D399` |  1.77:1 | ✗         | ✗        | ✗     |

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
| Secondary Dark        | `#047857` |  4.50:1 | ✗         | ✓        | ✗     |
| Accent                | `#FF6B35` |  2.33:1 | ✗         | ✗        | ✗     |

---

## 4. Full Contrast Matrix -- Dark Backgrounds

### On Primary (`#1B2838`)

| Foreground            | Hex       | Ratio   | AA Normal | AA Large | AAA   |
|-----------------------|-----------|---------|-----------|----------|-------|
| White                 | `#FFFFFF` | 14.92:1 | ✓         | ✓        | ✓     |
| Neutral 50            | `#F5F5FA` | 13.73:1 | ✓         | ✓        | ✓     |
| Neutral 100           | `#E8E8F0` | 12.25:1 | ✓         | ✓        | ✓     |
| Secondary Light       | `#34D399` |  7.76:1 | ✓         | ✓        | ✓     |
| Warning               | `#FFB300` |  8.31:1 | ✓         | ✓        | ✓     |
| Secondary             | `#10B981` |  5.88:1 | ✓         | ✓        | ✗     |
| Success               | `#00C853` |  6.67:1 | ✓         | ✓        | ✗     |
| Accent Light          | `#FF8A5C` |  6.43:1 | ✓         | ✓        | ✗     |
| Neutral 300           | `#A8A8C0` |  6.41:1 | ✓         | ✓        | ✗     |
| Accent                | `#FF6B35` |  5.26:1 | ✓         | ✓        | ✗     |
| Secondary Dark        | `#047857` |  2.72:1 | ✗         | ✗        | ✗     |
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
| Secondary Light       | `#34D399` |  9.23:1 | ✓         | ✓        | ✓     |
| Warning               | `#FFB300` |  9.88:1 | ✓         | ✓        | ✓     |
| Secondary             | `#10B981` |  6.99:1 | ✓         | ✓        | ✗     |
| Success               | `#00C853` |  7.93:1 | ✓         | ✓        | ✓     |
| Accent Light          | `#FF8A5C` |  7.64:1 | ✓         | ✓        | ✓     |
| Neutral 300           | `#A8A8C0` |  7.63:1 | ✓         | ✓        | ✓     |
| Accent                | `#FF6B35` |  6.26:1 | ✓         | ✓        | ✗     |
| Secondary Dark        | `#047857` |  3.24:1 | ✗         | ✓        | ✗     |
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
| Secondary Light       | `#34D399` |  5.62:1 | ✓         | ✓        | ✗     |
| Warning               | `#FFB300` |  6.02:1 | ✓         | ✓        | ✗     |
| Secondary             | `#10B981` |  4.26:1 | ✗         | ✓        | ✗     |
| Success               | `#00C853` |  4.83:1 | ✓         | ✓        | ✗     |
| Accent Light          | `#FF8A5C` |  4.65:1 | ✓         | ✓        | ✗     |
| Neutral 300           | `#A8A8C0` |  4.64:1 | ✓         | ✓        | ✗     |
| Accent                | `#FF6B35` |  3.81:1 | ✗         | ✓        | ✗     |
| Secondary Dark        | `#047857` |  1.97:1 | ✗         | ✗        | ✗     |
| Danger                | `#FF3D00` |  3.05:1 | ✗         | ✓        | ✗     |
| Accent Dark           | `#E55A2B` |  3.00:1 | ✗         | ✗        | ✗     |
| Info                  | `#2979FF` |  2.71:1 | ✗         | ✗        | ✗     |

### On Neutral 900 (`#1A1A2E`)

| Foreground            | Hex       | Ratio   | AA Normal | AA Large | AAA   |
|-----------------------|-----------|---------|-----------|----------|-------|
| White                 | `#FFFFFF` | 17.06:1 | ✓         | ✓        | ✓     |
| Neutral 50            | `#F5F5FA` | 15.70:1 | ✓         | ✓        | ✓     |
| Neutral 100           | `#E8E8F0` | 14.00:1 | ✓         | ✓        | ✓     |
| Secondary Light       | `#34D399` |  8.87:1 | ✓         | ✓        | ✓     |
| Warning               | `#FFB300` |  9.50:1 | ✓         | ✓        | ✓     |
| Secondary             | `#10B981` |  6.72:1 | ✓         | ✓        | ✗     |
| Success               | `#00C853` |  7.62:1 | ✓         | ✓        | ✓     |
| Accent Light          | `#FF8A5C` |  7.34:1 | ✓         | ✓        | ✓     |
| Neutral 300           | `#A8A8C0` |  7.33:1 | ✓         | ✓        | ✓     |
| Accent                | `#FF6B35` |  6.02:1 | ✓         | ✓        | ✗     |
| Secondary Dark        | `#047857` |  3.11:1 | ✗         | ✓        | ✗     |
| Danger                | `#FF3D00` |  4.81:1 | ✓         | ✓        | ✗     |
| Accent Dark           | `#E55A2B` |  4.73:1 | ✓         | ✓        | ✗     |
| Info                  | `#2979FF` |  4.28:1 | ✗         | ✓        | ✗     |
| Neutral 500           | `#6B6B8A` |  3.33:1 | ✗         | ✓        | ✗     |

### On Black (`#111111`)

| Foreground            | Hex       | Ratio   | AA Normal | AA Large | AAA   |
|-----------------------|-----------|---------|-----------|----------|-------|
| White                 | `#FFFFFF` | 18.88:1 | ✓         | ✓        | ✓     |
| Secondary Light       | `#34D399` |  9.82:1 | ✓         | ✓        | ✓     |
| Warning               | `#FFB300` | 10.52:1 | ✓         | ✓        | ✓     |
| Secondary             | `#10B981` |  7.44:1 | ✓         | ✓        | ✓     |
| Success               | `#00C853` |  8.44:1 | ✓         | ✓        | ✓     |
| Accent Light          | `#FF8A5C` |  8.13:1 | ✓         | ✓        | ✓     |
| Neutral 300           | `#A8A8C0` |  8.12:1 | ✓         | ✓        | ✓     |
| Accent                | `#FF6B35` |  6.66:1 | ✓         | ✓        | ✗     |
| Secondary Dark        | `#047857` |  3.44:1 | ✗         | ✓        | ✗     |
| Danger                | `#FF3D00` |  5.32:1 | ✓         | ✓        | ✗     |
| Accent Dark           | `#E55A2B` |  5.24:1 | ✓         | ✓        | ✗     |
| Info                  | `#2979FF` |  4.74:1 | ✓         | ✓        | ✗     |
| Neutral 500           | `#6B6B8A` |  3.68:1 | ✗         | ✓        | ✗     |

### On Neutral 700 (`#3D3D5C`)

| Foreground            | Hex       | Ratio   | AA Normal | AA Large | AAA   |
|-----------------------|-----------|---------|-----------|----------|-------|
| White                 | `#FFFFFF` | 10.39:1 | ✓         | ✓        | ✓     |
| Secondary Light       | `#34D399` |  5.41:1 | ✓         | ✓        | ✗     |
| Warning               | `#FFB300` |  5.79:1 | ✓         | ✓        | ✗     |
| Secondary             | `#10B981` |  4.10:1 | ✗         | ✓        | ✗     |
| Success               | `#00C853` |  4.65:1 | ✓         | ✓        | ✗     |
| Accent Light          | `#FF8A5C` |  4.48:1 | ✗         | ✓        | ✗     |
| Neutral 300           | `#A8A8C0` |  4.47:1 | ✗         | ✓        | ✗     |
| Accent                | `#FF6B35` |  3.67:1 | ✗         | ✓        | ✗     |
| Secondary Dark        | `#047857` |  1.90:1 | ✗         | ✗        | ✗     |

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

### On Secondary (`#10B981`)

| Foreground            | Hex       | Ratio   | AA Normal | AA Large | AAA   |
|-----------------------|-----------|---------|-----------|----------|-------|
| Black                 | `#111111` |  7.44:1 | ✓         | ✓        | ✓     |
| Primary Dark          | `#0F1923` |  6.99:1 | ✓         | ✓        | ✗     |
| Neutral 900           | `#1A1A2E` |  6.72:1 | ✓         | ✓        | ✗     |
| Primary               | `#1B2838` |  5.88:1 | ✓         | ✓        | ✗     |
| Primary Light         | `#2A3F56` |  4.26:1 | ✗         | ✓        | ✗     |
| Neutral 700           | `#3D3D5C` |  4.10:1 | ✗         | ✓        | ✗     |
| White                 | `#FFFFFF` |  2.54:1 | ✗         | ✗        | ✗     |

### On Secondary Dark (`#047857`)

| Foreground            | Hex       | Ratio   | AA Normal | AA Large | AAA   |
|-----------------------|-----------|---------|-----------|----------|-------|
| Black                 | `#111111` |  3.44:1 | ✗         | ✓        | ✗     |
| Primary Dark          | `#0F1923` |  3.24:1 | ✗         | ✓        | ✗     |
| Neutral 900           | `#1A1A2E` |  3.11:1 | ✗         | ✓        | ✗     |
| Primary               | `#1B2838` |  2.72:1 | ✗         | ✗        | ✗     |
| Primary Light         | `#2A3F56` |  1.97:1 | ✗         | ✗        | ✗     |
| Neutral 700           | `#3D3D5C` |  1.90:1 | ✗         | ✗        | ✗     |
| White                 | `#FFFFFF` |  5.48:1 | ✓         | ✓        | ✗     |

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
| `link` on `background`           | Secondary Dark   | Neutral 50    |  5.05:1 | ✓         | ✓        | ✗     | Good — deep emerald passes AA |
| `link` on `surface`              | Secondary Dark   | White         |  5.48:1 | ✓         | ✓        | ✗     | Good — deep emerald passes AA |
| `link_hover` on `background`     | Primary          | Neutral 50    | 13.73:1 | ✓         | ✓        | ✓     | Excellent  |
| `link_hover` on `surface`        | Primary          | White         | 14.92:1 | ✓         | ✓        | ✓     | Excellent  |
| `cta_primary` text on bg         | Primary          | Accent        |  5.26:1 | ✓         | ✓        | ✗     | Good       |
| `cta_secondary` text on bg       | Primary          | Secondary     |  5.88:1 | ✓         | ✓        | ✗     | Good       |
| `helpline_banner` text           | White            | Primary       | 14.92:1 | ✓         | ✓        | ✓     | Excellent  |
| `border` on `surface`            | Neutral 500      | White         |  5.13:1 | --        | --       | --    | OK (non-text; exceeds 3:1 UI minimum) |

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
| Secondary `#10B981`    | Black, Primary Dark, Neutral 900, Primary, Primary Light, Neutral 700 | Use dark text, never white   |
| Secondary Dark `#047857`| Black, Primary Dark, Neutral 900, Primary                     | Limited; use dark text        |
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
| Secondary `#10B981` on White         | 1.91:1 | **Link text is invisible to low-vision users**       |
| Secondary `#10B981` on Neutral 50    | 1.76:1 | **Link text on default background fails entirely**   |
| Secondary Dark `#047857` on Neutral 50| 2.78:1 | **Link hover state still fails**                    |
| White on Accent `#FF6B35`            | 2.84:1 | **Primary CTA button text is unreadable**            |
| White on Secondary `#10B981`         | 1.91:1 | **Secondary CTA button text is unreadable**          |

### Other dangerous pairings to never use

| Pairing                              | Ratio  | Why                                                  |
|--------------------------------------|--------|------------------------------------------------------|
| White on Success `#00C853`           | 2.24:1 | White text on green badges/alerts fails              |
| White on Warning `#FFB300`           | 1.79:1 | White text on yellow is nearly invisible             |
| White on Danger `#FF3D00`            | 3.55:1 | Passes large text only; do not use for body text     |
| White on Info `#2979FF`              | 3.98:1 | Passes large text only; do not use for body text     |
| Accent `#FF6B35` on White            | 2.84:1 | Orange text on white fails entirely                  |
| Secondary Light `#34D399` on White   | 1.72:1 | Too low contrast for any purpose                     |
| Neutral 300 `#A8A8C0` on White       | 2.33:1 | Borders may be acceptable; never for text            |
| Neutral 500 `#6B6B8A` on Neutral 100 | 4.21:1 | Fails AA normal by a slim margin; large text only    |
| Info `#2979FF` on Neutral 900        | 4.28:1 | Falls short of 4.5:1; large text only               |
| Any dark color on Neutral 700        |  < 2.0 | Dark-on-dark combinations have no contrast           |
| Any light color on Neutral 100       |  < 2.0 | Light-on-light combinations have no contrast         |

---

## 9. Recommendations for Semantic Color Mappings

The semantic mappings in `_brand.yml` pass their thresholds with the emerald palette. The history and rationale per role:

### 9.1 Links: `link` and `link_hover`

**History:** With the original teal palette, no secondary-family step passed 4.5:1 on white, so links were mapped to dark neutrals. The emerald palette changed this: **deep emerald (`#047857`) reaches 5.48:1 on white and 5.05:1 on Neutral 50 — passing AA for normal text** — so links returned to the brand family.

```yaml
link: "secondary_dark"       # 5.48:1 on white — passes AA
link_hover: "primary"        # 14.92:1 on white — darkening on hover
```

On dark backgrounds, use `secondary` (`#10B981`, 5.88:1 on Primary) or `secondary_light` (7.76:1 on Primary) for link text — `secondary_dark` is reserved for light backgrounds (2.72:1 on Primary fails).

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

**Problem:** White text on Secondary (`#10B981`) = 1.91:1. Fails all WCAG thresholds.

**Recommended fix:**
- Swap to **dark text on Secondary background**:
  - Primary (`#1B2838`) on Secondary = 5.88:1 (AA pass)
  - Neutral 900 (`#1A1A2E`) on Secondary = 6.73:1 (AA pass)

```yaml
cta_secondary_bg: "secondary"
cta_secondary_text: "primary"  # 5.88:1 -- passes AA
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

## 11. Current `_brand.yml` Semantic Mapping (all passing)

| Semantic Token       | Value              | Ratio (on white)     | Status |
|----------------------|--------------------|----------------------|--------|
| `link`               | `secondary_dark`   | 5.48:1               | AA ✓ — deep emerald returned to link duty when the emerald palette made it text-safe |
| `link_hover`         | `primary`          | 14.92:1              | AAA ✓  |
| `cta_primary_text`   | `primary`          | 5.26:1 on accent     | AA ✓   |
| `cta_secondary_text` | `primary`          | 5.88:1 on secondary  | AA ✓   |
| `border`             | `neutral_500`      | 5.13:1               | ✓ (UI 3:1) |

> **Note:** Bright emerald (`secondary`, `#10B981`) remains a large-text/UI color on light
> backgrounds (2.54:1 — decorative and large elements only). Use `secondary_dark` for any
> emerald text on light; on dark backgrounds use `secondary` or `secondary_light`.

---

*Generated from `_brand.yml` palette (emerald secondary family). Ratios computed per WCAG 2.1 relative luminance specification (linearized sRGB). Last updated: 2026-07-29.*
