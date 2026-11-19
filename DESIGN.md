# DESIGN.md — PrograEduca 2026

Sistema visual de la landing, tomado del flyer oficial del evento. Úsalo para piezas nuevas (redes, banners, imágenes con IA) y para mantener la web coherente.

## Idea

El flyer hecho web: **fondo verde oscuro casi negro**, **círculos grandes con degradado menta → dorado** cortados por los bordes, **código Python en monospace** como textura, **cuadraditos tipo pixel** y **líneas finas** como puntuación. Evento universitario de programación; nunca corporativo.

## Color

| Token | Hex | Uso |
|---|---|---|
| Fondo | `#17302a` | Fondo principal de todo |
| Fondo profundo | `#112520` | Paneles, barras |
| Menta | `#6fc7a1` | "PROGRA", acentos, botones principales |
| Menta profundo | `#2f7d6a` | Inicio de los degradados de círculos |
| Dorado | `#e7c76b` | "EDUCA", horas, títulos destacados |
| Crema | `#f2f0e6` | Texto principal, "2026" |
| Gris verdoso | `#cfdad3` | Texto secundario |
| Papel | `#f3f6f2` | Franja de logos al pie |

**Degradados de los círculos** (siempre lineales, diagonal suave):
- Menta: `#1d4a3f → #2f7d6a → #6fc7a1`
- Dorado: `#e7c76b → #a9b66f → #3f8a72`
- Verde azulado: `#17302a → #22574b → #2f7d6a`

Proporción aproximada: 75% fondo oscuro, 15% círculos, 10% texto y acentos. Nada de violetas, azules saturados, rojos ni negros puros.

## Tipografía

- **Outfit** (sustituto web de Telegraf, la del flyer): títulos y texto. Títulos en 600–700, con tracking apretado (-0.02 a -0.035em).
- **JetBrains Mono**: código, fechas, horas, etiquetas (`charla.md`, `eje[0]`).
- Wordmark: **PROGRA** en menta + **EDUCA** en dorado, todo mayúsculas, pegadas; **2026** en crema debajo.

## Motivos

- **Círculos**: grandes, con degradado, recortados por los bordes del encuadre. 3–5 por composición, de tamaños distintos, a veces superpuestos. Nunca con borde ni sombra dura.
- **Pixeles**: cuadrados pequeños (≈1–2% del ancho), menta apagado `#2f7d6a` o dorado apagado `#8a7e45`, sueltos o en pares.
- **Líneas finas**: horizontales, cortas, en verde `#2a5b4f` o dorado apagado.
- **Código Python**: fragmentos cortos y reales (`def aprender():`, `print(...)`), color oliva `#b4bd93` con palabras clave en dorado tenue. Textura, no protagonista.
- **Ventanas de vidrio**: paneles translúcidos verde oscuro con desenfoque, borde fino claro, barra superior con tres cuadraditos (menta, dorado, gris) y nombre de archivo en mono.

## Qué evitar

Fotos de oficina o stock genérico, gente posando, íconos 3D brillantes, robots/cerebros/circuitos cliché de "IA", neón, glitch, gradientes arcoíris, tipografías de máquina de escribir, look corporativo o de banco.

---

## Imágenes con IA

### Prompt base (inglés, funciona mejor en Midjourney, DALL·E, Firefly, Ideogram)

```
Flat geometric poster illustration, very dark forest green background (#17302a),
large overlapping circles with smooth linear gradients from mint green (#6fc7a1)
to soft gold (#e7c76b), circles cropped by the edges of the frame, a few tiny
square pixels scattered, thin horizontal lines, faint monospace Python code
snippets as subtle texture, minimal, modern, clean vector style, lots of dark
negative space, no text, no people, no 3D, no glow, no noise
```

**Negativo** (si la herramienta lo permite): `text, letters, watermark, photo, people, faces, 3D render, glossy, neon, glitch, rainbow, purple, blue, red, clutter, stock photo`

### Variantes

- **Fondo para redes / banner**: añade `wide 16:9 composition, empty center area for a title`.
- **Post cuadrado**: `square 1:1 composition, circles in the top-left and bottom-right corners`.
- **Historia vertical**: `vertical 9:16 composition, circles at the top and bottom, empty middle`.
- **Tema charla / speaker**: `a small floating terminal window with a dark translucent glass panel and a thin light border` (sin personas; la foto del speaker se pone aparte).
- **Tema pósters**: `abstract scientific poster boards as simple flat rectangles in mint and gold`.
- **Tema colegios**: `abstract stacked blocks and simple geometric shapes, playful but minimal`.

### Reglas al usarlas

1. Pide **sin texto** y agrega textos después (en Canva/Figma) con Outfit y JetBrains Mono: las IAs escriben mal.
2. Si los colores salen distintos, corrígelos después con los hex de arriba.
3. Exporta en WebP o JPG a 2× del tamaño en que se mostrará.
