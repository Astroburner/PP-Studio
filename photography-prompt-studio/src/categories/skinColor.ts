import { Category } from '../types';

export const skinColorCategory: Category = {
  id: 'skin_color',
  name: 'Hautfarbe',
  icon: 'Palette',
  section: 'person',
  subcategory: 'skin',
  options: [
    // Natürliche Töne
    { id: 'pale', label: 'Blass', value: 'pale skin', description: 'Helle, blasse Haut' },
    { id: 'porcelain', label: 'Porzellan', value: 'porcelain skin', description: 'Zarte Porzellan-Haut' },
    { id: 'fair', label: 'Hell', value: 'fair skin', description: 'Helle Hautfarbe' },
    { id: 'rosy', label: 'Rosig', value: 'rosy complexion', description: 'Rosiger Teint' },
    { id: 'light_tan', label: 'Leicht gebräunt', value: 'light tan skin', description: 'Leicht gebräunte Haut' },
    { id: 'medium', label: 'Medium', value: 'medium skin tone', description: 'Mittlerer Hautton' },
    { id: 'olive', label: 'Olivfarben', value: 'olive skin', description: 'Olivfarbene Haut' },
    { id: 'caramel', label: 'Karamell', value: 'caramel skin', description: 'Karamell-Hautton' },
    { id: 'bronze', label: 'Bronze', value: 'bronze skin', description: 'Bronzefarbene Haut' },
    { id: 'brown', label: 'Braun', value: 'brown skin', description: 'Braune Hautfarbe' },
    { id: 'dark_brown', label: 'Dunkelbraun', value: 'dark brown skin', description: 'Dunkelbraune Haut' },
    { id: 'black', label: 'Schwarz', value: 'black skin', description: 'Schwarze Hautfarbe' },
    { id: 'mahogany', label: 'Mahagoni', value: 'mahogany skin', description: 'Mahagoni-Hautton' },
    // Fantasy-Farben
    { id: 'golden', label: 'Golden', value: 'golden skin tone', description: 'Goldener Hautton' },
    { id: 'silver', label: 'Silbern', value: 'silver-tinted skin', description: 'Silbrig schimmernde Haut' },
    { id: 'blue', label: 'Blau', value: 'blue-tinted skin', description: 'Bläulich schimmernde Haut' },
    { id: 'green', label: 'Grün', value: 'green-tinted skin', description: 'Grünliche Haut' },
    { id: 'red', label: 'Rot', value: 'red-tinted skin', description: 'Rötliche Haut' },
    { id: 'violet', label: 'Violett', value: 'violet-tinted skin', description: 'Violett schimmernde Haut' },
    { id: 'orange', label: 'Orange', value: 'orange-tinted skin', description: 'Orange getönte Haut' },
    { id: 'pink', label: 'Rosa', value: 'pink-tinted skin', description: 'Rosa schimmernde Haut' },
    { id: 'turquoise', label: 'Türkis', value: 'turquoise skin', description: 'Türkisfarbene Haut' },
    { id: 'pearl', label: 'Perlmutt', value: 'pearl-like skin', description: 'Perlmutt schimmernde Haut' },
    { id: 'iridescent', label: 'Irisierend', value: 'iridescent skin', description: 'Regenbogen schimmernde Haut' },
    { id: 'shimmering', label: 'Schimmernd', value: 'shimmering skin', description: 'Schimmernde Haut' },
    { id: 'glowing', label: 'Leuchtend', value: 'glowing skin', description: 'Leuchtende Haut' },
    { id: 'crystalline', label: 'Kristallin', value: 'crystalline skin', description: 'Kristalline Haut' },
    { id: 'metallic', label: 'Metallisch', value: 'metallic skin', description: 'Metallisch glänzende Haut' }
  ]
};