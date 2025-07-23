# Photography Prompt Studio

Professioneller AI-Fotografie Prompt Generator für verschiedene AI-Bildgenerierungs-Plattformen.

## 🎯 Features

- **Multi-Person Support**: Bis zu 4 Personen gleichzeitig
- **40+ Kategorien**: Person, Haare & Makeup, Kleidung, Emotionen, Posen, etc.
- **600+ Optionen**: Riesige Auswahl für jeden Aspekt
- **8 AI-Plattformen**: SDXL, Pony, Illustrious, SD 1.5, Flux, Hi-Dream, Midjourney, DALL-E 3
- **Preset-System**: Speichern und Laden von Konfigurationen
- **Geschlechtsspezifische Filterung**: Automatische Anpassung der Optionen
- **Dark/Light Mode**: Modernes UI mit Theme-Wechsel
- **Copy & Download**: Einfaches Kopieren und Exportieren der Prompts

## 📁 Projektstruktur

```
src/
├── PhotoPromptStudio.tsx          # Hauptkomponente  
├── index.tsx                      # App Entry Point
├── types/
│   └── index.ts                   # TypeScript Definitionen
├── components/
│   ├── PersonSelector.tsx         # Person Auswahl Komponente
│   ├── PromptOutput.tsx          # Prompt Anzeige Komponente
│   └── PresetManager.tsx         # Preset Verwaltung
├── utils/
│   └── promptGenerator.ts        # Prompt Generator Logic
├── constants/
│   ├── platforms.ts              # Platform Konfigurationen
│   └── negativePrompts.ts        # Negative Prompts für Plattformen
└── categories/
    └── allCategories.tsx         # Alle Kategorien und Optionen
```

## 🚀 Installation

### 1. Node.js Projekt einrichten

```bash
npx create-react-app photography-prompt-studio --template typescript
cd photography-prompt-studio
```

### 2. Dependencies installieren

```bash
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer @types/node
```

### 3. Tailwind CSS konfigurieren

```bash
npx tailwindcss init -p
```

**tailwind.config.js:**
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}
```

**src/index.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Dateien kopieren

Kopiere alle bereitgestellten Dateien in die entsprechenden Ordner:

- `types/index.ts`
- `constants/platforms.ts`
- `constants/negativePrompts.ts`
- `categories/allCategories.tsx`
- `utils/promptGenerator.ts`
- `components/PersonSelector.tsx`
- `components/PromptOutput.tsx`
- `components/PresetManager.tsx`
- `PhotoPromptStudio.tsx`
- `index.tsx`

### 5. App starten

```bash
npm start
```

Die App öffnet sich automatisch unter `http://localhost:3000`

## 🎨 Verwendung

### Grundfunktionen
1. **Platform wählen**: Wähle deine AI-Plattform (SDXL, Pony, etc.)
2. **Personen konfigurieren**: Setze Anzahl, Rasse und Geschlecht
3. **Kategorien durchgehen**: Wähle aus Person, Kleidung, Emotionen, etc.
4. **Optionen auswählen**: Klicke auf gewünschte Eigenschaften
5. **Prompts generieren**: Klicke auf "Prompts Generieren"
6. **Ergebnis kopieren**: Kopiere positive/negative Prompts

### Erweiterte Features
- **Presets speichern**: Speichere häufig verwendete Konfigurationen
- **Analyse anzeigen**: Zeige Token-Count und Statistiken
- **Dark Mode**: Wechsle zwischen Hell/Dunkel Theme
- **Multi-Person**: Konfiguriere bis zu 4 Personen gleichzeitig

## 🔧 Entwicklung

### Code-Struktur

**Hauptkomponente (`PhotoPromptStudio.tsx`)**
- State Management für alle App-Daten
- Event Handler für Benutzerinteraktionen
- LocalStorage Integration
- Layout und Navigation

**Kategorien (`categories/allCategories.tsx`)**
- Zentrale Definition aller Optionen
-Geschlechtsspezifische Filterung
- Sektion-basierte Gruppierung

**Prompt Generator (`utils/promptGenerator.ts`)**
- Logic für Prompt-Erstellung
- Platform-spezifische Optimierungen
- Quality-Tag Integration

### Neue Kategorien hinzufügen

```typescript
// In categories/allCategories.tsx
{
  id: 'neue_kategorie',
  name: 'Neue Kategorie',
  icon: <Icon className="w-4 h-4" />,
  section: 'person', // oder andere Sektion
  options: [
    { id: 'option1', label: 'Option 1', value: 'prompt value' },
    // ...
  ]
}
```

### Eigene AI-Platform hinzufügen

```typescript
// In constants/platforms.ts
newplatform: {
  id: 'newplatform',
  name: 'New Platform',
  description: 'Platform Description',
  supportsNegativePrompts: true,
  maxPromptLength: 2000,
  specialFeatures: ['Feature 1', 'Feature 2']
}

// In constants/negativePrompts.ts  
newplatform: 'negative prompt text for this platform'
```

## 📱 Responsives Design

Die App ist vollständig responsive und funktioniert auf:
- **Desktop**: Vollständiges Layout mit Seitenleiste
- **Tablet**: Angepasste Grid-Layouts
- **Mobile**: Vertikales Stack-Layout

## 💾 LocalStorage

Automatisches Speichern von:
- Theme-Einstellungen (Dark/Light Mode)
- Gespeicherte Presets
- Plattform-Auswahl
- Zuletzt verwendete Einstellungen

## 🎯 Performance

- **Lazy Loading**: Komponenten werden nur bei Bedarf gerendert  
- **Memoization**: React.useCallback für Event Handler
- **Effiziente Updates**: Minimale Re-Renders durch optimierte State-Struktur

## 🐛 Troubleshooting

**Tailwind Styles werden nicht geladen:**
```bash
npm run build
# oder 
npm start
```

**TypeScript Fehler:**
```bash
npm install @types/react @types/react-dom
```

**Icons werden nicht angezeigt:**
```bash
npm install lucide-react
```

## 📄 Lizenz

MIT License - Du kannst den Code frei verwenden und anpassen.

## 🤝 Contributing

1. Fork das Repository
2. Erstelle einen Feature Branch
3. Committe deine Änderungen  
4. Push zum Branch
5. Erstelle einen Pull Request

## 📞 Support

Bei Fragen oder Problemen erstelle bitte ein Issue im Repository.

---

**Viel Spaß beim Generieren von AI-Fotografie Prompts! 📸✨**