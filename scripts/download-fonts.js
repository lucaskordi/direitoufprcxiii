#!/usr/bin/env node

/**
 * Font Download Script
 * This script helps download fonts from Google Fonts
 * 
 * Usage: node scripts/download-fonts.js
 */

const fs = require('fs');
const path = require('path');

const fontsToDownload = [
  {
    name: 'Roboto',
    weights: ['400', '500', '700'],
    styles: ['regular', 'medium', 'bold']
  },
  {
    name: 'Open Sans',
    weights: ['400', '600', '700'],
    styles: ['regular', 'semibold', 'bold']
  },
  {
    name: 'Playfair Display',
    weights: ['400', '500', '700'],
    styles: ['regular', 'medium', 'bold']
  },
  {
    name: 'Montserrat',
    weights: ['400', '500', '600', '700'],
    styles: ['regular', 'medium', 'semibold', 'bold']
  }
];

console.log('📝 Font Download Instructions');
console.log('=============================\n');

console.log('To download the fonts, visit Google Fonts:');
console.log('https://fonts.google.com/\n');

fontsToDownload.forEach(font => {
  console.log(`🔤 ${font.name}:`);
  console.log(`   Weights: ${font.weights.join(', ')}`);
  console.log(`   URL: https://fonts.google.com/specimen/${font.name.replace(' ', '+')}`);
  console.log('');
});

console.log('📁 After downloading:');
console.log('1. Extract the font files');
console.log('2. Convert to WOFF2/WOFF using Font Squirrel:');
console.log('   https://www.fontsquirrel.com/tools/webfont-generator');
console.log('3. Place the converted files in public/fonts/');
console.log('4. Follow the naming convention in font-files-info.md');
console.log('');

console.log('✅ Font CSS files are already created and ready to use!');
