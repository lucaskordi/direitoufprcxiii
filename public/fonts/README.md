# Fonts Directory

This directory is for custom fonts used in the project.

## Supported Font Formats
- `.woff2` - Modern web font format (recommended)
- `.woff` - Web font format
- `.ttf` - TrueType font
- `.otf` - OpenType font

## Usage
Place your font files here and reference them in your CSS or Next.js font configuration.

## Example
```css
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/custom-font.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}
```
